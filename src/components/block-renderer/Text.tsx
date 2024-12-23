import React from "react";
import { useComponentsContext } from "./BlocksRenderer";

const Text = ({ text, ...modifiers }: any) => {
  // Get matching React component from the context
  const { modifiers: modifierComponents, missingModifierTypes }: any =
    useComponentsContext();

  const modifierNames = Object.keys(modifiers);

  // Loop on each active modifier to wrap the text in its component
  return modifierNames.reduce(
    (children, modifierName) => {
      // Don't wrap the text if the modifier is disabled
      if (!modifiers[modifierName]) {
        return children;
      }

      const ModifierComponent = modifierComponents[modifierName];

      if (!ModifierComponent) {
        // Only warn once per missing modifier
        if (!missingModifierTypes.includes(modifierName)) {
          console.warn(
            `[@strapi/block-react-renderer] No component found for modifier "${modifierName}"`
          );
          missingModifierTypes.push(modifierName);
        }

        // Don't throw an error, just ignore the modifier
        return children;
      }

      return <ModifierComponent>{children}</ModifierComponent>;
    },
    // By default, return the text without any wrapper to avoid useless nesting
    <>{text}</>
  );
};

export { Text };
