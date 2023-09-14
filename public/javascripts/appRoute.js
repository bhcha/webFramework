import {appLayout} from "./contents.js";
import {dualLayoutView} from "./view/dual.layout.view.js";


export const App = async (req, menu) => {
    const path = req.path;
    if (path === "/layoutSingle") {
        return appLayout(req, menu, (await import('./view/single.layout.view.js')).singleLayoutView());
    } else if (path === "/layoutDual") {
        return appLayout(req, menu, (await import('./view/dual.layout.view.js')).dualLayoutView());
    } else if (path === "/layoutOneAndHalf") {
        return appLayout(req, menu, (await import('./view/oneandhalf.layout.view.js')).dualLayoutView());
    } else if (path === "/settingPage") {
        return appLayout(req, menu, (await import('./view/setting.view.js')).settingView());
    } else {
        return appLayout(req, menu, (await import('./view/notfound.view.js')).notfoundView());
    }
}

