import {HttpResponse} from "../../http-response";
import {Es2Application} from "../es2-application";
import {GetUserRequest} from "./get-user.request";
import {allure} from "allure-mocha/runtime";

export class GetUserClient {
    private app: Es2Application;
    private readonly id: number;

    constructor(app: Es2Application, id: number) {
        this.app = app;
        this.id = id;
    }

    public async withOkResponse(): Promise<HttpResponse> {
        return allure.step(`Send request to find user with id ${this.id}`, async () => {
            const response = await this.app.send(new GetUserRequest(this.id));
            response.assertStatusCode(200);
            return response;
        });
    }
}