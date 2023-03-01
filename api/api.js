"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const es2_application_1 = require("./es2/es2-application");
class Api {
    constructor(token) {
        this.es2 = new es2_application_1.Es2Application(token);
    }
}
exports.Api = Api;
