import React from "react";
import { RoughNotation } from "react-rough-notation";

export const Bracket = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(1 * children.length);

  return (
    <RoughNotation
      type="bracket"
      padding={[0, 4]}

      brackets={["left","right"]}
      strokeWidth={3}
      
      /*
      multiline={true}
      
      iterations={1}
      */
      animationDuration={animationDuration}
      color={color}
      
      
    >
      {children}
    </RoughNotation>
  );
};
