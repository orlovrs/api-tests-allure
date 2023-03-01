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
const api_1 = require("../api/api");
const runtime_1 = require("allure-mocha/runtime");
const tags = require('mocha-tags');
let api;
beforeEach(() => {
    runtime_1.allure.epic('/evaluate');
    runtime_1.allure.feature('Account logic');
    runtime_1.allure.story('Invalid account type');
    api = new api_1.Api("123");
});
it("Every retail account has invalid account type", () => __awaiter(void 0, void 0, void 0, function* () {
    yield api.es2.users.create.withCreatedResponse();
}));
it("Every retail account has no invalid account type", () => __awaiter(void 0, void 0, void 0, function* () {
    yield api.es2.users.get(2).withOkResponse();
}));
tags('failed').it("Failed test", function () {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        this.test.xrayTestCase = '@mantis-xxxx'; // Setting up the scenario
        // @ts-ignore
        console.log(this.test.xrayTestCase);
        yield api.es2.users.get(23).withOkResponse();
    });
});
