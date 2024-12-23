import React from "react";
import { useComponentsContext } from "./BlocksRenderer";
import { Text } from "./Text";

const voidTypes = ["image"];

/**
 * Add props that are specific to a block type, and not present in that node type
 */
const augmentProps = (content: any) => {
  const { children: childrenNodes, type, ...props } = content;

  if (type === "code") {
    // Builds a plain text string from an array of nodes, regardless of links or modifiers
    const getPlainText = (children: any) => {
      return children.reduce((currentPlainText: any, node: any) => {
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
      plainText: getPlainText(content.children),
    };
  }

  return props;
};

const Block = ({ content }: any) => {
  const { children: childrenNodes, type, ...props } = content;

  // Get matching React component from the context
  const { blocks, missingBlockTypes }: any = useComponentsContext();
  const BlockComponent = blocks[type];

  if (!BlockComponent) {
    // Only warn once per missing block
    if (!missingBlockTypes.includes(type)) {
      console.warn(
        `[@strapi/block-react-renderer] No component found for block type "${type}"`
      );
      missingBlockTypes.push(type);
    }

    // Don't throw an error, just ignore the block
    return null;
  }

  // Handle void types separately as they should not render children
  if (voidTypes.includes(type)) {
    return <BlockComponent {...props} />;
  }

  // Handle empty paragraphs separately as they should render a <br> tag
  if (
    type === "paragraph" &&
    childrenNodes.length === 1 &&
    childrenNodes[0].type === "text" &&
    childrenNodes[0].text === ""
  ) {
    return <br />;
  }

  const augmentedProps = augmentProps(content);

  return (
    <BlockComponent {...augmentedProps}>
      {childrenNodes.map((childNode: any, index: any) => {
        if (childNode.type === "text") {
          const { type: _type, ...childNodeProps } = childNode;

          // TODO use node as key with WeakMap
          return <Text {...childNodeProps} key={index} />;
        }

        // TODO use node as key with WeakMap
        return <Block content={childNode} key={index} />;
      })}
    </BlockComponent>
  );
};

export { Block };
