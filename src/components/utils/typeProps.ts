type CssClassTypeProps = {
  cssClass?: string;
  cssClassObj?: {
    [className: string]: boolean;
  };
};

export type FuncCompTypeProps = CssClassTypeProps & {
  onClick?: () => void;
};

export type SVGFuncCompTypeProps = FuncCompTypeProps & {
  fillCssClass?: string;
};
