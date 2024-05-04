import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BIqHI-Es.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_u413sEcr.mjs');
const _page1 = () => import('./chunks/404_B7uOnXZ1.mjs');
const _page2 = () => import('./chunks/about_3v0hagxC.mjs');
const _page3 = () => import('./chunks/admin_CHPTK1C9.mjs');
const _page4 = () => import('./chunks/animation_BYj3uuMH.mjs');
const _page5 = () => import('./chunks/api-test_DccyUBwo.mjs');
const _page6 = () => import('./chunks/art_aVIYXSUu.mjs');
const _page7 = () => import('./chunks/careers_BNSd82Ug.mjs');
const _page8 = () => import('./chunks/contact_BR2xqBvr.mjs');
const _page9 = () => import('./chunks/mobile-app_BNZCfxAj.mjs');
const _page10 = () => import('./chunks/personal_C4BwanYO.mjs');
const _page11 = () => import('./chunks/saas_BjZbYAAv.mjs');
const _page12 = () => import('./chunks/startup_BR40_ooP.mjs');
const _page13 = () => import('./chunks/click-through_CbNmFnyc.mjs');
const _page14 = () => import('./chunks/lead-generation_gE3_L6BC.mjs');
const _page15 = () => import('./chunks/pre-launch_BiFo7gtK.mjs');
const _page16 = () => import('./chunks/product_0Zq26shC.mjs');
const _page17 = () => import('./chunks/sales_DxXC7nuQ.mjs');
const _page18 = () => import('./chunks/subscription_CoTr6KJM.mjs');
const _page19 = () => import('./chunks/modeling_BCrASFxi.mjs');
const _page20 = () => import('./chunks/pricing_CvtvSkfr.mjs');
const _page21 = () => import('./chunks/privacy_C7KKywgk.mjs');
const _page22 = () => import('./chunks/rigging_DCwARqcv.mjs');
const _page23 = () => import('./chunks/rss_B6xLgOpn.mjs');
const _page24 = () => import('./chunks/services_Ds8AyrBU.mjs');
const _page25 = () => import('./chunks/terms_QWbyu_DF.mjs');
const _page26 = () => import('./chunks/test_D14TCM3L.mjs');
const _page27 = () => import('./chunks/_.._DwHVylN7.mjs');
const _page28 = () => import('./chunks/_.._CyjLmR2R.mjs');
const _page29 = () => import('./chunks/_.._8OgHZWxV.mjs');
const _page30 = () => import('./chunks/index_GvCMtue2.mjs');
const _page31 = () => import('./chunks/index_N_cdp5vA.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin.astro", _page3],
    ["src/pages/animation.astro", _page4],
    ["src/pages/api/api-test.ts", _page5],
    ["src/pages/art.astro", _page6],
    ["src/pages/careers.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/homes/mobile-app.astro", _page9],
    ["src/pages/homes/personal.astro", _page10],
    ["src/pages/homes/saas.astro", _page11],
    ["src/pages/homes/startup.astro", _page12],
    ["src/pages/landing/click-through.astro", _page13],
    ["src/pages/landing/lead-generation.astro", _page14],
    ["src/pages/landing/pre-launch.astro", _page15],
    ["src/pages/landing/product.astro", _page16],
    ["src/pages/landing/sales.astro", _page17],
    ["src/pages/landing/subscription.astro", _page18],
    ["src/pages/modeling.astro", _page19],
    ["src/pages/pricing.astro", _page20],
    ["src/pages/privacy.md", _page21],
    ["src/pages/rigging.astro", _page22],
    ["src/pages/rss.xml.ts", _page23],
    ["src/pages/services.astro", _page24],
    ["src/pages/terms.md", _page25],
    ["src/pages/test.astro", _page26],
    ["src/pages/[...blog]/[category]/[...page].astro", _page27],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page28],
    ["src/pages/[...blog]/[...page].astro", _page29],
    ["src/pages/index.astro", _page30],
    ["src/pages/[...blog]/index.astro", _page31]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b28cbf9d-b5db-4dd9-be56-266caf595d1e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
