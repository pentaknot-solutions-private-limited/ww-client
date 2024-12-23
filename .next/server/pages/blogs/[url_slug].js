"use strict";
(() => {
var exports = {};
exports.id = 9;
exports.ids = [9];
exports.modules = {

/***/ 8870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _url_slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/context/LoadingContext.js
var LoadingContext = __webpack_require__(8772);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/lib/apollo-client.ts
var apollo_client = __webpack_require__(8994);
;// CONCATENATED MODULE: ./src/components/block-renderer/Text.tsx



const Text = ({ text , ...modifiers })=>{
    // Get matching React component from the context
    const { modifiers: modifierComponents , missingModifierTypes  } = useComponentsContext();
    const modifierNames = Object.keys(modifiers);
    // Loop on each active modifier to wrap the text in its component
    return modifierNames.reduce((children, modifierName)=>{
        // Don't wrap the text if the modifier is disabled
        if (!modifiers[modifierName]) {
            return children;
        }
        const ModifierComponent = modifierComponents[modifierName];
        if (!ModifierComponent) {
            // Only warn once per missing modifier
            if (!missingModifierTypes.includes(modifierName)) {
                console.warn(`[@strapi/block-react-renderer] No component found for modifier "${modifierName}"`);
                missingModifierTypes.push(modifierName);
            }
            // Don't throw an error, just ignore the modifier
            return children;
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(ModifierComponent, {
            children: children
        });
    }, // By default, return the text without any wrapper to avoid useless nesting
    /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: text
    }));
};


;// CONCATENATED MODULE: ./src/components/block-renderer/Block.tsx





const voidTypes = [
    "image"
];
/**
 * Add props that are specific to a block type, and not present in that node type
 */ const augmentProps = (content)=>{
    const { children: childrenNodes , type , ...props } = content;
    if (type === "code") {
        // Builds a plain text string from an array of nodes, regardless of links or modifiers
        const getPlainText = (children)=>{
            return children.reduce((currentPlainText, node)=>{
                if (node.type === "text") {
                    return currentPlainText.concat(node.text);
                }
                if (node.type === "link") {
                    return currentPlainText.concat(getPlainText(node.children));
                }
                return currentPlainText;
            }, "");
        };
        return {
            ...props,
            plainText: getPlainText(content.children)
        };
    }
    return props;
};
const Block = ({ content  })=>{
    const { children: childrenNodes , type , ...props } = content;
    // Get matching React component from the context
    const { blocks , missingBlockTypes  } = useComponentsContext();
    const BlockComponent = blocks[type];
    if (!BlockComponent) {
        // Only warn once per missing block
        if (!missingBlockTypes.includes(type)) {
            console.warn(`[@strapi/block-react-renderer] No component found for block type "${type}"`);
            missingBlockTypes.push(type);
        }
        // Don't throw an error, just ignore the block
        return null;
    }
    // Handle void types separately as they should not render children
    if (voidTypes.includes(type)) {
        return /*#__PURE__*/ jsx_runtime_.jsx(BlockComponent, {
            ...props
        });
    }
    // Handle empty paragraphs separately as they should render a <br> tag
    if (type === "paragraph" && childrenNodes.length === 1 && childrenNodes[0].type === "text" && childrenNodes[0].text === "") {
        return /*#__PURE__*/ jsx_runtime_.jsx("br", {});
    }
    const augmentedProps = augmentProps(content);
    return /*#__PURE__*/ jsx_runtime_.jsx(BlockComponent, {
        ...augmentedProps,
        children: childrenNodes.map((childNode, index)=>{
            if (childNode.type === "text") {
                const { type: _type , ...childNodeProps } = childNode;
                // TODO use node as key with WeakMap
                return /*#__PURE__*/ (0,external_react_.createElement)(Text, {
                    ...childNodeProps,
                    key: index
                });
            }
            // TODO use node as key with WeakMap
            return /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                content: childNode
            }, index);
        })
    });
};


;// CONCATENATED MODULE: ./src/components/block-renderer/BlocksRenderer.tsx
"use client";



