import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({
  color,
  content,
}: {
  color: string;
  content: string;
}) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * content.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
        {content}
      </h1>
    </RoughNotation>
  );
};
