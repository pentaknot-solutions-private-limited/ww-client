"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 7754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ContactUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Button.tsx + 1 modules
var Button = __webpack_require__(6189);
// EXTERNAL MODULE: ./src/components/GlobalElements.tsx
var GlobalElements = __webpack_require__(210);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: ./src/services/contact-us/index.ts
var contact_us = __webpack_require__(5844);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/success-booking.png
var success_booking = __webpack_require__(4404);
;// CONCATENATED MODULE: ./public/phone.svg
/* harmony default export */ const phone = ({"src":"/_next/static/media/phone.4d95c8a7.svg","height":52,"width":52});
;// CONCATENATED MODULE: ./public/map-marker.svg
/* harmony default export */ const map_marker = ({"src":"/_next/static/media/map-marker.177a2c18.svg","height":52,"width":52});
;// CONCATENATED MODULE: ./public/envelope.svg
/* harmony default export */ const envelope = ({"src":"/_next/static/media/envelope.16c63036.svg","height":52,"width":52});
// EXTERNAL MODULE: ./src/services/user/contactDetail.ts
var contactDetail = __webpack_require__(2848);
;// CONCATENATED MODULE: ./pages/contact-us.tsx

/* eslint-disable @next/next/no-img-element */ 












function ContactUs() {
    // States
    const { 0: contactUsData , 1: setContactUsData  } = (0,external_react_.useState)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)();
    const { 0: contactUsError , 1: setContactUsError  } = (0,external_react_.useState)();
    const { 0: successAlert , 1: setSuccessAlert  } = (0,external_react_.useState)(false);
    const { 0: companyDetail , 1: setCompanyDetail  } = (0,external_react_.useState)();
    // Variables
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const initialValues = {
        name: "",
        emailId: "",
        phoneNumber: "",
        cityName: "",
        query: ""
    };
    const validationSchema = external_yup_.object().shape({
        name: external_yup_.string().min(2, "To shorts").required("This field can't be blank "),
        emailId: external_yup_.string().email().required("This field can't be blank"),
        phoneNumber: external_yup_.string().matches(phoneRegExp, "Phone number is not valid").required("This field can't be blank"),
        cityName: external_yup_.string().required("This field can't be blank"),
        query: external_yup_.string().min(3, "To shorts").required("This field can't be blank")
    });
    const contactUsService = new contact_us/* ContactUsService */.D();
    const companyDetailService = new contactDetail/* CompanyDetail */.O();
    // Functions
    const handleSubmit = (values, actions)=>{
        const { name , emailId , phoneNumber , cityName , query  } = values;
        setContactUsData({
            name,
            emailId,
            phoneNumber,
            cityName,
            query
        });
        actions.resetForm();
    };
    const _contactUs = async (payload)=>{
        setSuccessAlert(false);
        setContactUsError(null);
        setLoading(true);
        try {
            const contactUsApiCall = await contactUsService.contactUs(payload);
            if (!contactUsApiCall.data.error) {
                setLoading(false);
                setSuccessAlert(true);
            } else {
                setContactUsError(contactUsApiCall.data.error);
                setLoading(false);
            }
        } catch (error) {
            var ref;
            let errorResponse = JSON.parse(error === null || error === void 0 ? void 0 : (ref = error.request) === null || ref === void 0 ? void 0 : ref.response);
            setContactUsError(errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.message);
            setLoading(false);
        }
    };
    const overflowHidden = (event)=>{};
    const getComapnyDetails = async ()=>{
        try {
            const companyDetailData = await companyDetailService.getAllContactDetail();
            if (!companyDetailData.data.error) {
                setCompanyDetail(companyDetailData.data.data);
            }
        } catch (error) {}
    };
    // Effects
    (0,external_react_.useEffect)(()=>{
        if (contactUsData) {
            _contactUs(contactUsData);
        }
    }, [
        contactUsData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (successAlert) {
            setTimeout(()=>{
                setSuccessAlert(false);
            }, 10000);
        }
    }, [
        successAlert
    ]);
    (0,external_react_.useEffect)(()=>{
        getComapnyDetails();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "contact-us-page",
        children: [
            successAlert && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropbox"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "succes-card",
                        children: [
                            overflowHidden(true),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: success_booking/* default.src */.Z.src,
                                alt: "succes booking"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Thanks for connecting!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Our team will contact you shortly, please check your registered email."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Home"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 2,
                    children: [
                        companyDetail && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            md: 6,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "page-title",
                                    children: "Get in touch"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "For general enquiries feel free to contact us via phone or email"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-detail",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: `tel:${companyDetail.contactNo}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: phone.src,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        companyDetail.contactNo,
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: `mailto:${companyDetail.emailId}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: envelope.src,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: companyDetail.emailId
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: map_marker.src,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                                    children: companyDetail.address
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            md: 6,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "contact-us-card",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                                    initialValues: initialValues,
                                    validationSchema: validationSchema,
                                    onSubmit: handleSubmit,
                                    children: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Form, {
                                            id: "sell-car",
                                            autoComplete: "off",
                                            className: "car-from",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                container: true,
                                                spacing: 2,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        md: 12,
                                                        className: "book-trail-form-field sell-car",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                                required: true,
                                                                name: "name",
                                                                autoComplete: "" + Math.random(),
                                                                error: true,
                                                                value: props.values.name,
                                                                onChange: props.handleChange,
                                                                onBlur: props.handleBlur,
                                                                variant: "filled",
                                                                label: "Name",
                                                                fullWidth: true
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "error",
                                                                children: props.touched.name && props.errors.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 6,
                                                        md: 6,
                                                        className: "book-trail-form-field sell-car",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                                required: true,
                                                                name: "emailId",
                                                                autoComplete: "" + Math.random(),
                                                                error: true,
                                                                value: props.values.emailId,
                                                                onChange: props.handleChange,
                                                                onBlur: props.handleBlur,
                                                                variant: "filled",
                                                                label: "Email",
                                                                fullWidth: true
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "error",
                                                                children: props.touched.emailId && props.errors.emailId
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 6,
                                                        md: 6,
                                                        className: "book-trail-form-field sell-car",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                                required: true,
                                                                name: "phoneNumber",
                                                                autoComplete: "" + Math.random(),
                                                                error: true,
                                                                value: props.values.phoneNumber,
                                                                onChange: props.handleChange,
                                                                onBlur: props.handleBlur,
                                                                variant: "filled",
                                                                label: "Phone Number",
                                                                fullWidth: true
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "error",
                                                                children: props.touched.phoneNumber && props.errors.phoneNumber
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        className: "book-trail-form-field sell-car",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                                required: true,
                                                                name: "cityName",
                                                                autoComplete: "" + Math.random(),
                                                                error: true,
                                                                value: props.values.cityName,
                                                                onChange: props.handleChange,
                                                                onBlur: props.handleBlur,
                                                                variant: "filled",
                                                                label: "City",
                                                                fullWidth: true
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "error",
                                                                children: props.touched.cityName && props.errors.cityName
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        className: "book-trail-form-field sell-car",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GlobalElements/* StyledTextField */.tH, {
                                                                required: true,
                                                                name: "query",
                                                                autoComplete: "" + Math.random(),
                                                                error: true,
                                                                value: props.values.query,
                                                                onChange: props.handleChange,
                                                                onBlur: props.handleBlur,
                                                                variant: "filled",
                                                                label: "Message",
                                                                multiline: true,
                                                                rows: 5,
                                                                fullWidth: true
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "error",
                                                                children: props.touched.query && props.errors.query
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        className: "book-trail-form-field sell-car",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "btn-wrapper",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "Authentication-error error",
                                                                    children: contactUsError
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    type: "submit",
                                                                    disabled: !(props.isValid && props.dirty) || loading,
                                                                    text: loading ? "Submiting..." : "Submit"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                })
                            })
                        })
                    ]
                })
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

/***/ 2848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ CompanyDetail)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2122);


class CompanyDetail {
    getAllContactDetail() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_1__/* .APIURL */ .z}/contactDetail/623202048d85ac348ad4704c`);
    }
}


/***/ })

};
;