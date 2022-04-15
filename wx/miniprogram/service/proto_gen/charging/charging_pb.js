import * as $protobuf from "protobufjs"; 
 
// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const charging = $root.charging = (() => {

    /**
     * Namespace charging.
     * @exports charging
     * @namespace
     */
    const charging = {};

    charging.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof charging
         * @namespace
         */
        const v1 = {};

        /**
         * OrderStatus enum.
         * @name charging.v1.OrderStatus
         * @enum {number}
         * @property {number} OS_NOT_SPECIFIED=0 OS_NOT_SPECIFIED value
         * @property {number} IN_PROGRESS=1 IN_PROGRESS value
         * @property {number} FINISHED=2 FINISHED value
         */
        v1.OrderStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OS_NOT_SPECIFIED"] = 0;
            values[valuesById[1] = "IN_PROGRESS"] = 1;
            values[valuesById[2] = "FINISHED"] = 2;
            return values;
        })();

        v1.OrderEntity = (function() {

            /**
             * Properties of an OrderEntity.
             * @memberof charging.v1
             * @interface IOrderEntity
             * @property {string|null} [id] OrderEntity id
             * @property {charging.v1.IOrder|null} [order] OrderEntity order
             */

            /**
             * Constructs a new OrderEntity.
             * @memberof charging.v1
             * @classdesc Represents an OrderEntity.
             * @implements IOrderEntity
             * @constructor
             * @param {charging.v1.IOrderEntity=} [properties] Properties to set
             */
            function OrderEntity(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OrderEntity id.
             * @member {string} id
             * @memberof charging.v1.OrderEntity
             * @instance
             */
            OrderEntity.prototype.id = "";

            /**
             * OrderEntity order.
             * @member {charging.v1.IOrder|null|undefined} order
             * @memberof charging.v1.OrderEntity
             * @instance
             */
            OrderEntity.prototype.order = null;

            /**
             * Creates an OrderEntity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.OrderEntity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.OrderEntity} OrderEntity
             */
            OrderEntity.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.OrderEntity)
                    return object;
                let message = new $root.charging.v1.OrderEntity();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.order != null) {
                    if (typeof object.order !== "object")
                        throw TypeError(".charging.v1.OrderEntity.order: object expected");
                    message.order = $root.charging.v1.Order.fromObject(object.order);
                }
                return message;
            };

            /**
             * Creates a plain object from an OrderEntity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.OrderEntity
             * @static
             * @param {charging.v1.OrderEntity} message OrderEntity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OrderEntity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.order = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.order != null && message.hasOwnProperty("order"))
                    object.order = $root.charging.v1.Order.toObject(message.order, options);
                return object;
            };

            /**
             * Converts this OrderEntity to JSON.
             * @function toJSON
             * @memberof charging.v1.OrderEntity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OrderEntity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OrderEntity;
        })();

        v1.Order = (function() {

            /**
             * Properties of an Order.
             * @memberof charging.v1
             * @interface IOrder
             * @property {string|null} [accountId] Order accountId
             * @property {string|null} [pileId] Order pileId
             * @property {number|null} [feeCentCurrent] Order feeCentCurrent
             * @property {number|null} [feeCentEnd] Order feeCentEnd
             * @property {charging.v1.OrderStatus|null} [status] Order status
             */

            /**
             * Constructs a new Order.
             * @memberof charging.v1
             * @classdesc Represents an Order.
             * @implements IOrder
             * @constructor
             * @param {charging.v1.IOrder=} [properties] Properties to set
             */
            function Order(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Order accountId.
             * @member {string} accountId
             * @memberof charging.v1.Order
             * @instance
             */
            Order.prototype.accountId = "";

            /**
             * Order pileId.
             * @member {string} pileId
             * @memberof charging.v1.Order
             * @instance
             */
            Order.prototype.pileId = "";

            /**
             * Order feeCentCurrent.
             * @member {number} feeCentCurrent
             * @memberof charging.v1.Order
             * @instance
             */
            Order.prototype.feeCentCurrent = 0;

            /**
             * Order feeCentEnd.
             * @member {number} feeCentEnd
             * @memberof charging.v1.Order
             * @instance
             */
            Order.prototype.feeCentEnd = 0;

            /**
             * Order status.
             * @member {charging.v1.OrderStatus} status
             * @memberof charging.v1.Order
             * @instance
             */
            Order.prototype.status = 0;

            /**
             * Creates an Order message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.Order
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.Order} Order
             */
            Order.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.Order)
                    return object;
                let message = new $root.charging.v1.Order();
                if (object.accountId != null)
                    message.accountId = String(object.accountId);
                if (object.pileId != null)
                    message.pileId = String(object.pileId);
                if (object.feeCentCurrent != null)
                    message.feeCentCurrent = object.feeCentCurrent | 0;
                if (object.feeCentEnd != null)
                    message.feeCentEnd = object.feeCentEnd | 0;
                switch (object.status) {
                case "OS_NOT_SPECIFIED":
                case 0:
                    message.status = 0;
                    break;
                case "IN_PROGRESS":
                case 1:
                    message.status = 1;
                    break;
                case "FINISHED":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an Order message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.Order
             * @static
             * @param {charging.v1.Order} message Order
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Order.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.accountId = "";
                    object.pileId = "";
                    object.feeCentCurrent = 0;
                    object.feeCentEnd = 0;
                    object.status = options.enums === String ? "OS_NOT_SPECIFIED" : 0;
                }
                if (message.accountId != null && message.hasOwnProperty("accountId"))
                    object.accountId = message.accountId;
                if (message.pileId != null && message.hasOwnProperty("pileId"))
                    object.pileId = message.pileId;
                if (message.feeCentCurrent != null && message.hasOwnProperty("feeCentCurrent"))
                    object.feeCentCurrent = message.feeCentCurrent;
                if (message.feeCentEnd != null && message.hasOwnProperty("feeCentEnd"))
                    object.feeCentEnd = message.feeCentEnd;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.charging.v1.OrderStatus[message.status] : message.status;
                return object;
            };

            /**
             * Converts this Order to JSON.
             * @function toJSON
             * @memberof charging.v1.Order
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Order.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Order;
        })();

        v1.CreateOrderRequest = (function() {

            /**
             * Properties of a CreateOrderRequest.
             * @memberof charging.v1
             * @interface ICreateOrderRequest
             * @property {string|null} [pileId] CreateOrderRequest pileId
             */

            /**
             * Constructs a new CreateOrderRequest.
             * @memberof charging.v1
             * @classdesc Represents a CreateOrderRequest.
             * @implements ICreateOrderRequest
             * @constructor
             * @param {charging.v1.ICreateOrderRequest=} [properties] Properties to set
             */
            function CreateOrderRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateOrderRequest pileId.
             * @member {string} pileId
             * @memberof charging.v1.CreateOrderRequest
             * @instance
             */
            CreateOrderRequest.prototype.pileId = "";

            /**
             * Creates a CreateOrderRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.CreateOrderRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.CreateOrderRequest} CreateOrderRequest
             */
            CreateOrderRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.CreateOrderRequest)
                    return object;
                let message = new $root.charging.v1.CreateOrderRequest();
                if (object.pileId != null)
                    message.pileId = String(object.pileId);
                return message;
            };

            /**
             * Creates a plain object from a CreateOrderRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.CreateOrderRequest
             * @static
             * @param {charging.v1.CreateOrderRequest} message CreateOrderRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateOrderRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.pileId = "";
                if (message.pileId != null && message.hasOwnProperty("pileId"))
                    object.pileId = message.pileId;
                return object;
            };

            /**
             * Converts this CreateOrderRequest to JSON.
             * @function toJSON
             * @memberof charging.v1.CreateOrderRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateOrderRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateOrderRequest;
        })();

        v1.GetOrderRequest = (function() {

            /**
             * Properties of a GetOrderRequest.
             * @memberof charging.v1
             * @interface IGetOrderRequest
             * @property {string|null} [id] GetOrderRequest id
             */

            /**
             * Constructs a new GetOrderRequest.
             * @memberof charging.v1
             * @classdesc Represents a GetOrderRequest.
             * @implements IGetOrderRequest
             * @constructor
             * @param {charging.v1.IGetOrderRequest=} [properties] Properties to set
             */
            function GetOrderRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetOrderRequest id.
             * @member {string} id
             * @memberof charging.v1.GetOrderRequest
             * @instance
             */
            GetOrderRequest.prototype.id = "";

            /**
             * Creates a GetOrderRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.GetOrderRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.GetOrderRequest} GetOrderRequest
             */
            GetOrderRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.GetOrderRequest)
                    return object;
                let message = new $root.charging.v1.GetOrderRequest();
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a GetOrderRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.GetOrderRequest
             * @static
             * @param {charging.v1.GetOrderRequest} message GetOrderRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetOrderRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.id = "";
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this GetOrderRequest to JSON.
             * @function toJSON
             * @memberof charging.v1.GetOrderRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetOrderRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetOrderRequest;
        })();

        v1.GetOrdersRequest = (function() {

            /**
             * Properties of a GetOrdersRequest.
             * @memberof charging.v1
             * @interface IGetOrdersRequest
             * @property {charging.v1.OrderStatus|null} [status] GetOrdersRequest status
             */

            /**
             * Constructs a new GetOrdersRequest.
             * @memberof charging.v1
             * @classdesc Represents a GetOrdersRequest.
             * @implements IGetOrdersRequest
             * @constructor
             * @param {charging.v1.IGetOrdersRequest=} [properties] Properties to set
             */
            function GetOrdersRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetOrdersRequest status.
             * @member {charging.v1.OrderStatus} status
             * @memberof charging.v1.GetOrdersRequest
             * @instance
             */
            GetOrdersRequest.prototype.status = 0;

            /**
             * Creates a GetOrdersRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.GetOrdersRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.GetOrdersRequest} GetOrdersRequest
             */
            GetOrdersRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.GetOrdersRequest)
                    return object;
                let message = new $root.charging.v1.GetOrdersRequest();
                switch (object.status) {
                case "OS_NOT_SPECIFIED":
                case 0:
                    message.status = 0;
                    break;
                case "IN_PROGRESS":
                case 1:
                    message.status = 1;
                    break;
                case "FINISHED":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a GetOrdersRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.GetOrdersRequest
             * @static
             * @param {charging.v1.GetOrdersRequest} message GetOrdersRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetOrdersRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.status = options.enums === String ? "OS_NOT_SPECIFIED" : 0;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.charging.v1.OrderStatus[message.status] : message.status;
                return object;
            };

            /**
             * Converts this GetOrdersRequest to JSON.
             * @function toJSON
             * @memberof charging.v1.GetOrdersRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetOrdersRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetOrdersRequest;
        })();

        v1.GetOrdersResponse = (function() {

            /**
             * Properties of a GetOrdersResponse.
             * @memberof charging.v1
             * @interface IGetOrdersResponse
             * @property {Array.<charging.v1.IOrderEntity>|null} [orders] GetOrdersResponse orders
             */

            /**
             * Constructs a new GetOrdersResponse.
             * @memberof charging.v1
             * @classdesc Represents a GetOrdersResponse.
             * @implements IGetOrdersResponse
             * @constructor
             * @param {charging.v1.IGetOrdersResponse=} [properties] Properties to set
             */
            function GetOrdersResponse(properties) {
                this.orders = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetOrdersResponse orders.
             * @member {Array.<charging.v1.IOrderEntity>} orders
             * @memberof charging.v1.GetOrdersResponse
             * @instance
             */
            GetOrdersResponse.prototype.orders = $util.emptyArray;

            /**
             * Creates a GetOrdersResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.GetOrdersResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.GetOrdersResponse} GetOrdersResponse
             */
            GetOrdersResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.GetOrdersResponse)
                    return object;
                let message = new $root.charging.v1.GetOrdersResponse();
                if (object.orders) {
                    if (!Array.isArray(object.orders))
                        throw TypeError(".charging.v1.GetOrdersResponse.orders: array expected");
                    message.orders = [];
                    for (let i = 0; i < object.orders.length; ++i) {
                        if (typeof object.orders[i] !== "object")
                            throw TypeError(".charging.v1.GetOrdersResponse.orders: object expected");
                        message.orders[i] = $root.charging.v1.OrderEntity.fromObject(object.orders[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetOrdersResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.GetOrdersResponse
             * @static
             * @param {charging.v1.GetOrdersResponse} message GetOrdersResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetOrdersResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.orders = [];
                if (message.orders && message.orders.length) {
                    object.orders = [];
                    for (let j = 0; j < message.orders.length; ++j)
                        object.orders[j] = $root.charging.v1.OrderEntity.toObject(message.orders[j], options);
                }
                return object;
            };

            /**
             * Converts this GetOrdersResponse to JSON.
             * @function toJSON
             * @memberof charging.v1.GetOrdersResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetOrdersResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetOrdersResponse;
        })();

        v1.UpdateOrderRequest = (function() {

            /**
             * Properties of an UpdateOrderRequest.
             * @memberof charging.v1
             * @interface IUpdateOrderRequest
             * @property {string|null} [id] UpdateOrderRequest id
             * @property {boolean|null} [endOrder] UpdateOrderRequest endOrder
             */

            /**
             * Constructs a new UpdateOrderRequest.
             * @memberof charging.v1
             * @classdesc Represents an UpdateOrderRequest.
             * @implements IUpdateOrderRequest
             * @constructor
             * @param {charging.v1.IUpdateOrderRequest=} [properties] Properties to set
             */
            function UpdateOrderRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateOrderRequest id.
             * @member {string} id
             * @memberof charging.v1.UpdateOrderRequest
             * @instance
             */
            UpdateOrderRequest.prototype.id = "";

            /**
             * UpdateOrderRequest endOrder.
             * @member {boolean} endOrder
             * @memberof charging.v1.UpdateOrderRequest
             * @instance
             */
            UpdateOrderRequest.prototype.endOrder = false;

            /**
             * Creates an UpdateOrderRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.UpdateOrderRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.UpdateOrderRequest} UpdateOrderRequest
             */
            UpdateOrderRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.UpdateOrderRequest)
                    return object;
                let message = new $root.charging.v1.UpdateOrderRequest();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.endOrder != null)
                    message.endOrder = Boolean(object.endOrder);
                return message;
            };

            /**
             * Creates a plain object from an UpdateOrderRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.UpdateOrderRequest
             * @static
             * @param {charging.v1.UpdateOrderRequest} message UpdateOrderRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateOrderRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.endOrder = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.endOrder != null && message.hasOwnProperty("endOrder"))
                    object.endOrder = message.endOrder;
                return object;
            };

            /**
             * Converts this UpdateOrderRequest to JSON.
             * @function toJSON
             * @memberof charging.v1.UpdateOrderRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateOrderRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateOrderRequest;
        })();

        v1.OrderService = (function() {

            /**
             * Constructs a new OrderService service.
             * @memberof charging.v1
             * @classdesc Represents an OrderService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function OrderService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (OrderService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = OrderService;

            /**
             * Callback as used by {@link charging.v1.OrderService#createOrder}.
             * @memberof charging.v1.OrderService
             * @typedef CreateOrderCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {charging.v1.OrderEntity} [response] OrderEntity
             */

            /**
             * Calls CreateOrder.
             * @function createOrder
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.ICreateOrderRequest} request CreateOrderRequest message or plain object
             * @param {charging.v1.OrderService.CreateOrderCallback} callback Node-style callback called with the error, if any, and OrderEntity
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(OrderService.prototype.createOrder = function createOrder(request, callback) {
                return this.rpcCall(createOrder, $root.charging.v1.CreateOrderRequest, $root.charging.v1.OrderEntity, request, callback);
            }, "name", { value: "CreateOrder" });

            /**
             * Calls CreateOrder.
             * @function createOrder
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.ICreateOrderRequest} request CreateOrderRequest message or plain object
             * @returns {Promise<charging.v1.OrderEntity>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link charging.v1.OrderService#getOrder}.
             * @memberof charging.v1.OrderService
             * @typedef GetOrderCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {charging.v1.Order} [response] Order
             */

            /**
             * Calls GetOrder.
             * @function getOrder
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.IGetOrderRequest} request GetOrderRequest message or plain object
             * @param {charging.v1.OrderService.GetOrderCallback} callback Node-style callback called with the error, if any, and Order
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(OrderService.prototype.getOrder = function getOrder(request, callback) {
                return this.rpcCall(getOrder, $root.charging.v1.GetOrderRequest, $root.charging.v1.Order, request, callback);
            }, "name", { value: "GetOrder" });

            /**
             * Calls GetOrder.
             * @function getOrder
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.IGetOrderRequest} request GetOrderRequest message or plain object
             * @returns {Promise<charging.v1.Order>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link charging.v1.OrderService#getOrders}.
             * @memberof charging.v1.OrderService
             * @typedef GetOrdersCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {charging.v1.GetOrdersResponse} [response] GetOrdersResponse
             */

            /**
             * Calls GetOrders.
             * @function getOrders
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.IGetOrdersRequest} request GetOrdersRequest message or plain object
             * @param {charging.v1.OrderService.GetOrdersCallback} callback Node-style callback called with the error, if any, and GetOrdersResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(OrderService.prototype.getOrders = function getOrders(request, callback) {
                return this.rpcCall(getOrders, $root.charging.v1.GetOrdersRequest, $root.charging.v1.GetOrdersResponse, request, callback);
            }, "name", { value: "GetOrders" });

            /**
             * Calls GetOrders.
             * @function getOrders
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.IGetOrdersRequest} request GetOrdersRequest message or plain object
             * @returns {Promise<charging.v1.GetOrdersResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link charging.v1.OrderService#updateOrder}.
             * @memberof charging.v1.OrderService
             * @typedef UpdateOrderCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {charging.v1.Order} [response] Order
             */

            /**
             * Calls UpdateOrder.
             * @function updateOrder
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.IUpdateOrderRequest} request UpdateOrderRequest message or plain object
             * @param {charging.v1.OrderService.UpdateOrderCallback} callback Node-style callback called with the error, if any, and Order
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(OrderService.prototype.updateOrder = function updateOrder(request, callback) {
                return this.rpcCall(updateOrder, $root.charging.v1.UpdateOrderRequest, $root.charging.v1.Order, request, callback);
            }, "name", { value: "UpdateOrder" });

            /**
             * Calls UpdateOrder.
             * @function updateOrder
             * @memberof charging.v1.OrderService
             * @instance
             * @param {charging.v1.IUpdateOrderRequest} request UpdateOrderRequest message or plain object
             * @returns {Promise<charging.v1.Order>} Promise
             * @variation 2
             */

            return OrderService;
        })();

        return v1;
    })();

    return charging;
})();