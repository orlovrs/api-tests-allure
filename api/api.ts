import {Es2Application} from "./es2/es2-application";

export class Api {
    public es2: Es2Application;

    constructor(token: string) {
        this.es2 = new Es2Application(token);
    }
}