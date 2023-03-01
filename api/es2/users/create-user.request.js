"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequest = void 0;
const http_request_1 = require("../../http-request");
class CreateUserRequest extends http_request_1.HttpRequest {
    constructor(name, job) {
        super();
        this.url = 'https://reqres.in/api/users';
        this.method = 'POST';
        this.body = {
            "name": name,
            "job": job
        };
    }
}
exports.CreateUserRequest = CreateUserRequest;
