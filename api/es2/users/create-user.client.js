"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserClient = void 0;
const create_user_request_1 = require("./create-user.request");
const runtime_1 = require("allure-mocha/runtime");
class CreateUserClient {
    constructor(app) {
        this.app = app;
    }
    withCreatedResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            return runtime_1.allure.step("Send request to create user", () => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.app.send(new create_user_request_1.CreateUserRequest("Roman", "QA"));
                response.assertStatusCode(201);
                return response;
            }));
        });
    }
}
exports.CreateUserClient = CreateUserClient;
