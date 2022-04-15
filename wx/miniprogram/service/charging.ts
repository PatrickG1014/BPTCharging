import { charging } from "./proto_gen/charging/charging_pb";
import { BPTCharging } from "./request";

export namespace OrderService {
    export function CreateOrder(req: charging.v1.ICreateOrderRequest): Promise<charging.v1.ICreateOrderResponse> {
        return BPTCharging.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/v1/order',
            data: req,
            respMarshaller: charging.v1.CreateOrderResponse.fromObject,
        })
    }
}