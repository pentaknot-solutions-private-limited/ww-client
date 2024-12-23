"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 6823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blogs),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/graphql/queries/getBlogs.ts
var getBlogs = __webpack_require__(7037);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/blogCards.tsx




function BlogCards(blog) {
    var ref;
    // Variables
    const router = (0,router_.useRouter)();
    // Functions
    const handleClick = ()=>{
        const encodedSlug = encodeURIComponent(blog.url_slug);
        router.push({
            pathname: `/blogs/${encodedSlug}`
        });
        blog === null || blog === void 0 ? void 0 : blog.setLoading(true);
    };
    // Effects
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: handleClick,
        className: "cars-cards",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: blog === null || blog === void 0 ? void 0 : (ref = blog.image) === null || ref === void 0 ? void 0 : ref.url,
                width: 435,
                height: 270,
                alt: "blog-image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: blog === null || blog === void 0 ? void 0 : blog.title
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/context/LoadingContext.js
var LoadingContext = __webpack_require__(8772);
// EXTERNAL MODULE: ./src/lib/apollo-client.ts
var apollo_client = __webpack_require__(8994);
;// CONCATENATED MODULE: ./pages/blogs/index.tsx








const StyledGrid = (0,material_.styled)(material_.Grid)`
  @media (max-width: 576px) {
    justify-content: center !important;
  }
`;
function Blogs({ blogs  }) {
    const { siteLoading , setSiteLoading  } = (0,external_react_.useContext)(LoadingContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        setSiteLoading(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "faq-section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Wish Wheels | Blogs"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                maxWidth: "lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "faq-section-title mb-24",
                        children: "Blogs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "blog-lists",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledGrid, {
                            container: true,
                            rowSpacing: 3,
                            spacing: 2,
                            children: blogs && blogs.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    sm: 6,
                                    md: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCards, {
                                        ...blog,
                                        setLoading: setSiteLoading
                                    })
                                }, index)
                            )
                        })
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const data = await (0,apollo_client/* fetchGraphQL */.U)({
        query: getBlogs/* GET_BLOGS */.f
    });
    const blogs = data.blogs.data.map((blog)=>{
        var ref;
        return {
            id: blog.id,
            title: blog.attributes.title,
            url_slug: blog.attributes.url_slug,
            image: ((ref = blog.attributes.image) === null || ref === void 0 ? void 0 : ref.data) ? {
                url: blog.attributes.image.data.attributes.url
            } : null,
            content: blog.attributes.content
        };
    });
    return {
        props: {
            blogs
        }
    };
}


/***/ }),

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LoadingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    siteLoading: false,
    setSiteLoading: (loading)=>{}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingContext);


/***/ }),

/***/ 7037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ GET_BLOGS)
/* harmony export */ });
const GET_BLOGS = `
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          title
          url_slug
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          content
        }
      }
    }
  }
`;


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,994], () => (__webpack_exec__(6823)));
module.exports = __webpack_exports__;

})();