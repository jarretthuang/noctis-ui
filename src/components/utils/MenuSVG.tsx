import { FunctionalComponent, h } from "@stencil/core";
import { SVGFuncCompTypeProps } from "./typeProps";

export const MenuSVG: FunctionalComponent<SVGFuncCompTypeProps> = ({
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
        d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
      />
    </svg>
  );
};
