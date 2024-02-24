import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CPz8-svO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DldQTazZ.mjs');
const _page1 = () => import('./chunks/404_tdZxqTPC.mjs');
const _page2 = () => import('./chunks/conditions_Gfi_GzB7.mjs');
const _page3 = () => import('./chunks/demo-432_DRvKzmsU.mjs');
const _page4 = () => import('./chunks/index_DxtwB94b.mjs');
const _page5 = () => import('./chunks/privacy_B0Yn37Yx.mjs');
const _page6 = () => import('./chunks/index_B4eSJvsN.mjs');
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
    "middlewareSecret": "dd1c9bfe-644a-4b91-b257-2d745321cc67"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
