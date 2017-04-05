(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("msgpack-lite"), require("pure-uuid"));
	else if(typeof define === 'function' && define.amd)
		define("network_transport", ["msgpack-lite", "pure-uuid"], factory);
	else if(typeof exports === 'object')
		exports["network_transport"] = factory(require("msgpack-lite"), require("pure-uuid"));
	else
		root["network_transport"] = factory(root["msgpack"], root["UUID"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NetworkTransport = exports.APIError = exports.DependencyError = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _msgpack = __webpack_require__(0);

var _msgpack2 = _interopRequireDefault(_msgpack);

var _UUID = __webpack_require__(1);

var _UUID2 = _interopRequireDefault(_UUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Webpack library starter
The MIT License (MIT)

Copyright (c) 2015 Krasimir Tsonev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var DependencyError = exports.DependencyError = function (_Error) {
    _inherits(DependencyError, _Error);

    function DependencyError() {
        _classCallCheck(this, DependencyError);

        return _possibleConstructorReturn(this, (DependencyError.__proto__ || Object.getPrototypeOf(DependencyError)).apply(this, arguments));
    }

    return DependencyError;
}(Error);

;

var APIError = exports.APIError = function (_Error2) {
    _inherits(APIError, _Error2);

    function APIError() {
        _classCallCheck(this, APIError);

        return _possibleConstructorReturn(this, (APIError.__proto__ || Object.getPrototypeOf(APIError)).apply(this, arguments));
    }

    return APIError;
}(Error);

;

if (typeof window === "undefined") {
    if (typeof WebSocket === "undefined") {
        var _WebSocket = eval('require(\'websocket\')').client;
    }

    if (typeof XMLHttpRequest === "undefined") {
        var _XMLHttpRequest = eval('require(\'xmlhttprequest\')').XMLHttpRequest;
    }

    if (typeof console === "undefined") {
        var _console = eval('require(\'console\')');
    }
    var _document = undefined;
} else {
    var _WebSocket2 = window.WebSocket;
    var _XMLHttpRequest2 = window.XMLHttpRequest;
    var _console2 = window.console;
    var _document2 = window.document;
}

// Check dependencies
if (typeof WebSocket !== "undefined") {
    if (!_msgpack2.default) throw new DependencyError("This library requires msgpack-lite");
    if (!_UUID2.default) throw new DependencyError("This library requires pure-uuid");
}
if (typeof XMLHttpRequest === "undefined") throw new DependencyError("This library requires XMLHttpRequest");
if (typeof console === "undefined") throw new DependencyError("This library requires console");

// Helpers

var send_data_to_subscribers = function send_data_to_subscribers(socket_subject_map, stream, data) {
    if (stream in socket_subject_map) {
        for (var i = 0; i < socket_subject_map[stream].length; i++) {
            socket_subject_map[stream][i].next(data);
        }
    }
};

var return_http_response = function return_http_response(event, callback) {
    var request_response = void 0;
    var request_response_code = event.target.status;

    try {
        request_response = JSON.parse(event.target.response);
    } catch (e) {
        if (e instanceof SyntaxError) {
            console.error("Cannot parse HTTP response JSON", event.target.response);
            return;
        } else {
            throw e;
        }
    }
    callback(request_response_code, request_response);
};

// Core logic

var init_socket = function init_socket(ws_url, socket_connection) {
    var self = this;
    socket_connection.socket = new WebSocket(ws_url);
    socket_connection.socket.binaryType = "arraybuffer";
    socket_connection.socket.onmessage = function (ev) {
        if (ev && ev.data) {
            var data = void 0;
            try {
                var decoded_response = _msgpack2.default.decode(new Uint8Array(ev.data));
                console.log("WS receiving (raw)...", decoded_response);
                data = JSON.parse(decoded_response);
                console.log("WS receiving (parsed)...", data);

                if (!data || !data.stream || !data.payload) {
                    // Data parsed but does not fit pattern
                    console.error("socket message does not match expected pattern. message:" + JSON.stringify(data));
                    return;
                }
            } catch (e) {
                if (e instanceof SyntaxError) {
                    // Can't parse the data
                    console.error("Cannot parse WS response JSON");
                } else {
                    console.error(e);
                }
                return;
            }

            if (!!data.payload) {
                var request_response = data.payload.data;
                var request_response_code = data.payload.response_status;

                if (!!request_response && !!request_response_code) {
                    // Both the status code and the data must be present in the response for it to trigger its corresponding callback
                    if (data.payload.request_id in socket_connection.router) {
                        socket_connection.router[data.payload.request_id]["callback"](request_response_code, request_response);
                        delete socket_connection.router[data.payload.request_id];
                    }
                }
            }

            send_data_to_subscribers(socket_connection.subject_map, "*", data);
            send_data_to_subscribers(socket_connection.subject_map, data.stream, data);
        }
    };

    socket_connection.socket.onopen = function () {
        socket_connection.in_progress = false;
        var element = null;

        while (element = socket_connection.queue.shift()) {
            socket_send(ws_url, socket_connection, element);
        }
    };
};

var socket_send = function socket_send(ws_url, socket_connection, message, callback) {
    var queue_and_reconnect = false;

    // If there is a callback on this request and it has no id, register the callback to the socket router
    // There is no need to re-register the callback once it has been registered, so this request can be repeated
    // without its callback if it cannot be sent initially.
    if (!!callback && !message.payload.request_id) {
        message.payload.request_id = new _UUID2.default(4).format();

        socket_connection.router[message.payload.request_id] = { "time": new Date().getTime(), "callback": callback };
    }

    if (socket_connection.socket === null || socket_connection.socket.readyState === socket_connection.socket.CONNECTING || socket_connection.socket.readyState === socket_connection.socket.CLOSED) {
        queue_and_reconnect = true;
    }

    if (queue_and_reconnect) {
        socket_connection.queue.push(message);

        if (!socket_connection.in_progress) {
            init_socket(ws_url, socket_connection);
            socket_connection.in_progress = true;
        }

        return;
    }

    console.log("WS sending...", message);
    socket_connection.socket.send(_msgpack2.default.encode(message));
};

var http_transport_func = function http_transport_func(protocol_prefix, method, api_url, endpoint, id, custom_method, query_params, data, headers, with_credentials, callback, socket_connection) {
    var request = new XMLHttpRequest();

    var id_block = "";
    if (!!id) id_block = "/" + encodeURIComponent(id);

    var custom_method_block = "";
    if (!!custom_method) custom_method_block = encodeURIComponent(custom_method) + "/";

    var query_param_block = "";
    if (!!query_params && query_params instanceof Object) {
        query_param_block = "?";

        for (var query_param in query_params) {
            query_param_block += encodeURIComponent(query_param) + "=" + encodeURIComponent(query_params[query_param]) + "&";
        }

        // Take off last & sign
        query_param_block = query_param_block.slice(0, -1);
    }

    var url = protocol_prefix + api_url + endpoint + id_block + "/" + custom_method_block + query_param_block;

    console.log("Sending http request to url: ", url);

    request.open(method, url, true);

    request.setRequestHeader("Content-Type", "application/json");

    for (var header in headers) {
        request.setRequestHeader(header, headers[header]);
    }

    if (!!with_credentials) {
        request.withCredentials = true;
    }

    if (!!callback) {
        request.onload = function (event) {
            return_http_response(event, callback);
        };
        request.onerror = function (event) {
            return_http_response(event, callback);
        };
        request.onabort = function (event) {
            return_http_response(event, callback);
        };
        request.ontimeout = function (event) {
            return_http_response(event, callback);
        };
    }

    request.send(JSON.stringify(data));
};

var ws_transport_func = function ws_transport_func(protocol_prefix, method, api_url, endpoint, id, custom_method, query_params, data, headers, with_credentials, callback, socket_connection) {
    var payload = {
        "method": method
    };

    if (!!custom_method) payload["action"] = custom_method;

    if (!!id) payload["pk"] = id;

    if (!!query_params) payload["query_params"] = query_params;

    if (!!data) payload["data"] = data;

    socket_send(protocol_prefix + api_url, socket_connection, {
        "stream": endpoint,
        "payload": payload
    }, callback);
};

var transport_funcs = {
    "http": function http() {
        http_transport_func.prototype.constructor.apply(this, ["http://"].concat(Array.prototype.slice.call(arguments)));
    },
    "https": function https() {
        http_transport_func.prototype.constructor.apply(this, ["https://"].concat(Array.prototype.slice.call(arguments)));
    },
    "websocket_msgpack": function websocket_msgpack() {
        ws_transport_func.prototype.constructor.apply(this, ["ws://"].concat(Array.prototype.slice.call(arguments)));
    },
    "websocket_msgpack_secure": function websocket_msgpack_secure() {
        ws_transport_func.prototype.constructor.apply(this, ["wss://"].concat(Array.prototype.slice.call(arguments)));
    }
};

// Api definition
// Transport types in order of increasing priority
var transport_types = ["http", "https", "websocket_msgpack", "websocket_msgpack_secure"];

//NetworkTransport Class initialized per-connection

var NetworkTransport = exports.NetworkTransport = function () {
    function NetworkTransport(api_url, transports, garbage_collect_timeout) {
        _classCallCheck(this, NetworkTransport);

        // Core
        this.socket_connection = {
            "socket": null,
            "in_progress": false,
            "queue": [],
            "router": {},
            // rxjs subject map which maps endpoints to subjects
            "subject_map": {}
        };
        // The host to connect to
        this.api_url = api_url;
        // Delete callbacks older than a certain amount of time (60 seconds default)
        this.garbage_collect_timeout = garbage_collect_timeout || 60000;
        if (typeof this.api_url !== "string") throw new APIError("api_url must be a string.");
        // Allowed transports: http, websocket
        this.transports = transports;
        if (!(this.transports instanceof Array)) throw new APIError("transports must be an array.");
        if (this.transports.length == 0) this.transports = ["http"];
        for (var i = 0; i < this.transports.length; i++) {
            if (transport_types.indexOf(this.transports[i]) === -1) throw new APIError(this.transports[i] + " is not a supported transport.");
        }
        // Remove websockets as a transport if they are not supported
        var ws_index = this.transports.indexOf("websocket_msgpack");
        if (ws_index !== -1) {
            if (!WebSocket) {
                this.transports.splice(ws_index, 1);
                console.warn("not using websockets because they are not supported.");
            }
        }
        var wss_index = this.transports.indexOf("websocket_msgpack_secure");
        if (wss_index !== -1) {
            if (!WebSocket) {
                this.transports.splice(wss_index, 1);
                console.warn("not using secure websockets because they are not supported.");
            }
        }
        // Start garbage collection
        this.garbage_collect();
    }

    /*
    Submit a request containing the following
    {
        "method": <REST method> (default: GET)
        "endpoint": <REST endpoint> (required)
        "id": <resource id> (optional)
        "custom_method": <endpoint custom method> (optional)
        "query_params": <map of query params to attach to url> (optional)
        "data": <data to send with request> (optional)
        "headers" <headers to send with request> (optional)
        "with_credentials" <use cookies in request, currently applies to http-type requests only> (default: true)
        "force_transport" <force a transport layer> (optional)
    }
    also submit a callback if you need a response
    */


    _createClass(NetworkTransport, [{
        key: 'send',
        value: function send(request, callback) {
            if (!request) throw new APIError("request is not defined or blank.");
            if (!("endpoint" in request)) throw new APIError("request must contain endpoint.");

            // Determine the transport to use
            var transport = request["force_transport"];

            if (!transport) {
                // Pick the most important transport (the last one on the list)
                transport = this.transports[this.transports.length - 1];
            }

            if (this.transports.indexOf(transport) === -1) throw new APIError(transport + " is not an active transport.");

            // Transport-specific issues
            if (transport === "websocket_msgpack" && !!request["headers"]) console.warn("websocket transport does not support headers.");

            // Call transport function
            transport_funcs[transport](request["method"] || "GET", this.api_url, request["endpoint"], request["id"], request["custom_method"], request["query_params"], request["data"], request["headers"], request["with_credentials"] || true, callback, this.socket_connection);
        }

        // Subscribe a given subject to a given endpoint. Special "*" wildcard subscribes to all endpoints.

    }, {
        key: 'subscribe_endpoint',
        value: function subscribe_endpoint(endpoint, socket_subject) {
            if (!(endpoint in this.socket_connection.subject_map)) this.socket_connection.subject_map[endpoint] = [];

            if (this.socket_connection.subject_map[endpoint].indexOf(socket_subject) !== -1) return;

            this.socket_connection.subject_map[endpoint].push(socket_subject);
        }
    }, {
        key: 'garbage_collect',
        value: function garbage_collect() {
            var self = this;
            console.log("garbage collection started...");
            var now = new Date().getTime();
            for (var request_id in this.socket_connection.router) {
                if (now - this.socket_connection.router[request_id]["time"] > this.garbage_collect_timeout) {
                    delete this.socket_connection.router[request_id];
                    console.log("garbage collected request callback ", request_id);
                }
            }
            console.log("garbage collection ended.");
            setTimeout(function () {
                self.garbage_collect();
            }, this.garbage_collect_timeout);
        }

        //From http://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
        //Using dynamic version because cookies may be changed via API calls

    }, {
        key: 'read_cookie',
        value: function read_cookie(name) {
            if (typeof document === "undefined" || typeof document.cookie === "undefined") throw new APIError("Current context has no cookies");
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
    }]);

    return NetworkTransport;
}();

var Library = function () {
    function Library(api_url, transports) {
        _classCallCheck(this, Library);

        this._name = 'network_transport';
    }

    _createClass(Library, [{
        key: 'name',
        get: function get() {
            return this._name;
        }
    }]);

    return Library;
}();

exports.default = Library;

/***/ })
/******/ ]);
});
//# sourceMappingURL=network_transport.js.map