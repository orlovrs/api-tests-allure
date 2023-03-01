import {CreateUserClient} from "./create-user.client";
import {Es2Application} from "../es2-application";
import {GetUserClient} from "./get-user.client";

export class UsersController {
    private readonly app: Es2Application;
    public create: CreateUserClient;

    public get(id: number): GetUserClient {
        return new GetUserClient(this.app, id);
    };

    constructor(app: Es2Application) {
        this.app = app;
        this.create = new CreateUserClient(app);
    }
}