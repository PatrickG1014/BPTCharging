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

        v1.StartChargingRequest = (function() {

            /**
             * Properties of a StartChargingRequest.
             * @memberof charging.v1
             * @interface IStartChargingRequest
             * @property {string|null} [start] StartChargingRequest start
             */

            /**
             * Constructs a new StartChargingRequest.
             * @memberof charging.v1
             * @classdesc Represents a StartChargingRequest.
             * @implements IStartChargingRequest
             * @constructor
             * @param {charging.v1.IStartChargingRequest=} [properties] Properties to set
             */
            function StartChargingRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartChargingRequest start.
             * @member {string} start
             * @memberof charging.v1.StartChargingRequest
             * @instance
             */
            StartChargingRequest.prototype.start = "";

            /**
             * Creates a StartChargingRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.StartChargingRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.StartChargingRequest} StartChargingRequest
             */
            StartChargingRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.StartChargingRequest)
                    return object;
                let message = new $root.charging.v1.StartChargingRequest();
                if (object.start != null)
                    message.start = String(object.start);
                return message;
            };

            /**
             * Creates a plain object from a StartChargingRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.StartChargingRequest
             * @static
             * @param {charging.v1.StartChargingRequest} message StartChargingRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartChargingRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.start = "";
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = message.start;
                return object;
            };

            /**
             * Converts this StartChargingRequest to JSON.
             * @function toJSON
             * @memberof charging.v1.StartChargingRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartChargingRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StartChargingRequest;
        })();

        v1.StartChargingResponse = (function() {

            /**
             * Properties of a StartChargingResponse.
             * @memberof charging.v1
             * @interface IStartChargingResponse
             */

            /**
             * Constructs a new StartChargingResponse.
             * @memberof charging.v1
             * @classdesc Represents a StartChargingResponse.
             * @implements IStartChargingResponse
             * @constructor
             * @param {charging.v1.IStartChargingResponse=} [properties] Properties to set
             */
            function StartChargingResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a StartChargingResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof charging.v1.StartChargingResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {charging.v1.StartChargingResponse} StartChargingResponse
             */
            StartChargingResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.charging.v1.StartChargingResponse)
                    return object;
                return new $root.charging.v1.StartChargingResponse();
            };

            /**
             * Creates a plain object from a StartChargingResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof charging.v1.StartChargingResponse
             * @static
             * @param {charging.v1.StartChargingResponse} message StartChargingResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartChargingResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartChargingResponse to JSON.
             * @function toJSON
             * @memberof charging.v1.StartChargingResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartChargingResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StartChargingResponse;
        })();

        v1.ChargingService = (function() {

            /**
             * Constructs a new ChargingService service.
             * @memberof charging.v1
             * @classdesc Represents a ChargingService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function ChargingService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (ChargingService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChargingService;

            /**
             * Callback as used by {@link charging.v1.ChargingService#startCharging}.
             * @memberof charging.v1.ChargingService
             * @typedef StartChargingCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {charging.v1.StartChargingResponse} [response] StartChargingResponse
             */

            /**
             * Calls StartCharging.
             * @function startCharging
             * @memberof charging.v1.ChargingService
             * @instance
             * @param {charging.v1.IStartChargingRequest} request StartChargingRequest message or plain object
             * @param {charging.v1.ChargingService.StartChargingCallback} callback Node-style callback called with the error, if any, and StartChargingResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChargingService.prototype.startCharging = function startCharging(request, callback) {
                return this.rpcCall(startCharging, $root.charging.v1.StartChargingRequest, $root.charging.v1.StartChargingResponse, request, callback);
            }, "name", { value: "StartCharging" });

            /**
             * Calls StartCharging.
             * @function startCharging
             * @memberof charging.v1.ChargingService
             * @instance
             * @param {charging.v1.IStartChargingRequest} request StartChargingRequest message or plain object
             * @returns {Promise<charging.v1.StartChargingResponse>} Promise
             * @variation 2
             */

            return ChargingService;
        })();

        return v1;
    })();

    return charging;
})();