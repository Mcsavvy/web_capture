// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fh23Q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _client = require("./client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _bootstrapMinCss = require("bootstrap/dist/css/bootstrap.min.css");
var _bootstrapBundleMinJs = require("bootstrap/dist/js/bootstrap.bundle.min.js");
var _mic = require("./components/mic");
var _media = require("./components/media");
var _cam = require("./components/cam");
/**@type {ConstrainDOMString}*/ let currentCamID = null;
/**@type {HTMLVideoElement}*/ let video = null;
/**@type {HTMLCanvasElement}*/ let canvas = null;
let streaming = false; // Whether or not we're currently streaming
const width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream
function startup() {
    (0, _cam.loadVideoDevices)().then((videoDevices)=>{
        if (videoDevices.length === 0) {
            console.error("No video devices found");
            return;
        }
        (0, _cam.setCurrentCam)(videoDevices[0].deviceId || "default");
        (0, _jqueryDefault.default)((0, _media.WEBCAM_START)).toggleClass("disabled", false);
    });
    (0, _mic.loadAudioDevices)().then((microphoneDevices)=>{
        if (microphoneDevices.length === 0) {
            console.error("No microphone devices found");
            return;
        }
        (0, _mic.setCurrentMic)(microphoneDevices[0].deviceId || "default");
        (0, _jqueryDefault.default)((0, _media.MIC_START)).toggleClass("disabled", false);
    });
}
(0, _jqueryDefault.default)(()=>{
    video = (0, _jqueryDefault.default)((0, _media.WEBCAM_VIDEO)).get(0);
    canvas = (0, _jqueryDefault.default)((0, _media.WEBCAM_CANVAS)).get(0);
    (0, _jqueryDefault.default)((0, _media.CAM_LIST)).on("change", function() {
        streaming = false;
        (0, _cam.setCurrentCam)(this.value).then((0, _cam.startVideoStream));
    });
    (0, _jqueryDefault.default)((0, _media.WEBCAM_START)).on("click", function(ev) {
        (0, _cam.startVideoStream)();
        ev.preventDefault();
    });
    (0, _jqueryDefault.default)((0, _media.WEBCAM_STOP)).on("click", function(ev) {
        (0, _cam.stopVideoStream)();
        ev.preventDefault();
    });
    (0, _jqueryDefault.default)((0, _media.WEBCAM_RECORD)).on("click", function(ev) {
        (0, _cam.startRecording)();
        ev.preventDefault();
    });
    (0, _jqueryDefault.default)(video).on("canplay", (ev)=>{
        console.log("canplay");
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);
            if (isNaN(height)) height = width / (4 / 3);
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            streaming = true;
        }
    });
    (0, _jqueryDefault.default)((0, _media.MIC_LIST)).on("change", function() {
        (0, _mic.setCurrentMic)(this.value);
    });
    (0, _jqueryDefault.default)((0, _media.MIC_START)).on("click", function(ev) {
        (0, _mic.startMicrophoneStream)();
        ev.preventDefault();
    });
    (0, _jqueryDefault.default)((0, _media.MIC_STOP)).on("click", function(ev) {
        (0, _mic.stopMicrophoneStream)();
        ev.preventDefault();
    });
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD)).on("click", function(ev) {
        (0, _mic.startRecording)();
        ev.preventDefault();
    });
    (0, _jqueryDefault.default)((0, _media.MIC_STOP_RECORDING)).on("click", function(ev) {
        (0, _mic.stopRecording)();
        ev.preventDefault();
    });
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD_TRANSCRIPT)).on("click", function(ev) {
        (0, _mic.recordTranscript)();
        ev.preventDefault();
    });
    startup();
});

},{"bootstrap/dist/css/bootstrap.min.css":"i5LP7","bootstrap/dist/js/bootstrap.bundle.min.js":"gCRej","jquery":"hgMhh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./client":"2dgaA","./components/mic":"3VpSv","./components/media":"bzP8J","./components/cam":"5Cl9N"}],"i5LP7":[function() {},{}],"gCRej":[function(require,module,exports) {
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    const t = new Map, e = {
        set (e, i, n) {
            t.has(e) || t.set(e, new Map);
            const s = t.get(e);
            s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
        },
        get: (e, i)=>t.has(e) && t.get(e).get(i) || null,
        remove (e, i) {
            if (!t.has(e)) return;
            const n = t.get(e);
            n.delete(i), 0 === n.size && t.delete(e);
        }
    }, i = "transitionend", n = (t)=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e)=>`#${CSS.escape(e)}`)), t), s = (t)=>{
        t.dispatchEvent(new Event(i));
    }, o = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), r = (t)=>o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null, a = (t)=>{
        if (!o(t) || 0 === t.getClientRects().length) return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
        }
        return e;
    }, l = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), c = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    }, h = ()=>{}, d = (t)=>{
        t.offsetHeight;
    }, u = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = ()=>"rtl" === document.documentElement.dir, m = (t)=>{
        var e;
        e = ()=>{
            const e = u();
            if (e) {
                const i = t.NAME, n = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = n, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const t of f)t();
        }), f.push(e)) : e();
    }, g = (t, e = [], i = t)=>"function" == typeof t ? t(...e) : i, _ = (t, e, n = !0)=>{
        if (!n) return void g(t);
        const o = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(e) + 5;
        let r = !1;
        const a = ({ target: n })=>{
            n === e && (r = !0, e.removeEventListener(i, a), g(t));
        };
        e.addEventListener(i, a), setTimeout(()=>{
            r || s(e);
        }, o);
    }, b = (t, e, i, n)=>{
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
    let E = 1;
    const T = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, C = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++;
    }
    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e];
    }
    function k(t, e, i = null) {
        return Object.values(t).find((t)=>t.callable === e && t.delegationSelector === i);
    }
    function L(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            r = t(r);
        }
        const l = x(t), c = l[a] || (l[a] = {}), h = k(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")), u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r } = s; r && r !== this; r = r.parentNode)for (const a of o)if (a === r) return P(s, {
                    delegateTarget: r
                }), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
            };
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return P(n, {
                    delegateTarget: t
                }), i.oneOff && N.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s))o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
    }
    function I(t) {
        return t = t.replace(y, ""), T[t] || t;
    }
    const N = {
        on (t, e, i, n) {
            S(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            S(t, e, i, n, !0);
        },
        off (t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l))$(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)){
                    const s = i.replace(w, "");
                    a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                D(t, l, r, o, s ? i : null);
            }
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null, o = !0, r = !0, a = !1;
            e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = P(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        }
    };
    function P(t, e = {}) {
        for (const [i, n] of Object.entries(e))try {
            t[i] = n;
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: ()=>n
            });
        }
        return t;
    }
    function M(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function j(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const F = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${j(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${j(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t)=>t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i){
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n]);
            }
            return e;
        },
        getDataAttribute: (t, e)=>M(t.getAttribute(`data-bs-${j(e)}`))
    };
    class H {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? F.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [n, s] of Object.entries(e)){
                const e = t[n], r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`);
            }
            var i;
        }
    }
    class W extends H {
        constructor(t, i){
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i);
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.2";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const B = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? n(i.trim()) : null;
        }
        return e;
    }, z = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for(; n;)i.push(n), n = n.parentNode.closest(e);
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter((t)=>!l(t) && a(t));
        },
        getSelectorFromElement (t) {
            const e = B(t);
            return e && z.findOne(e) ? e : null;
        },
        getElementFromSelector (t) {
            const e = B(t);
            return e ? z.findOne(e) : null;
        },
        getMultipleElementsFromSelector (t) {
            const e = B(t);
            return e ? z.find(e) : [];
        }
    }, R = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
        N.on(document, i, `[data-bs-dismiss="${n}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
        });
    }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
    class Q extends W {
        static get NAME() {
            return "alert";
        }
        close() {
            if (N.trigger(this._element, V).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    N.on(document, "click.bs.button.data-api", X, (t)=>{
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle();
    }), m(Y);
    const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }, nt = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class st extends H {
        constructor(t, e){
            super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
            return it;
        }
        static get DefaultType() {
            return nt;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            N.off(this._element, U);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t)=>this._start(t)), N.on(this._element, et, (t)=>this._end(t)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t)=>this._start(t)), N.on(this._element, J, (t)=>this._move(t)), N.on(this._element, Z, (t)=>this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`, ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`, _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active", At = ".carousel-item", Et = wt + At, Tt = {
        ArrowLeft: ht,
        ArrowRight: ct
    }, Ct = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }, Ot = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class xt extends W {
        constructor(t, e){
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle();
        }
        static get Default() {
            return Ct;
        }
        static get DefaultType() {
            return Ot;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(at);
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
        }
        prev() {
            this._slide(lt);
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, ()=>this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void N.one(this._element, ut, ()=>this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? at : lt;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t;
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t)=>this._keydown(t)), "hover" === this._config.pause && (N.on(this._element, pt, ()=>this.pause()), N.on(this._element, mt, ()=>this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element))N.on(t, gt, (t)=>t.preventDefault());
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(ct)),
                rightCallback: ()=>this._slide(this._directionToOrder(ht)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval));
                }
            };
            this._swipeHelper = new st(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Tt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = z.findOne(wt, this._indicatorsElement);
            e.classList.remove(yt), e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === at, s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s), r = (e)=>N.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(dt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(()=>{
                s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut);
            }, i, this._isAnimated()), a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return z.findOne(Et, this._element);
        }
        _getItems() {
            return z.find(At, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t) {
            return p() ? t === ct ? lt : at : t === ct ? at : lt;
        }
        _orderToDirection(t) {
            return p() ? t === lt ? ct : ht : t === lt ? ht : ct;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(vt)) return;
        t.preventDefault();
        const i = xt.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }), N.on(window, _t, ()=>{
        const t = z.find('[data-bs-ride="carousel"]');
        for (const e of t)xt.getOrCreateInstance(e);
    }), m(xt);
    const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`, It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", Mt = "collapsing", jt = `:scope .${Pt} .${Pt}`, Ft = '[data-bs-toggle="collapse"]', Ht = {
        parent: null,
        toggle: !0
    }, Wt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class Bt extends W {
        constructor(t, e){
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = z.find(Ft);
            for (const t of i){
                const e = z.getSelectorFromElement(t), i = z.find(e).filter((t)=>t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return Ht;
        }
        static get DefaultType() {
            return Wt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t)=>t !== this._element).map((t)=>Bt.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            if (N.trigger(this._element, Lt).defaultPrevented) return;
            for (const e of t)e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St);
            }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (N.trigger(this._element, Dt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
            for (const t of this._triggerArray){
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([
                    t
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t);
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(Nt);
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Ft);
            for (const e of t){
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = z.find(jt, this._config.parent);
            return z.find(t, this._config.parent).filter((t)=>!e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t)i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                const i = Bt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    N.on(document, It, Ft, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle();
    }), m(Bt);
    var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [
        zt,
        Rt,
        qt,
        Vt
    ], Xt = "start", Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference", te = Qt.reduce(function(t, e) {
        return t.concat([
            e + "-" + Xt,
            e + "-" + Yt
        ]);
    }, []), ee = [].concat(Qt, [
        Kt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + Xt,
            e + "-" + Yt
        ]);
    }, []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain", le = "beforeWrite", ce = "write", he = "afterWrite", de = [
        ie,
        ne,
        se,
        oe,
        re,
        ae,
        le,
        ce,
        he
    ];
    function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function fe(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element;
    }
    function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
    }
    function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const _e = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function(t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t) {
            var e = t.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t) {
                    var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {});
                    me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function be(t) {
        return t.split("-")[0];
    }
    var ve = Math.max, ye = Math.min, we = Math.round;
    function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
            return t.brand + "/" + t.version;
        }).join(" ") : navigator.userAgent;
    }
    function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae());
    }
    function Te(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), s = 1, o = 1;
        e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
        var r = (pe(t) ? fe(t) : window).visualViewport, a = !Ee() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s, c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        };
    }
    function Ce(t) {
        var e = Te(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ge(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n);
        }
        return !1;
    }
    function xe(t) {
        return fe(t).getComputedStyle(t);
    }
    function ke(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(ue(t)) >= 0;
    }
    function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
    }
    function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null;
    }
    function $e(t) {
        for(var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;)i = De(i);
        return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
            var i = Se(t);
            for(ge(i) && (i = i.host); me(i) && [
                "html",
                "body"
            ].indexOf(ue(i)) < 0;){
                var n = xe(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        }(t) || e;
    }
    function Ie(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    function Ne(t, e, i) {
        return ve(t, ye(e, i));
    }
    function Pe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function Me(t, e) {
        return e.reduce(function(e, i) {
            return e[i] = t, e;
        }, {});
    }
    const je = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = be(i.placement), l = Ie(a), c = [
                Vt,
                qt
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : Me(t, Qt));
                }(s.padding, i), d = Ce(o), u = "y" === l ? zt : Vt, f = "y" === l ? Rt : qt, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = $e(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = Ne(v, w, y), E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function Fe(t) {
        return t.split("-")[1];
    }
    var He = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function We(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({
            x: f,
            y: m
        }) : {
            x: f,
            y: m
        };
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = Vt, y = zt, w = window;
        if (c) {
            var A = $e(i), E = "clientHeight", T = "clientWidth";
            A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
        }
        var C, O = Object.assign({
            position: a
        }, c && He), x = !0 === h ? function(t, e) {
            var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
            return {
                x: we(i * s) / s || 0,
                y: we(n * s) / s || 0
            };
        }({
            x: f,
            y: m
        }, fe(i)) : {
            x: f,
            y: m
        };
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
    }
    const Be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: be(e.placement),
                variation: Fe(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {}
    };
    var ze = {
        passive: !0
    };
    const Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = fe(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, ze);
            }), a && l.addEventListener("resize", i.update, ze), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, ze);
                }), a && l.removeEventListener("resize", i.update, ze);
            };
        },
        data: {}
    };
    var qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Ve(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return qe[t];
        });
    }
    var Ke = {
        start: "end",
        end: "start"
    };
    function Qe(t) {
        return t.replace(/start|end/g, function(t) {
            return Ke[t];
        });
    }
    function Xe(t) {
        var e = fe(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft;
    }
    function Ue(t) {
        var e = xe(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ge(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t));
    }
    function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = fe(n), r = s ? [
            o
        ].concat(o.visualViewport || [], Ue(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)));
    }
    function Ze(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function ti(t, e, i) {
        return e === Gt ? Ze(function(t, e) {
            var i = fe(t), n = Le(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Ee();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
            }
            return {
                width: o,
                height: r,
                x: a + Ye(t),
                y: l
            };
        }(t, i)) : pe(e) ? function(t, e) {
            var i = Te(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
        }(e, i) : Ze(function(t) {
            var e, i = Le(t), n = Xe(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ye(t), l = -n.scrollTop;
            return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(Le(t)));
    }
    function ei(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? be(s) : null, r = s ? Fe(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case zt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case Rt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case qt:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case Vt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case Xt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Yt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ii(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy, r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Ut : a, c = i.rootBoundary, h = void 0 === c ? Gt : c, d = i.elementContext, u = void 0 === d ? Jt : d, f = i.altBoundary, p = void 0 !== f && f, m = i.padding, g = void 0 === m ? 0 : m, _ = Pe("number" != typeof g ? g : Me(g, Qt)), b = u === Jt ? Zt : Jt, v = t.rects.popper, y = t.elements[p ? b : u], w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = Je(Se(t)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
                return pe(i) ? e.filter(function(t) {
                    return pe(t) && Oe(t, i) && "body" !== ue(t);
                }) : [];
            }(t) : [].concat(e), o = [].concat(s, [
                i
            ]), r = o[0], a = o.reduce(function(e, i) {
                var s = ti(t, i, n);
                return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e;
            }, ti(t, r, n));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r), A = Te(t.elements.reference), E = ei({
            reference: A,
            element: v,
            strategy: "absolute",
            placement: s
        }), T = Ze(Object.assign({}, v, E)), C = u === Jt ? T : A, O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }, x = t.modifiersData.offset;
        if (u === Jt && x) {
            var k = x[s];
            Object.keys(O).forEach(function(t) {
                var e = [
                    qt,
                    Rt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    zt,
                    Rt
                ].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function ni(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? ee : l, h = Fe(n), d = h ? a ? te : te.filter(function(t) {
            return Fe(t) === h;
        }) : Qt, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = ii(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[be(i)], e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const si = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for(var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
                    if (be(t) === Kt) return [];
                    var e = Ve(t);
                    return [
                        Qe(t),
                        e,
                        Qe(e)
                    ];
                }(g) : [
                    Ve(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(be(i) === Kt ? ni(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++){
                    var O = v[C], x = be(O), k = Fe(O) === Xt, L = [
                        zt,
                        Rt
                    ].indexOf(x) >= 0, S = L ? "width" : "height", D = ii(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), $ = L ? k ? qt : Vt : k ? Rt : zt;
                    y[S] > w[S] && ($ = Ve($));
                    var I = Ve($), N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function(t) {
                        return t;
                    })) {
                        T = O, E = !1;
                        break;
                    }
                    A.set(O, N);
                }
                if (E) for(var P = function(t) {
                    var e = v.find(function(e) {
                        var i = A.get(e);
                        if (i) return i.slice(0, t).every(function(t) {
                            return t;
                        });
                    });
                    if (e) return T = e, "break";
                }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function oi(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function ri(t) {
        return [
            zt,
            qt,
            Rt,
            Vt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const ai = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = ii(e, {
                elementContext: "reference"
            }), a = ii(e, {
                altBoundary: !0
            }), l = oi(r, n), c = oi(a, s, o), h = ri(l), d = ri(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, li = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [
                0,
                0
            ] : s, r = ee.reduce(function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = be(t), s = [
                        Vt,
                        zt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        Vt,
                        qt
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                }(i, e.rects, o), t;
            }, {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
        }
    }, ci = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = ei({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            });
        },
        data: {}
    }, hi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = ii(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = be(e.placement), b = Fe(e.placement), v = !b, y = Ie(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets, E = e.rects.reference, T = e.rects.popper, C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m, O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, S = "y" === y ? zt : Vt, D = "y" === y ? Rt : qt, $ = "y" === y ? "height" : "width", I = A[y], N = I + g[S], P = I - g[D], M = f ? -T[$] / 2 : 0, j = b === Xt ? E[$] : T[$], F = b === Xt ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? Ce(H) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = B[S], R = B[D], q = Ne(0, E[$], W[$]), V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis, K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis, Q = e.elements.arrow && $e(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y, G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
                    A[y] = G, k[y] = G - I;
                }
                if (a) {
                    var J, Z = "x" === y ? zt : Vt, tt = "x" === y ? Rt : qt, et = A[w], it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt], ot = -1 !== [
                        zt,
                        Vt
                    ].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = Ne(t, e, i);
                        return n > i ? i : n;
                    }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
                    A[w] = ct, k[w] = ct - et;
                }
                e.modifiersData[n] = k;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function di(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = me(e), r = me(e) && function(t) {
            var e = t.getBoundingClientRect(), i = we(e.width) / t.offsetWidth || 1, n = we(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n;
        }(e), a = Le(e), l = Te(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        };
    }
    function ui(t) {
        var e = new Map, i = new Set, n = [];
        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n.push(t);
        }
        return t.forEach(function(t) {
            e.set(t.name, t);
        }), t.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n;
    }
    var fi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function pi() {
        for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function mi(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? fi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, fi, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                        reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                        popper: Je(e)
                    };
                    var r, c, u = function(t) {
                        var e = ui(t);
                        return de.reduce(function(t, i) {
                            return t.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t;
                    }, {}), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {});
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (pi(e, i)) {
                            a.rects = {
                                reference: di(e, $e(i), "fixed" === a.options.strategy),
                                popper: Ce(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r || (r = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r = void 0, t(s());
                        });
                    })), r;
                }),
                destroy: function() {
                    d(), c = !0;
                }
            };
            if (!pi(t, e)) return h;
            function d() {
                l.forEach(function(t) {
                    return t();
                }), l = [];
            }
            return h.setOptions(i).then(function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }), h;
        };
    }
    var gi = mi(), _i = mi({
        defaultModifiers: [
            Re,
            ci,
            Be,
            _e
        ]
    }), bi = mi({
        defaultModifiers: [
            Re,
            ci,
            Be,
            _e,
            li,
            si,
            hi,
            je,
            ai
        ]
    });
    const vi = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: ae,
        afterRead: se,
        afterWrite: he,
        applyStyles: _e,
        arrow: je,
        auto: Kt,
        basePlacements: Qt,
        beforeMain: oe,
        beforeRead: ie,
        beforeWrite: le,
        bottom: Rt,
        clippingParents: Ut,
        computeStyles: Be,
        createPopper: bi,
        createPopperBase: gi,
        createPopperLite: _i,
        detectOverflow: ii,
        end: Yt,
        eventListeners: Re,
        flip: si,
        hide: ai,
        left: Vt,
        main: re,
        modifierPhases: de,
        offset: li,
        placements: ee,
        popper: Jt,
        popperGenerator: mi,
        popperOffsets: ci,
        preventOverflow: hi,
        read: ne,
        reference: Zt,
        right: qt,
        start: Xt,
        top: zt,
        variationPlacements: te,
        viewport: Gt,
        write: ce
    }, Symbol.toStringTag, {
        value: "Module"
    })), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp", Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show", Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu", Mi = p() ? "top-end" : "top-start", ji = p() ? "top-start" : "top-end", Fi = p() ? "bottom-end" : "bottom-start", Hi = p() ? "bottom-start" : "bottom-end", Wi = p() ? "left-start" : "right-start", Bi = p() ? "right-start" : "left-start", zi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    }, Ri = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class qi extends W {
        constructor(t, e){
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return zi;
        }
        static get DefaultType() {
            return Ri;
        }
        static get NAME() {
            return yi;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children))N.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!N.trigger(this._element, Ci, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = bi(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains($i);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Wi;
            if (t.classList.contains("dropstart")) return Bi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ...g(this._config.popperConfig, [
                    t
                ])
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t)=>a(t));
            i.length && b(i, e, t === Ti, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = z.find(Ni);
            for (const i of e){
                const e = qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [
                Ei,
                Ti
            ].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode), o = qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function(t) {
        t.preventDefault(), qi.getOrCreateInstance(this).toggle();
    }), m(qi);
    const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`, Xi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }, Yi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Ui extends H {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        static get Default() {
            return Xi;
        }
        static get DefaultType() {
            return Yi;
        }
        static get NAME() {
            return Vi;
        }
        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(()=>{
                g(t);
            });
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(()=>{
                this.dispose(), g(t);
            })) : g(t);
        }
        dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), N.on(t, Qi, ()=>{
                g(this._config.clickCallback);
            }), this._isAppended = !0;
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn = "backward", en = {
        autofocus: !0,
        trapElement: null
    }, nn = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class sn extends H {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
            return en;
        }
        static get DefaultType() {
            return nn;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t)=>this._handleFocusin(t)), N.on(document, Zi, (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, N.off(document, Gi));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
        }
    }
    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn = ".sticky-top", an = "padding-right", ln = "margin-right";
    class cn {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e)=>e + t), this._setElementAttributes(on, an, (e)=>e + t), this._setElementAttributes(rn, ln, (e)=>e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else for (const i of z.find(t, this._element))e(i);
        }
    }
    const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static", Tn = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }, Cn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class On extends W {
        constructor(t, e){
            super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn, this._addEventListeners();
        }
        static get Default() {
            return Tn;
        }
        static get DefaultType() {
            return Cn;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(()=>this._showElement(t)));
        }
        hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Ui({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {
                    relatedTarget: t
                });
            }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            N.on(this._element, vn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), N.on(window, gn, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }), N.on(this._element, bn, (t)=>{
                N.one(this._element, _n, (e)=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
            });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(()=>{
                this._element.classList.remove(En), this._queueCallback(()=>{
                    this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    N.on(document, yn, '[data-bs-toggle="modal"]', function(t) {
        const e = z.getElementFromSelector(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), N.one(e, pn, (t)=>{
            t.defaultPrevented || N.one(e, fn, ()=>{
                a(this) && this.focus();
            });
        });
        const i = z.findOne(".modal.show");
        i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
    }), R(On), m(On);
    const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, Mn = `hide${xn}`, jn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`, zn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Rn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class qn extends W {
        constructor(t, e){
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
            return zn;
        }
        static get DefaultType() {
            return Rn;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || N.trigger(this._element, Nn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new cn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new cn).reset(), N.trigger(this._element, Fn);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ui({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn);
                } : null
            });
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            N.on(this._element, Bn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t) {
        const e = z.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this)) return;
        N.one(e, Fn, ()=>{
            a(this) && this.focus();
        });
        const i = z.findOne(In);
        i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
    }), N.on(window, Ln, ()=>{
        for (const t of z.find(In))qn.getOrCreateInstance(t).show();
    }), N.on(window, Hn, ()=>{
        for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide();
    }), R(qn), m(qn);
    const Vn = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            /^aria-[\w-]*$/i
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, Kn = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t)=>t instanceof RegExp).some((t)=>t.test(i));
    }, Yn = {
        allowList: Vn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, Un = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, Gn = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Jn extends H {
        constructor(t){
            super(), this._config = this._getConfig(t);
        }
        static get Default() {
            return Yn;
        }
        static get DefaultType() {
            return Un;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content).map((t)=>this._resolvePossibleFunction(t)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))super._typeCheckConfig({
                selector: e,
                entry: i
            }, Gn);
        }
        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s){
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue;
                    }
                    const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)Xn(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
            }(t, this._config.allowList, this._config.sanitizeFn) : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [
                this
            ]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Zn = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), ts = "fade", es = "show", is = ".modal", ns = "hide.bs.modal", ss = "hover", os = "focus", rs = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
    }, as = {
        allowList: Vn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: !1,
        offset: [
            0,
            6
        ],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, ls = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class cs extends W {
        constructor(t, e){
            if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
            return as;
        }
        static get DefaultType() {
            return ls;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = N.trigger(this._element, this.constructor.eventName("show")), e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: n } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.on(t, "mouseover", h);
            this._queueCallback(()=>{
                N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
            }, this.tip, this._isAnimated());
        }
        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.off(t, "mouseover", h);
                this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
                }, this.tip, this._isAnimated());
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t)=>{
                do t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(es);
        }
        _createPopper(t) {
            const e = g(this._config.placement, [
                this,
                t,
                this._element
            ]), i = rs[e.toUpperCase()];
            return bi(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [
                this._element
            ]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t)=>{
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        }
                    }
                ]
            };
            return {
                ...e,
                ...g(this._config.popperConfig, [
                    e
                ])
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t)=>{
                this._initializeOnDelegatedTarget(t).toggle();
            });
            else if ("manual" !== e) {
                const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter();
                }), N.on(this._element, i, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave();
                });
            }
            this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, N.on(this._element.closest(is), ns, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(()=>{
                this._isHovered && this.show();
            }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(()=>{
                this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e))Zn.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config))this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(cs);
    const hs = {
        ...cs.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, ds = {
        ...cs.DefaultType,
        content: "(null|string|element|function)"
    };
    class us extends cs {
        static get Default() {
            return hs;
        }
        static get DefaultType() {
            return ds;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(us);
    const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active", bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`, ws = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [
            .1,
            .5,
            1
        ]
    }, As = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class Es extends W {
        constructor(t, e){
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh();
        }
        static get Default() {
            return ws;
        }
        static get DefaultType() {
            return As;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t)=>Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t)=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n;
                }
            }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t)=>this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t)=>this._targetLinks.get(`#${t.target.id}`), i = (t)=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
            }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t){
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = z.find(bs, this._config.target);
            for (const e of t){
                if (!e.hash || l(e)) continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
            else for (const e of z.parents(t, ".nav, .list-group"))for (const t of z.prev(e, ys))t.classList.add(_s);
        }
        _clearActiveClass(t) {
            t.classList.remove(_s);
            const e = z.find(`${bs}.${_s}`, t);
            for (const t of e)t.classList.remove(_s);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(window, gs, ()=>{
        for (const t of z.find('[data-bs-spy="scroll"]'))Es.getOrCreateInstance(t);
    }), m(Es);
    const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown", Ms = "Home", js = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ".dropdown-toggle", zs = `:not(${Bs})`, Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`, Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W {
        constructor(t){
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t)=>this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? N.trigger(e, Cs, {
                relatedTarget: t
            }) : null;
            N.trigger(t, xs, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {
                    relatedTarget: e
                })) : t.classList.add(Ws);
            }, t, t.classList.contains(Hs)));
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {
                    relatedTarget: e
                })) : t.classList.remove(Ws);
            }, t, t.classList.contains(Hs)));
        }
        _keydown(t) {
            if (![
                $s,
                Is,
                Ns,
                Ps,
                Ms,
                js
            ].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t)=>!l(t));
            let i;
            if ([
                Ms,
                js
            ].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];
            else {
                const n = [
                    Is,
                    Ps
                ].includes(t.key);
                i = b(e, t.target, n, !0);
            }
            i && (i.focus({
                preventScroll: !0
            }), Ks.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return z.find(qs, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t)=>this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n)=>{
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Fs);
        }
        _getInnerElement(t) {
            return t.matches(qs) ? t : z.findOne(qs, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ks.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(document, Ls, Rs, function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
    }), N.on(window, Ds, ()=>{
        for (const t of z.find(Vs))Ks.getOrCreateInstance(t);
    }), m(Ks);
    const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Ys = `mouseout${Qs}`, Us = `focusin${Qs}`, Gs = `focusout${Qs}`, Js = `hide${Qs}`, Zs = `hidden${Qs}`, to = `show${Qs}`, eo = `shown${Qs}`, io = "hide", no = "show", so = "showing", oo = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, ro = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class ao extends W {
        constructor(t, e){
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
            return ro;
        }
        static get DefaultType() {
            return oo;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(()=>{
                this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(()=>{
                this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(no);
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            N.on(this._element, Xs, (t)=>this._onInteraction(t, !0)), N.on(this._element, Ys, (t)=>this._onInteraction(t, !1)), N.on(this._element, Us, (t)=>this._onInteraction(t, !0)), N.on(this._element, Gs, (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return R(ao), m(ao), {
        Alert: Q,
        Button: Y,
        Carousel: xt,
        Collapse: Bt,
        Dropdown: qi,
        Modal: On,
        Offcanvas: qn,
        Popover: us,
        ScrollSpy: Es,
        Tab: Ks,
        Toast: ao,
        Tooltip: cs
    };
});

},{}],"hgMhh":[function(require,module,exports) {
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function(global, factory) {
    "use strict";
    if (typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket trac-14549 for more info.
    module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window1, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var document = window1.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.7.1", rhtmlSuffix = /HTML$/i, // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {};
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {};
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node = elem[i++])// Do not traverse comment nodes
            ret += jQuery.text(node);
            if (nodeType === 1 || nodeType === 11) return elem.textContent;
            if (nodeType === 9) return elem.documentElement.textContent;
            if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                    arr
                ] : arr);
                else push.call(ret, arr);
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            // Assume HTML when documentElement doesn't yet exist, such as inside
            // document fragments.
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var sort = arr.sort;
    var splice = arr.splice;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
    // Note: an element does not contain itself
    jQuery.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    };
    // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\x00") return "\uFFFD";
            // Control characters and (dependent upon position) numbers get escaped as code points
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
    };
    var preferredDoc = document, pushNative = push;
    (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push = pushNative, // Local document vars
        document, documentElement, documentIsHTML, rbuggyQSA, matches, // Instance-specific data
        expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+", // Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 0x10000;
            if (nonHex) // Strip the backslash prefix from a non-hex escape sequence
            return nonHex;
            // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            return high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        }, // Used for iframes; see `setDocument`.
        // Support: IE 9 - 11+, Edge 12 - 18+
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE/Edge.
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Support: IE <=9 only
        // Accessing document.activeElement can throw unexpectedly
        // https://bugs.jquery.com/ticket/13393
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {}
        }
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android <=4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: function(target, els) {
                    pushNative.apply(target, slice.call(els));
                },
                call: function(target) {
                    pushNative.apply(target, slice.call(arguments, 1));
                }
            };
        }
        function find(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE 9 only
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        push.call(results, elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE 9 only
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                                push.call(results, elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when
                            // strict-comparing two documents; shallow comparisons work.
                            // eslint-disable-next-line eqeqeq
                            if (newContext != context || !support.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = jQuery.escapeSelector(nid);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i = groups.length;
                            while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties
                // (see https://github.com/jquery/sizzle/issues/157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                return nodeName(elem, "input") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11+
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
            // Update global variables
            document = doc;
            documentElement = document.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document);
            // Support: iOS 7 only, IE 9 - 11+
            // Older browsers didn't support unprefixed `matches`.
            matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors
            // (see trac-13936).
            // Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
            // all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
            if (documentElement.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) // Support: IE 9 - 11+, Edge 12 - 18+
            subWindow.addEventListener("unload", unloadHandler);
            // Support: IE <10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
                documentElement.appendChild(el).id = jQuery.expando;
                return !document.getElementsByName || !document.getElementsByName(jQuery.expando).length;
            });
            // Support: IE 9 only
            // Check to see if it's possible to do matchesSelector
            // on a disconnected node.
            support.disconnectedMatch = assert(function(el) {
                return matches.call(el, "*");
            });
            // Support: IE 9 - 11+, Edge 12 - 18+
            // IE/Edge don't support the :scope pseudo-class.
            support.scope = assert(function() {
                return document.querySelectorAll(":scope");
            });
            // Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
            // Make sure the `:has()` argument is parsed unforgivingly.
            // We include `*` in the test to detect buggy implementations that are
            // _selectively_ forgiving (specifically when the list includes at least
            // one valid selector).
            // Note that we treat complete lack of support for `:has()` as if it were
            // spec-compliant support, which is fine because use of `:has()` in such
            // environments will fail in the qSA path and fall back to jQuery traversal
            // anyway.
            support.cssHas = assert(function() {
                try {
                    document.querySelector(":has(*,:jqfake)");
                    return false;
                } catch (e) {
                    return true;
                }
            });
            // ID filter and find
            if (support.getById) {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node, i, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i = 0;
                            while(elem = elems[i++]){
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find.TAG = function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else return context.querySelectorAll(tag);
            };
            // Class
            Expr.find.CLASS = function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            rbuggyQSA = [];
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function(el) {
                var input;
                documentElement.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";
                // Support: iOS <=7 - 8 only
                // Boolean attributes and "value" are not treated correctly in some XML documents
                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                // Support: iOS <=7 - 8 only
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                // Support: iOS 8 only
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                input = document.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                // Support: IE 9 - 11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                documentElement.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                // Support: IE 11+, Edge 15 - 18+
                // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                // Adding a temporary attribute to the document before the selection works
                // around the issue.
                // Interestingly, IE 10 & older don't seem to have the issue.
                input = document.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
            });
            if (!support.cssHas) // Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
            // Our regular `try-catch` mechanism fails to detect natively-unsupported
            // pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
            // in browsers that parse the `:has()` argument as a forgiving selector list.
            // https://drafts.csswg.org/selectors/#relational now requires the argument
            // to be parsed unforgivingly, but browsers have not yet fully adjusted.
            rbuggyQSA.push(":has");
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a === document || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b === document || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            };
            return document;
        }
        find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return find(expr, document, null, [
                elem
            ]).length > 0;
        };
        find.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document) setDocument(context);
            return jQuery.contains(context, elem);
        };
        find.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (see trac-13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            if (val !== undefined) return val;
            return elem.getAttribute(name);
        };
        find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            //
            // Support: Android <=4.0+
            // Testing for detecting duplicates is unpredictable so instead assume we can't
            // depend on duplicate detection in all browsers without a stable sort.
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
                while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                while(j--)splice.call(results, duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) find.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) find.error(match[0]);
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr.CHILD.test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                    (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return nodeName(elem, expectedNodeName);
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = find.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        if (operator === "=") return result === check;
                        if (operator === "!=") return result !== check;
                        if (operator === "^=") return check && result.indexOf(check) === 0;
                        if (operator === "*=") return check && result.indexOf(check) > -1;
                        if (operator === "$=") return check && result.slice(-check.length) === check;
                        if (operator === "~=") return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                        if (operator === "|=") return result === check || result.slice(0, check.length + 1) === check + "-";
                        return false;
                    };
                },
                CHILD: function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node = elem;
                                    while(node = node[dir]){
                                        if (ofType ? nodeName(node, name) : node.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while(node = ++nodeIndex && node && node[dir] || // Fallback to seeking `elem` from the start
                                (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                    outerCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    outerCache = elem[expando] || (elem[expando] = {});
                                    cache = outerCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node[expando] || (node[expando] = {});
                                            outerCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // https://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as jQuery does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while(i--){
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                not: markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element
                        // (see https://github.com/jquery/sizzle/issues/299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return find(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // https://www.w3.org/TR/selectors/#lang-pseudo
                lang: markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) find.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                target: function(elem) {
                    var hash = window1.location && window1.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === documentElement;
                },
                focus: function(elem) {
                    return elem === safeActiveElement() && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                enabled: createDisabledPseudo(false),
                disabled: createDisabledPseudo(true),
                checked: function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
                },
                selected: function(elem) {
                    // Support: IE <=11+
                    // Accessing the selectedIndex property
                    // forces the browser to treat the default option as
                    // selected when in an optgroup.
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                empty: function(elem) {
                    // https://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                // Element/input types
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
                },
                text: function(elem) {
                    var attr;
                    return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                    // New HTML5 attribute values (e.g., "search") appear
                    // with elem.type === "text"
                    ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                first: createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                last: createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i;
                    if (argument < 0) i = argument + length;
                    else if (argument > length) i = length;
                    else i = argument;
                    for(; --i >= 0;)matchIndexes.push(i);
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for(; ++i < length;)matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        // Add button/input type pseudos
        for(i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i] = createInputPseudo(i);
        for(i in {
            submit: true,
            reset: true
        })Expr.pseudos[i] = createButtonPseudo(i);
        // Easy API for creating new setFilters
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rleadingCombinator.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrimCSS, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            if (parseOnly) return soFar.length;
            return soFar ? find.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for(; i < len; i++)selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        if (skip && nodeName(elem, skip)) elem = elem[dir] || elem;
                        else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            outerCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while(i--){
                    if (!matchers[i](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for(; i < len; i++)find(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for(; i < len; i++){
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
                if (matcher) {
                    // If we have a postFinder, or filtered seed, or non-seed postFilter
                    // or preexisting results,
                    matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                    [] : // ...otherwise use results directly
                    results;
                    // Find primary matches
                    matcher(matcherIn, matcherOut, context, xml);
                } else matcherOut = matcherIn;
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element
                    // (see https://github.com/jquery/sizzle/issues/299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find.TAG("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: iOS <=7 - 9 only
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
                // elements by id. (see trac-14142)
                for(; i !== len && (elem = elems[i]) != null; i++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                            push.call(results, elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) jQuery.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i = match.length;
                while(i--){
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        }
        /**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ function select(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                while(i--){
                    token = tokens[i];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        }
        // One-time assignments
        // Support: Android <=4.0 - 4.1+
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Initialize against the default document
        setDocument();
        // Support: Android <=4.0 - 4.1+
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        jQuery.find = find;
        // Deprecated
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = jQuery.uniqueSort;
        // These have always been private, but they used to be documented as part of
        // Sizzle so let's maintain them for now for backwards compatibility purposes.
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery.escapeSelector;
        find.getText = jQuery.text;
        find.isXML = jQuery.isXMLDoc;
        find.selectors = jQuery.expr;
        find.support = jQuery.support;
        find.uniqueSort = jQuery.uniqueSort;
    /* eslint-enable */ })();
    var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [
            elem
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i = 0; i < len; i++){
                    if (jQuery.contains(self[i], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
    // Strict HTML recognition (trac-11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for(; i < l; i++){
                    if (jQuery.contains(this, targets[i])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i < l; i++){
                for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to jQuery#find
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while((cur = cur[dir]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while(++firingIndex < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && // Support: Promises/A+ section 2.3.4
                                // https://promisesaplus.com/#point-64
                                // Only check objects and functions for thenability
                                (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.error);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the error, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getErrorHook) process.error = jQuery.Deferred.getErrorHook();
                                else if (jQuery.Deferred.getStackHook) process.error = jQuery.Deferred.getStackHook();
                                window1.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) func.call(deferred, deferred);
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i = remaining, // subordinate fulfillment data
            resolveContexts = Array(i), resolveValues = slice.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i) {
                return function(value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    // If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
    // captured before the async barrier to get the original error cause
    // which may otherwise be hidden.
    jQuery.Deferred.exceptionHook = function(error, asyncError) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
    };
    jQuery.readyException = function(error) {
        window1.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window1.removeEventListener("load", completed);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window1.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);
        // A fallback to window.onload, that will always work
        window1.addEventListener("load", completed);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
        // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (trac-9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {};
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see trac-8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while(i--)delete cache[key[i]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {}
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while(i--)// Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value) {
                var data;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) return data;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) return data;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i--){
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (trac-11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (trac-14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (trac-13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for(; i < l; i++){
            elem = elems[i];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while(elem = nodes[i++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (trac-13208)
                // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for(i = 0; i < delegateCount; i++){
                        handleObj = handlers[i];
                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", true);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, isSetup) {
        // Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
        if (!isSetup) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    if (!saved) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        this[type]();
                        result = dataPriv.get(this, type);
                        dataPriv.set(this, type, false);
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return result;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering
                    // the native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved) {
                    // ...and capture the result
                    dataPriv.set(this, type, jQuery.event.trigger(saved[0], saved.slice(1), this));
                    // Abort handling of the native event by all jQuery handlers while allowing
                    // native handlers on the same element to run. On target, this is achieved
                    // by stopping immediate propagation just on the jQuery event. However,
                    // the native event is re-wrapped by a jQuery one on each level of the
                    // propagation so the only way to stop it for jQuery is to stop it for
                    // everyone via native `stopPropagation()`. This is not a problem for
                    // focus/blur which don't bubble, but it does also stop click on checkboxes
                    // and radios. We accept this limitation.
                    event.stopPropagation();
                    event.isImmediatePropagationStopped = returnTrue;
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (trac-504, trac-13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
            if (document.documentMode) {
                // Support: IE 11+
                // Attach a single focusin/focusout handler on the document while someone wants
                // focus/blur. This is because the former are synchronous in IE while the latter
                // are async. In other browsers, all those handlers are invoked synchronously.
                // `handle` from private data would already wrap the event, but we need
                // to change the `type` here.
                var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
                event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
                event.isSimulated = true;
                // First, handle focusin/focusout
                handle(nativeEvent);
                // ...then, handle focus/blur
                //
                // focus/blur don't bubble while focusin/focusout do; simulate the former by only
                // invoking the handler at the lower level.
                if (event.target === event.currentTarget) // The setup part calls `leverageNative`, which, in turn, calls
                // `jQuery.event.add`, so event handle will already have been set
                // by this point.
                handle(event);
            } else // For non-IE browsers, attach a single capturing handler on the document
            // while someone wants focusin/focusout.
            jQuery.event.simulate(delegateType, nativeEvent.target, jQuery.event.fix(nativeEvent));
        }
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                var attaches;
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, true);
                if (document.documentMode) {
                    // Support: IE 9 - 11+
                    // We use the same native handler for focusin & focus (and focusout & blur)
                    // so we need to coordinate setup & teardown parts between those events.
                    // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                    attaches = dataPriv.get(this, delegateType);
                    if (!attaches) this.addEventListener(delegateType, focusMappedHandler);
                    dataPriv.set(this, delegateType, (attaches || 0) + 1);
                } else // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            teardown: function() {
                var attaches;
                if (document.documentMode) {
                    attaches = dataPriv.get(this, delegateType) - 1;
                    if (!attaches) {
                        this.removeEventListener(delegateType, focusMappedHandler);
                        dataPriv.remove(this, delegateType);
                    } else dataPriv.set(this, delegateType, attaches);
                } else // Return false to indicate standard teardown should be applied
                return false;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
                return dataPriv.get(event.target, type);
            },
            delegateType: delegateType
        };
        // Support: Firefox <=44
        // Firefox doesn't have focus(in | out) events
        // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
        //
        // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
        // focus(in | out) events fire after focus & blur events,
        // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
        // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
        //
        // Support: IE 9 - 11+
        // To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
        // attach a single handler for both events in IE.
        jQuery.event.special[delegateType] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
                // Support: IE 9 - 11+
                // We use the same native handler for focusin & focus (and focusout & blur)
                // so we need to coordinate setup & teardown parts between those events.
                // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                if (!attaches) {
                    if (document.documentMode) this.addEventListener(delegateType, focusMappedHandler);
                    else doc.addEventListener(type, focusMappedHandler, true);
                }
                dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
                if (!attaches) {
                    if (document.documentMode) this.removeEventListener(delegateType, focusMappedHandler);
                    else doc.removeEventListener(type, focusMappedHandler, true);
                    dataPriv.remove(dataHolder, delegateType);
                } else dataPriv.set(dataHolder, delegateType, attaches);
            }
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (trac-8070).
                for(; i < l; i++){
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Re-enable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i = 0; i < hasScripts; i++){
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            } else // Unwrap a CDATA section containing script contents. This shouldn't be
                            // needed as in XML documents they're already not visible when
                            // inspecting element contents and in HTML documents they have no
                            // meaning but we're preserving that logic for backwards compatibility.
                            // This will be removed completely in 4.0. See gh-4904.
                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for(; (node = nodes[i]) != null; i++){
            if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
            if (node.parentNode) {
                if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew jQuery#find here for performance reasons:
                // https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i = 0;
            for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for(; i < l; i++){
                            elem = this[i] || {};
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for(; i <= last; i++){
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window1;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {};
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window1.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (trac-8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "box-sizing:content-box;border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is `display: block`
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window1.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, trac-12537)
        //   .css('--customProperty) (gh-3144)
        if (computed) {
            // Support: IE <=9 - 11+
            // IE only supports `"float"` in `getPropertyValue`; in computed styles
            // it's only available as `"cssFloat"`. We no longer modify properties
            // sent to `.css()` apart from camelCasing, so we need to check both.
            // Normally, this would create difference in behavior: if
            // `getPropertyValue` returns an empty string, the value returned
            // by `.css()` would be `undefined`. This is usually the case for
            // disconnected elements. However, in IE even disconnected elements
            // with no styles return `"none"` for `getPropertyValue( "float" )`
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) // Support: Firefox 105+, Chrome <=105+
            // Spec requires trimming whitespace for custom properties (gh-4926).
            // Firefox only trims leading whitespace. Chrome just collapses
            // both leading & trailing whitespace to a single space.
            //
            // Fall back to `undefined` if empty string returned.
            // This collapses a missing definition with property defined
            // and set to an empty string but there's no standard API
            // allowing us to differentiate them without a performance penalty
            // and returning `undefined` aligns with older jQuery.
            //
            // rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
            // as whitespace while CSS does not, but this is not a problem
            // because CSS preprocessing replaces them with U+000A LINE FEED
            // (which *is* CSS whitespace)
            // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
            ret = ret.replace(rtrimCSS, "$1") || undefined;
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document.createElement("div").style, vendorProps = {};
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while(i--){
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i < 4; i += 2){
            // Both box models exclude margin
            // Count margin delta separately to only add it after scroll gutter adjustment.
            // This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
            if (box === "margin") marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (trac-7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug trac-9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (trac-7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
            else window1.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window1.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i < 4; i += 2 - includeWidth){
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for(; index < length; index++)animation.tweens[index].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index < length; index++)animation.tweens[index].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index < length; index++){
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation.prefilters.unshift(callback);
            else Animation.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i < timers.length; i++){
            timer = timers[i];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) timers.splice(i--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window1.setTimeout(next, time);
            hooks.stop = function() {
                window1.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                // This expression is here for better compressibility (see addClass)
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Remove *all* instances
                        while(cur.indexOf(" " + className + " ") > -1)cur = cur.replace(" " + className + " ", " ");
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            classNames = classesToArray(value);
            return this.each(function() {
                if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this);
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Check each className given, space separated list
                        if (self.hasClass(className)) self.removeClass(className);
                        else self.addClass(className);
                    }
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while(elem = this[i++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value.call(this, i, jQuery(this).val());
                else val = value;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (trac-14686, trac-14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i = max;
                    else i = one ? index : 0;
                    // Loop through all the selected options
                    for(; i < max; i++){
                        option = options[i];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (trac-2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while(i--){
                        option = options[i];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    var location = window1.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window1.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {}
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document
            ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (trac-9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
            }
            // Fire handlers on the event path
            i = 0;
            while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (trac-6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) return null;
                if (Array.isArray(val)) return jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // trac-7653, trac-8125, trac-8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {}, // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes trac-9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            requestHeaders = {}, requestHeadersNames = {}, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (trac-10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket trac-12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed) throw e;
                    // Propagate others as results
                    done(-1, e);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed) return;
                completed = true;
                // Clear timeout if it exists
                if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i;
        for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {}
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window1.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i in headers)xhr.setRequestHeader(i, headers[i]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window1.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // trac-14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window1[callbackName];
            window1[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                else window1[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    }();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else context = document;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val === undefined) return win ? win[prop] : elem[method];
                if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                else elem[method] = val;
            }, method, val, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    // Require that the "whitespace run" starts from a non-whitespace
    // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window1.jQuery, // Map over the $ in case of overwrite
    _$ = window1.$;
    jQuery.noConflict = function(deep) {
        if (window1.$ === jQuery) window1.$ = _$;
        if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (trac-13566)
    if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
    return jQuery;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2dgaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _socketIoClient = require("socket.io-client");
var _socketIoClientDefault = parcelHelpers.interopDefault(_socketIoClient);
const USE_SERVER = false;
let client;
if (USE_SERVER) {
    client = (0, _socketIoClientDefault.default)("http://localhost:8080", {
        transports: [
            "websocket",
            "polling",
            "flashsocket"
        ]
    });
    client.on("connect", ()=>{
        console.log("connected");
    });
    client.on("disconnect", ()=>{
        console.log("disconnected");
    });
    client.on("response", (data)=>{
        console.log("response", data);
    });
    return;
} else client = {
    emit: (event, ...args)=>{
        console.log("emit", event, args);
    }
};
exports.default = client;

},{"socket.io-client":"8HBJR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8HBJR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Protocol version.
 *
 * @public
 */ parcelHelpers.export(exports, "protocol", ()=>(0, _socketIoParser.protocol));
/**
 * Expose constructors for standalone build.
 *
 * @public
 */ parcelHelpers.export(exports, "Manager", ()=>(0, _managerJs.Manager));
parcelHelpers.export(exports, "Socket", ()=>(0, _socketJs.Socket));
parcelHelpers.export(exports, "io", ()=>lookup);
parcelHelpers.export(exports, "connect", ()=>lookup);
parcelHelpers.export(exports, "default", ()=>lookup);
var _urlJs = require("./url.js");
var _managerJs = require("./manager.js");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
/**
 * Managers cache.
 */ const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = (0, _urlJs.url)(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) io = new (0, _managerJs.Manager)(source, opts);
    else {
        if (!cache[id]) cache[id] = new (0, _managerJs.Manager)(source, opts);
        io = cache[id];
    }
    if (parsed.query && !opts.query) opts.query = parsed.queryKey;
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: (0, _managerJs.Manager),
    Socket: (0, _socketJs.Socket),
    io: lookup,
    connect: lookup
});

},{"./url.js":"9Ze3o","./manager.js":"94vh9","./socket.js":"kbWgu","socket.io-parser":"2lQL3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ze3o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */ parcelHelpers.export(exports, "url", ()=>url);
var _engineIoClient = require("engine.io-client");
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
            else uri = loc.host + uri;
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
            else uri = "https://" + uri;
        }
        // parse
        obj = (0, _engineIoClient.parse)(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
        else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

},{"engine.io-client":"jBHFs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBHFs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transport", ()=>(0, _transportJs.Transport));
parcelHelpers.export(exports, "TransportError", ()=>(0, _transportJs.TransportError));
parcelHelpers.export(exports, "transports", ()=>(0, _indexJs.transports));
parcelHelpers.export(exports, "installTimerFunctions", ()=>(0, _utilJs.installTimerFunctions));
parcelHelpers.export(exports, "parse", ()=>(0, _parseuriJs.parse));
parcelHelpers.export(exports, "nextTick", ()=>(0, _websocketConstructorJs.nextTick));
parcelHelpers.export(exports, "Socket", ()=>(0, _socketJs.Socket));
parcelHelpers.export(exports, "protocol", ()=>protocol);
var _socketJs = require("./socket.js");
var _transportJs = require("./transport.js");
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseuriJs = require("./contrib/parseuri.js");
var _websocketConstructorJs = require("./transports/websocket-constructor.js");
const protocol = (0, _socketJs.Socket).protocol;

},{"./socket.js":"kpkbh","./transport.js":"kwKKC","./transports/index.js":"2neV7","./util.js":"d7eyH","./contrib/parseuri.js":"5RFyz","./transports/websocket-constructor.js":"dDJnh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpkbh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>Socket);
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseqsJs = require("./contrib/parseqs.js");
var _parseuriJs = require("./contrib/parseuri.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _engineIoParser = require("engine.io-parser");
var _websocketConstructorJs = require("./transports/websocket-constructor.js");
class Socket extends (0, _componentEmitter.Emitter) {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */ constructor(uri, opts = {}){
        super();
        this.binaryType = (0, _websocketConstructorJs.defaultBinaryType);
        this.writeBuffer = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = (0, _parseuriJs.parse)(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query) opts.query = uri.query;
        } else if (opts.host) opts.hostname = (0, _parseuriJs.parse)(opts.host).host;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
        opts.port = this.secure ? "443" : "80";
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = opts.transports || [
            "polling",
            "websocket",
            "webtransport"
        ];
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") this.opts.query = (0, _parseqsJs.decode)(this.opts.query);
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this.beforeunloadEventListener = ()=>{
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this.beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = ()=>{
                    this.onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */ createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = (0, _engineIoParser.protocol);
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[name]);
        return new (0, _indexJs.transports)[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */ open() {
        let transport;
        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) transport = "websocket";
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else transport = this.transports[0];
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        } catch (e) {
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */ setTransport(transport) {
        if (this.transport) this.transport.removeAllListeners();
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason)=>this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */ probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport) return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) freezeTransport();
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") // favor WebTransport
        this.setTimeoutFn(()=>{
            if (!failed) transport.open();
        }, 200);
        else transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */ onOpen() {
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade) {
            let i = 0;
            const l = this.upgrades.length;
            for(; i < l; i++)this.probe(this.upgrades[i]);
        }
    }
    /**
     * Handles a packet.
     *
     * @private
     */ onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            this.resetPingTimeout();
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */ onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */ resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(()=>{
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) this.pingTimeoutTimer.unref();
    }
    /**
     * Called on `drain` event
     *
     * @private
     */ onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) this.emitReserved("drain");
        else this.flush();
    }
    /**
     * Flush write buffers.
     *
     * @private
     */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const packets = this.getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */ getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) return this.writeBuffer;
        let payloadSize = 1; // first packet type
        for(let i = 0; i < this.writeBuffer.length; i++){
            const data = this.writeBuffer[i].data;
            if (data) payloadSize += (0, _utilJs.byteLength)(data);
            if (i > 0 && payloadSize > this.maxPayload) return this.writeBuffer.slice(0, i);
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     */ write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */ sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) return;
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */ close() {
        const close = ()=>{
            this.onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) this.once("drain", ()=>{
                if (this.upgrading) waitForUpgrade();
                else close();
            });
            else if (this.upgrading) waitForUpgrade();
            else close();
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */ onError(err) {
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */ onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("beforeunload", this.beforeunloadEventListener, false);
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */ filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for(; i < j; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        return filteredUpgrades;
    }
}
Socket.protocol = (0, _engineIoParser.protocol);

},{"./transports/index.js":"2neV7","./util.js":"d7eyH","./contrib/parseqs.js":"aFNEN","./contrib/parseuri.js":"5RFyz","@socket.io/component-emitter":"dzQbR","engine.io-parser":"2SHiP","./transports/websocket-constructor.js":"dDJnh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2neV7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transports", ()=>transports);
var _pollingJs = require("./polling.js");
var _websocketJs = require("./websocket.js");
var _webtransportJs = require("./webtransport.js");
const transports = {
    websocket: (0, _websocketJs.WS),
    webtransport: (0, _webtransportJs.WT),
    polling: (0, _pollingJs.Polling)
};

},{"./polling.js":"HgHsi","./websocket.js":"8y2e2","./webtransport.js":"k7fng","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"HgHsi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polling", ()=>Polling);
parcelHelpers.export(exports, "Request", ()=>Request);
var _transportJs = require("../transport.js");
var _yeastJs = require("../contrib/yeast.js");
var _engineIoParser = require("engine.io-parser");
var _xmlhttprequestJs = require("./xmlhttprequest.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("../util.js");
var _globalThisJs = require("../globalThis.js");
function empty() {}
const hasXHR2 = function() {
    const xhr = new (0, _xmlhttprequestJs.XHR)({
        xdomain: false
    });
    return null != xhr.responseType;
}();
class Polling extends (0, _transportJs.Transport) {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */ constructor(opts){
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) port = isSSL ? "443" : "80";
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        }
        /**
         * XHR supports binary
         */ const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
        if (this.opts.withCredentials) this.cookieJar = (0, _xmlhttprequestJs.createCookieJar)();
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */ doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                total++;
                this.once("pollComplete", function() {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function() {
                    --total || pause();
                });
            }
        } else pause();
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */ poll() {
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */ onData(data) {
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") this.onOpen();
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({
                    description: "transport closed by the server"
                });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, _engineIoParser.decodePayload)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) this.poll();
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */ doClose() {
        const close = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) close();
        else // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */ write(packets) {
        this.writable = false;
        (0, _engineIoParser.encodePayload)(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = (0, _yeastJs.yeast)();
        if (!this.supportsBinary && !query.sid) query.b64 = 1;
        return this.createUri(schema, query);
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @private
     */ request(opts = {}) {
        Object.assign(opts, {
            xd: this.xd,
            cookieJar: this.cookieJar
        }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */ doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends (0, _componentEmitter.Emitter) {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */ constructor(uri, opts){
        super();
        (0, _utilJs.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */ create() {
        var _a;
        const opts = (0, _utilJs.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        const xhr = this.xhr = new (0, _xmlhttprequestJs.XHR)(opts);
        try {
            xhr.open(this.method, this.uri, true);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this.opts.extraHeaders)if (this.opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
            } catch (e) {}
            if ("POST" === this.method) try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {}
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {}
            (_a = this.opts.cookieJar) === null || _a === void 0 || _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) xhr.withCredentials = this.opts.withCredentials;
            if (this.opts.requestTimeout) xhr.timeout = this.opts.requestTimeout;
            xhr.onreadystatechange = ()=>{
                var _a;
                if (xhr.readyState === 3) (_a = this.opts.cookieJar) === null || _a === void 0 || _a.parseCookies(xhr);
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) this.onLoad();
                else // make sure the `error` event handler that's user-set
                // does not throw in the same tick and gets caught here
                this.setTimeoutFn(()=>{
                    this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
            };
            xhr.send(this.data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */ onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */ cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) return;
        this.xhr.onreadystatechange = empty;
        if (fromError) try {
            this.xhr.abort();
        } catch (e) {}
        if (typeof document !== "undefined") delete Request.requests[this.index];
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */ onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */ abort() {
        this.cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") // @ts-ignore
    attachEvent("onunload", unloadHandler);
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in (0, _globalThisJs.globalThisShim) ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request.requests)if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
}

},{"../transport.js":"kwKKC","../contrib/yeast.js":"5cPiI","engine.io-parser":"2SHiP","./xmlhttprequest.js":"gG0MI","@socket.io/component-emitter":"dzQbR","../util.js":"d7eyH","../globalThis.js":"7zbHc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwKKC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TransportError", ()=>TransportError);
parcelHelpers.export(exports, "Transport", ()=>Transport);
var _engineIoParser = require("engine.io-parser");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("./util.js");
var _parseqsJs = require("./contrib/parseqs.js");
class TransportError extends Error {
    constructor(reason, description, context){
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends (0, _componentEmitter.Emitter) {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */ constructor(opts){
        super();
        this.writable = false;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */ onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */ open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */ close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */ send(packets) {
        if (this.readyState === "open") this.write(packets);
    }
    /**
     * Called upon open
     *
     * @protected
     */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */ onData(data) {
        const packet = (0, _engineIoParser.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */ onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */ onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */ pause(onPause) {}
    createUri(schema, query = {}) {
        return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) return ":" + this.opts.port;
        else return "";
    }
    _query(query) {
        const encodedQuery = (0, _parseqsJs.encode)(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}

},{"engine.io-parser":"2SHiP","@socket.io/component-emitter":"dzQbR","./util.js":"d7eyH","./contrib/parseqs.js":"aFNEN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SHiP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPacketEncoderStream", ()=>createPacketEncoderStream);
parcelHelpers.export(exports, "createPacketDecoderStream", ()=>createPacketDecoderStream);
parcelHelpers.export(exports, "protocol", ()=>protocol);
parcelHelpers.export(exports, "encodePacket", ()=>(0, _encodePacketJs.encodePacket));
parcelHelpers.export(exports, "encodePayload", ()=>encodePayload);
parcelHelpers.export(exports, "decodePacket", ()=>(0, _decodePacketJs.decodePacket));
parcelHelpers.export(exports, "decodePayload", ()=>decodePayload);
var _encodePacketJs = require("./encodePacket.js");
var _decodePacketJs = require("./decodePacket.js");
var _commonsJs = require("./commons.js");
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        (0, _encodePacketJs.encodePacket)(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if (++count === length) callback(encodedPackets.join(SEPARATOR));
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = (0, _decodePacketJs.decodePacket)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") break;
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform (packet, controller) {
            (0, _encodePacketJs.encodePacketToBinary)(packet, (encodedPacket)=>{
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                } else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                } else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") header[0] |= 0x80;
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        }
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk)=>acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) return chunks.shift();
    const buffer = new Uint8Array(size);
    let j = 0;
    for(let i = 0; i < size; i++){
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) chunks[0] = chunks[0].slice(j);
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) TEXT_DECODER = new TextDecoder();
    const chunks = [];
    let state = 0 /* READ_HEADER */ ;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform (chunk, controller) {
            chunks.push(chunk);
            while(true){
                if (state === 0 /* READ_HEADER */ ) {
                    if (totalLength(chunks) < 1) break;
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) state = 3 /* READ_PAYLOAD */ ;
                    else if (expectedLength === 126) state = 1 /* READ_EXTENDED_LENGTH_16 */ ;
                    else state = 2 /* READ_EXTENDED_LENGTH_64 */ ;
                } else if (state === 1 /* READ_EXTENDED_LENGTH_16 */ ) {
                    if (totalLength(chunks) < 2) break;
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* READ_PAYLOAD */ ;
                } else if (state === 2 /* READ_EXTENDED_LENGTH_64 */ ) {
                    if (totalLength(chunks) < 8) break;
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 21) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue((0, _commonsJs.ERROR_PACKET));
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* READ_PAYLOAD */ ;
                } else {
                    if (totalLength(chunks) < expectedLength) break;
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue((0, _decodePacketJs.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* READ_HEADER */ ;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue((0, _commonsJs.ERROR_PACKET));
                    break;
                }
            }
        }
    });
}
const protocol = 4;

},{"./encodePacket.js":"lUiyb","./decodePacket.js":"k0BCP","./commons.js":"kLmJ7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lUiyb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodePacketToBinary", ()=>encodePacketToBinary);
parcelHelpers.export(exports, "encodePacket", ()=>encodePacket);
var _commonsJs = require("./commons.js");
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(data, callback);
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(new Blob([
            data
        ]), callback);
    }
    // plain string
    return callback((0, _commonsJs.PACKET_TYPES)[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) return data;
    else if (data instanceof ArrayBuffer) return new Uint8Array(data);
    else return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) return packet.data.arrayBuffer().then(toArray).then(callback);
    else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) return callback(toArray(packet.data));
    encodePacket(packet, false, (encoded)=>{
        if (!TEXT_ENCODER) TEXT_ENCODER = new TextEncoder();
        callback(TEXT_ENCODER.encode(encoded));
    });
}

},{"./commons.js":"kLmJ7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLmJ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PACKET_TYPES", ()=>PACKET_TYPES);
parcelHelpers.export(exports, "PACKET_TYPES_REVERSE", ()=>PACKET_TYPES_REVERSE);
parcelHelpers.export(exports, "ERROR_PACKET", ()=>ERROR_PACKET);
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0BCP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodePacket", ()=>decodePacket);
var _commonsJs = require("./commons.js");
var _base64ArraybufferJs = require("./contrib/base64-arraybuffer.js");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
    };
    const type = encodedPacket.charAt(0);
    if (type === "b") return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
    const packetType = (0, _commonsJs.PACKET_TYPES_REVERSE)[type];
    if (!packetType) return 0, _commonsJs.ERROR_PACKET;
    return encodedPacket.length > 1 ? {
        type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type],
        data: encodedPacket.substring(1)
    } : {
        type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (withNativeArrayBuffer) {
        const decoded = (0, _base64ArraybufferJs.decode)(data);
        return mapBinary(decoded, binaryType);
    } else return {
        base64: true,
        data
    }; // fallback for old browsers
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            if (data instanceof Blob) // from WebSocket + binaryType "blob"
            return data;
            else // from HTTP long-polling or WebTransport
            return new Blob([
                data
            ]);
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
            return data;
            else // from WebTransport (Uint8Array)
            return data.buffer;
    }
};

},{"./commons.js":"kLmJ7","./contrib/base64-arraybuffer.js":"c3dDo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3dDo":[function(require,module,exports) {
// imported from https://github.com/socketio/base64-arraybuffer
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "decode", ()=>decode);
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for(let i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
const encode = (arraybuffer)=>{
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
    for(i = 0; i < len; i += 3){
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";
    return base64;
};
const decode = (base64)=>{
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") bufferLength--;
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dzQbR":[function(require,module,exports) {
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Emitter", ()=>Emitter);
function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    // all
    if (0 == arguments.length) {
        this._callbacks = {};
        return this;
    }
    // specific event
    var callbacks = this._callbacks["$" + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks["$" + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) delete this._callbacks["$" + event];
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
    }
    return this;
};
// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks["$" + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7eyH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pick", ()=>pick);
parcelHelpers.export(exports, "installTimerFunctions", ()=>installTimerFunctions);
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
parcelHelpers.export(exports, "byteLength", ()=>byteLength);
var _globalThisJs = require("./globalThis.js");
function pick(obj, ...attr) {
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) acc[k] = obj[k];
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = (0, _globalThisJs.globalThisShim).setTimeout;
const NATIVE_CLEAR_TIMEOUT = (0, _globalThisJs.globalThisShim).clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind((0, _globalThisJs.globalThisShim));
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind((0, _globalThisJs.globalThisShim));
    } else {
        obj.setTimeoutFn = (0, _globalThisJs.globalThisShim).setTimeout.bind((0, _globalThisJs.globalThisShim));
        obj.clearTimeoutFn = (0, _globalThisJs.globalThisShim).clearTimeout.bind((0, _globalThisJs.globalThisShim));
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
    if (typeof obj === "string") return utf8Length(obj);
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for(let i = 0, l = str.length; i < l; i++){
        c = str.charCodeAt(i);
        if (c < 0x80) length += 1;
        else if (c < 0x800) length += 2;
        else if (c < 0xd800 || c >= 0xe000) length += 3;
        else {
            i++;
            length += 4;
        }
    }
    return length;
}

},{"./globalThis.js":"7zbHc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7zbHc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "globalThisShim", ()=>globalThisShim);
const globalThisShim = (()=>{
    if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
})();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFNEN":[function(require,module,exports) {
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>encode);
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */ parcelHelpers.export(exports, "decode", ()=>decode);
function encode(obj) {
    let str = "";
    for(let i in obj)if (obj.hasOwnProperty(i)) {
        if (str.length) str += "&";
        str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
    return str;
}
function decode(qs) {
    let qry = {};
    let pairs = qs.split("&");
    for(let i = 0, l = pairs.length; i < l; i++){
        let pair = pairs[i].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cPiI":[function(require,module,exports) {
// imported from https://github.com/unshiftio/yeast
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */ parcelHelpers.export(exports, "encode", ()=>encode);
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */ parcelHelpers.export(exports, "decode", ()=>decode);
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */ parcelHelpers.export(exports, "yeast", ()=>yeast);
"use strict";
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
let seed = 0, i = 0, prev;
function encode(num) {
    let encoded = "";
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    }while (num > 0);
    return encoded;
}
function decode(str) {
    let decoded = 0;
    for(i = 0; i < str.length; i++)decoded = decoded * length + map[str.charAt(i)];
    return decoded;
}
function yeast() {
    const now = encode(+new Date());
    if (now !== prev) return seed = 0, prev = now;
    return now + "." + encode(seed++);
}
//
// Map each character to its index.
//
for(; i < length; i++)map[alphabet[i]] = i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gG0MI":[function(require,module,exports) {
// browser shim for xmlhttprequest module
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XHR", ()=>XHR);
parcelHelpers.export(exports, "createCookieJar", ()=>createCookieJar);
var _hasCorsJs = require("../contrib/has-cors.js");
var _globalThisJs = require("../globalThis.js");
function XHR(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || (0, _hasCorsJs.hasCORS))) return new XMLHttpRequest();
    } catch (e) {}
    if (!xdomain) try {
        return new (0, _globalThisJs.globalThisShim)[[
            "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
}
function createCookieJar() {}

},{"../contrib/has-cors.js":"kPgMI","../globalThis.js":"7zbHc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPgMI":[function(require,module,exports) {
// imported from https://github.com/component/has-cors
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasCORS", ()=>hasCORS);
let value = false;
try {
    value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
// if XMLHttp support is disabled in IE then it will throw
// when trying to create
}
const hasCORS = value;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8y2e2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WS", ()=>WS);
var _transportJs = require("../transport.js");
var _yeastJs = require("../contrib/yeast.js");
var _utilJs = require("../util.js");
var _websocketConstructorJs = require("./websocket-constructor.js");
var _engineIoParser = require("engine.io-parser");
var Buffer = require("64d8415e9cf90979").Buffer;
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends (0, _transportJs.Transport) {
    /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */ constructor(opts){
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) // let probe timeout
        return;
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative ? {} : (0, _utilJs.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
        try {
            this.ws = (0, _websocketConstructorJs.usingBrowserWebSocket) && !isReactNative ? protocols ? new (0, _websocketConstructorJs.WebSocket)(uri, protocols) : new (0, _websocketConstructorJs.WebSocket)(uri) : new (0, _websocketConstructorJs.WebSocket)(uri, protocols, opts);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) this.ws._socket.unref();
            this.onOpen();
        };
        this.ws.onclose = (closeEvent)=>this.onClose({
                description: "websocket connection closed",
                context: closeEvent
            });
        this.ws.onmessage = (ev)=>this.onData(ev.data);
        this.ws.onerror = (e)=>this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, _engineIoParser.encodePacket)(packet, this.supportsBinary, (data)=>{
                // always create a new object (GH-437)
                const opts = {};
                if (!(0, _websocketConstructorJs.usingBrowserWebSocket)) {
                    if (packet.options) opts.compress = packet.options.compress;
                    if (this.opts.perMessageDeflate) {
                        const len = // @ts-ignore
                        "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) opts.compress = false;
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (0, _websocketConstructorJs.usingBrowserWebSocket) // TypeError is thrown when passing the second argument on Safari
                    this.ws.send(data);
                    else this.ws.send(data, opts);
                } catch (e) {}
                if (lastPacket) // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                (0, _websocketConstructorJs.nextTick)(()=>{
                    this.writable = true;
                    this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) query[this.opts.timestampParam] = (0, _yeastJs.yeast)();
        // communicate binary support capabilities
        if (!this.supportsBinary) query.b64 = 1;
        return this.createUri(schema, query);
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @private
     */ check() {
        return !!(0, _websocketConstructorJs.WebSocket);
    }
}

},{"64d8415e9cf90979":"fCgem","../transport.js":"kwKKC","../contrib/yeast.js":"5cPiI","../util.js":"d7eyH","./websocket-constructor.js":"dDJnh","engine.io-parser":"2SHiP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"dDJnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "WebSocket", ()=>WebSocket);
parcelHelpers.export(exports, "usingBrowserWebSocket", ()=>usingBrowserWebSocket);
parcelHelpers.export(exports, "defaultBinaryType", ()=>defaultBinaryType);
var _globalThisJs = require("../globalThis.js");
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) return (cb)=>Promise.resolve().then(cb);
    else return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0);
})();
const WebSocket = (0, _globalThisJs.globalThisShim).WebSocket || (0, _globalThisJs.globalThisShim).MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";

},{"../globalThis.js":"7zbHc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k7fng":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WT", ()=>WT);
var _transportJs = require("../transport.js");
var _websocketConstructorJs = require("./websocket-constructor.js");
var _engineIoParser = require("engine.io-parser");
class WT extends (0, _transportJs.Transport) {
    get name() {
        return "webtransport";
    }
    doOpen() {
        // @ts-ignore
        if (typeof WebTransport !== "function") return;
        // @ts-ignore
        this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        this.transport.closed.then(()=>{
            this.onClose();
        }).catch((err)=>{
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this.transport.ready.then(()=>{
            this.transport.createBidirectionalStream().then((stream)=>{
                const decoderStream = (0, _engineIoParser.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = (0, _engineIoParser.createPacketEncoderStream)();
                encoderStream.readable.pipeTo(stream.writable);
                this.writer = encoderStream.writable.getWriter();
                const read = ()=>{
                    reader.read().then(({ done, value })=>{
                        if (done) return;
                        this.onPacket(value);
                        read();
                    }).catch((err)=>{});
                };
                read();
                const packet = {
                    type: "open"
                };
                if (this.query.sid) packet.data = `{"sid":"${this.query.sid}"}`;
                this.writer.write(packet).then(()=>this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this.writer.write(packet).then(()=>{
                if (lastPacket) (0, _websocketConstructorJs.nextTick)(()=>{
                    this.writable = true;
                    this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        var _a;
        (_a = this.transport) === null || _a === void 0 || _a.close();
    }
}

},{"../transport.js":"kwKKC","./websocket-constructor.js":"dDJnh","engine.io-parser":"2SHiP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RFyz":[function(require,module,exports) {
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>parse);
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
];
function parse(str) {
    if (str.length > 2000) throw "URI too long";
    const src = str, b = str.indexOf("["), e = str.indexOf("]");
    if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
    let m = re.exec(str || ""), uri = {}, i = 14;
    while(i--)uri[parts[i]] = m[i] || "";
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri["path"]);
    uri.queryKey = queryKey(uri, uri["query"]);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == "/" || path.length === 0) names.splice(0, 1);
    if (path.slice(-1) == "/") names.splice(names.length - 1, 1);
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) data[$1] = $2;
    });
    return data;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94vh9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Manager", ()=>Manager);
var _engineIoClient = require("engine.io-client");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _backo2Js = require("./contrib/backo2.js");
var _componentEmitter = require("@socket.io/component-emitter");
class Manager extends (0, _componentEmitter.Emitter) {
    constructor(uri, opts){
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0, _engineIoClient.installTimerFunctions)(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new (0, _backo2Js.Backoff)({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || _socketIoParser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new (0, _engineIoClient.Socket)(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = (0, _onJs.on)(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        const onError = (err)=>{
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) fn(err);
            else // Only do this if there is no fn to handle the error
            this.maybeReconnectOnOpen();
        };
        // emit `error`
        const errorSub = (0, _onJs.on)(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(()=>{
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push((0, _onJs.on)(socket, "ping", this.onping.bind(this)), (0, _onJs.on)(socket, "data", this.ondata.bind(this)), (0, _onJs.on)(socket, "error", this.onerror.bind(this)), (0, _onJs.on)(socket, "close", this.onclose.bind(this)), (0, _onJs.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        try {
            this.decoder.add(data);
        } catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        (0, _engineIoClient.nextTick)(()=>{
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new (0, _socketJs.Socket)(this, nsp, opts);
            this.nsps[nsp] = socket;
        } else if (this._autoConnect && !socket.active) socket.connect();
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) return;
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        this.subs.forEach((subDestroy)=>subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */ onclose(reason, description) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) this.reconnect();
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else self.onreconnect();
                });
            }, delay);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

},{"engine.io-client":"jBHFs","./socket.js":"kbWgu","socket.io-parser":"2lQL3","./on.js":"8FFT1","./contrib/backo2.js":"cZLsm","@socket.io/component-emitter":"dzQbR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kbWgu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */ parcelHelpers.export(exports, "Socket", ()=>Socket);
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _componentEmitter = require("@socket.io/component-emitter");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends (0, _componentEmitter.Emitter) {
    /**
     * `Socket` constructor.
     */ constructor(io, nsp, opts){
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */ this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */ this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */ this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */ this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */ this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */ this._queueSeq = 0;
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) this.auth = opts.auth;
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect) this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */ get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [
            (0, _onJs.on)(io, "open", this.onopen.bind(this)),
            (0, _onJs.on)(io, "packet", this.onpacket.bind(this)),
            (0, _onJs.on)(io, "error", this.onerror.bind(this)),
            (0, _onJs.on)(io, "close", this.onclose.bind(this))
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */ emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev.toString() + '" is a reserved event name');
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: (0, _socketIoParser.PacketType).EVENT,
            data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) ;
        else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        } else this.sendBuffer.push(packet);
        this.flags = {};
        return this;
    }
    /**
     * @private
     */ _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(()=>{
            delete this.acks[id];
            for(let i = 0; i < this.sendBuffer.length; i++)if (this.sendBuffer[i].id === id) this.sendBuffer.splice(i, 1);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args)=>{
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [
                null,
                ...args
            ]);
        };
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */ emitWithAck(ev, ...args) {
        // the timeout flag is optional
        const withErr = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
        return new Promise((resolve, reject)=>{
            args.push((arg1, arg2)=>{
                if (withErr) return arg1 ? reject(arg1) : resolve(arg2);
                else return resolve(arg1);
            });
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */ _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") ack = args.pop();
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({
                fromQueue: true
            }, this.flags)
        };
        args.push((err, ...responseArgs)=>{
            if (packet !== this._queue[0]) // the packet has already been acknowledged
            return;
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) ack(err);
                }
            } else {
                this._queue.shift();
                if (ack) ack(null, ...responseArgs);
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */ _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) return;
        const packet = this._queue[0];
        if (packet.pending && !force) return;
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        if (typeof this.auth == "function") this.auth((data)=>{
            this._sendConnectPacket(data);
        });
        else this._sendConnectPacket(this.auth);
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */ _sendConnectPacket(data) {
        this.packet({
            type: (0, _socketIoParser.PacketType).CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, data) : data
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) this.emitReserved("connect_error", err);
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */ onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case (0, _socketIoParser.PacketType).CONNECT:
                if (packet.data && packet.data.sid) this.onconnect(packet.data.sid, packet.data.pid);
                else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case (0, _socketIoParser.PacketType).EVENT:
            case (0, _socketIoParser.PacketType).BINARY_EVENT:
                this.onevent(packet);
                break;
            case (0, _socketIoParser.PacketType).ACK:
            case (0, _socketIoParser.PacketType).BINARY_ACK:
                this.onack(packet);
                break;
            case (0, _socketIoParser.PacketType).DISCONNECT:
                this.ondisconnect();
                break;
            case (0, _socketIoParser.PacketType).CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) args.push(this.ack(packet.id));
        if (this.connected) this.emitEvent(args);
        else this.receiveBuffer.push(Object.freeze(args));
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners)listener.apply(this, args);
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") this._lastOffset = args[args.length - 1];
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            self.packet({
                type: (0, _socketIoParser.PacketType).ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>{
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */ disconnect() {
        if (this.connected) this.packet({
            type: (0, _socketIoParser.PacketType).DISCONNECT
        });
        // remove socket from pool
        this.destroy();
        if (this.connected) // fire events
        this.onclose("io client disconnect");
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */ timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */ offAny(listener) {
        if (!this._anyListeners) return this;
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */ offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) return this;
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyOutgoingListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */ notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners)listener.apply(this, packet.data);
        }
    }
}

},{"socket.io-parser":"2lQL3","./on.js":"8FFT1","@socket.io/component-emitter":"dzQbR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lQL3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocol", ()=>protocol);
parcelHelpers.export(exports, "PacketType", ()=>PacketType);
/**
 * A socket.io Encoder instance
 */ parcelHelpers.export(exports, "Encoder", ()=>Encoder);
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */ parcelHelpers.export(exports, "Decoder", ()=>Decoder);
var _componentEmitter = require("@socket.io/component-emitter");
var _binaryJs = require("./binary.js");
var _isBinaryJs = require("./is-binary.js");
/**
 * These strings must not be used as event names, as they have a special meaning.
 */ const RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
];
const protocol = 5;
var PacketType;
(function(PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */ constructor(replacer){
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0, _isBinaryJs.hasBinary)(obj)) return this.encodeAsBinary({
                type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
                nsp: obj.nsp,
                data: obj.data,
                id: obj.id
            });
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
        // immediately followed by the id
        if (null != obj.id) str += obj.id;
        // json data
        if (null != obj.data) str += JSON.stringify(obj.data, this.replacer);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = (0, _binaryJs.deconstructPacket)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
class Decoder extends (0, _componentEmitter.Emitter) {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */ constructor(reviver){
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) super.emitReserved("decoded", packet);
            } else // non-binary full packet
            super.emitReserved("decoded", packet);
        } else if ((0, _isBinaryJs.isBinary)(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        } else throw new Error("Unknown type: " + obj);
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length);
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else p.nsp = "/";
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
            else throw new Error("invalid payload");
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        } catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0, _binaryJs.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

},{"@socket.io/component-emitter":"dzQbR","./binary.js":"juaze","./is-binary.js":"0mMso","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juaze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */ parcelHelpers.export(exports, "deconstructPacket", ()=>deconstructPacket);
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */ parcelHelpers.export(exports, "reconstructPacket", ()=>reconstructPacket);
var _isBinaryJs = require("./is-binary.js");
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if ((0, _isBinaryJs.isBinary)(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for(const key in data)if (Object.prototype.hasOwnProperty.call(data, key)) newData[key] = _deconstructPacket(data[key], buffers);
        return newData;
    }
    return data;
}
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        else throw new Error("illegal attachments");
    } else if (Array.isArray(data)) for(let i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
    else if (typeof data === "object") {
        for(const key in data)if (Object.prototype.hasOwnProperty.call(data, key)) data[key] = _reconstructPacket(data[key], buffers);
    }
    return data;
}

},{"./is-binary.js":"0mMso","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0mMso":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */ parcelHelpers.export(exports, "isBinary", ()=>isBinary);
parcelHelpers.export(exports, "hasBinary", ()=>hasBinary);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") return false;
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) return true;
        }
        return false;
    }
    if (isBinary(obj)) return true;
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8FFT1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "on", ()=>on);
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZLsm":[function(require,module,exports) {
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Backoff", ()=>Backoff);
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VpSv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadAudioDevices", ()=>loadAudioDevices);
parcelHelpers.export(exports, "setCurrentMic", ()=>setCurrentMic);
parcelHelpers.export(exports, "startMicrophoneStream", ()=>startMicrophoneStream);
parcelHelpers.export(exports, "stopMicrophoneStream", ()=>stopMicrophoneStream);
parcelHelpers.export(exports, "startRecording", ()=>startRecording);
parcelHelpers.export(exports, "recordTranscript", ()=>recordTranscript);
parcelHelpers.export(exports, "stopRecording", ()=>stopRecording);
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _media = require("./media");
let currentDeviceId = null;
/**@type {MediaStream} */ let currentStream = null;
/**@type {MediaRecorder} */ let recorder = null;
let chunks = [];
/**@type {SpeechRecognition} */ let recognition = null;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
async function loadAudioDevices() {
    let microphoneDevices;
    try {
        microphoneDevices = await (0, _media.getMediaDevices)("audioinput");
    } catch (err) {
        console.error(`An error occurred: ${err}`);
        return [];
    }
    microphoneDevices.forEach((device)=>{
        (0, _jqueryDefault.default)("#mic-list").append(`<option class="mic" value="${device.deviceId}">${device.label || "default"}</option>`);
    });
    return microphoneDevices;
}
async function setCurrentMic(deviceId) {
    console.log("setCurrentMic", deviceId);
    let microphoneDevices = await (0, _media.getMediaDevices)("audioinput");
    if (microphoneDevices.length === 0) return false;
    if (deviceId === "default") currentDeviceId = null;
    else currentDeviceId = deviceId;
    return true;
}
async function startMicrophoneStream() {
    let constraints = {
        audio: true
    };
    if (currentDeviceId) constraints.audio = {
        deviceId: currentDeviceId
    };
    if (currentStream) currentStream.getTracks().forEach((track)=>track.stop());
    let stream = await navigator.mediaDevices.getUserMedia(constraints);
    currentStream = stream;
    recorder = new MediaRecorder(stream);
    (0, _jqueryDefault.default)((0, _media.MIC_ICON)).toggleClass("active", true);
    (0, _jqueryDefault.default)((0, _media.MIC_START)).toggleClass("disabled", true);
    (0, _jqueryDefault.default)((0, _media.MIC_STOP)).toggleClass("disabled", false);
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD)).toggleClass("disabled", false);
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD_TRANSCRIPT)).toggleClass("disabled", false);
    return stream;
}
function stopMicrophoneStream() {
    if (currentStream) currentStream.getTracks().forEach((track)=>track.stop());
    currentStream = null;
    recorder = null;
    (0, _jqueryDefault.default)((0, _media.MIC_ICON)).toggleClass("active", false);
    (0, _jqueryDefault.default)((0, _media.MIC_START)).toggleClass("disabled", false);
    (0, _jqueryDefault.default)((0, _media.MIC_STOP)).toggleClass("disabled", true);
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD)).toggleClass("disabled", true);
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD_TRANSCRIPT)).toggleClass("disabled", true);
    (0, _jqueryDefault.default)((0, _media.MIC_STOP_RECORDING)).toggleClass("disabled", true);
}
function startRecording() {
    if (!recorder) {
        console.error("No recorder found");
        return;
    }
    recorder.onerror = (event)=>{
        console.error("Recorder error: ", event.error);
    };
    recorder.ondataavailable = (e)=>chunks.push(e.data);
    recorder.onstop = (e)=>{
        let blob = new Blob(chunks, {
            type: "audio/ogg; codecs=opus"
        });
        chunks = [];
        let audioURL = window.URL.createObjectURL(blob);
        (0, _jqueryDefault.default)((0, _media.MIC_RECORDING)).attr("src", audioURL);
    };
    recorder.start();
    recordTranscript();
}
function recordTranscript() {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (e)=>{
        console.log("onresult", e);
        let transcript = e.results[0][0].transcript;
        (0, _jqueryDefault.default)((0, _media.MIC_TRANSCRIPT)).val(transcript);
    };
    recognition.onaudiostart = (e)=>{
        console.log("Recognition: started listening");
    };
    recognition.onaudioend = (e)=>{
        console.log("Recognition: stopped listening");
    };
    recognition.onspeechstart = (e)=>{
        console.log("Recognition: speech started");
    };
    recognition.onnomatch = (e)=>{
        console.log("Recognition: no match");
    };
    recognition.onerror = (event)=>{
        alert("An error occurred: " + event.error);
        console.error("Recognition error: ", event.error);
    };
    recognition.onstart = (e)=>{
        console.log("Recognition: started");
    };
    recognition.onend = (e)=>{
        console.log("Recognition: ended");
        (0, _jqueryDefault.default)((0, _media.MIC_RECORD_TRANSCRIPT)).toggleClass("disabled", false);
        if (!recorder) (0, _jqueryDefault.default)((0, _media.MIC_STOP_RECORDING)).toggleClass("disabled", true);
    };
    recognition.start();
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD_TRANSCRIPT)).toggleClass("disabled", true);
    (0, _jqueryDefault.default)((0, _media.MIC_STOP_RECORDING)).toggleClass("disabled", false);
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD)).toggleClass("disabled", true);
}
function stopRecording() {
    if (recorder) recorder.stop();
    if (recognition) recognition.stop();
    (0, _jqueryDefault.default)((0, _media.MIC_RECORD)).toggleClass("disabled", false);
    (0, _jqueryDefault.default)((0, _media.MIC_STOP_RECORDING)).toggleClass("disabled", true);
}

},{"jquery":"hgMhh","./media":"bzP8J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzP8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CAM_LIST", ()=>CAM_LIST);
parcelHelpers.export(exports, "WEBCAM_VIDEO", ()=>WEBCAM_VIDEO);
parcelHelpers.export(exports, "WEBCAM_CANVAS", ()=>WEBCAM_CANVAS);
parcelHelpers.export(exports, "WEBCAM_RECORDING", ()=>WEBCAM_RECORDING);
parcelHelpers.export(exports, "WEBCAM_START", ()=>WEBCAM_START);
parcelHelpers.export(exports, "WEBCAM_STOP", ()=>WEBCAM_STOP);
parcelHelpers.export(exports, "WEBCAM_RECORD", ()=>WEBCAM_RECORD);
parcelHelpers.export(exports, "MIC_LIST", ()=>MIC_LIST);
parcelHelpers.export(exports, "MIC_RECORDING", ()=>MIC_RECORDING);
parcelHelpers.export(exports, "MIC_START", ()=>MIC_START);
parcelHelpers.export(exports, "MIC_STOP", ()=>MIC_STOP);
parcelHelpers.export(exports, "MIC_RECORD", ()=>MIC_RECORD);
parcelHelpers.export(exports, "MIC_RECORD_TRANSCRIPT", ()=>MIC_RECORD_TRANSCRIPT);
parcelHelpers.export(exports, "MIC_STOP_RECORDING", ()=>MIC_STOP_RECORDING);
parcelHelpers.export(exports, "MIC_ICON", ()=>MIC_ICON);
parcelHelpers.export(exports, "MIC_TRANSCRIPT", ()=>MIC_TRANSCRIPT);
/**
 *
 * @param {MediaDeviceKind} kind
 */ parcelHelpers.export(exports, "getMediaDevices", ()=>getMediaDevices);
const CAM_LIST = "select#cam-list";
const WEBCAM_VIDEO = "video#webcam-stream";
const WEBCAM_CANVAS = "canvas#canvas";
const WEBCAM_RECORDING = "video#webcam-recording";
const WEBCAM_START = "button#start-webcam";
const WEBCAM_STOP = "button#stop-webcam";
const WEBCAM_RECORD = "button#record-webcam";
const MIC_LIST = "select#mic-list";
const MIC_RECORDING = "audio#mic-recording";
const MIC_START = "button#start-mic";
const MIC_STOP = "button#stop-mic";
const MIC_RECORD = "button#record-mic";
const MIC_RECORD_TRANSCRIPT = "button#record-transcript";
const MIC_STOP_RECORDING = "button#stop-mic-recording";
const MIC_ICON = "div.microphone";
const MIC_TRANSCRIPT = "textarea#mic-transcript";
async function getMediaDevices(kind) {
    let mediaDevices = await navigator.mediaDevices.enumerateDevices();
    let devices = mediaDevices.filter((device)=>device.kind === kind);
    return devices;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Cl9N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadVideoDevices", ()=>loadVideoDevices);
parcelHelpers.export(exports, "setCurrentCam", ()=>setCurrentCam);
parcelHelpers.export(exports, "startVideoStream", ()=>startVideoStream);
parcelHelpers.export(exports, "stopVideoStream", ()=>stopVideoStream);
parcelHelpers.export(exports, "startRecording", ()=>startRecording);
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _media = require("./media");
let currentDeviceID = null;
let currentStream = null;
async function getVideoStream(deviceId) {
    let constraints = {
        audio: false
    };
    if (deviceId) constraints.video = {
        deviceId: deviceId
    };
    else constraints.video = true;
    if (currentStream) currentStream.getTracks().forEach((track)=>track.stop());
    let stream = await navigator.mediaDevices.getUserMedia(constraints);
    currentStream = stream;
    return stream;
}
async function loadVideoDevices() {
    let videoDevices;
    try {
        videoDevices = await (0, _media.getMediaDevices)("videoinput");
    } catch (err) {
        console.error(`An error occurred: ${err}`);
        return [];
    }
    videoDevices.forEach((device)=>{
        (0, _jqueryDefault.default)((0, _media.CAM_LIST)).append(`<option class="cam" value="${device.deviceId}">${device.label}</option>`);
    });
    return videoDevices;
}
async function setCurrentCam(deviceId) {
    console.log("setCurrentCam", deviceId);
    let videoDevices = await (0, _media.getMediaDevices)("videoinput");
    if (videoDevices.length === 0) return false;
    if (deviceId === "default") currentDeviceID = null;
    else currentDeviceID = deviceId;
    return true;
}
async function startVideoStream() {
    /**@type {HTMLVideoElement} */ let video = (0, _jqueryDefault.default)((0, _media.WEBCAM_VIDEO)).get(0);
    try {
        console.log("currentDeviceID", currentDeviceID);
        let stream = await getVideoStream(currentDeviceID);
        video.srcObject = stream;
        await video.play();
        (0, _jqueryDefault.default)((0, _media.WEBCAM_START)).toggleClass("disabled", true);
        (0, _jqueryDefault.default)((0, _media.WEBCAM_STOP)).toggleClass("disabled", false);
        (0, _jqueryDefault.default)((0, _media.WEBCAM_RECORD)).toggleClass("disabled", false);
    } catch (err) {
        console.error(`An error occurred: ${err}`);
    }
}
async function stopVideoStream() {
    /**@type {HTMLVideoElement} */ let video = (0, _jqueryDefault.default)((0, _media.WEBCAM_VIDEO)).get(0);
    if (currentStream) {
        currentStream.getTracks().forEach((track)=>track.stop());
        currentStream = null;
    }
    video.srcObject = null;
    video.pause();
    (0, _jqueryDefault.default)((0, _media.WEBCAM_START)).toggleClass("disabled", false);
    (0, _jqueryDefault.default)((0, _media.WEBCAM_STOP)).toggleClass("disabled", true);
    (0, _jqueryDefault.default)((0, _media.WEBCAM_RECORD)).toggleClass("disabled", true);
}
async function startRecording() {
    let recorder = new MediaRecorder(currentStream);
    let chunks = [];
    recorder.ondataavailable = (e)=>chunks.push(e.data);
    recorder.onstop = (e)=>{
        let blob = new Blob(chunks, {
            type: "video/webm"
        });
        let url = URL.createObjectURL(blob);
        (0, _jqueryDefault.default)((0, _media.WEBCAM_RECORDING)).attr("src", url);
    };
    recorder.start();
    (0, _jqueryDefault.default)((0, _media.WEBCAM_RECORD)).toggleClass("disabled", true);
    setTimeout(()=>{
        recorder.stop();
        (0, _jqueryDefault.default)((0, _media.WEBCAM_RECORD)).toggleClass("disabled", false);
    }, 1000);
    return recorder;
}

},{"jquery":"hgMhh","./media":"bzP8J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fh23Q","bNKaB"], "bNKaB", "parcelRequiree6be")

//# sourceMappingURL=index.0641b553.js.map
