import camelcaseKeys from "camelcase-keys"
import { auth } from "./proto_gen/auth/auth_pb"

export namespace BPTCharging {
    const serverAddr = 'http://localhost:8080'
    const AUTH_ERR = 'AUTH_ERR'

    const authData = {
        token: '',
        expiryMS: 0,
    }

    export interface RequestOption<REQ, RES> {
        method: 'GET'|'PUT'|'POST'|'DELETE'
        path: string
        data: REQ
        respMarshaller: (r: object)=>RES
    }

    export interface AuthOption {
        attachAuthHeader: boolean
        retryOnAuthError: boolean
    }

    export async function sendRequestWithAuthRetry<REQ, RES>(o: RequestOption<REQ, RES>, a?: AuthOption): Promise<RES> {
        const authOpt = a || {
            attachAuthHeader: true,
            retryOnAuthError: true,
        }
        try {
            await login()
            return sendRequest(o, authOpt)
        } catch(err) {
            if (err === AUTH_ERR && authOpt.retryOnAuthError) {
                authData.token = ''
                authData.expiryMS = 0
                return sendRequestWithAuthRetry(o, {
                    attachAuthHeader: authOpt.attachAuthHeader,
                    retryOnAuthError: false,
                })
            } else {
                throw err
            }
        }
    }

    export async function login() {
        if (authData.token && authData.expiryMS >= Date.now()) {
            return
        }
        const wxResp = await wxLogin()
        const reqTimeMs = Date.now()
        const resp = await sendRequest<auth.v1.ILoginRequest,auth.v1.ILoginResponse>({
            method: 'POST',
            path: '/v1/auth/login',
            data: {
                code: wxResp.code,
            },
            respMarshaller: auth.v1.LoginResponse.fromObject,
        }, {
            attachAuthHeader: false,
            retryOnAuthError: false,
        })
        authData.token = resp.accessToken!
        authData.expiryMS = reqTimeMs + resp.expiresIn! * 1000
    }

    function sendRequest<REQ, RES>(o: RequestOption<REQ, RES>, a: AuthOption): Promise<RES> {
        return new Promise((resolve, reject) => {
            const header: Record<string, any> = {}
            if (a.attachAuthHeader) {
                if (authData.token && authData.expiryMS >= Date.now()) {
                    header.authorization = 'Bearer ' + authData.token
                } else {
                    reject(AUTH_ERR)
                    return
                }
            }
            wx.request({
                url: serverAddr + o.path,
                method: o.method,
                data: o.data,
                header,
                success: res => {
                    if (res.statusCode === 401) {
                        reject(AUTH_ERR)
                    } else if (res.statusCode >= 400) {
                        reject(res)
                    } else {
                        resolve(o.respMarshaller(camelcaseKeys(res.data as object, {
                            deep: true,
                        })))
                    }
                },
                fail: reject,
            })
        })
    }

    function wxLogin(): Promise<WechatMiniprogram.LoginSuccessCallbackResult> {
        return new Promise((resolve, reject) => {
            wx.login({
                success: resolve,
                fail: reject,
            })
        })
    }
}