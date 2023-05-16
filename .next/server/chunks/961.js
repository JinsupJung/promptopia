exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 82411:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 82411;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 44217:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 78301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 54765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 58627:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 74032));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59464))

/***/ }),

/***/ 59464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Nav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/mongoose/index.js
var mongoose = __webpack_require__(85485);
;// CONCATENATED MODULE: ./models/user.js

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [
            true,
            "Email already exists!"
        ],
        required: [
            true,
            "Email is required!"
        ]
    },
    username: {
        type: String,
        required: [
            true,
            "Username is required!"
        ],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"
        ]
    },
    image: {
        type: String
    }
});
// const User = models.User || model("User", UserSchema);
const User = (0,mongoose.model)("User", UserSchema);
/* harmony default export */ const user = ((/* unused pure expression or super */ null && (User)));

;// CONCATENATED MODULE: ./components/Nav.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 



// import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// import mongoose from 'mongoose';
// import { connectToDB } from '@utils/database';
const Nav = ()=>{
    // const { data: session } = useSession();
    const [providers, setProviders] = (0,react_.useState)(null);
    const [toggleDropdown, setToggleDropdown] = (0,react_.useState)(false);
    const [isLogin, setIsLogin] = (0,react_.useState)(false);
    const [isConnect, setIsConnect] = (0,react_.useState)(false);
    const signInHandler = ()=>{
        setIsLogin(true);
    // alert(isLogin);
    };
    const signOutHandler = ()=>{
        setIsLogin(false);
    // alert(isLogin);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex-between w-full mb-16 pt-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "flex gap-2 flex-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/assets/images/logo.svg",
                        alt: "logo",
                        width: 30,
                        height: 30,
                        className: "object-contain"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "logo_text",
                        children: "Promptopia"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:flex hidden",
                children: isLogin ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex gap-3 md:gap-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/create-prompt",
                            className: "black_btn",
                            children: "Create Post"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            onClick: signOutHandler,
                            className: "outline_btn",
                            children: "Sign Out"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/profile",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/assets/images/logo.svg",
                                width: 37,
                                height: 37,
                                className: "rounded-full",
                                alt: "profile"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        // onClick={() => {
                        //   signIn(provider.id);
                        // }}
                        onClick: signInHandler,
                        className: "black_btn",
                        children: "Sign in"
                    }, "key1")
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:hidden flex relative",
                children: isLogin ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/images/logo.svg",
                            width: 37,
                            height: 37,
                            className: "rounded-full",
                            alt: "profile",
                            onClick: ()=>setToggleDropdown(!toggleDropdown)
                        }),
                        toggleDropdown && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "dropdown",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/profile",
                                    className: "dropdown_link",
                                    onClick: ()=>setToggleDropdown(false),
                                    children: "My Profile"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/create-prompt",
                                    className: "dropdown_link",
                                    onClick: ()=>setToggleDropdown(false),
                                    children: "Create Prompt"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    // onClick={() => {
                                    //   setToggleDropdown(false);
                                    //   signOut();
                                    // }}
                                    onClick: signOutHandler,
                                    className: "mt-5 w-full black_btn",
                                    children: "Sign Out"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        // onClick={() => {
                        //   signIn(provider.id);
                        // }}
                        onClick: signInHandler,
                        className: "black_btn",
                        children: "Sign in"
                    }, "key1")
                })
            })
        ]
    });
};
/* harmony default export */ const components_Nav = (Nav);


/***/ }),

/***/ 74032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* __next_internal_client_entry_do_not_use__  auto */ // import { SessionProvider } from "next-auth/react";
const Provider = ({ children , session  })=>// <SessionProvider session={session}>
    ({
        children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);


/***/ }),

/***/ 82380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36770);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66910);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46495);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);




const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
};
const RootLayout = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "main",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "gradient"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "app",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_components_Nav__WEBPACK_IMPORTED_MODULE_1___default()), {}),
                        children
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);


/***/ }),

/***/ 36770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(35985);
module.exports = createProxy("/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/promptopia/components/Nav.jsx");


/***/ }),

/***/ 66910:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(35985);
module.exports = createProxy("/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/promptopia/components/Provider.jsx");


/***/ }),

/***/ 46495:
/***/ (() => {



/***/ })

};
;