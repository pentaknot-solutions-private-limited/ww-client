(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{23508:function(e,t,n){"use strict";var r=n(64119);t.Z=void 0;var o=r(n(64938)),i=n(85893),a=(0,o.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},84160:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n(96175)}])},96175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var r=n(85893),o=n(1048),i=n(32793),a=n(67294),s=(n(59864),n(45697),n(86010)),d=n(27192),l=n(90948),c=n(33616),u=n(98885),p=n(96067),f=n(30577),h=n(2734),m=n(51705),x=n(28979),b=n(76087);function g(e){return(0,x.Z)("MuiCollapse",e)}(0,b.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const y=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],v=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,i.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),Z=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,i.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=(0,l.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,i.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),j=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCollapse"}),{addEndListener:l,children:x,className:b,collapsedSize:j="0px",component:S,easing:R,in:E,onEnter:C,onEntered:N,onEntering:A,onExit:M,onExited:P,onExiting:q,orientation:I="vertical",style:O,timeout:$=p.x9.standard,TransitionComponent:T=u.ZP}=n,k=(0,o.Z)(n,y),G=(0,i.Z)({},n,{orientation:I,collapsedSize:j}),W=(e=>{const{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,d.Z)(r,g,n)})(G),_=(0,h.Z)(),z=a.useRef(),D=a.useRef(null),H=a.useRef(),L="number"===typeof j?`${j}px`:j,V="horizontal"===I,B=V?"width":"height";a.useEffect((()=>()=>{clearTimeout(z.current)}),[]);const F=a.useRef(null),X=(0,m.Z)(t,F),Q=e=>t=>{if(e){const n=F.current;void 0===t?e(n):e(n,t)}},U=()=>D.current?D.current[V?"clientWidth":"clientHeight"]:0,J=Q(((e,t)=>{D.current&&V&&(D.current.style.position="absolute"),e.style[B]=L,C&&C(e,t)})),K=Q(((e,t)=>{const n=U();D.current&&V&&(D.current.style.position="");const{duration:r,easing:o}=(0,f.C)({style:O,timeout:$,easing:R},{mode:"enter"});if("auto"===$){const t=_.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,H.current=t}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[B]=`${n}px`,e.style.transitionTimingFunction=o,A&&A(e,t)})),Y=Q(((e,t)=>{e.style[B]="auto",N&&N(e,t)})),ee=Q((e=>{e.style[B]=`${U()}px`,M&&M(e)})),te=Q(P),ne=Q((e=>{const t=U(),{duration:n,easing:r}=(0,f.C)({style:O,timeout:$,easing:R},{mode:"exit"});if("auto"===$){const n=_.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,H.current=n}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[B]=L,e.style.transitionTimingFunction=r,q&&q(e)}));return(0,r.jsx)(T,(0,i.Z)({in:E,onEnter:J,onEntered:Y,onEntering:K,onExit:ee,onExited:te,onExiting:ne,addEndListener:e=>{"auto"===$&&(z.current=setTimeout(e,H.current||0)),l&&l(F.current,e)},nodeRef:F,timeout:"auto"===$?null:$},k,{children:(e,t)=>(0,r.jsx)(v,(0,i.Z)({as:S,className:(0,s.Z)(W.root,b,{entered:W.entered,exited:!E&&"0px"===L&&W.hidden}[e]),style:(0,i.Z)({[V?"minWidth":"minHeight"]:L},O),ownerState:(0,i.Z)({},G,{state:e}),ref:X},t,{children:(0,r.jsx)(Z,{ownerState:(0,i.Z)({},G,{state:e}),className:W.wrapper,ref:D,children:(0,r.jsx)(w,{ownerState:(0,i.Z)({},G,{state:e}),className:W.wrapperInner,children:x})})}))}))}));j.muiSupportAuto=!0;var S=j,R=n(55113);var E=a.createContext({}),C=n(49299);function N(e){return(0,x.Z)("MuiAccordion",e)}var A=(0,b.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const M=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],P=(0,l.ZP)(R.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${A.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${A.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${A.disabled}`]:{backgroundColor:e.palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,i.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${A.expanded}`]:{margin:"16px 0"}})));var q=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAccordion"}),{children:l,className:u,defaultExpanded:p=!1,disabled:f=!1,disableGutters:h=!1,expanded:m,onChange:x,square:b=!1,TransitionComponent:g=S,TransitionProps:y}=n,v=(0,o.Z)(n,M),[Z,w]=(0,C.Z)({controlled:m,default:p,name:"Accordion",state:"expanded"}),j=a.useCallback((e=>{w(!Z),x&&x(e,!Z)}),[Z,x,w]),[R,...A]=a.Children.toArray(l),q=a.useMemo((()=>({expanded:Z,disabled:f,disableGutters:h,toggle:j})),[Z,f,h,j]),I=(0,i.Z)({},n,{square:b,disabled:f,disableGutters:h,expanded:Z}),O=(e=>{const{classes:t,square:n,expanded:r,disabled:o,disableGutters:i}=e,a={root:["root",!n&&"rounded",r&&"expanded",o&&"disabled",!i&&"gutters"],region:["region"]};return(0,d.Z)(a,N,t)})(I);return(0,r.jsxs)(P,(0,i.Z)({className:(0,s.Z)(O.root,u),ref:t,ownerState:I,square:b},v,{children:[(0,r.jsx)(E.Provider,{value:q,children:R}),(0,r.jsx)(g,(0,i.Z)({in:Z,timeout:"auto"},y,{children:(0,r.jsx)("div",{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region",className:O.region,children:A})}))]}))})),I=n(49990);function O(e){return(0,x.Z)("MuiAccordionSummary",e)}var $=(0,b.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const T=["children","className","expandIcon","focusVisibleClassName","onClick"],k=(0,l.ZP)(I.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return(0,i.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${$.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${$.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`&:hover:not(.${$.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${$.expanded}`]:{minHeight:64}})})),G=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${$.expanded}`]:{margin:"20px 0"}}))),W=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:e.palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${$.expanded}`]:{transform:"rotate(180deg)"}})));var _=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAccordionSummary"}),{children:l,className:u,expandIcon:p,focusVisibleClassName:f,onClick:h}=n,m=(0,o.Z)(n,T),{disabled:x=!1,disableGutters:b,expanded:g,toggle:y}=a.useContext(E),v=(0,i.Z)({},n,{expanded:g,disabled:x,disableGutters:b}),Z=(e=>{const{classes:t,expanded:n,disabled:r,disableGutters:o}=e,i={root:["root",n&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,d.Z)(i,O,t)})(v);return(0,r.jsxs)(k,(0,i.Z)({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":g,className:(0,s.Z)(Z.root,u),focusVisibleClassName:(0,s.Z)(Z.focusVisible,f),onClick:e=>{y&&y(e),h&&h(e)},ref:t,ownerState:v},m,{children:[(0,r.jsx)(G,{className:Z.content,ownerState:v,children:l}),p&&(0,r.jsx)(W,{className:Z.expandIconWrapper,ownerState:v,children:p})]}))}));function z(e){return(0,x.Z)("MuiAccordionDetails",e)}(0,b.Z)("MuiAccordionDetails",["root"]);const D=["className"],H=(0,l.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var L=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),{className:a}=n,l=(0,o.Z)(n,D),u=n,p=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},z,t)})(u);return(0,r.jsx)(H,(0,i.Z)({className:(0,s.Z)(p.root,a),ref:t,ownerState:u},l))})),V=n(27948),B=n(86886),F=n(11703),X=n(40044),Q=n(23508),U=n(1852),J=n.n(U),K=n(9008),Y=n(9669),ee=n.n(Y),te=n(22122);var ne=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.prototype.getAllFaq=function(){return ee().get("".concat(te.z,"/faq"))},e}();function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(d){s=!0,o=d}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e){var t=e.children,n=e.value,o=e.index,i=ie(e,["children","value","index"]),s=ae(a.useState("panel1"),2);s[0],s[1];return(0,r.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){oe(e,t,n[t])}))}return e}({role:"tabpanel",hidden:n!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o)},i,{children:n===o&&(0,r.jsx)("div",{children:t})}))}function de(){var e=function(e){return{__html:e||"-"}},t=ae(a.useState(0),2),n=t[0],o=t[1],i=ae(a.useState("panel1"),2),s=i[0],d=i[1],l=ae(a.useState(),2),c=l[0],u=l[1],p=new ne;return(0,a.useEffect)((function(){p.getAllFaq().then((function(e){200==e.status&&u(e.data.data)}))}),[]),(0,r.jsxs)("section",{className:"faq-section",children:[(0,r.jsx)(K.default,{children:(0,r.jsx)("title",{children:"Wish Wheels | FAQ"})}),(0,r.jsxs)(V.Z,{maxWidth:"lg",children:[(0,r.jsx)("h3",{className:"faq-section-title",children:"faq"}),(0,r.jsxs)("div",{className:"faq-wrapper",children:[(0,r.jsx)(J(),{minWidth:1100,children:(0,r.jsxs)(B.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(B.ZP,{item:!0,lg:6,children:(0,r.jsx)(F.Z,{component:"ul",className:"faq-list",value:n,onChange:function(e,t){o(t)},"aria-label":"basic tabs example",children:c&&c.map((function(e,t){return(0,r.jsx)(X.Z,{component:"li",label:e.question},t)}))})}),(0,r.jsx)(B.ZP,{item:!0,lg:6,sx:{position:"relative"},children:(0,r.jsx)("div",{className:"tab-content",children:c&&c.map((function(t,o){return(0,r.jsxs)(se,{value:n,index:o,children:[(0,r.jsx)("h4",{children:t.question}),(0,r.jsx)("p",{dangerouslySetInnerHTML:e(t.answer)})]},o)}))})})]})}),(0,r.jsx)(J(),{query:"(max-width: 1100px)",children:(0,r.jsx)("div",{className:"faq-accordion-wrapper",children:c&&c.map((function(t,n){return(0,r.jsxs)(q,{expanded:s==="panel".concat(n),onChange:(o="panel".concat(n),function(e,t){d(!!t&&o)}),children:[(0,r.jsx)(_,{expandIcon:(0,r.jsx)(Q.Z,{}),children:(0,r.jsx)("h5",{children:t.question})}),(0,r.jsx)(L,{children:(0,r.jsx)("div",{className:"accordion-content",children:(0,r.jsx)("p",{dangerouslySetInnerHTML:e(t.answer)})})})]},"mobile-accordion-".concat(n));var o}))})})]})]})]})}},9008:function(e,t,n){e.exports=n(83121)}},function(e){e.O(0,[852,774,888,179],(function(){return t=84160,e(e.s=t);var t}));var t=e.O();_N_E=t}]);