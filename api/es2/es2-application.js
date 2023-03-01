"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Es2Application = void 0;
const users_controller_1 = require("./users/users-controller");
const axios_1 = __importDefault(require("axios"));
const http_response_1 = require("../http-response");
const runtime_1 = require("allure-mocha/runtime");
const allure_js_commons_1 = require("allure-js-commons");
class Es2Application {
    constructor(token) {
        this.token = token;
        this.users = new users_controller_1.UsersController(this);
    }
    authorize(request) {
        request.headers["Authorization"] = `Basic ${this.token}`;
    }
    addDefaultHeaders(request) {
        request.headers["Content-Type"] = "application/json";
    }
    send(request) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.prepareRequest(request);
            this.authorize(request);
            this.addDefaultHeaders(request);
            this.logRequest(request);
            return yield axios_1.default.request({
                method: request.method,
                url: request.url,
                headers: Object.assign({}, request.headers),
                data: (_a = request.body) !== null && _a !== void 0 ? _a : undefined
            })
                .then((res) => {
                this.logResponse(res);
                return new http_response_1.HttpResponse(res.status, res.headers, res.data);
            })
                .catch((err) => {
                this.logResponse(err.response);
                return new http_response_1.HttpResponse(err.response.status, err.response.headers, err.response.data);
            });
        });
    }
    logRequest(request) {
        runtime_1.allure.attachment("request", JSON.stringify({
            url: `${request.method} ${request.url}`,
            headers: request.headers,
            body: request.body
        }, null, 4), allure_js_commons_1.ContentType.JSON);
    }
    logResponse(res) {
        runtime_1.allure.attachment("response", JSON.stringify({
            status: `${res.status} ${res.statusText}`,
            headers: res.headers,
            body: res.data
        }, null, 4), allure_js_commons_1.ContentType.JSON);
    }
    prepareRequest(request) {
        const queryStr = Object.keys(request.query).map(k => `${k}=${request.query[k]}`).join('&');
        Object.keys(request.path).forEach(k => request.url = request.url.replace(`{${k}}`, request.path[k]));
        if (queryStr) {
            request.url = `${request.url}?${queryStr}`;
        }
    }
}
exports.Es2Application = Es2Application;
