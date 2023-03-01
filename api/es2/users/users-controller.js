"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const create_user_client_1 = require("./create-user.client");
const get_user_client_1 = require("./get-user.client");
class UsersController {
    get(id) {
        return new get_user_client_1.GetUserClient(this.app, id);
    }
    ;
    constructor(app) {
        this.app = app;
        this.create = new create_user_client_1.CreateUserClient(app);
    }
}
exports.UsersController = UsersController;
