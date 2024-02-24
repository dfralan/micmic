import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Dn2qh0XH.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_SJmX5xm2.mjs');
const _page1 = () => import('./chunks/_.._B7glH0Ll.mjs');
const _page2 = () => import('./chunks/404_BZ84inXv.mjs');
const _page3 = () => import('./chunks/conditions_CFHo5hUV.mjs');
const _page4 = () => import('./chunks/demo-432_6TKOTDUN.mjs');
const _page5 = () => import('./chunks/login_BfP_CT9c.mjs');
const _page6 = () => import('./chunks/index_DNalgASo.mjs');
const _page7 = () => import('./chunks/privacy_B3yO9b1_.mjs');
const _page8 = () => import('./chunks/index_DqB-HvwW.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/conditions.astro", _page3],
    ["src/pages/demo-432.astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/partner/index.astro", _page6],
    ["src/pages/privacy.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3380b344-e8d7-43b7-b322-e5fdbce077f6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
