"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/sitemap.xml";
exports.ids = ["pages/sitemap.xml"];
exports.modules = {

/***/ "./pages/sitemap.xml.js":
/*!******************************!*\
  !*** ./pages/sitemap.xml.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _src_services_cars_carService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/services/cars/carService */ \"./src/services/cars/carService.ts\");\n\n//pages/sitemap.xml.js\nconst EXTERNAL_DATA_URL = \"https://jsonplaceholder.typicode.com/posts\";\nconst SITE_URL = \"http://localhost:8080/\";\nfunction generateSiteMap(carData) {\n    return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n   <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\r\n     <url>\r\n       <loc>${SITE_URL}</loc>\r\n     </url>\r\n     <url>\r\n       <loc>${SITE_URL}/about-us</loc>\r\n     </url>\r\n     <url>\r\n       <loc>${SITE_URL}/contact-us</loc>\r\n     </url>\r\n     <url>\r\n       <loc>${SITE_URL}/faq</loc>\r\n     </url>\r\n     <url>\r\n       <loc>${SITE_URL}/car-collection</loc>\r\n     </url>\r\n     <url>\r\n       <loc>${SITE_URL}/sell-car</loc>\r\n     </url>\r\n     <url>\r\n       <loc>${SITE_URL}/history</loc>\r\n     </url>\r\n\r\n     ${carData.map(({ _id  })=>{\n        return `\r\n       <url>\r\n           <loc>${`${SITE_URL}/car-detail?carId=${_id}`}</loc>\r\n       </url>\r\n     `;\n    }).join(\"\")}\r\n   </urlset>\r\n `;\n}\nfunction SiteMap() {\n// getServerSideProps will do the heavy lifting\n}\nasync function getServerSideProps({ res  }) {\n    // We make an API call to gather the URLs for our site\n    const _carService = new _src_services_cars_carService__WEBPACK_IMPORTED_MODULE_0__.CarService();\n    const allCarsList = _carService.getAllCollection();\n    const request = await allCarsList;\n    const carData = await request.data.data;\n    // We generate the XML sitemap with the posts data\n    const sitemap = generateSiteMap(carData);\n    res.setHeader(\"Content-Type\", \"text/xml\");\n    // we send the XML to the browser\n    res.write(sitemap);\n    res.end();\n    return {\n        props: {}\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaXRlbWFwLnhtbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFFN0Qsc0JBQXNCO0FBQ3RCLE1BQU1DLGlCQUFpQixHQUFHLDRDQUE0QztBQUN0RSxNQUFNQyxRQUFRLEdBQUcsd0JBQXdCO0FBRXpDLFNBQVNDLGVBQWUsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2hDLE9BQU8sQ0FBQztRQTBCRCxPQUFPLENBQUMsZ0NBRUQsRUFBRSxDQUFDLEVBQUVGLFFBQVEsQ0FBQztLQUd0QixDQUFDLENBQ0RLLElBQUk7Q0FHWDtBQUVELFNBQVNDO0FBQ1A7Q0FDRDtBQUVELE9BQU87SUFDTDtJQUNBLE1BQU1HLFdBQVcsR0FBRyxJQUFJWCxVQUFVLEVBQUU7SUFDcEMsTUFBTVk7SUFDTixNQUFNRTtJQUNOLE1BQU1WLE9BQU8sR0FBRyxNQUFNVSxPQUFPLENBQUNDO0lBRTlCO0lBQ0EsTUFBTUM7SUFFTk4sR0FBRyxDQUFDTyxTQUFTLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQztJQUN6QztJQUNBUCxHQUFHLENBQUNRO0lBQ0pSLEdBQUcsQ0FBQ1MsR0FBRyxFQUFFLENBQUM7SUFFVixPQUFPO1FBQ0xDO0tBQ0QsQ0FBQztDQUNIO0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93dy1mcm9udGVuZC8uL3BhZ2VzL3NpdGVtYXAueG1sLmpzP2Q2ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuLi9zcmMvc2VydmljZXMvY2Fycy9jYXJTZXJ2aWNlXCI7XHJcblxyXG4vL3BhZ2VzL3NpdGVtYXAueG1sLmpzXHJcbmNvbnN0IEVYVEVSTkFMX0RBVEFfVVJMID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIjtcclxuY29uc3QgU0lURV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2l0ZU1hcChjYXJEYXRhKSB7XHJcbiAgcmV0dXJuIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cclxuICAgPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj5cclxuICAgICA8dXJsPlxyXG4gICAgICAgPGxvYz4ke1NJVEVfVVJMfTwvbG9jPlxyXG4gICAgIDwvdXJsPlxyXG4gICAgIDx1cmw+XHJcbiAgICAgICA8bG9jPiR7U0lURV9VUkx9L2Fib3V0LXVzPC9sb2M+XHJcbiAgICAgPC91cmw+XHJcbiAgICAgPHVybD5cclxuICAgICAgIDxsb2M+JHtTSVRFX1VSTH0vY29udGFjdC11czwvbG9jPlxyXG4gICAgIDwvdXJsPlxyXG4gICAgIDx1cmw+XHJcbiAgICAgICA8bG9jPiR7U0lURV9VUkx9L2ZhcTwvbG9jPlxyXG4gICAgIDwvdXJsPlxyXG4gICAgIDx1cmw+XHJcbiAgICAgICA8bG9jPiR7U0lURV9VUkx9L2Nhci1jb2xsZWN0aW9uPC9sb2M+XHJcbiAgICAgPC91cmw+XHJcbiAgICAgPHVybD5cclxuICAgICAgIDxsb2M+JHtTSVRFX1VSTH0vc2VsbC1jYXI8L2xvYz5cclxuICAgICA8L3VybD5cclxuICAgICA8dXJsPlxyXG4gICAgICAgPGxvYz4ke1NJVEVfVVJMfS9oaXN0b3J5PC9sb2M+XHJcbiAgICAgPC91cmw+XHJcblxyXG4gICAgICR7Y2FyRGF0YVxyXG4gICAgICAgLm1hcCgoeyBfaWQgfSkgPT4ge1xyXG4gICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgPHVybD5cclxuICAgICAgICAgICA8bG9jPiR7YCR7U0lURV9VUkx9L2Nhci1kZXRhaWw/Y2FySWQ9JHtfaWR9YH08L2xvYz5cclxuICAgICAgIDwvdXJsPlxyXG4gICAgIGA7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLmpvaW4oXCJcIil9XHJcbiAgIDwvdXJsc2V0PlxyXG4gYDtcclxufVxyXG5cclxuZnVuY3Rpb24gU2l0ZU1hcCgpIHtcclxuICAvLyBnZXRTZXJ2ZXJTaWRlUHJvcHMgd2lsbCBkbyB0aGUgaGVhdnkgbGlmdGluZ1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVzIH0pIHtcclxuICAvLyBXZSBtYWtlIGFuIEFQSSBjYWxsIHRvIGdhdGhlciB0aGUgVVJMcyBmb3Igb3VyIHNpdGVcclxuICBjb25zdCBfY2FyU2VydmljZSA9IG5ldyBDYXJTZXJ2aWNlKCk7XHJcbiAgY29uc3QgYWxsQ2Fyc0xpc3QgPSBfY2FyU2VydmljZS5nZXRBbGxDb2xsZWN0aW9uKCk7XHJcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGFsbENhcnNMaXN0O1xyXG4gIGNvbnN0IGNhckRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGEuZGF0YTtcclxuXHJcbiAgLy8gV2UgZ2VuZXJhdGUgdGhlIFhNTCBzaXRlbWFwIHdpdGggdGhlIHBvc3RzIGRhdGFcclxuICBjb25zdCBzaXRlbWFwID0gZ2VuZXJhdGVTaXRlTWFwKGNhckRhdGEpO1xyXG5cclxuICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC94bWxcIik7XHJcbiAgLy8gd2Ugc2VuZCB0aGUgWE1MIHRvIHRoZSBicm93c2VyXHJcbiAgcmVzLndyaXRlKHNpdGVtYXApO1xyXG4gIHJlcy5lbmQoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXRlTWFwO1xyXG4iXSwibmFtZXMiOlsiQ2FyU2VydmljZSIsIkVYVEVSTkFMX0RBVEFfVVJMIiwiU0lURV9VUkwiLCJnZW5lcmF0ZVNpdGVNYXAiLCJjYXJEYXRhIiwibWFwIiwiX2lkIiwiam9pbiIsIlNpdGVNYXAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJfY2FyU2VydmljZSIsImFsbENhcnNMaXN0IiwiZ2V0QWxsQ29sbGVjdGlvbiIsInJlcXVlc3QiLCJkYXRhIiwic2l0ZW1hcCIsInNldEhlYWRlciIsIndyaXRlIiwiZW5kIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sitemap.xml.js\n");

