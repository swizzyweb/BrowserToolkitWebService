import { Application } from "express";
import { IRunProps, IRunResult, IWebService, WebService } from "@swizzyweb/swizzy-web-service";
import { router } from "./routers/index-router";

export class BrowserToolkitWebService extends WebService {
    name = 'BrowserToolkitWebService';

    constructor(props: any) {
        super({...props, routers: [router]});
    }

    // install(props: IRunProps): Promise<IRunResult> {
    //     const { app } = props;

    //     // install middleware
    //     this.installMiddleware(app);
    //     this.installRouters(app);
    //     // install routers

    //     return Promise.resolve({

    //     });
    // }

    // private installMiddleware(app: Application) {

    // }

    // private installRouters(app: Application) {
    //     app.use(router);
    // }

    // uninstall(props: IRunProps): Promise<any> {
    //     const { app } = props;
    //     this.uninstallRouters(app)
    //     return Promise.resolve();
    // }

    // private uninstallRouters(app: Application) {

    // }
}

export function getWebservice(props: any): IWebService {
    return new BrowserToolkitWebService(props);
}
