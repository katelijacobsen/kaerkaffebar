import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, e as decodeKey } from './chunks/astro/server_qgRo0D9e.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/katja/Desktop/MMDE/kaerkaffebar/","cacheDir":"file:///C:/Users/katja/Desktop/MMDE/kaerkaffebar/node_modules/.astro/","outDir":"file:///C:/Users/katja/Desktop/MMDE/kaerkaffebar/dist/","srcDir":"file:///C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/","publicDir":"file:///C:/Users/katja/Desktop/MMDE/kaerkaffebar/public/","buildClientDir":"file:///C:/Users/katja/Desktop/MMDE/kaerkaffebar/dist/","buildServerDir":"file:///C:/Users/katja/Desktop/MMDE/kaerkaffebar/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"afternoontea/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/afternoontea","isIndex":false,"type":"page","pattern":"^\\/afternoontea\\/?$","segments":[[{"content":"afternoontea","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/afternoontea.astro","pathname":"/afternoontea","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"api/clubevents","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/clubevents","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/clubevents\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"clubevents","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/clubevents.js","pathname":"/api/clubevents","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"menu/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/menu","isIndex":false,"type":"page","pattern":"^\\/menu\\/?$","segments":[[{"content":"menu","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/menu.astro","pathname":"/menu","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"runningclub/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/runningclub","isIndex":false,"type":"page","pattern":"^\\/runningclub\\/?$","segments":[[{"content":"runningclub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/runningclub.astro","pathname":"/runningclub","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/request","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/request\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"request","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/request.ts","pathname":"/api/request","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afternoontea.Dwtqlrvz.css"}],"routeData":{"route":"/arrangement","isIndex":false,"type":"page","pattern":"^\\/arrangement\\/?$","segments":[[{"content":"arrangement","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/arrangement.astro","pathname":"/arrangement","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/afternoontea.astro",{"propagation":"none","containsHead":true}],["C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/arrangement.astro",{"propagation":"none","containsHead":true}],["C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/menu.astro",{"propagation":"none","containsHead":true}],["C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/runningclub.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/clubevents@_@js":"pages/api/clubevents.astro.mjs","\u0000@astro-page:src/pages/api/request@_@ts":"pages/api/request.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/afternoontea@_@astro":"pages/afternoontea.astro.mjs","\u0000@astro-page:src/pages/runningclub@_@astro":"pages/runningclub.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/arrangement@_@astro":"pages/arrangement.astro.mjs","\u0000@astro-page:src/pages/menu@_@astro":"pages/menu.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/katja/Desktop/MMDE/kaerkaffebar/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BTRq9WbW.mjs","C:/Users/katja/Desktop/MMDE/kaerkaffebar/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","\u0000@astrojs-manifest":"manifest_CFldAjnV.mjs","C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.D3VxvdDE.js","C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CS3oSA6h.js","C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/components/gallery/GallerySliderSection.astro?astro&type=script&index=0&lang.ts":"_astro/GallerySliderSection.astro_astro_type_script_index_0_lang.CoaUPvlP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/components/gallery/GallerySliderSection.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"galleryScroll\"),t=document.getElementById(\"backBtnMobile\"),e=document.getElementById(\"nextBtnMobile\"),n=document.getElementById(\"backBtnDesktop\"),o=document.getElementById(\"nextBtnDesktop\"),i=330;function l(){c.scrollBy({left:i,behavior:\"smooth\"})}function s(){c.scrollBy({left:-330,behavior:\"smooth\"})}e&&e.addEventListener(\"click\",l);t&&t.addEventListener(\"click\",s);o&&o.addEventListener(\"click\",l);n&&n.addEventListener(\"click\",s);"]],"assets":["/_astro/afternoontea-page-image.DLBZPHuR.webp","/_astro/pear-and-blueberyy.BtHdxzeX.avif","/_astro/lemon-pieces.ri0sxT5Q.webp","/_astro/afternoontea-page-image-2.D9QG4jGE.webp","/_astro/macarons.B2mlqmvB.webp","/_astro/bestik.BEJp3iDo.avif","/_astro/smallCakes.B6e5IVwu.avif","/_astro/croissant.CLReU15t.avif","/_astro/teapot-with-three-cups.4TCixnYx.webp","/_astro/kaer-coffecup.Flef0Fw5.webp","/_astro/running-img.BymtY-fA.webp","/_astro/citroner.BXHuyldc.avif","/_astro/herosection-brunch-plate.CuWcaqpy.webp","/_astro/logo.Bhs3v3FC.svg","/_astro/mini-tarts-closeup.BxrF1Bep.webp","/_astro/croissant.BhbteGHK.avif","/_astro/cinnamon-rolls-closeup.kUeF2GJn.webp","/_astro/organic-logo.1xlrI822.svg","/_astro/coffepot.Cmn7j780.avif","/_astro/blueberry.CBosS3Pg.avif","/_astro/mug.CwsdVqnT.avif","/_astro/latte-art-closeup.45AqI5zi.webp","/_astro/lemons.C9zhPRfM.svg","/_astro/sourdough-buns-closeup.8deSiPt0.webp","/_astro/afternoon-tea-illustration.DVeDN1l_.png","/_astro/afternoon-tea.BGm72bWb.webp","/_astro/coffee-beans-backs.B6eFVpk9.webp","/_astro/ice-coffee-waffle.CO-5-eCF.webp","/_astro/waffles.bZQYNUyk.avif","/_astro/pancake.D9x_qjD6.avif","/_astro/broed.rsLvm5lW.avif","/_astro/bowl.DgHlP1BE.avif","/_astro/knife-fork.Wksf5KYD.avif","/_astro/salat.C3QS1hZ9.avif","/_astro/kolde-drikke.BS0lgDUE.avif","/_astro/grillet-sandwich.CQogT4D9.avif","/_astro/homemade.D6vAXvun.avif","/_astro/coffeebeans.Cf4VVBcv.avif","/_astro/coffee-beans.DOH8QKPF.webp","/_astro/milk.CBKyzj2m.svg","/_astro/gluten-icon.D1vPqrQu.svg","/_astro/fish-icon.Cz00QtJq.svg","/_astro/nuts-icon.Cqp2TOP_.svg","/_astro/vegetarian-icon.DDCmN9Qe.svg","/_astro/vegan-icon.Cfj2EACE.svg","/_astro/clock-icon.Bn1Yoiae.svg","/_astro/location-icon.D0JX2iGT.svg","/_astro/people-icon.P9aGItpn.svg","/_astro/arrow.B8oCts2W.svg","/_astro/plus-icon.BZH_WyBK.svg","/_astro/smørrebrød-closeup.CFKK-KLy.webp","/_astro/forward-arrow-icon.DYu7pkRB.svg","/_astro/making-ice-coffee.r0tg90a6.webp","/_astro/back-arrow-icon.Dyr0m9CY.svg","/_astro/cheesecake-closeup.BJld_OeE.webp","/_astro/outside-esprosso-sign.DJjSLXea.webp","/_astro/season-leaf.BVPKhUYu.svg","/_astro/kaer-logo.DkGGU_29.png","/_astro/smiley-icon.DLsfmxD5.svg","/_astro/facebook-icon.DhKMuGse.svg","/_astro/instagram-icon.zPelRdPH.svg","/_astro/afternoontea.Dwtqlrvz.css","/favicon.svg","/favicon/apple-touch-icon.png","/favicon/favicon-96x96.png","/favicon/favicon.ico","/favicon/favicon.svg","/favicon/site.webmanifest","/favicon/web-app-manifest-192x192.png","/favicon/web-app-manifest-512x512.png","/fonts/BabeSansRegular.woff2","/_astro/index.astro_astro_type_script_index_0_lang.D3VxvdDE.js","/_astro/index.D3jsOSc0.js","/_astro/Layout.astro_astro_type_script_index_0_lang.CS3oSA6h.js","/video/arrangement-og-event-video.mp4","/afternoontea/index.html","/api/clubevents","/menu/index.html","/runningclub/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"TlKIDYemmWXpO2mlH7I4EBGhkl3CiT+AcVSWr4ye5hg=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\katja\\Desktop\\MMDE\\kaerkaffebar\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
