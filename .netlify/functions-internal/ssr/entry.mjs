import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cd_Vg1T0.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_tmKTrqZK.mjs');
const _page1 = () => import('./chunks/404_C8dkm5W7.mjs');
const _page2 = () => import('./chunks/conditions_YfuZBX47.mjs');
const _page3 = () => import('./chunks/demo-432_Bu9JVU-X.mjs');
const _page4 = () => import('./chunks/index_8ursdKJl.mjs');
const _page5 = () => import('./chunks/privacy_B0jQTZ-i.mjs');
const _page6 = () => import('./chunks/index_CWmjscfE.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/conditions.astro", _page2],
    ["src/pages/demo-432.astro", _page3],
    ["src/pages/partner/index.astro", _page4],
    ["src/pages/privacy.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9f604bc7-e3e8-4a27-a1a1-789c01e02d86"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
