"use strict";
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 6189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SiteButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: ./public/arrow-right.svg
/* harmony default export */ const arrow_right = ({"src":"/_next/static/media/arrow-right.b9537c93.svg","height":16,"width":16});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Button.tsx






const StyledButton = (0,system_.styled)(material_.Button)`
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 22px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  & span {
    display: inline-block !important;
    margin: 0px 0px 0px 12px !important;
    width: 14px !important;
    height: 14px !important;
  }

  @media (max-width: 992px) {
    margin: 0 auto !important;
  }
  @media (max-width: 567px) {
    padding: 5px 15px !important;
  }
`;
function SiteButton({ text , arrow , onClick , buttonVariant , styles , disabled , type  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledButton, {
        disabled: disabled,
        type: type,
        className: buttonVariant == null || buttonVariant == "primary" ? "primary-btn" : buttonVariant == "secondary" ? "secondary-btn" : buttonVariant == "tertiary" ? "tertiary-btn" : "",
        onClick: onClick,
        sx: styles,
        children: [
            text,
            arrow == true ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: arrow_right,
                height: 16,
                width: 16,
                alt: "arrow-right"
            }) : null
        ]
    });
};


/***/ })

};
;