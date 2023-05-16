(() => {
var exports = {};
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 69207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerHooks": () => (/* binding */ headerHooks),
/* harmony export */   "originalPathname": () => (/* binding */ originalPathname),
/* harmony export */   "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
/* harmony export */   "routeModule": () => (/* binding */ routeModule),
/* harmony export */   "serverHooks": () => (/* binding */ serverHooks),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
/* harmony export */   "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76145);
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19532);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_jinsup_Desktop_Coding_React_max_section_23_nextjs_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78360);
/* harmony import */ var _Users_jinsup_Desktop_Coding_React_max_section_23_nextjs_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_jinsup_Desktop_Coding_React_max_section_23_nextjs_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__);

    

    

    

    const routeModule = new (next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default())({
    userland: _Users_jinsup_Desktop_Coding_React_max_section_23_nextjs_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__,
    pathname: "/api/auth/[...nextauth]",
    resolvedPagePath: "/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/promptopia/app/api/auth/[...nextauth]/route.js",
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

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ }),

/***/ 78360:
/***/ (() => {

// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import User from '@models/user';
// import { connectToDB } from '@utils/database';
// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     })
//   ],
//   callbacks: {
//     async session({ session }) {
//         alert(session);
//       // store the user id from MongoDB to session
//       const sessionUser = await User.findOne({ email: session.user.email });
//       session.user.id = sessionUser._id.toString();
//       return session;
//     },
//     async signIn({ account, profile, user, credentials }) {
//       try {
//         await connectToDB();
//         // check if user already exists
//         const userExists = await User.findOne({ email: profile.email });
//         // if not, create a new document and save user in MongoDB
//         if (!userExists) {
//           await User.create({
//             email: profile.email,
//             username: profile.name.replace(" ", "").toLowerCase(),
//             image: profile.picture,
//           });
//         }
//         return true
//       } catch (error) {
//         console.log("Error checking if user exists: ", error.message);
//         return false
//       }
//     },
//     async redirect({ url, baseUrl }) {
//         // Allows relative callback URLs
//         if (url.startsWith("/")) return `${baseUrl}${url}`
//         // Allows callback URLs on the same origin
//         else if (new URL(url).origin === baseUrl) return url
//         return baseUrl
//       },
//   }
// })
// export { handler as GET, handler as POST }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [319,601], () => (__webpack_exec__(69207)));
module.exports = __webpack_exports__;

})();