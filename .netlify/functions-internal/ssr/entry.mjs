import { renderers } from './renderers.mjs';
import { manifest } from './manifest_EHppzi46.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_fwX1U6uk.mjs');
const _page1 = () => import('./chunks/index_9zbnQ48Q.mjs');
const _page2 = () => import('./chunks/404_CCv5pKvF.mjs');
const _page3 = () => import('./chunks/index_FGd6G5FD.mjs');
const _page4 = () => import('./chunks/_slug__qwEB_10m.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about/index.astro", _page3],
    ["src/pages/technologies/[slug].astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ef10705d-2357-43ca-bda5-7a22e453f3c6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
