import {UsersController} from "./users/users-controller";
import {HttpRequest} from "../http-request";
import axios, {AxiosResponse} from "axios";
import {HttpResponse} from "../http-response";
import {allure} from "allure-mocha/runtime";
import {ContentType} from "allure-js-commons";

export class Es2Application {
    private readonly token: string;

    public users: UsersController;

    constructor(token: string) {
        this.token = token;
        this.users = new UsersController(this);
    }

    public authorize(request: HttpRequest) {
        request.headers["Authorization"] = `Basic ${this.token}`;
    }

    public addDefaultHeaders(request: HttpRequest) {
        request.headers["Content-Type"] = "application/json";
    }

    public async send(request: HttpRequest) {
        this.prepareRequest(request);
        this.authorize(request);
        this.addDefaultHeaders(request);

        this.logRequest(request);
        return await axios.request({
            method: request.method,
            url: request.url,
            headers: {...request.headers},
            data: request.body ?? undefined
        })
            .then((res: AxiosResponse<any>) => {
                this.logResponse(res);
                return new HttpResponse(res.status, res.headers, res.data);
            })
            .catch((err) => {
                this.logResponse(err.response);
                return new HttpResponse(err.response.status, err.response.headers, err.response.data);
            });
    }

    private logRequest(request: HttpRequest) {
        allure.attachment("request", JSON.stringify({
            url: `${request.method} ${request.url}`,
            headers: request.headers,
            body: request.body
        }, null, 4), ContentType.JSON);
    }

    private logResponse(res: AxiosResponse) {
        allure.attachment("response", JSON.stringify({
            status: `${res.status} ${res.statusText}`,
            headers: res.headers,
            body: res.data
        }, null, 4), ContentType.JSON);
    }

    private prepareRequest(request: HttpRequest): void {
        const queryStr = Object.keys(request.query).map(k => `${k}=${request.query[k]}`).join('&');
        Object.keys(request.path).forEach(k => request.url = request.url!.replace(`{${k}}`, request.path[k]));

        if (queryStr) {
            request.url = `${request.url}?${queryStr}`;
        }
    }
}