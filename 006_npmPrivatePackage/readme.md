Npm Private Package
====================

Environment
-----------

- Windows10
- visual studio code 1.28.2
- Typescript 3.1.6
- Node 10.13.0

Commands
--------

- `npm init`   - to init the package.json
- `npm install -g typescript`   - to install typescript compiler (tsc)
- `tsc`   - to compile all *.ts accordingly with the tsconfig.json file

- `npm adduser --registry http://localhost:4873` - this add the current user to the verdaccio registry server
- `npm publish --registry http://localhost:4873` - this push the current directory as a npm package to the verdaccio registry


Credits
-------
- https://docs.npmjs.com/files/package.json
- https://github.com/verdaccio/verdaccio
- https://docs.npmjs.com/getting-started/creating-node-modules
- https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html

Explanation
-----------
`npm init` init the repository as a new npm package.
Note: pay attention to the package name: must be lowercase, less than 214 chars..

I edit the tsconfig.json to emit also the definition files (`"declaration" : true`) and set the `"outDir": "dist"` to put all the compiled ts into the ts folder

I edit the package.json file and set the `main` and `types` options to point to the js file that i want to share and the relatative d.ts file:

- "main": "./dist/MyLib.js",
- "types": "./dist/MyLib.d.ts",

Finally I publish the entire content of this folder to the private npm registry made with the great `verdaccio` project.
We have to execute the `adduser` command and after the `publish` command.

In another study I will pull and use this package