import {HttpRequest} from "../../http-request";

export class GetUserRequest extends HttpRequest {
    constructor(id: number) {
        super();
        this.url = 'https://reqres.in/api/users/{id}';
        this.method = 'GET'
        this.path["id"] = String(id);
    }
}