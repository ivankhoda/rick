import React from "react";
import { StyledCardComponent } from "./CardComponentStyles";
// Styles

type ItemProps = {
  slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  visibleSlides: number;
};

const Item: React.FC<ItemProps> = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children,
}) => (
  <StyledCardComponent
    zoomFactor={zoomFactor}
    slideMargin={slideMargin}
    visibleSlides={visibleSlides}
    className={slideClass}
    onMouseOver={() => callback(id)}
    onMouseOut={callbackOut}
  >
    {children}
  </StyledCardComponent>
);

export default Item;
