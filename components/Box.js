import React from "react";
import { RoughNotation } from "react-rough-notation";

export const Box = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(1 * children.length);

  return (
    <RoughNotation
      type="box"
      padding={[0, 4]}
      
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