/***/ }),

/***/ "./src/config/apiConfig.ts":
/*!*********************************!*\
  !*** ./src/config/apiConfig.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIURL\": () => (/* binding */ APIURL)\n/* harmony export */ });\n// export const APIURL = 'http://3.139.226.194:3000/api'\nconst APIURL = \"https://api.wishwheels.com/api\" // export const APIURL = 'https://jsonplaceholder.typicode.com'\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2FwaUNvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsd0RBQXdEO0FBQ2pELE1BQU1BLE1BQU0sR0FBRyxnQ0FBZ0MsQ0FDdEQsK0RBQStEO0FBRFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93dy1mcm9udGVuZC8uL3NyYy9jb25maWcvYXBpQ29uZmlnLnRzP2M2ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBBUElVUkwgPSAnaHR0cDovLzMuMTM5LjIyNi4xOTQ6MzAwMC9hcGknXHJcbmV4cG9ydCBjb25zdCBBUElVUkwgPSAnaHR0cHM6Ly9hcGkud2lzaHdoZWVscy5jb20vYXBpJ1xyXG4vLyBleHBvcnQgY29uc3QgQVBJVVJMID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbSciXSwibmFtZXMiOlsiQVBJVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/apiConfig.ts\n");

/***/ }),

/***/ "./src/services/cars/carService.ts":
/*!*****************************************!*\
  !*** ./src/services/cars/carService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CarService\": () => (/* binding */ CarService)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ \"./src/config/apiConfig.ts\");\n/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/axiosInstance */ \"./src/utils/axiosInstance.ts\");\n\n\n\nclass CarService {\n    async getAllCollection() {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_1__.APIURL}/car/complete/car/detail`);\n    }\n    async getCarDetailById(carId) {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_1__.APIURL}/car/completeCarDetailById/${carId}`);\n    }\n    async getAllBrands() {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_1__.APIURL}/carMake`);\n    }\n    async getAllCarBodies() {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_1__.APIURL}/carBody`);\n    // return axios.get(`http://localhost:8081/api/carBody`);\n    }\n    sellCar(payload) {\n        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`/sellCar`, payload);\n    }\n    bookTrial(payload) {\n        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`/trial`, payload);\n    }\n    getInpectionsById(payload) {\n        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/sellCar/getBy/UserId/${payload}`);\n    }\n    getAllFuelType() {\n        // return axios.get(`../../../public/json/data/fule-type.json`);\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"/json/data/fule-type.json\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvY2Fycy9jYXJTZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ007QUFHL0MsTUFBTUcsVUFBVTtJQUNyQixNQUFNQyxnQkFBZ0IsR0FBRztRQUN2QixPQUFPSixnREFBUyxDQUFDLENBQUMsRUFBRUMscURBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7SUFDRCxNQUFNSyxnQkFBZ0IsQ0FBQ0MsS0FBVSxFQUFFO1FBQ2pDLE9BQU9QLGdEQUFTLENBQUMsQ0FBQyxFQUFFQyxxREFBTSxDQUFDLDJCQUEyQixFQUFFTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEU7SUFDRCxNQUFNQyxZQUFZLEdBQUc7UUFDbkIsT0FBT1IsZ0RBQVMsQ0FBQyxDQUFDLEVBQUVDLHFEQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELE1BQU1RLGVBQWUsR0FBRztRQUN0QixPQUFPVCxnREFBUyxDQUFDLENBQUMsRUFBRUMscURBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLHlEQUF5RDtLQUMxRDtJQUVEUyxPQUFPLENBQUNDLE9BQVksRUFBRTtRQUNwQixPQUFPVCxpRUFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFUyxPQUFPLENBQUMsQ0FBQztLQUNoRDtJQUVERSxTQUFTLENBQUNGLE9BQVksRUFBRTtRQUN0QixPQUFPVCxpRUFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFUyxPQUFPLENBQUMsQ0FBQztLQUM5QztJQUVERyxpQkFBaUIsQ0FBQ0gsT0FBWSxFQUFFO1FBQzlCLE9BQU9ULGdFQUFpQixDQUFDLENBQUMsc0JBQXNCLEVBQUVTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5RDtJQUVESSxjQUFjLEdBQUc7UUFDZixnRUFBZ0U7UUFDaEUsT0FBT2YsZ0RBQVMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0tBQy9DO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93dy1mcm9udGVuZC8uL3NyYy9zZXJ2aWNlcy9jYXJzL2NhclNlcnZpY2UudHM/Yzg1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFQSVVSTCB9IGZyb20gXCIuLi8uLi9jb25maWcvYXBpQ29uZmlnXCI7XHJcbmltcG9ydCBheGlvc0luc3RhbmNlIGZyb20gXCIuLi8uLi91dGlscy9heGlvc0luc3RhbmNlXCI7XHJcbmltcG9ydCB7IHhBY2Nlc3NUb2tlbiB9IGZyb20gXCIuLi8uLi91dGlscy9nZXRBY2Nlc3NUb2tlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhclNlcnZpY2Uge1xyXG4gIGFzeW5jIGdldEFsbENvbGxlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0FQSVVSTH0vY2FyL2NvbXBsZXRlL2Nhci9kZXRhaWxgKTtcclxuICB9XHJcbiAgYXN5bmMgZ2V0Q2FyRGV0YWlsQnlJZChjYXJJZDogYW55KSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0FQSVVSTH0vY2FyL2NvbXBsZXRlQ2FyRGV0YWlsQnlJZC8ke2NhcklkfWApO1xyXG4gIH1cclxuICBhc3luYyBnZXRBbGxCcmFuZHMoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0FQSVVSTH0vY2FyTWFrZWApO1xyXG4gIH1cclxuICBhc3luYyBnZXRBbGxDYXJCb2RpZXMoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0FQSVVSTH0vY2FyQm9keWApO1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaS9jYXJCb2R5YCk7XHJcbiAgfVxyXG5cclxuICBzZWxsQ2FyKHBheWxvYWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UucG9zdChgL3NlbGxDYXJgLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGJvb2tUcmlhbChwYXlsb2FkOiBhbnkpIHtcclxuICAgIHJldHVybiBheGlvc0luc3RhbmNlLnBvc3QoYC90cmlhbGAsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wZWN0aW9uc0J5SWQocGF5bG9hZDogYW55KSB7XHJcbiAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoYC9zZWxsQ2FyL2dldEJ5L1VzZXJJZC8ke3BheWxvYWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxGdWVsVHlwZSgpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5nZXQoYC4uLy4uLy4uL3B1YmxpYy9qc29uL2RhdGEvZnVsZS10eXBlLmpzb25gKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoXCIvanNvbi9kYXRhL2Z1bGUtdHlwZS5qc29uXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJBUElVUkwiLCJheGlvc0luc3RhbmNlIiwiQ2FyU2VydmljZSIsImdldEFsbENvbGxlY3Rpb24iLCJnZXQiLCJnZXRDYXJEZXRhaWxCeUlkIiwiY2FySWQiLCJnZXRBbGxCcmFuZHMiLCJnZXRBbGxDYXJCb2RpZXMiLCJzZWxsQ2FyIiwicGF5bG9hZCIsInBvc3QiLCJib29rVHJpYWwiLCJnZXRJbnBlY3Rpb25zQnlJZCIsImdldEFsbEZ1ZWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/cars/carService.ts\n");

