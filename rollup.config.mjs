import { nodeResolve } from  "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import sourcemaps from "rollup-plugin-sourcemaps"
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import  peerDepsExternal from "rollup-plugin-peer-deps-external";
// import * as packageJson from './package.json' assert {type: "json"}
// const packageJson =  require("./package.json")
// const packageJson = import * as packageJson from './package.json';

export default [
    {
        input: "src/index.ts",
        output: [
            {
                // file: packageJson.main,
                file: "dist/cjs/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                // file: packageJson.module,
                file: "dist/esm/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            nodeResolve(),
            commonjs(),
            babel({ babelHelpers: "bundled" }),
            image(),
            typescript({ tsconfig: "./tsconfig.json", inlineSources: true }),
            postcss(),
            sourcemaps(),
            terser(),
            peerDepsExternal()
        ],
    },
    {
        // input: "dist/esm/types/index.d.ts",
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.css$/],
        // external: [/\.(css|less|scss)$/] //to add scss
    }
]