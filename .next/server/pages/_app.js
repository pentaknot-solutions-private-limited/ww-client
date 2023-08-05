"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/wishwheels-logo.b5878522.svg","height":26,"width":30});

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6507);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8204);
/* harmony import */ var _src_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _src_context_ContactFormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8579);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_hooks_installPWA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8854);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_form_popup_FormPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9358);
/* harmony import */ var _src_services_contact_us__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_form_popup_FormPopup__WEBPACK_IMPORTED_MODULE_9__]);
_src_components_form_popup_FormPopup__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















// const outerTheme = createTheme({
//   typography:{
//     fontFamily: 'SF Compact Display',
//   }
// });
function MyApp({ Component , pageProps  }) {
    const { 0: authenticated , 1: setAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: isIos , 1: setIsIos  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    const { 0: hidePopup , 1: setHidePopup  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: openModel , 1: setOpenModel  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: isUserIsSubscribed , 1: setIsUserIsSubscribed  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: showPopupForm , 1: setShowPopupForm  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: successAlert , 1: setSuccessAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    // Variables
    const hide = ()=>{
        setHidePopup(true);
    };
    const contactUsLeadService = new _src_services_contact_us__WEBPACK_IMPORTED_MODULE_10__/* .ContactUsLeadService */ .w();
    const _contactUsLead = (payload, callBack)=>{
        const faqData = contactUsLeadService.ContactUsLead(payload);
        faqData.then((res)=>{
            if (res.status == 200) {
                localStorage.setItem("isUserIsSubscribed", JSON.stringify(true));
                setIsUserIsSubscribed(true);
                setShowPopupForm(false);
                setSuccessAlert(true);
                setTimeout(()=>{
                    setSuccessAlert(false);
                }, 3000);
            } else {
                localStorage.setItem("isUserIsSubscribed", JSON.stringify(false));
                setIsUserIsSubscribed(false);
                setShowPopupForm(true);
                setSuccessAlert(false);
            }
            callBack();
        }).catch((error)=>{
            console.log(error);
            callBack();
            localStorage.setItem("isUserIsSubscribed", JSON.stringify(false));
            setIsUserIsSubscribed(false);
            setShowPopupForm(true);
            setSuccessAlert(false);
        });
    };
    // Effects
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        let userIsSubscribed = JSON.parse(localStorage.getItem("isUserIsSubscribed"));
        userIsSubscribed ? setIsUserIsSubscribed(true) : setIsUserIsSubscribed(false);
        let installed;
        if (false) {}
        if (installed === "true") {
            setIsIos(false);
        } else if (window.navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            setIsIos(true);
        } else {
            setIsIos(false);
        }
        setTimeout(()=>{
            setShowPopupForm(true);
        }, 3000);
    }, []);
    // useEffect(() => {
    //   if (showPopupForm) {
    //     setIsUserIsSubscribed(false);
    //   }
    // }, [showPopupForm]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "https://www.googletagmanager.com/gtag/js?id=AW-11087489843"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                id: "google-analytics",
                children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11087489843');
        `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                theme: _src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
                    value: {
                        authenticated,
                        setAuthenticated
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_context_ContactFormContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Provider */ .Z.Provider, {
                        value: {
                            showPopupForm,
                            setShowPopupForm
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                }),
                                isIos && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    // className="add-to-home-screen"
                                    className: !hidePopup ? "add-to-home-screen" : "add-to-home-screen hide",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setOpenModel(true)
                                            ,
                                            className: "btn-secondary",
                                            children: "Add to Home Screen"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "closebtn",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                localStorage.setItem("installPrompt", JSON.stringify(true));
                                                hide();
                                            },
                                            children: "\xd7"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_hooks_installPWA__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            open: openModel,
                                            setOpen: setOpenModel
                                        })
                                    ]
                                }),
                                !isUserIsSubscribed && showPopupForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_form_popup_FormPopup__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    contactUsLead: _contactUsLead,
                                    showPopupForm: showPopupForm,
                                    setShowPopupForm: setShowPopupForm
                                }) : null,
                                successAlert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Alert, {
                                    className: "success-login-popup",
                                    severity: "success",
                                    action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.IconButton, {
                                        "aria-label": "close",
                                        color: "inherit",
                                        size: "small",
                                        onClick: ()=>{
                                            setSuccessAlert(false);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            fontSize: "inherit"
                                        })
                                    }),
                                    children: "Thanks for sharing details - Our team will contact you shortly."
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6189);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const FormPopup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref1)=>{
    // States
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Form Hook
    const { handleSubmit , control , formState: { isValid  } , reset , watch , setValue ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        mode: "all",
        defaultValues: {
            name: "",
            phoneNumber: ""
        }
    });
    const handleOnSubmit = (e)=>{
        setLoading(true);
        props === null || props === void 0 ? void 0 : props.contactUsLead(e, ()=>{
            reset({
                name: "",
                phoneNumber: ""
            });
            setLoading(false);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: (e)=>{
                    e.preventDefault();
                    props === null || props === void 0 ? void 0 : props.setShowPopupForm(false);
                },
                className: "dropbox"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "popup-form fade-in",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "close-btn",
                        onClick: (e)=>{
                            e.preventDefault();
                            props === null || props === void 0 ? void 0 : props.setShowPopupForm(false);
                        },
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Get Exclusive Access to Premium Cars"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Share your details below for a personalized experience and let our team assist you in finding the perfect premium car that matches your style and preferences."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        onSubmit: handleSubmit(handleOnSubmit),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            container: true,
                            spacing: 2,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    md: 9 / 2,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        sx: {
                                            background: "#E6E6E6;",
                                            borderRadius: "4px 4px 0px 0px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
                                            name: "name",
                                            control: control,
                                            rules: {
                                                required: {
                                                    value: true,
                                                    message: "This is required"
                                                }
                                            },
                                            render: ({ field , fieldState  })=>{
                                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalElements__WEBPACK_IMPORTED_MODULE_2__/* .StyledTextField */ .tH, {
                                                    required: true,
                                                    name: "name",
                                                    error: true,
                                                    value: field.value,
                                                    onChange: (e)=>{
                                                        setValue("name", e === null || e === void 0 ? void 0 : e.target.value, {
                                                            shouldValidate: true
                                                        });
                                                    },
                                                    variant: "filled",
                                                    label: "Name",
                                                    fullWidth: true
                                                });
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    md: 9 / 2,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        sx: {
                                            background: "#E6E6E6;",
                                            borderRadius: "4px 4px 0px 0px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
                                            name: "phoneNumber",
                                            control: control,
                                            rules: {
                                                validate: (value)=>{
                                                    var ref;
                                                    return ((ref = value === null || value === void 0 ? void 0 : value.toString()) === null || ref === void 0 ? void 0 : ref.length) === 10 || "phone number is not valid";
                                                },
                                                required: {
                                                    value: true,
                                                    message: "This is required"
                                                }
                                            },
                                            render: ({ field , fieldState  })=>{
                                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalElements__WEBPACK_IMPORTED_MODULE_2__/* .StyledTextField */ .tH, {
                                                    required: true,
                                                    name: "phoneNumber",
                                                    error: true,
                                                    value: field.value,
                                                    type: "number",
                                                    onInput: (e)=>{
                                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10);
                                                    },
                                                    onChange: (e)=>{
                                                        setValue("phoneNumber", e === null || e === void 0 ? void 0 : e.target.value, {
                                                            shouldValidate: true
                                                        });
                                                    },
                                                    variant: "filled",
                                                    label: "Phone Number",
                                                    fullWidth: true
                                                });
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    md: 3,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        styles: {
                                            width: "100%"
                                        },
                                        text: loading ? "loading..." : "Get In Touch",
                                        type: "submit",
                                        disabled: !isValid,
                                        arrow: true
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormPopup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ APIURL)
/* harmony export */ });
// export const APIURL = 'http://3.139.226.194:3000/api'
const APIURL = "https://api.wishwheels.com/api" // export const APIURL = 'https://jsonplaceholder.typicode.com'
;


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


/***/ }),

/***/ 8579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ContactFormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    showPopupForm: false,
    setShowPopupForm: (isActive)=>{}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactFormContext);


/***/ }),

/***/ 8854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InstallPWAModel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Modal"
const Modal_namespaceObject = require("@mui/material/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: ./public/apple-share-icon.svg
/* harmony default export */ const apple_share_icon = ({"src":"/_next/static/media/apple-share-icon.de7e75f6.svg","height":512,"width":512});
// EXTERNAL MODULE: ./public/wishwheels-logo.svg
var wishwheels_logo = __webpack_require__(819);
;// CONCATENATED MODULE: ./src/hooks/installPWA.tsx

/* eslint-disable @next/next/no-img-element */ 



const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
function InstallPWAModel({ open , setOpen  }) {
    // const [open, setOpen] = React.useState(true);
    const handleOpen = ()=>setOpen(true)
    ;
    const handleClose = ()=>setOpen(false)
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
            open: open,
            onClose: handleClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "add-to-home-screen-popup",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: wishwheels_logo/* default.src */.Z.src,
                        className: "site-logo",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Install Wish Wheels"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Install this application on your homescreen for a better experience."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-small",
                        children: [
                            "Tap",
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: apple_share_icon.src,
                                className: "share-icon-img",
                                alt: "Add to homescreen"
                            }),
                            'then "Add to Home Screen"'
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "uk-button button-minimal",
                        onClick: ()=>{
                            localStorage.setItem("installPrompt", JSON.stringify(true));
                            handleClose();
                        },
                        children: "Close"
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./public/wishwheels-logo.svg
var wishwheels_logo = __webpack_require__(819);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/components/GlobalElements.tsx
var GlobalElements = __webpack_require__(210);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: ./src/components/Button.tsx + 1 modules
var Button = __webpack_require__(6189);
;// CONCATENATED MODULE: ./src/components/form/otpForm.tsx


function OtpForm(props) {
    const { formik  } = props;
    const handleMaxLength = (elmnt)=>{
        if (elmnt.target.value.length > elmnt.target.maxLength) elmnt.target.value = elmnt.target.value.slice(0, elmnt.target.maxLength);
    };
    const inputfocus = (elmnt)=>{
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {
                elmnt.target.parentNode.childNodes[next].focus();
            }
        } else {
            if (elmnt.target.value != "") {
                const next = elmnt.target.tabIndex;
                if (next < 6) {
                    elmnt.target.parentNode.childNodes[next].focus();
                }
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "otp-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                children: "Enter OTP received on your mobile and email"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "otpContainer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "otp1",
                        value: formik.values.otp1,
                        onChange: formik.handleChange,
                        type: "number",
                        className: "otpInput",
                        onInput: (e)=>handleMaxLength(e)
                        ,
                        maxLength: 1,
                        tabIndex: 1,
                        onKeyUp: (e)=>inputfocus(e)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "otp2",
                        value: formik.values.otp2,
                        onChange: formik.handleChange,
                        type: "number",
                        className: "otpInput",
                        maxLength: 1,
                        tabIndex: 2,
                        onKeyUp: (e)=>inputfocus(e)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "otp3",
                        value: formik.values.otp3,
                        onChange: formik.handleChange,
                        type: "number",
                        className: "otpInput",
                        maxLength: 1,
                        tabIndex: 3,
                        onInput: (e)=>handleMaxLength(e)
                        ,
                        onKeyUp: (e)=>inputfocus(e)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "otp4",
                        value: formik.values.otp4,
                        onChange: formik.handleChange,
                        type: "number",
                        className: "otpInput",
                        maxLength: 1,
                        tabIndex: 4,
                        onInput: (e)=>handleMaxLength(e)
                        ,
                        onKeyUp: (e)=>inputfocus(e)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "otp5",
                        value: formik.values.otp5,
                        onChange: formik.handleChange,
                        type: "number",
                        className: "otpInput",
                        maxLength: 1,
                        tabIndex: 5,
                        onInput: (e)=>handleMaxLength(e)
                        ,
                        onKeyUp: (e)=>inputfocus(e)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "otp6",
                        value: formik.values.otp6,
                        onChange: formik.handleChange,
                        type: "number",
                        className: "otpInput",
                        maxLength: 1,
                        tabIndex: 6,
                        onInput: (e)=>handleMaxLength(e)
                        ,
                        onKeyUp: (e)=>inputfocus(e)
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/authenticate/authenticate.tsx








function TabPanel(props) {
    const { children , value , index , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: children
        })
    });
}
function Authenticate({ generateOtp , verifyOtp , authenticationError , setAuthenticationError , loading , userSignUp , otpModal , sendOtp  }) {
    // States
    const { 0: value , 1: setValue  } = (0,external_react_.useState)(0);
    const { 0: loggedInData , 1: setLoggedInData  } = (0,external_react_.useState)();
    // const [otpModal, setOptModal] = useState(false);
    const { 0: otpData , 1: setOtpData  } = (0,external_react_.useState)();
    const { 0: signInError , 1: setSignInError  } = (0,external_react_.useState)(true);
    const { 0: signUpData , 1: setSignData  } = (0,external_react_.useState)();
    // Variable
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validationSchema1 = external_yup_.object().shape({
        userData: external_yup_.string().required("phone number or Email  is required")
    });
    const validationSchema2 = external_yup_.object().shape({
        firstName: external_yup_.string().required("Field cannot be blank"),
        lastName: external_yup_.string(),
        emailId: external_yup_.string(),
        phoneNumber: external_yup_.string().required("Field cannot be blank")
    });
    const validationSchema3 = external_yup_.object().shape({
        otp1: external_yup_.number().required(),
        otp2: external_yup_.number().required(),
        otp3: external_yup_.number().required(),
        otp4: external_yup_.number().required(),
        otp5: external_yup_.number().required(),
        otp6: external_yup_.number().required()
    });
    const initialValues1 = {
        userData: ""
    };
    const initialValues2 = {
        firstName: "",
        lastName: "",
        emailId: "",
        phoneNumber: ""
    };
    const initialValues3 = {
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
        otp5: "",
        otp6: ""
    };
    // Functions
    const handleChange = (event, newValue)=>{
        setValue(newValue);
        setAuthenticationError(null);
    };
    const signInHandelSubmit = (values, { resetForm  })=>{
        setAuthenticationError(null);
        setLoggedInData(values);
        // handleOtpOpen();
        // setLoading(true);
        setTimeout(function() {
            resetForm();
        }, 1500);
    };
    const signUpHandelSubmit = (values, { resetForm  })=>{
        setAuthenticationError(null);
        let { firstName , lastName , emailId , phoneNumber  } = values;
        let payload = emailId ? {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
            phoneNumber: phoneNumber
        } : {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        };
        setSignData(payload);
        setTimeout(function() {
            resetForm();
        }, 1500);
    };
    const otpHandelSubmit = (values, { resetForm  })=>{
        setAuthenticationError(null);
        const otp = `
            ${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}
            `;
        setOtpData(otp.toString().replaceAll(/\s/g, ""));
        setTimeout(function() {
            resetForm();
        }, 1500);
    };
    const sendOtpCaller = ()=>{
        setLoggedInData({
            userData: signUpData === null || signUpData === void 0 ? void 0 : signUpData.phoneNumber
        });
    };
    // Effects
    (0,external_react_.useEffect)(()=>{
        if (loggedInData) {
            generateOtp(loggedInData);
        }
    }, [
        loggedInData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (signUpData) {
            userSignUp(signUpData);
        }
    }, [
        signUpData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (otpData) {
            verifyOtp(otpData, loggedInData);
        }
    }, [
        otpData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (sendOtp) {
            sendOtpCaller();
        }
    }, [
        sendOtp
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: otpModal && otpModal ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "authentication-otp-form",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                initialValues: initialValues3,
                validationSchema: validationSchema3,
                onSubmit: otpHandelSubmit,
                children: (formik)=>/*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Form, {
                        autoComplete: "off",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "otp-authentication-wrapper",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(OtpForm, {
                                        formik: formik
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "btn-wrapper d-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "Authentication-error error",
                                                children: authenticationError
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                type: "submit",
                                                text: loading ? "Verifying..." : "Verify",
                                                styles: {
                                                    marginLeft: "auto"
                                                },
                                                disabled: !(formik.isValid && formik.dirty) || loading,
                                                arrow: false
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "authentication-user-form",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Tabs, {
                    value: value,
                    onChange: handleChange,
                    className: "authenticationTabs",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                            label: "Sign In"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                            label: "Sign Up"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                    value: value,
                    index: 0,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                        initialValues: initialValues1,
                        validationSchema: validationSchema1,
                        onSubmit: signInHandelSubmit,
                        children: (formik)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                                autoComplete: "off",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                        container: true,
                                        spacing: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            xs: 12,
                                            className: "authentication-form-field",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                autoComplete: "" + Math.random(),
                                                name: "userData",
                                                value: formik.values.userData,
                                                onChange: (event)=>{
                                                    formik.handleChange(event);
                                                    if (event.target.value > 3 && /\d/.test(event.target.value)) {
                                                        if (phoneRegExp.test(event.target.value)) {
                                                            setSignInError(false);
                                                        } else {
                                                            setSignInError(true);
                                                        }
                                                    // phoneRegExp.test(event.target.value)
                                                    } else {
                                                        if (emailRegExp.test(event.target.value)) {
                                                            setSignInError(false);
                                                        } else {
                                                            setSignInError(true);
                                                        }
                                                    }
                                                },
                                                onBlur: formik.handleBlur,
                                                variant: "filled",
                                                error: true,
                                                label: "Phone number or Email",
                                                // helperText={formik.touched.firstName && formik.errors.firstName}
                                                fullWidth: true
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "btn-wrapper d-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "Authentication-error error",
                                                children: authenticationError
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                type: "submit",
                                                disabled: signInError || loading || !(formik.isValid && formik.dirty),
                                                text: loading ? "Signing..." : "Sign In",
                                                styles: {
                                                    marginLeft: "auto"
                                                },
                                                // disabled={!(props.isValid && props.dirty)}
                                                arrow: false
                                            })
                                        ]
                                    })
                                ]
                            })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                    value: value,
                    index: 1,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                        initialValues: initialValues2,
                        validationSchema: validationSchema2,
                        onSubmit: signUpHandelSubmit,
                        children: (formik)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                                autoComplete: "off",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        container: true,
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                item: true,
                                                xs: 6,
                                                md: 6,
                                                className: "authentication-form-field",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                        required: true,
                                                        autoComplete: "" + Math.random(),
                                                        name: "firstName",
                                                        value: formik.values.firstName,
                                                        onChange: formik.handleChange,
                                                        onBlur: formik.handleBlur,
                                                        variant: "filled",
                                                        error: true,
                                                        label: "First Name",
                                                        // helperText={formik.touched.firstName && formik.errors.firstName}
                                                        fullWidth: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "error",
                                                        children: formik.touched.firstName && formik.errors.firstName
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                item: true,
                                                xs: 6,
                                                md: 6,
                                                className: "authentication-form-field",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                        name: "lastName",
                                                        autoComplete: "" + Math.random(),
                                                        value: formik.values.lastName,
                                                        onChange: formik.handleChange,
                                                        onBlur: formik.handleBlur,
                                                        variant: "filled",
                                                        label: "Last Name",
                                                        fullWidth: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "error",
                                                        children: formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : null
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                item: true,
                                                xs: 6,
                                                md: 6,
                                                className: "authentication-form-field",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                        required: true,
                                                        name: "phoneNumber",
                                                        autoComplete: "" + Math.random(),
                                                        error: true,
                                                        value: formik.values.phoneNumber,
                                                        onChange: formik.handleChange,
                                                        onBlur: formik.handleBlur,
                                                        variant: "filled",
                                                        label: "Mobile",
                                                        fullWidth: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "error",
                                                        children: formik.touched.phoneNumber && formik.errors.phoneNumber
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                item: true,
                                                xs: 6,
                                                md: 6,
                                                className: "authentication-form-field",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                        autoComplete: "" + Math.random(),
                                                        name: "emailId",
                                                        error: true,
                                                        value: formik.values.emailId,
                                                        onChange: formik.handleChange,
                                                        onBlur: formik.handleBlur,
                                                        variant: "filled",
                                                        label: "Email",
                                                        fullWidth: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "error",
                                                        children: formik.touched.emailId && formik.errors.emailId
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "btn-wrapper d-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "Authentication-error error",
                                                children: authenticationError
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                type: "submit",
                                                text: loading ? "Signing..." : "Sign Up",
                                                styles: {
                                                    marginLeft: "auto"
                                                },
                                                disabled: !(formik.isValid && formik.dirty) || loading,
                                                arrow: false
                                            })
                                        ]
                                    })
                                ]
                            })
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/config/apiConfig.ts
var apiConfig = __webpack_require__(2122);
;// CONCATENATED MODULE: ./src/services/user/otpService.ts


class OtpService {
    generateOtp(payload) {
        return external_axios_default().post(`${apiConfig/* APIURL */.z}/otp`, payload);
    }
    verifyOtp(payload) {
        return external_axios_default().post(`${apiConfig/* APIURL */.z}/otp/verifyOtp`, payload);
    }
}

;// CONCATENATED MODULE: ./src/services/user/authenticationService.ts


class AuthenticationService {
    userSignUp(payload) {
        return external_axios_default().post(`${apiConfig/* APIURL */.z}/users`, payload);
    }
}

;// CONCATENATED MODULE: ./src/hooks/useLocalStorage.ts

function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const { 0: storedValue , 1: setStoredValue  } = (0,external_react_.useState)(()=>{
        try {
            let item;
            if (false) {}
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value)=>{
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            if (value == null) {
                localStorage.removeItem(key);
                return;
            }
            // Save to local storage
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}

// EXTERNAL MODULE: ./src/context/AuthContext.js
var AuthContext = __webpack_require__(39);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: ./src/components/Navbar/navbar.tsx

/* eslint-disable react-hooks/exhaustive-deps */ 










function Navbar() {
    // State
    const { 0: isActive , 1: setIsActive  } = (0,external_react_.useState)(false);
    const { 0: navbarScroll , 1: setNavbarScroll  } = (0,external_react_.useState)(false);
    const { 0: loggedIn , 1: setLoggedIn  } = (0,external_react_.useState)(false);
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: userName1 , 1: setUserName  } = (0,external_react_.useState)();
    const { 0: verifedOtp , 1: setVerifedOtp  } = (0,external_react_.useState)(false);
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const [jwt1, setJwt] = useLocalStorage("jwt", null);
    const { 0: authenticationError , 1: setAuthenticationError  } = (0,external_react_.useState)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: otpModal , 1: setOptModal  } = (0,external_react_.useState)(false);
    const { 0: sendOtp , 1: setSendOtp  } = (0,external_react_.useState)();
    const { 0: closeNavbar , 1: setCloseNavbar  } = (0,external_react_.useState)(false);
    const { 0: succesLoggedIn , 1: setSuccessLoggedIn  } = (0,external_react_.useState)(false);
    // Context
    const { authenticated , setAuthenticated  } = (0,external_react_.useContext)(AuthContext/* default */.Z);
    // Variable
    const router = (0,router_.useRouter)();
    const otpService = new OtpService();
    const authenticationService = new AuthenticationService();
    const accountMenu = Boolean(anchorEl);
    // functions
    const handleSidebar = ()=>{
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    };
    const closeMenu = ()=>{
        setIsActive(false);
        document.body.classList.remove("overflow-hidden");
    };
    const ScrollBackground = ()=>{
        if (window.scrollY >= 85) {
            setNavbarScroll(true);
        } else {
            setNavbarScroll(false);
        }
    };
    function stringToColor(string) {
        let hash = 0;
        let i;
        /* eslint-disable no-bitwise */ for(i = 0; i < string.length; i += 1){
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = "#";
        for(i = 0; i < 3; i += 1){
            const value = hash >> i * 8 & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */ return color;
    }
    // const handleOpen = () => setOpen(true);
    const handleOpen = ()=>{
        setAuthenticated(true);
        setOpen(true);
        setSendOtp(null);
        setAuthenticationError(null);
    };
    const handleClose = ()=>{
        setAuthenticated(false);
        setOpen(false);
        setSendOtp(null);
        setAuthenticationError(null);
    };
    // This Function if for generating otp
    const _userSignUp = async (payload)=>{
        setSendOtp(null);
        setLoading(true);
        try {
            const signUpApiCall = await authenticationService.userSignUp(payload);
            if (!signUpApiCall.data.error) {
                setSendOtp("true");
                setLoading(false);
            } else {
                setAuthenticationError(signUpApiCall.data.message);
                setLoading(false);
                setSendOtp(null);
            }
        } catch (error) {
            var ref;
            console.log(error);
            let errorResponse = JSON.parse(error === null || error === void 0 ? void 0 : (ref = error.request) === null || ref === void 0 ? void 0 : ref.response);
            setAuthenticationError(errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.message);
            setLoading(false);
            setSendOtp(null);
        }
    };
    const _generateOtp = async (payload)=>{
        setOptModal(false);
        setLoading(true);
        try {
            var ref;
            const generateOtpData = await otpService.generateOtp(payload);
            if (!(generateOtpData === null || generateOtpData === void 0 ? void 0 : (ref = generateOtpData.data) === null || ref === void 0 ? void 0 : ref.error)) {
                setOptModal(true);
                setLoading(false);
            } else {
                var ref1;
                setOptModal(false);
                setAuthenticationError(generateOtpData === null || generateOtpData === void 0 ? void 0 : (ref1 = generateOtpData.data) === null || ref1 === void 0 ? void 0 : ref1.error);
                setLoading(false);
            }
        } catch (error) {
            var ref2;
            console.log(error === null || error === void 0 ? void 0 : error.request);
            let errorResponse = JSON.parse(error === null || error === void 0 ? void 0 : (ref2 = error.request) === null || ref2 === void 0 ? void 0 : ref2.response);
            console.log(errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.message);
            setAuthenticationError(errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.message);
            setLoading(false);
            setOptModal(false);
        }
    };
    // This Funtion is for verify otp
    const _verifyOtp = async (otp, loggedInData)=>{
        setLoading(true);
        const payload = {
            userData: loggedInData === null || loggedInData === void 0 ? void 0 : loggedInData.userData,
            otp: otp
        };
        try {
            const verifyOtpApiCall = await otpService.verifyOtp(payload);
            setSuccessLoggedIn(false);
            if (!verifyOtpApiCall.data.error) {
                setJwt(verifyOtpApiCall.data.data);
                setOptModal(false);
                handleClose();
                setLoading(false);
                setSuccessLoggedIn(true);
            } else {
                setAuthenticationError(verifyOtpApiCall.data.message);
                setLoading(false);
            }
        } catch (error) {
            var ref;
            console.log(error);
            let errorResponse = JSON.parse(error === null || error === void 0 ? void 0 : (ref = error.request) === null || ref === void 0 ? void 0 : ref.response);
            setAuthenticationError(errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.message);
            setLoading(false);
        }
        setTimeout(()=>{
            setSuccessLoggedIn(false);
        }, 3000);
    };
    const verifyAuth = ()=>{
        let jwt;
        if (false) {}
        if (jwt) {
            // go to your dashboard or home route
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            checkThePageIsRistricated();
        }
    // stay on this route since the user is not authenticated
    };
    const sellcar = ()=>{
        let jwt;
        if (false) {}
        if (jwt) {
            setAuthenticated(false);
            router.push({
                pathname: "/sell-car"
            });
            closeMenu();
        } else {
            setAuthenticated(true);
        }
    };
    const accountMenuHandleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const accountMenuHandleClose = ()=>{
        setAnchorEl(null);
    };
    const logoutHandle = ()=>{
        // localStorage.setItem('jwt', 'null')
        setJwt(null);
        setAnchorEl(null);
    };
    const displayUserName = ()=>{
        let userName;
        if (false) {}
        if (userName) {
            var ref;
            return (ref = JSON.parse(userName)) === null || ref === void 0 ? void 0 : ref.firstName;
        } else {
            return "";
        }
    };
    const checkThePageIsRistricated = ()=>{
        if (router.pathname == "/sell-car") {
            router.push("/");
        }
        if (router.pathname == "/book-car") {
            router.push("/");
        }
        if (router.pathname == "/history") {
            router.push("/");
        }
    };
    // UseEffect
    (0,external_react_.useEffect)(()=>{
        ScrollBackground();
        window.addEventListener("scroll", ScrollBackground);
        verifyAuth();
    }, []);
    (0,external_react_.useEffect)(()=>{
        verifyAuth();
    }, [
        jwt1
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: isActive ? "backdrop" : ""
            }),
            succesLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx(material_.Alert, {
                className: "success-login-popup",
                severity: "success",
                action: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    "aria-label": "close",
                    color: "inherit",
                    size: "small",
                    onClick: ()=>{
                        setSuccessLoggedIn(false);
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                        fontSize: "inherit"
                    })
                }),
                children: "You have successfully logged."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                id: "header",
                className: navbarScroll ? "site-header is-active" : router.pathname == "/404" ? "site-header fixed" : "site-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    maxWidth: "lg",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "site-header-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "site-brand",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: wishwheels_logo/* default.src */.Z.src,
                                            alt: "siteLogo",
                                            width: 50,
                                            height: 50
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Wish Wheels"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: isActive ? "btn-nav-toggler is-active" : "btn-nav-toggler",
                                        onClick: handleSidebar,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: isActive ? "header-links-wrapper is-active" : closeNavbar ? "header-links-wrapper close-navbar" : "header-links-wrapper",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: "site-nav",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-style-none",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: sellcar,
                                                            className: router.pathname == "/sell-car" ? "cursor-pointer is-active " : "cursor-pointer",
                                                            children: "Sell Car"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/car-collection"
                                                                });
                                                                closeMenu();
                                                            },
                                                            className: router.pathname == "/car-collection" ? "cursor-pointer is-active" : "cursor-pointer",
                                                            children: "Buy Car"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/faq"
                                                                });
                                                                closeMenu();
                                                            },
                                                            className: router.pathname == "/faq" ? "cursor-pointer is-active" : "cursor-pointer",
                                                            children: "FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/about-us"
                                                                });
                                                                closeMenu();
                                                            },
                                                            className: router.pathname == "/about-us" ? "cursor-pointer is-active" : "cursor-pointer",
                                                            children: "About Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/contact-us"
                                                                });
                                                                closeMenu();
                                                            },
                                                            className: router.pathname == "/contact-us" ? "cursor-pointer is-active" : "cursor-pointer",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    loggedIn && loggedIn ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                                onClick: accountMenuHandleClick,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    className: "name-avatar",
                                                    title: displayUserName(),
                                                    alt: displayUserName(),
                                                    src: "/broken-image.jpg"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Menu, {
                                                id: "basic-menu",
                                                anchorEl: anchorEl,
                                                open: accountMenu,
                                                onClose: accountMenuHandleClose,
                                                MenuListProps: {
                                                    "aria-labelledby": "basic-button"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                        onClick: ()=>{
                                                            router.push("/history");
                                                            setAnchorEl(null);
                                                        },
                                                        children: "History"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                        onClick: logoutHandle,
                                                        children: "Logout"
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                        onClick: handleOpen,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                            src: "/broken-image.jpg"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                open: authenticated,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    className: "authenticate-wrapper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Authenticate, {
                        userSignUp: _userSignUp,
                        generateOtp: _generateOtp,
                        verifyOtp: _verifyOtp,
                        authenticationError: authenticationError,
                        setAuthenticationError: setAuthenticationError,
                        loading: loading,
                        otpModal: otpModal,
                        sendOtp: sendOtp
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layout.tsx



function Layout({ children  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: router.pathname == "/" || router.pathname == "/about-us" ? "site-main" : "",
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 5844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ContactUsService),
/* harmony export */   "w": () => (/* binding */ ContactUsLeadService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2122);


class ContactUsService {
    contactUs(payload) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_1__/* .APIURL */ .z}/contact`, payload);
    }
}
class ContactUsLeadService {
    ContactUsLead(payload) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_1__/* .APIURL */ .z}/contact-leads`, payload);
    }
}


/***/ }),

/***/ 8204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// Create a theme instance.
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#640E27",
            dark: "#7e1735ed",
            contrastText: "#F7F3D0"
        },
        info: {
            light: "#EAFCF7",
            main: "#EAFCF7",
            dark: "#007254",
            contrastText: "#535353"
        },
        secondary: {
            main: "rgba(63, 81, 181, 0.08);"
        }
    },
    typography: {
        fontFamily: "'SF Compact Display','SF Pro Display'"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2311:
/***/ ((module) => {

module.exports = require("@mui/material/Autocomplete");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,189,210], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();