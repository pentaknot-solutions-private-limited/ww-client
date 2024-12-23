"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 2463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _src_services_cars_carService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(914);
/* harmony import */ var _src_graphql_queries_getBlogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7037);
/* harmony import */ var _src_lib_apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8994);



//pages/sitemap.xml.js
const SITE_URL = "https://wishwheels.com";
function generateSiteMap(carData, blogs) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}</loc>
     </url>
     <url>
       <loc>${SITE_URL}/about-us</loc>
     </url>
     <url>
       <loc>${SITE_URL}/contact-us</loc>
     </url>
     <url>
       <loc>${SITE_URL}/faq</loc>
     </url>
     <url>
       <loc>${SITE_URL}/car-collection</loc>
     </url>
     <url>
       <loc>${SITE_URL}/sell-car</loc>
     </url>
     <url>
       <loc>${SITE_URL}/history</loc>
     </url>

     ${carData.map(({ _id  })=>{
        return `
       <url>
           <loc>${`${SITE_URL}/car-detail?carId=${_id}`}</loc>
       </url>
     `;
    }).join("")}

        ${blogs.map(({ url_slug  })=>{
        return `
       <url>
           <loc>${`${SITE_URL}/blogs/${url_slug}`}</loc>
       </url>
     `;
    }).join("")}
   </urlset>
 `;
}
function SiteMap() {
// getServerSideProps will do the heavy lifting
}
async function getServerSideProps({ res  }) {
    // We make an API call to gather the URLs for our site
    const _carService = new _src_services_cars_carService__WEBPACK_IMPORTED_MODULE_0__/* .CarService */ .Z();
    const allCarsList = _carService.getAllCollection();
    const blogData = await (0,_src_lib_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* .fetchGraphQL */ .U)({
        query: _src_graphql_queries_getBlogs__WEBPACK_IMPORTED_MODULE_2__/* .GET_BLOGS */ .f
    });
    const blogs = blogData.blogs.data.map((blog)=>{
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
    const request = await allCarsList;
    const carData = await request.data.data;
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(carData, blogs);
    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);


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

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [914,994], () => (__webpack_exec__(2463)));
module.exports = __webpack_exports__;

})();