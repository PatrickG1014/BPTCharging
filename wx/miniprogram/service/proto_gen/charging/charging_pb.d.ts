import * as $protobuf from "protobufjs";
/** Namespace charging. */
export namespace charging {

    /** Namespace v1. */
    namespace v1 {

        /** OrderStatus enum. */
        enum OrderStatus {
            OS_NOT_SPECIFIED = 0,
            IN_PROGRESS = 1,
            FINISHED = 2
        }

        /** Properties of an OrderEntity. */
        interface IOrderEntity {

            /** OrderEntity id */
            id?: (string|null);

            /** OrderEntity order */
            order?: (charging.v1.IOrder|null);
        }

        /** Represents an OrderEntity. */
        class OrderEntity implements IOrderEntity {

            /**
             * Constructs a new OrderEntity.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IOrderEntity);

            /** OrderEntity id. */
            public id: string;

            /** OrderEntity order. */
            public order?: (charging.v1.IOrder|null);

            /**
             * Creates an OrderEntity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderEntity
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.OrderEntity;

            /**
             * Creates a plain object from an OrderEntity message. Also converts values to other types if specified.
             * @param message OrderEntity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.OrderEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderEntity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Order. */
        interface IOrder {

            /** Order accountId */
            accountId?: (string|null);

            /** Order pileId */
            pileId?: (string|null);

            /** Order feeCentCurrent */
            feeCentCurrent?: (number|null);

            /** Order feeCentEnd */
            feeCentEnd?: (number|null);

            /** Order status */
            status?: (charging.v1.OrderStatus|null);
        }

        /** Represents an Order. */
        class Order implements IOrder {

            /**
             * Constructs a new Order.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IOrder);

            /** Order accountId. */
            public accountId: string;

            /** Order pileId. */
            public pileId: string;

            /** Order feeCentCurrent. */
            public feeCentCurrent: number;

            /** Order feeCentEnd. */
            public feeCentEnd: number;

            /** Order status. */
            public status: charging.v1.OrderStatus;

            /**
             * Creates an Order message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Order
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.Order;

            /**
             * Creates a plain object from an Order message. Also converts values to other types if specified.
             * @param message Order
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Order to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateOrderRequest. */
        interface ICreateOrderRequest {

            /** CreateOrderRequest pileId */
            pileId?: (string|null);
        }

        /** Represents a CreateOrderRequest. */
        class CreateOrderRequest implements ICreateOrderRequest {

            /**
             * Constructs a new CreateOrderRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.ICreateOrderRequest);

            /** CreateOrderRequest pileId. */
            public pileId: string;

            /**
             * Creates a CreateOrderRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateOrderRequest
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.CreateOrderRequest;

            /**
             * Creates a plain object from a CreateOrderRequest message. Also converts values to other types if specified.
             * @param message CreateOrderRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.CreateOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateOrderRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOrderRequest. */
        interface IGetOrderRequest {

            /** GetOrderRequest id */
            id?: (string|null);
        }

        /** Represents a GetOrderRequest. */
        class GetOrderRequest implements IGetOrderRequest {

            /**
             * Constructs a new GetOrderRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IGetOrderRequest);

            /** GetOrderRequest id. */
            public id: string;

            /**
             * Creates a GetOrderRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOrderRequest
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.GetOrderRequest;

            /**
             * Creates a plain object from a GetOrderRequest message. Also converts values to other types if specified.
             * @param message GetOrderRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.GetOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOrderRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOrdersRequest. */
        interface IGetOrdersRequest {

            /** GetOrdersRequest status */
            status?: (charging.v1.OrderStatus|null);
        }

        /** Represents a GetOrdersRequest. */
        class GetOrdersRequest implements IGetOrdersRequest {

            /**
             * Constructs a new GetOrdersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IGetOrdersRequest);

            /** GetOrdersRequest status. */
            public status: charging.v1.OrderStatus;

            /**
             * Creates a GetOrdersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOrdersRequest
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.GetOrdersRequest;

            /**
             * Creates a plain object from a GetOrdersRequest message. Also converts values to other types if specified.
             * @param message GetOrdersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.GetOrdersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOrdersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOrdersResponse. */
        interface IGetOrdersResponse {

            /** GetOrdersResponse orders */
            orders?: (charging.v1.IOrderEntity[]|null);
        }

        /** Represents a GetOrdersResponse. */
        class GetOrdersResponse implements IGetOrdersResponse {

