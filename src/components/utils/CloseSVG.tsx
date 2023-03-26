import { FunctionalComponent, h } from "@stencil/core";
import { SVGFuncCompTypeProps } from "./typeProps";

export const CloseSVG: FunctionalComponent<SVGFuncCompTypeProps> = ({
  cssClass: classes = "",
  cssClassObj: classObj,
  onClick,
  fillCssClass: pathCssClass,
}) => {
  return (
    <svg
      class={{
        "group cursor-pointer": true,
        [classes]: true,
        ...classObj,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        class={pathCssClass}
        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
      />
    </svg>
  );
};
