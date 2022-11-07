"use strict";
exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 2961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/no-image.843a8a0e.png","height":1644,"width":2560,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEXy8/Pt7e3j4+Pa2tphf3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgQALMzBCakYmJEZUBAQABwgATAZE+LAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 3167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarCards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _public_no_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2961);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_currecyFormatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8433);







function CarCards({ _id , variant , hideButton , img , style , Car_Detail , Car_Images  }) {
    // States
    const { 0: carImage , 1: setCarImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // Variables
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // Functions
    const handleClick = ()=>{
        router.push({
            pathname: "/car-detail",
            query: {
                carId: _id
            }
        });
    };
    // Effects
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (Car_Images) {
            // #1. Take 1st/ Last image of car
            // const requiredCarIndex = Car_Images?.find(
            //   (item: any) => item.imageOrder == 0
            // );
            const firstImageOfCar = Car_Images === null || Car_Images === void 0 ? void 0 : Car_Images.find((item)=>item.imageOrder == 0
            );
            setCarImage(firstImageOfCar);
        }
    }, [
        Car_Images
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: style,
        onClick: handleClick,
        className: variant == "card2" ? "cars-cards card2" : "cars-cards",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                src: (carImage === null || carImage === void 0 ? void 0 : carImage.imageLink) || _public_no_image_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                width: 435,
                height: 270,
                alt: "Car"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: Car_Detail === null || Car_Detail === void 0 ? void 0 : Car_Detail.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                item: true,
                                xs: 4,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "car-summary-header",
                                        children: "FUEL TYPE "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "car-summary",
                                        children: Car_Detail === null || Car_Detail === void 0 ? void 0 : Car_Detail.fuelType
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                item: true,
                                xs: 4,
                                sx: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "car-summary-header",
                                        children: "YEAR"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "car-summary",
                                        children: Car_Detail === null || Car_Detail === void 0 ? void 0 : Car_Detail.year
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                item: true,
                                xs: 4,
                                sx: {
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "car-summary-header",
                                        children: "KMS"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "car-summary",
                                        children: Car_Detail === null || Car_Detail === void 0 ? void 0 : Car_Detail.kmDriven
                                    })
                                ]
                            })
                        ]
                    }),
                    variant == "card2" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                        container: true,
                        spacing: 2,
                        sx: {
                            marginTop: "5px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                            item: true,
                            xs: 6,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "price",
                                children: (0,_utils_currecyFormatter__WEBPACK_IMPORTED_MODULE_6__/* .currencyFormatter */ .o)(Car_Detail === null || Car_Detail === void 0 ? void 0 : Car_Detail.maxPrice)
                            })
                        })
                    }) : null
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 8433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ currencyFormatter)
/* harmony export */ });
/* unused harmony export convertToNum */
const currencyFormatter = (num)=>{
    // return '₹' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    if (!num) return;
    const str = num.toString().split(".");
    const convertedValue = str[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") + (str[1] ? "." + str[1] : "");
    return `₹ ${convertedValue}`;
};
const convertToNum = (str)=>{
    let value;
    if (str) {
        value = str === null || str === void 0 ? void 0 : str.replaceAll(",", "");
    }
    return Number(value);
};


/***/ })

};
;