import { charging } from "./proto_gen/charging/charging_pb";
import { BPTCharging } from "./request";

export namespace ChargingService {
    export function StartCharging(req: charging.v1.IStartChargingRequest): Promise<charging.v1.IStartChargingResponse> {
        return BPTCharging.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/v1/charging',
            data: req,
            respMarshaller: charging.v1.StartChargingResponse.fromObject,
        })
    }
}