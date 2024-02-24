import { renderers } from './renderers.mjs';
import { manifest } from './manifest_uejr25sf.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DldQTazZ.mjs');
const _page1 = () => import('./chunks/_.._DPNYjGhY.mjs');
const _page2 = () => import('./chunks/404_Dl4vmrjB.mjs');
const _page3 = () => import('./chunks/conditions_Cqd68iWg.mjs');
const _page4 = () => import('./chunks/demo-432_DA816EzK.mjs');
const _page5 = () => import('./chunks/index_2s2GUeQA.mjs');
const _page6 = () => import('./chunks/privacy_BtY_IV8a.mjs');
const _page7 = () => import('./chunks/index_ewMWI6SX.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/conditions.astro", _page3],
    ["src/pages/demo-432.astro", _page4],
    ["src/pages/partner/index.astro", _page5],
    ["src/pages/privacy.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a7ec54ff-a7b0-4d48-8b1c-ccf372731168"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