/***/ }),

/***/ "./src/utils/axiosInstance.ts":
/*!************************************!*\
  !*** ./src/utils/axiosInstance.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/apiConfig */ \"./src/config/apiConfig.ts\");\n/* harmony import */ var _getAccessToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getAccessToken */ \"./src/utils/getAccessToken.ts\");\n\n\n// import { APIURL } from \"./constant\";\n// import { userJwtData, xAccessToken } from \"./jwt\";\n\n\n\nlet xAccessTokenKey = (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_4__.xAccessToken)() && (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_4__.xAccessToken)();\nlet userData = (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_4__.userJwtData)() && (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_4__.userJwtData)();\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: _config_apiConfig__WEBPACK_IMPORTED_MODULE_3__.APIURL,\n    headers: {\n        \"x-access-token\": xAccessTokenKey\n    }\n});\naxiosInstance.interceptors.request.use(async (req)=>{\n    xAccessTokenKey = (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_4__.xAccessToken)() && (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_4__.xAccessToken)();\n    req.headers[\"x-access-token\"] = xAccessTokenKey;\n    const user = xAccessTokenKey && jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(xAccessTokenKey);\n    const isExpired = user && dayjs__WEBPACK_IMPORTED_MODULE_1___default().unix(user.exp).diff(dayjs__WEBPACK_IMPORTED_MODULE_1___default()()) < 1;\n    if (isExpired) {\n        console.log(userData);\n        try {\n            const refreshApiData = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_3__.APIURL}/admin/refreshToken/${userData}`);\n            if (!refreshApiData.data.error) {\n                if (userData) {\n                    userData[\"accessToken\"] = refreshApiData.data.data;\n                    localStorage.setItem(\"jwt\", JSON.stringify(userData));\n                }\n            }\n        } catch (error) {}\n    }\n    return req;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXhpb3NJbnN0YW5jZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDQTtBQUMxQix1Q0FBdUM7QUFDdkMscURBQXFEO0FBQ2pCO0FBQ1M7QUFDZ0I7QUFFN0QsSUFBSU0sZUFBZSxHQUFHRCw2REFBWSxFQUFFLElBQUlBLDZEQUFZLEVBQUU7QUFDdEQsSUFBSUUsUUFBUSxHQUFRSCw0REFBVyxFQUFFLElBQUlBLDREQUFXLEVBQUU7QUFDbEQsTUFBTUksYUFBYSxHQUFHUixtREFBWSxDQUFDO0lBQ2pDVSxPQUFPLEVBQUVQLHFEQUFNO0lBQ2ZRLE9BQU8sRUFBRTtRQUNQLGdCQUFnQixFQUFFTCxlQUFlO0tBQ2xDO0NBQ0YsQ0FBQztBQUVGRSxhQUFhLENBQUNJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBT0MsR0FBUSxHQUFLO0lBQ3pEVCxlQUFlLEdBQUdELDZEQUFZLEVBQUUsSUFBSUEsNkRBQVksRUFBRSxDQUFDO0lBQ25EVSxHQUFHLENBQUNKLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHTCxlQUFlLENBQUM7SUFFaEQsTUFBTVUsSUFBSSxHQUFRVixlQUFlLElBQUlKLGlEQUFVLENBQUNJLGVBQWUsQ0FBQztJQUNoRSxNQUFNVyxTQUFTLEdBQUdELElBQUksSUFBSWYsaURBQVUsQ0FBQ2UsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDbkIsNENBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUVoRSxJQUFJZ0IsU0FBUyxFQUFFO1FBQ2JJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixRQUFRLENBQUMsQ0FBQztRQUV0QixJQUFJO1lBQ0YsTUFBTWdCLGNBQWMsR0FBRyxNQUFNdkIsZ0RBQVMsQ0FDcEMsQ0FBQyxFQUFFRyxxREFBTSxDQUFDLG9CQUFvQixFQUFFSSxRQUFRLENBQUMsQ0FBQyxDQUMzQztZQUNELElBQUksQ0FBQ2dCLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLEVBQUU7Z0JBQzlCLElBQUluQixRQUFRLEVBQUU7b0JBQ1pBLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBR2dCLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDQSxJQUFJLENBQUM7b0JBQ25ERSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDdkIsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtTQUNGLENBQUMsT0FBT21CLEtBQUssRUFBRSxFQUFFO0tBQ25CO0lBQ0QsT0FBT1gsR0FBRyxDQUFDO0NBQ1osQ0FBQyxDQUFDO0FBRUgsaUVBQWVQLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3d3LWZyb250ZW5kLy4vc3JjL3V0aWxzL2F4aW9zSW5zdGFuY2UudHM/YmQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuLy8gaW1wb3J0IHsgQVBJVVJMIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuLy8gaW1wb3J0IHsgdXNlckp3dERhdGEsIHhBY2Nlc3NUb2tlbiB9IGZyb20gXCIuL2p3dFwiO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgeyBBUElVUkwgfSBmcm9tIFwiLi4vY29uZmlnL2FwaUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VySnd0RGF0YSwgeEFjY2Vzc1Rva2VuIH0gZnJvbSBcIi4vZ2V0QWNjZXNzVG9rZW5cIjtcclxuXHJcbmxldCB4QWNjZXNzVG9rZW5LZXkgPSB4QWNjZXNzVG9rZW4oKSAmJiB4QWNjZXNzVG9rZW4oKTtcclxubGV0IHVzZXJEYXRhOiBhbnkgPSB1c2VySnd0RGF0YSgpICYmIHVzZXJKd3REYXRhKCk7XHJcbmNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IEFQSVVSTCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIngtYWNjZXNzLXRva2VuXCI6IHhBY2Nlc3NUb2tlbktleSxcclxuICB9LFxyXG59KTtcclxuXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGFzeW5jIChyZXE6IGFueSkgPT4ge1xyXG4gIHhBY2Nlc3NUb2tlbktleSA9IHhBY2Nlc3NUb2tlbigpICYmIHhBY2Nlc3NUb2tlbigpO1xyXG4gIHJlcS5oZWFkZXJzW1wieC1hY2Nlc3MtdG9rZW5cIl0gPSB4QWNjZXNzVG9rZW5LZXk7XHJcblxyXG4gIGNvbnN0IHVzZXI6IGFueSA9IHhBY2Nlc3NUb2tlbktleSAmJiBqd3RfZGVjb2RlKHhBY2Nlc3NUb2tlbktleSk7XHJcbiAgY29uc3QgaXNFeHBpcmVkID0gdXNlciAmJiBkYXlqcy51bml4KHVzZXIuZXhwKS5kaWZmKGRheWpzKCkpIDwgMTtcclxuXHJcbiAgaWYgKGlzRXhwaXJlZCkge1xyXG4gICAgY29uc29sZS5sb2codXNlckRhdGEpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlZnJlc2hBcGlEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSVVSTH0vYWRtaW4vcmVmcmVzaFRva2VuLyR7dXNlckRhdGF9YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXJlZnJlc2hBcGlEYXRhLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgICAgIHVzZXJEYXRhW1wiYWNjZXNzVG9rZW5cIl0gPSByZWZyZXNoQXBpRGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImp3dFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfVxyXG4gIHJldHVybiByZXE7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3NJbnN0YW5jZTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZGF5anMiLCJqd3RfZGVjb2RlIiwiQVBJVVJMIiwidXNlckp3dERhdGEiLCJ4QWNjZXNzVG9rZW4iLCJ4QWNjZXNzVG9rZW5LZXkiLCJ1c2VyRGF0YSIsImF4aW9zSW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJyZXEiLCJ1c2VyIiwiaXNFeHBpcmVkIiwidW5peCIsImV4cCIsImRpZmYiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaEFwaURhdGEiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/axiosInstance.ts\n");

