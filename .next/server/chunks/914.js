"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 2122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ APIURL)
/* harmony export */ });
// export const APIURL = 'http://3.139.226.194:3000/api'
const APIURL = "https://api.wishwheels.com/api" // export const APIURL = 'https://jsonplaceholder.typicode.com'
;


/***/ }),

/***/ 914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2122);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2731);



class CarService {
    async getAllCollection() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .APIURL */ .z}/car/complete/car/detail`);
    }
    async getCarDetailById(carId) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .APIURL */ .z}/car/completeCarDetailById/${carId}`);
    }
    async getAllBrands() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .APIURL */ .z}/carMake`);
    }
    async getAllCarBodies() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .APIURL */ .z}/carBody`);
    // return axios.get(`http://localhost:8081/api/carBody`);
    }
    sellCar(payload) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`/sellCar`, payload);
    }
    bookTrial(payload) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`/trial`, payload);
    }
    getInpectionsById(payload) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/sellCar/getBy/UserId/${payload}`);
    }
    getAllFuelType() {
        // return axios.get(`../../../public/json/data/fule-type.json`);
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/json/data/fule-type.json");
    }
}


/***/ }),

/***/ 2731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2122);
/* harmony import */ var _getAccessToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9573);


// import { APIURL } from "./constant";
// import { userJwtData, xAccessToken } from "./jwt";



let xAccessTokenKey = (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)() && (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)();
let userData = (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_3__/* .userJwtData */ .z)() && (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_3__/* .userJwtData */ .z)();
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _config_apiConfig__WEBPACK_IMPORTED_MODULE_4__/* .APIURL */ .z,
    headers: {
        "x-access-token": xAccessTokenKey
    }
});
axiosInstance.interceptors.request.use(async (req)=>{
    xAccessTokenKey = (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)() && (0,_getAccessToken__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)();
    req.headers["x-access-token"] = xAccessTokenKey;
    const user = xAccessTokenKey && jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(xAccessTokenKey);
    const isExpired = user && dayjs__WEBPACK_IMPORTED_MODULE_1___default().unix(user.exp).diff(dayjs__WEBPACK_IMPORTED_MODULE_1___default()()) < 1;
    if (isExpired) {
        console.log(userData);
        try {
            const refreshApiData = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config_apiConfig__WEBPACK_IMPORTED_MODULE_4__/* .APIURL */ .z}/admin/refreshToken/${userData}`);
            if (!refreshApiData.data.error) {
                if (userData) {
                    userData["accessToken"] = refreshApiData.data.data;
                    localStorage.setItem("jwt", JSON.stringify(userData));
                }
            }
        } catch (error) {}
    }
    return req;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ }),

/***/ 9573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ xAccessToken),
/* harmony export */   "z": () => (/* binding */ userJwtData)
/* harmony export */ });
// export const xAccessToken = typeof window !== 'undefined' ? JSON.stringify(localStorage.getItem('jwt')) : null ;
// export const xAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2FkZjRiNGUwMzhmYjg5MjczZjZlMyIsImlhdCI6MTYzOTY3NjM1NiwiZXhwIjoxNjM5NzYyNzU2fQ.B4iW-0dhRyx-F5jtVNsVJq98shXb0-BX3nf_eJ_0PSs" ;
const xAccessToken = ()=>{
    let user = "";
    let token = "";
    if (false) {}
    return token;
};
const userJwtData = ()=>{
    let user = "";
    let data = "";
    if (false) {}
    return data;
};


/***/ })

};
;