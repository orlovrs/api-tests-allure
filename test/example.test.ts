import {Api} from "../api/api";
import {allure} from "allure-mocha/runtime";
const tags = require('mocha-tags');

let api: Api

beforeEach(() => {
    allure.epic('/evaluate');
    allure.feature('Account logic');
    allure.story('Invalid account type');
    api = new Api("123");
});

it("Every retail account has invalid account type", async () => {
    await api.es2.users.create.withCreatedResponse();
});
it("Every retail account has no invalid account type", async () => {
    await api.es2.users.get(2).withOkResponse();
});
tags('failed').it("Failed test", async () => {
    await api.es2.users.get(23).withOkResponse();
});