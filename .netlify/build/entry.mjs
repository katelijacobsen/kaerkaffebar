import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CFldAjnV.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/afternoontea.astro.mjs');
const _page2 = () => import('./pages/api/clubevents.astro.mjs');
const _page3 = () => import('./pages/api/request.astro.mjs');
const _page4 = () => import('./pages/arrangement.astro.mjs');
const _page5 = () => import('./pages/menu.astro.mjs');
const _page6 = () => import('./pages/runningclub.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/afternoontea.astro", _page1],
    ["src/pages/api/clubevents.js", _page2],
    ["src/pages/api/request.ts", _page3],
    ["src/pages/arrangement.astro", _page4],
    ["src/pages/menu.astro", _page5],
    ["src/pages/runningclub.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f85ecf23-fd8a-45bf-8ba1-ddb42e8d1ec5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