            /**
             * Constructs a new GetOrdersResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IGetOrdersResponse);

            /** GetOrdersResponse orders. */
            public orders: charging.v1.IOrderEntity[];

            /**
             * Creates a GetOrdersResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOrdersResponse
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.GetOrdersResponse;

            /**
             * Creates a plain object from a GetOrdersResponse message. Also converts values to other types if specified.
             * @param message GetOrdersResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.GetOrdersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOrdersResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateOrderRequest. */
        interface IUpdateOrderRequest {

            /** UpdateOrderRequest id */
            id?: (string|null);

            /** UpdateOrderRequest endOrder */
            endOrder?: (boolean|null);
        }

        /** Represents an UpdateOrderRequest. */
        class UpdateOrderRequest implements IUpdateOrderRequest {

            /**
             * Constructs a new UpdateOrderRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: charging.v1.IUpdateOrderRequest);

            /** UpdateOrderRequest id. */
            public id: string;

            /** UpdateOrderRequest endOrder. */
            public endOrder: boolean;

            /**
             * Creates an UpdateOrderRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateOrderRequest
             */
            public static fromObject(object: { [k: string]: any }): charging.v1.UpdateOrderRequest;

            /**
             * Creates a plain object from an UpdateOrderRequest message. Also converts values to other types if specified.
             * @param message UpdateOrderRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: charging.v1.UpdateOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateOrderRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents an OrderService */
        class OrderService extends $protobuf.rpc.Service {

            /**
             * Constructs a new OrderService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls CreateOrder.
             * @param request CreateOrderRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and OrderEntity
             */
            public createOrder(request: charging.v1.ICreateOrderRequest, callback: charging.v1.OrderService.CreateOrderCallback): void;

            /**
             * Calls CreateOrder.
             * @param request CreateOrderRequest message or plain object
             * @returns Promise
             */
            public createOrder(request: charging.v1.ICreateOrderRequest): Promise<charging.v1.OrderEntity>;

            /**
             * Calls GetOrder.
             * @param request GetOrderRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Order
             */
            public getOrder(request: charging.v1.IGetOrderRequest, callback: charging.v1.OrderService.GetOrderCallback): void;

            /**
             * Calls GetOrder.
             * @param request GetOrderRequest message or plain object
             * @returns Promise
             */
            public getOrder(request: charging.v1.IGetOrderRequest): Promise<charging.v1.Order>;

            /**
             * Calls GetOrders.
             * @param request GetOrdersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetOrdersResponse
             */
            public getOrders(request: charging.v1.IGetOrdersRequest, callback: charging.v1.OrderService.GetOrdersCallback): void;

            /**
             * Calls GetOrders.
             * @param request GetOrdersRequest message or plain object
             * @returns Promise
             */
            public getOrders(request: charging.v1.IGetOrdersRequest): Promise<charging.v1.GetOrdersResponse>;

            /**
             * Calls UpdateOrder.
             * @param request UpdateOrderRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Order
             */
            public updateOrder(request: charging.v1.IUpdateOrderRequest, callback: charging.v1.OrderService.UpdateOrderCallback): void;

            /**
             * Calls UpdateOrder.
             * @param request UpdateOrderRequest message or plain object
             * @returns Promise
             */
            public updateOrder(request: charging.v1.IUpdateOrderRequest): Promise<charging.v1.Order>;
        }

        namespace OrderService {

            /**
             * Callback as used by {@link charging.v1.OrderService#createOrder}.
             * @param error Error, if any
             * @param [response] OrderEntity
             */
            type CreateOrderCallback = (error: (Error|null), response?: charging.v1.OrderEntity) => void;

            /**
             * Callback as used by {@link charging.v1.OrderService#getOrder}.
             * @param error Error, if any
             * @param [response] Order
             */
            type GetOrderCallback = (error: (Error|null), response?: charging.v1.Order) => void;

            /**
             * Callback as used by {@link charging.v1.OrderService#getOrders}.
             * @param error Error, if any
             * @param [response] GetOrdersResponse
             */
            type GetOrdersCallback = (error: (Error|null), response?: charging.v1.GetOrdersResponse) => void;

            /**
             * Callback as used by {@link charging.v1.OrderService#updateOrder}.
             * @param error Error, if any
             * @param [response] Order
             */
            type UpdateOrderCallback = (error: (Error|null), response?: charging.v1.Order) => void;
        }
    }
}
