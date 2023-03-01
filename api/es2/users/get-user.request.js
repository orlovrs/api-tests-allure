"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserRequest = void 0;
const http_request_1 = require("../../http-request");
class GetUserRequest extends http_request_1.HttpRequest {
    constructor(id) {
        super();
        this.url = 'https://reqres.in/api/users/{id}';
        this.method = 'GET';
        this.path["id"] = String(id);
    }
}
exports.GetUserRequest = GetUserRequest;
