import {HttpRequest} from "../../http-request";

export class CreateUserRequest extends HttpRequest {
    constructor(name: string, job: string) {
        super();
        this.url = 'https://reqres.in/api/users';
        this.method = 'POST'
        this.body = {
            "name": name,
            "job": job
        }
    }
}