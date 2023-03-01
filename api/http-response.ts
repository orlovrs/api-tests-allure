import {expect} from "chai";
import {allure} from "allure-mocha/runtime";

import {AxiosResponseHeaders, RawAxiosResponseHeaders} from "axios";

export class HttpResponse {
    statusCode: number;
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
    body: any;

    constructor(statusCode: number, headers: RawAxiosResponseHeaders | AxiosResponseHeaders, body: any) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
    }

    assertStatusCode(responseCode: number) {
        allure.step(`Assert status code is ${responseCode}`, () => {
            expect(this.statusCode).to.eq(responseCode);
        });
    }
}