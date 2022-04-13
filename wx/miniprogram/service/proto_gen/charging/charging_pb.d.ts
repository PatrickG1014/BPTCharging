import * as $protobuf from "protobufjs";
/** Namespace charging. */
export namespace charging {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a StartChargingRequest. */
        interface IStartChargingRequest {

            /** StartChargingRequest start */
            start?: (string|null);
        }

        /** Represents a StartChargingRequest. */
        class StartChargingRequest implements IStartChargingRequest {

            /**
             * Constructs a new StartChargingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IStartChargingRequest);

            /** StartChargingRequest start. */
            public start: string;

            /**
             * Creates a StartChargingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartChargingRequest
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.StartChargingRequest;

            /**
             * Creates a plain object from a StartChargingRequest message. Also converts values to other types if specified.
             * @param message StartChargingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.StartChargingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartChargingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StartChargingResponse. */
        interface IStartChargingResponse {
        }

        /** Represents a StartChargingResponse. */
        class StartChargingResponse implements IStartChargingResponse {

            /**
             * Constructs a new StartChargingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IStartChargingResponse);

            /**
             * Creates a StartChargingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartChargingResponse
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.StartChargingResponse;

            /**
             * Creates a plain object from a StartChargingResponse message. Also converts values to other types if specified.
             * @param message StartChargingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.StartChargingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartChargingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ChargingService */
        class ChargingService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ChargingService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls StartCharging.
             * @param request StartChargingRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and StartChargingResponse
             */
            public startCharging(request: charging.v1.IStartChargingRequest, callback: charging.v1.ChargingService.StartChargingCallback): void;

            /**
             * Calls StartCharging.
             * @param request StartChargingRequest message or plain object
             * @returns Promise
             */
            public startCharging(request: charging.v1.IStartChargingRequest): Promise<charging.v1.StartChargingResponse>;
        }

        namespace ChargingService {

            /**
             * Callback as used by {@link charging.v1.ChargingService#startCharging}.
             * @param error Error, if any
             * @param [response] StartChargingResponse
             */
            type StartChargingCallback = (error: (Error|null), response?: charging.v1.StartChargingResponse) => void;
        }
    }
}