/***/ }),

/***/ "./src/utils/getAccessToken.ts":
/*!*************************************!*\
  !*** ./src/utils/getAccessToken.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userJwtData\": () => (/* binding */ userJwtData),\n/* harmony export */   \"xAccessToken\": () => (/* binding */ xAccessToken)\n/* harmony export */ });\n// export const xAccessToken = typeof window !== 'undefined' ? JSON.stringify(localStorage.getItem('jwt')) : null ;\n// export const xAccessToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2FkZjRiNGUwMzhmYjg5MjczZjZlMyIsImlhdCI6MTYzOTY3NjM1NiwiZXhwIjoxNjM5NzYyNzU2fQ.B4iW-0dhRyx-F5jtVNsVJq98shXb0-BX3nf_eJ_0PSs\" ;\nconst xAccessToken = ()=>{\n    let user = \"\";\n    let token = \"\";\n    if (false) {}\n    return token;\n};\nconst userJwtData = ()=>{\n    let user = \"\";\n    let data = \"\";\n    if (false) {}\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZ2V0QWNjZXNzVG9rZW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtSEFBbUg7QUFDbkgsOE1BQThNO0FBQ3ZNLE1BQU1BLFlBQVksR0FBRyxJQUFjO0lBQ3hDLElBQUlDLElBQUksR0FBRyxFQUFFO0lBQ2IsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxJQUFJLEtBQTZCLEVBQUUsRUFVbEM7SUFDRCxPQUFPQSxLQUFLLENBQUM7Q0FDZCxDQUFDO0FBRUssTUFBTU0sV0FBVyxHQUFHLElBQWM7SUFDdkMsSUFBSVAsSUFBSSxHQUFHLEVBQUU7SUFDYixJQUFJUSxJQUFJLEdBQVEsRUFBRTtJQUNsQixJQUFJLEtBQTZCLEVBQUUsRUFPbEM7SUFFRCxPQUFPQSxJQUFJLENBQUM7Q0FDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3ctZnJvbnRlbmQvLi9zcmMvdXRpbHMvZ2V0QWNjZXNzVG9rZW4udHM/OTY0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY29uc3QgeEFjY2Vzc1Rva2VuID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0JykpIDogbnVsbCA7XHJcbi8vIGV4cG9ydCBjb25zdCB4QWNjZXNzVG9rZW4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWXhOMkZrWmpSaU5HVXdNemhtWWpnNU1qY3paalpsTXlJc0ltbGhkQ0k2TVRZek9UWTNOak0xTml3aVpYaHdJam94TmpNNU56WXlOelUyZlEuQjRpVy0wZGhSeXgtRjVqdFZOc1ZKcTk4c2hYYjAtQlgzbmZfZUpfMFBTc1wiIDtcclxuZXhwb3J0IGNvbnN0IHhBY2Nlc3NUb2tlbiA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gIGxldCB1c2VyID0gXCJcIjtcclxuICBsZXQgdG9rZW4gPSBcIlwiO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgIHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKSB8fCBcIlwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4gPSBKU09OLnBhcnNlKHVzZXIpLmFjY2Vzc1Rva2VuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgfVxyXG4gIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VySnd0RGF0YSA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gIGxldCB1c2VyID0gXCJcIjtcclxuICBsZXQgZGF0YTogYW55ID0gXCJcIjtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZSkge1xyXG4gICAgICB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIikgfHwgXCJcIjtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh1c2VyKS5pZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ4QWNjZXNzVG9rZW4iLCJ1c2VyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWNjZXNzVG9rZW4iLCJ1c2VySnd0RGF0YSIsImRhdGEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/getAccessToken.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sitemap.xml.js"));
module.exports = __webpack_exports__;

})();