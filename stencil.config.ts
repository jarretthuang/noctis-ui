import { Config } from "@stencil/core";
import tailwind, { tailwindHMR } from "stencil-tailwind-plugin";

export const config: Config = {
  namespace: "noctis-ui",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [tailwind(), tailwindHMR()],
};
