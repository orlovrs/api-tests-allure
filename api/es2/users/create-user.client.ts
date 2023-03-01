import {HttpResponse} from "../../http-response";
import {CreateUserRequest} from "./create-user.request";
import {Es2Application} from "../es2-application";
import {allure} from "allure-mocha/runtime";

export class CreateUserClient {
    private app: Es2Application;

    constructor(app: Es2Application) {
        this.app = app;
    }

    public async withCreatedResponse(): Promise<HttpResponse>{
        return allure.step("Send request to create user", async () => {
            const response = await this.app.send(new CreateUserRequest("Roman", "QA"));
            response.assertStatusCode(201);
            return response;
        });
    }
}