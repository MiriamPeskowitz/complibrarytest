//declare modules
//necessary file, or delete? Error was solved by adding  "include": ["src", "types", "**/*.ts", "**/*.tsx"] to tsconfig
//add to tsconfig include array
declare module "*.svg" {
    const content: string | any
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }

  declare module "*.jss.js" {
    const content: string;
    export default content;
  }

  declare module "*.js" {
    const content: string;
    export default content;
  }

  //possible,
  declare module "/**/*.js" {
    const content: string;
    export default content;
  }
