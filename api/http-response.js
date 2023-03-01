"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
const chai_1 = require("chai");
const runtime_1 = require("allure-mocha/runtime");
class HttpResponse {
    constructor(statusCode, headers, body) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
    }
    assertStatusCode(responseCode) {
        runtime_1.allure.step(`Assert status code is ${responseCode}`, () => {
            (0, chai_1.expect)(this.statusCode).to.eq(responseCode);
        });
    }
}
exports.HttpResponse = HttpResponse;
