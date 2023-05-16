"use strict";
(() => {
var exports = {};
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 41901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/prompt/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "DELETE": () => (DELETE),
  "GET": () => (GET),
  "PATCH": () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(76145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(19532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
;// CONCATENATED MODULE: ./models/prompt.js

const PromptSchema = new external_mongoose_namespaceObject.Schema({
    creator: {
        type: external_mongoose_namespaceObject.Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type: String,
        required: [
            true,
            "Prompt is required."
        ]
    },
    tag: {
        type: String,
        required: [
            true,
            "Tag is required."
        ]
    }
});
const Prompt = external_mongoose_namespaceObject.models.Prompt || (0,external_mongoose_namespaceObject.model)("Prompt", PromptSchema);
/* harmony default export */ const models_prompt = ((/* unused pure expression or super */ null && (Prompt)));

;// CONCATENATED MODULE: ./app/api/prompt/[id]/route.js

// import { connectToDB } from "@utils/database";
const GET = async (request, { params  })=>{
// try {
//     await connectToDB()
//     const prompt = await Prompt.findById(params.id).populate("creator")
//     if (!prompt) return new Response("Prompt Not Found", { status: 404 });
//     return new Response(JSON.stringify(prompt), { status: 200 })
// } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
// }
};
const PATCH = async (request, { params  })=>{
    const { prompt , tag  } = await request.json();
// try {
//     await connectToDB();
//     // Find the existing prompt by ID
//     const existingPrompt = await Prompt.findById(params.id);
//     if (!existingPrompt) {
//         return new Response("Prompt not found", { status: 404 });
//     }
//     // Update the prompt with new data
//     existingPrompt.prompt = prompt;
//     existingPrompt.tag = tag;
//     await existingPrompt.save();
//     return new Response("Successfully updated the Prompts", { status: 200 });
// } catch (error) {
//     return new Response("Error Updating Prompt", { status: 500 });
// }
};
const DELETE = async (request, { params  })=>{
// try {
//     await connectToDB();
//     // Find the prompt by ID and remove it
//     await Prompt.findByIdAndRemove(params.id);
//     return new Response("Prompt deleted successfully", { status: 200 });
// } catch (error) {
//     return new Response("Error deleting prompt", { status: 500 });
// }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fprompt%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Fjinsup%2FDesktop%2FCoding%2FReact%2Fmax%2F(section%2023)%20nextjs%2Fpromptopia%2Fapp&appPaths=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/prompt/[id]",
    resolvedPagePath: "/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/promptopia/app/api/prompt/[id]/route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/prompt/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [319,601], () => (__webpack_exec__(41901)));
module.exports = __webpack_exports__;

})();