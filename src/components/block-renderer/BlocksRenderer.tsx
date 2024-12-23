"use client";

import React, { useMemo, useRef, useContext, createContext } from "react";
import { Block } from "./Block";

const defaultComponents = {
  blocks: {
    paragraph: (props: any) => <p>{props.children}</p>,
    quote: (props: any) => <blockquote>{props.children}</blockquote>,
    code: (props: any) => (
      <pre>
        <code>{props.plainText}</code>
      </pre>
    ),
    heading: ({ level, children }: any) => {
      switch (level) {
        case 1:
          return <h1>{children}</h1>;
        case 2:
          return <h2>{children}</h2>;
        case 3:
          return <h3>{children}</h3>;
        case 4:
          return <h4>{children}</h4>;
        case 5:
          return <h5>{children}</h5>;
        case 6:
          return <h6>{children}</h6>;
        default:
          return null;
      }
    },
    link: (props: any) => <a href={props.url}>{props.children}</a>,
    list: (props: any) => {
      if (props.format === "ordered") {
        return <ol>{props.children}</ol>;
      }
      return <ul>{props.children}</ul>;
    },
    "list-item": (props: any) => <li>{props.children}</li>,
    image: (props: any) => (
      <img
        src={props.image.url}
        alt={props.image.alternativeText || undefined}
      />
    ),
  },
  modifiers: {
    bold: (props: any) => <strong>{props.children}</strong>,
    italic: (props: any) => <em>{props.children}</em>,
    underline: (props: any) => <u>{props.children}</u>,
    strikethrough: (props: any) => <del>{props.children}</del>,
    code: (props: any) => <code>{props.children}</code>,
  },
  missingBlockTypes: [],
  missingModifierTypes: [],
};

const ComponentsContext = createContext(defaultComponents);

const ComponentsProvider = ({ children, value = defaultComponents }: any) => {
  const memoizedValue = useMemo(() => value, [value]);
  return (
    <ComponentsContext.Provider value={memoizedValue}>
      {children}
    </ComponentsContext.Provider>
  );
};

function useComponentsContext() {
  return useContext(ComponentsContext);
}

const BlocksRenderer = (props: any) => {
  const blocks = {
    ...defaultComponents.blocks,
    ...props.blocks,
  };

  const modifiers = {
    ...defaultComponents.modifiers,
    ...props.modifiers,
  };

  const missingBlockTypes = useRef([]);
  const missingModifierTypes = useRef([]);

  return (
    <ComponentsProvider
      value={{
        blocks,
        modifiers,
        missingBlockTypes: missingBlockTypes.current,
        missingModifierTypes: missingModifierTypes.current,
      }}
    >
      {props.content.map((content: any, index: any) => (
        <Block content={content} key={index} />
      ))}
    </ComponentsProvider>
  );
};

export { ComponentsProvider, useComponentsContext, BlocksRenderer };
