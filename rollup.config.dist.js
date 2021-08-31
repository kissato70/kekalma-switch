import cleaner from "rollup-plugin-cleaner";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import node_resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";


export default {
  input: "src/switch.tsx",
  output: [
    {
      file: "dist/switch.js",
      format: "es",
      plugins: [terser({ output: {comments: "false"} })],
      sourcemap: true
    }
  ],
  plugins: [
    cleaner({
      targets: ["./dist/"]
    }),
    peerDepsExternal(),
    node_resolve(),

    typescript({ 
      tsconfig: "tsconfig.dist.json" 
    }),
    postcss({plugins: [] } ),
    json(),
    terser(),
  ]
};