const defaultComponents = {
    blocks: {
        paragraph: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.children
            })
        ,
        quote: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                children: props.children
            })
        ,
        code: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                    children: props.plainText
                })
            })
        ,
        heading: ({ level , children  })=>{
            switch(level){
                case 1:
                    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: children
                    });
                case 2:
                    return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: children
                    });
                case 3:
                    return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: children
                    });
                case 4:
                    return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: children
                    });
                case 5:
                    return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: children
                    });
                case 6:
                    return /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: children
                    });
                default:
                    return null;
            }
        },
        link: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: props.url,
                children: props.children
            })
        ,
        list: (props)=>{
            if (props.format === "ordered") {
                return /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                    children: props.children
                });
            }
            return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: props.children
            });
        },
        "list-item": (props)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: props.children
            })
        ,
        image: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image.url,
                alt: props.image.alternativeText || undefined
            })
    },
    modifiers: {
        bold: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("strong", {
                children: props.children
            })
        ,
        italic: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("em", {
                children: props.children
            })
        ,
        underline: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("u", {
                children: props.children
            })
        ,
        strikethrough: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("del", {
                children: props.children
            })
        ,
        code: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("code", {
                children: props.children
            })
    },
    missingBlockTypes: [],
    missingModifierTypes: []
};
const ComponentsContext = /*#__PURE__*/ (0,external_react_.createContext)(defaultComponents);
const ComponentsProvider = ({ children , value =defaultComponents  })=>{
    const memoizedValue = (0,external_react_.useMemo)(()=>value
    , [
        value
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(ComponentsContext.Provider, {
        value: memoizedValue,
        children: children
    });
};
function useComponentsContext() {
    return (0,external_react_.useContext)(ComponentsContext);
}
const BlocksRenderer = (props)=>{
    const blocks = {
        ...defaultComponents.blocks,
        ...props.blocks
    };
    const modifiers = {
        ...defaultComponents.modifiers,
        ...props.modifiers
    };
    const missingBlockTypes = (0,external_react_.useRef)([]);
    const missingModifierTypes = (0,external_react_.useRef)([]);
    return /*#__PURE__*/ jsx_runtime_.jsx(ComponentsProvider, {
        value: {
            blocks,
            modifiers,
            missingBlockTypes: missingBlockTypes.current,
            missingModifierTypes: missingModifierTypes.current
        },
        children: props.content.map((content, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Block, {
                content: content
            }, index)
        )
    });
};


;// CONCATENATED MODULE: ./src/components/block-renderer/index.ts



;// CONCATENATED MODULE: ./pages/blogs/[url_slug].tsx







const BlogPage = ({ blog  })=>{
    const { siteLoading , setSiteLoading  } = (0,external_react_.useContext)(LoadingContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        setSiteLoading(false);
    }, []);
    const router = (0,router_.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Loading..."
        });
    }
    if (!blog) return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "Blog not found."
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-detail-page",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "section-title",
                    children: blog.title
                }),
                blog.imageUrl && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "blog-image-wrapper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: blog.imageUrl,
                        alt: blog.title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BlocksRenderer, {
                    content: blog.content
                })
            ]
        })
    });
};
// GraphQL query to fetch all slugs
const GET_ALL_SLUGS = `
  query GetAllSlugs {
    blogs {
      data {
        attributes {
          url_slug
        }
      }
    }
  }
`;
// GraphQL query to fetch a blog by slug
const GET_BLOG_BY_SLUG = `
  query GetBlogBySlug($url_slug: String!) {
    blogs(filters: { url_slug: { eq: $url_slug } }) {
      data {
        id
        attributes {
          title
          content
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
// Pre-render all blog pages based on slugs
const getStaticPaths = async ()=>{
    const data = await (0,apollo_client/* fetchGraphQL */.U)({
        query: GET_ALL_SLUGS
    });
    const paths = data.blogs.data.map((blog)=>({
            params: {
                url_slug: blog.attributes.url_slug
            }
        })
    );
    return {
        paths,
        fallback: "blocking"
    };
};
// Fetch blog data for a specific slug
const getStaticProps = async ({ params  })=>{
    var ref;
    const { url_slug  } = params;
    const decodedUrlSlug = decodeURIComponent(url_slug);
    const data = await (0,apollo_client/* fetchGraphQL */.U)({
        query: GET_BLOG_BY_SLUG,
        variables: {
            url_slug: decodedUrlSlug
        }
    });
    const blogData = data.blogs.data[0];
    if (!blogData) {
        return {
            notFound: true
        };
    }
    const blog = {
        id: blogData.id,
        title: blogData.attributes.title,
        content: blogData.attributes.content,
        imageUrl: ((ref = blogData.attributes.image) === null || ref === void 0 ? void 0 : ref.data) ? `${blogData.attributes.image.data.attributes.url}` : null
    };
    return {
        props: {
            blog
        }
    };
};
/* harmony default export */ const _url_slug_ = (BlogPage);


/***/ }),

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LoadingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    siteLoading: false,
    setSiteLoading: (loading)=>{}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingContext);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [994], () => (__webpack_exec__(8870)));
module.exports = __webpack_exports__;

})();