(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{83171:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/car-detail",function(){return t(40166)}])},40166:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var a=t(85893),n=t(67294),i=t(27948),s=t(86886),c={src:"/_next/static/media/car-img.8a173fda.png",height:270,width:421,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEUsKiw/P0abo5NBW4ZQV2ZmZ3diY28OOI4jJjJYXGlybmx1gnhbXnCmq5hlhaKOpLN+j5QpQGh4fnEYN3xLaZpkhrh2eZUjRHaSN3hpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBhQEAIQwAsUNb9AXbf1MSojE1xOQJOSfb/sJe0/XntbgzROTzAKoKFx/YAVun5pN2AAAAAElFTkSuQmCC"},l=t(16189),o=t(11163),d="/_next/static/media/fuel.b136e998.svg",u="/_next/static/media/gauge.42c1ff4e.svg",m="/_next/static/media/user.23e1f5d6.svg",h=t(40039),v=t(37045);function f(e){var r=e.carId,t=e.carData,s=(0,o.useRouter)(),c=(0,n.useContext)(h.Z),f=(c.authenticated,c.setAuthenticated);return(0,a.jsx)("div",{className:"make-offer-cta",children:(0,a.jsx)(i.Z,{maxWidth:"lg",children:(0,a.jsxs)("div",{className:"flex-container",children:[(0,a.jsxs)("div",{className:"car-description-detail",children:[(0,a.jsx)("h5",{children:t&&(null===t||void 0===t?void 0:t.name)||"-"}),(0,a.jsx)("div",{className:"car-meta-deatil",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:d,alt:"fuel"}),(0,a.jsx)("span",{children:t&&(null===t||void 0===t?void 0:t.fuelType)||"-"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:u,alt:"km driven"}),(0,a.jsx)("span",{children:t&&(null===t||void 0===t?void 0:t.kmDriven)||"-"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:m,alt:"ownership"}),(0,a.jsx)("span",{children:t&&(null===t||void 0===t?void 0:t.ownerShip)||"-"})]})]})})]}),(0,a.jsxs)("div",{className:"car-price-detail",children:[(0,a.jsx)("h4",{className:"car-price",children:(0,v.o)(t&&(null===t||void 0===t?void 0:t.maxPrice))||"-"}),(0,a.jsx)(l.Z,{text:"Make Offer",arrow:!0,onClick:function(){localStorage.getItem("jwt")?(f(!1),s.push({pathname:"/book-car",query:{carId:r}})):f(!0)}})]})]})})})}t(68505);var p=t(82339),x=t(46066),j="/_next/static/media/calender.8cfd1197.svg",g="/_next/static/media/seater.9cd82399.svg",y="/_next/static/media/user-dark.47acf409.svg",w="/_next/static/media/fuel-dark.d6bc0053.svg",N="/_next/static/media/spray.9edbaea2.svg",A="/_next/static/media/gauge-dark.1162df48.svg";function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){k(e,r,t[r])}))}return e}function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,i=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(a=t.next()).done)&&(i.push(a.value),!r||i.length!==r);s=!0);}catch(l){c=!0,n=l}finally{try{s||null==t.return||t.return()}finally{if(c)throw n}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){var r,t,l,o,d=e.carData,u=(0,n.useState)(!1),m=(u[0],u[1],_(n.useState("panel1"),2)),h=(m[0],m[1],(0,n.useState)(!1)),v=h[0],b=h[1],k=d&&(null===(r=d[0])||void 0===r?void 0:r.Car_Images),C=d&&(null===(t=d[0])||void 0===t?void 0:t._id),O=d&&(null===(l=d[0])||void 0===l?void 0:l.Car_Detail),I=d&&(null===(o=d[0])||void 0===o?void 0:o.Car_Equipments[0].equipmentName);return(0,a.jsxs)("section",{className:"car-detail",children:[(0,a.jsx)("div",{className:"car-detail-container",children:(0,a.jsx)(i.Z,{maxWidth:"lg",children:(0,a.jsxs)(s.ZP,{container:!0,spacing:2,sx:{justifyContent:"center !important"},children:[(0,a.jsxs)(s.ZP,{item:!0,xs:12,md:5,className:"order-md-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Detail"}),(0,a.jsxs)("div",{className:"all-summary-of-car",children:[(0,a.jsxs)("div",{className:"car-summary-group",children:[(0,a.jsx)("div",{className:"img-wrapper",children:(0,a.jsx)("img",{src:j,height:28,width:28,alt:""})}),(0,a.jsxs)("div",{className:"car-summary-wrapper",children:[(0,a.jsx)("div",{className:"car-summary-title",children:"Registration Year"}),(0,a.jsx)("div",{className:"content",children:O&&(null===O||void 0===O?void 0:O.year)||"-"})]})]}),(0,a.jsxs)("div",{className:"car-summary-group",children:[(0,a.jsx)("div",{className:"img-wrapper",children:(0,a.jsx)("img",{src:y,height:28,width:28,alt:""})}),(0,a.jsxs)("div",{className:"car-summary-wrapper",children:[(0,a.jsx)("div",{className:"car-summary-title",children:"Ownership"}),(0,a.jsx)("div",{className:"content",children:O&&(null===O||void 0===O?void 0:O.ownerShip)||"-"})]})]}),(0,a.jsxs)("div",{className:"car-summary-group",children:[(0,a.jsx)("div",{className:"img-wrapper",children:(0,a.jsx)("img",{src:w,height:28,width:28,alt:""})}),(0,a.jsxs)("div",{className:"car-summary-wrapper",children:[(0,a.jsx)("div",{className:"car-summary-title",children:"Fuel"}),(0,a.jsx)("div",{className:"content",children:O&&(null===O||void 0===O?void 0:O.fuelType)||"-"})]})]}),(0,a.jsxs)("div",{className:"car-summary-group",children:[(0,a.jsx)("div",{className:"img-wrapper",children:(0,a.jsx)("img",{src:A,height:28,width:28,alt:""})}),(0,a.jsxs)("div",{className:"car-summary-wrapper",children:[(0,a.jsx)("div",{className:"car-summary-title",children:"KM Driven"}),(0,a.jsx)("div",{className:"content",children:O&&(null===O||void 0===O?void 0:O.kmDriven)||"-"})]})]}),(0,a.jsxs)("div",{className:"car-summary-group",children:[(0,a.jsx)("div",{className:"img-wrapper",children:(0,a.jsx)("img",{src:N,height:28,width:28,alt:""})}),(0,a.jsxs)("div",{className:"car-summary-wrapper",children:[(0,a.jsx)("div",{className:"car-summary-title",children:"Color"}),(0,a.jsx)("div",{className:"content",children:O&&(null===O||void 0===O?void 0:O.color)||"-"})]})]}),(0,a.jsxs)("div",{className:"car-summary-group",children:[(0,a.jsx)("div",{className:"img-wrapper",children:(0,a.jsx)("img",{src:g,height:28,width:28,alt:""})}),(0,a.jsxs)("div",{className:"car-summary-wrapper",children:[(0,a.jsx)("div",{className:"car-summary-title",children:"Vehicle No."}),(0,a.jsx)("div",{className:"content",children:O&&(null===O||void 0===O?void 0:O.carNumber)||"-"})]})]})]})]}),(0,a.jsx)("div",{children:I&&(0,a.jsxs)("div",{className:"all-summary-of-car v-2",children:[(0,a.jsx)("h6",{children:"Some additional information about this vehicle are as follows:"}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:I}})]})})]}),(0,a.jsx)(s.ZP,{item:!0,xs:12,md:7,className:"order-md-1",children:(0,a.jsxs)("div",{className:"card-slider",children:[(0,a.jsx)(x.Z,S({},{dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3},{children:k&&k.map((function(e,r){return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"car-detail-img",children:(0,a.jsx)("img",{src:e.imageLink||c,alt:"car-img",height:300,width:600})})},r)}))})),(0,a.jsx)("div",{className:"text-right",children:(0,a.jsx)("a",{onClick:function(){return b(!0)},className:"cursor-pointer btn-link",children:"View All"})}),(0,a.jsx)(p.ZP,{show:v,photos:k&&k.map((function(e){return e.imageLink})),onClose:function(){return b(!1)}})]})})]})})}),(0,a.jsx)(f,{carId:C,carData:O})]})}var O=t(9008),I=t(20914);function Z(){var e=(0,n.useState)([]),r=e[0],t=e[1],i=new I.Z,s=(0,o.useRouter)().query.carId;return(0,n.useEffect)((function(){s&&i.getCarDetailById(s).then((function(e){200==e.status&&t(e.data.data)}))}),[s]),(0,a.jsxs)("div",{children:[(0,a.jsx)(O.default,{children:(0,a.jsx)("title",{children:"Wish Wheels | Car Detail"})}),(0,a.jsx)(C,{carData:r})]})}},20914:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var a=t(34051),n=t.n(a),i=t(9669),s=t.n(i),c=t(22122),l=t(52731);function o(e,r,t,a,n,i,s){try{var c=e[i](s),l=c.value}catch(o){return void t(o)}c.done?r(l):Promise.resolve(l).then(a,n)}function d(e){return function(){var r=this,t=arguments;return new Promise((function(a,n){var i=e.apply(r,t);function s(e){o(i,a,n,s,c,"next",e)}function c(e){o(i,a,n,s,c,"throw",e)}s(void 0)}))}}var u=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r=e.prototype;return r.getAllCollection=function(){return d(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().get("".concat(c.z,"/car/complete/car/detail")));case 1:case"end":return e.stop()}}),e)})))()},r.getCarDetailById=function(e){return d(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s().get("".concat(c.z,"/car/completeCarDetailById/").concat(e)));case 1:case"end":return r.stop()}}),r)})))()},r.getAllBrands=function(){return d(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().get("".concat(c.z,"/carMake")));case 1:case"end":return e.stop()}}),e)})))()},r.sellCar=function(e){return l.Z.post("/sellCar",e)},r.bookTrial=function(e){return l.Z.post("/trial",e)},r.getInpectionsById=function(e){return l.Z.get("/sellCar/getBy/UserId/".concat(e))},e}()},52731:function(e,r,t){"use strict";var a=t(34051),n=t.n(a),i=t(9669),s=t.n(i),c=t(27484),l=t.n(c),o=t(96245),d=t(22122),u=t(39573);function m(e,r,t,a,n,i,s){try{var c=e[i](s),l=c.value}catch(o){return void t(o)}c.done?r(l):Promise.resolve(l).then(a,n)}var h=(0,u.H)()&&(0,u.H)(),v=(0,u.z)()&&(0,u.z)(),f=s().create({baseURL:d.z,headers:{"x-access-token":h}});f.interceptors.request.use(function(){var e,r=(e=n().mark((function e(r){var t,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=(0,u.H)()&&(0,u.H)(),r.headers["x-access-token"]=h,!((t=h&&(0,o.Z)(h))&&l().unix(t.exp).diff(l()())<1)){e.next=15;break}return console.log(v),e.prev=6,e.next=9,s().get("".concat(d.z,"/admin/refreshToken/").concat(v));case 9:(a=e.sent).data.error||v&&(v.accessToken=a.data.data,localStorage.setItem("jwt",JSON.stringify(v))),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(6);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})),function(){var r=this,t=arguments;return new Promise((function(a,n){var i=e.apply(r,t);function s(e){m(i,a,n,s,c,"next",e)}function c(e){m(i,a,n,s,c,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}()),r.Z=f},37045:function(e,r,t){"use strict";t.d(r,{o:function(){return a}});var a=function(e){if(e){var r=e.toString().split("."),t=r[0].replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")+(r[1]?"."+r[1]:"");return"\u20b9 ".concat(t)}}},39573:function(e,r,t){"use strict";t.d(r,{H:function(){return a},z:function(){return n}});var a=function(){var e="",r="";return localStorage&&(e=localStorage.getItem("jwt")||"")&&(r=JSON.parse(e).accessToken),r},n=function(){var e="",r="";return localStorage&&(e=localStorage.getItem("jwt")||"")&&(r=JSON.parse(e).id),r}}},function(e){e.O(0,[289,774,888,179],(function(){return r=83171,e(e.s=r);var r}));var r=e.O();_N_E=r}]);