"use strict";
exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/wishwheels-logo.b5878522.svg","height":26,"width":30});

/***/ }),

/***/ 7750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: ./src/components/Footer/footerElement.tsx

const FooterWrapper = (0,system_.styled)("footer")`
background: #0B0D17;
padding:40px 0px;
`;
const FooterLinkTitle = (0,system_.styled)("h5")`
font-family:var(--primary-fonts)!important;
font-weight: 500;
font-size: 20px;
color: #FFFFFF;
margin: 0px 0px 15px 0px;
`;
const FooterLinkContainer = (0,system_.styled)("ul")`
    list-style:none;
    padding:0px;
    margin:0px;

    & a{
        font-family:"Helvetica";
        font-weight: 400;
        font-size: 16px;
        color: #D9DBE1;
        display:inline-block;
        margin-bottom:10px;
    }
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/wishwheels-logo.svg
var wishwheels_logo = __webpack_require__(819);
;// CONCATENATED MODULE: ./public/Instagram.svg
/* harmony default export */ const Instagram = ({"src":"/_next/static/media/Instagram.8174448e.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./public/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.44a33c90.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./public/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.b0cd69bb.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/components/CtaBanner.tsx



function CtaBanner({ catTitle , ctaAction , ctaText  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "cta-banner",
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "A car for every purse and purpose."
                })
            })
        })
    });
};

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/config/apiConfig.ts
var apiConfig = __webpack_require__(2122);
;// CONCATENATED MODULE: ./src/services/social/index.ts


class SocialMediaService {
    socialMedia() {
        return external_axios_default().get(`${apiConfig/* APIURL */.z}/socialMedia`);
    }
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/context/AuthContext.js
var AuthContext = __webpack_require__(39);
;// CONCATENATED MODULE: ./src/components/Footer/footer.tsx














function Footer({ className , ctaTitle , ctaAction , ctaBtnText  }) {
    // States
    const { 0: socialLinkList , 1: setSocialLinkList  } = (0,external_react_.useState)();
    // Variables
    const socialMediaService = new SocialMediaService();
    // Context
    const { authenticated , setAuthenticated  } = (0,external_react_.useContext)(AuthContext/* default */.Z);
    // Funtions
    const socialMediaLink = ()=>{
        const socialMediaApiCall = socialMediaService.socialMedia();
        socialMediaApiCall.then((res)=>{
            var ref;
            if (!(res === null || res === void 0 ? void 0 : (ref = res.data) === null || ref === void 0 ? void 0 : ref.error)) {
                var ref1;
                // console.log(res?.data?.data);
                setSocialLinkList(res === null || res === void 0 ? void 0 : (ref1 = res.data) === null || ref1 === void 0 ? void 0 : ref1.data);
            }
        });
    };
    const sellcar = ()=>{
        let jwt;
        if (false) {}
        if (jwt) {
            setAuthenticated(false);
            router_default().push({
                pathname: "/sell-car"
            });
        } else {
            setAuthenticated(true);
        }
    };
    // Effects
    (0,external_react_.useEffect)(()=>{
        socialMediaLink();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${className} d-flex`,
        style: {
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "unset"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CtaBanner, {
                catTitle: ctaTitle,
                ctaAction: ctaAction,
                ctaText: ctaBtnText
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    maxWidth: "lg",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                item: true,
                                xs: 12,
                                md: 8,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-logo",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: wishwheels_logo/* default.src */.Z.src,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Wish Wheels"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "copy-right-text",
                                        children: "Copyright \xa9 2022 Wish Wheels "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "copy-right-text",
                                        children: "All rights reserved"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social-icons",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: socialLinkList && (socialLinkList === null || socialLinkList === void 0 ? void 0 : socialLinkList.map((item, index)=>{
                                                /*#__PURE__*/ return jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: item === null || item === void 0 ? void 0 : item.link,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: (item === null || item === void 0 ? void 0 : item.title) == "Instagram" ? Instagram : (item === null || item === void 0 ? void 0 : item.title) == "Facebook" ? facebook : youtube,
                                                            alt: item === null || item === void 0 ? void 0 : item.title,
                                                            width: 32,
                                                            height: 32
                                                        })
                                                    })
                                                }, `link-${item === null || item === void 0 ? void 0 : item.title}`);
                                            }))
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                    container: true,
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            item: true,
                                            xs: 6,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(FooterLinkTitle, {
                                                    children: "Company"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterLinkContainer, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/about-us",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "About Us"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: sellcar,
                                                                className: "cursor-pointer",
                                                                children: "Sell car"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/car-collection",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Browse Car"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/faq",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "FAQ"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            item: true,
                                            xs: 6,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(FooterLinkTitle, {
                                                    children: "Support"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterLinkContainer, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/terms-of-service",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Terms of service"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/privacy-policy",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Privacy policy"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/contact-us",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Contact Us"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    authenticated: false,
    setAuthenticated: (auth)=>{}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ })

};
;