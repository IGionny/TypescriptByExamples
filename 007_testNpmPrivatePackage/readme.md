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
- `npm install --save-dev my-lib-pkg` - install the last version of my-lib-pkg
- `tsc --traceResolution` - useful to check how tsc resolve the dependencies, it can show errors and warnings


Credits
-------
- https://github.com/verdaccio/verdaccio
- https://docs.npmjs.com/getting-started/creating-node-modules
- https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
- https://stackoverflow.com/questions/40949693/can-i-import-d-ts-instead-of-require-it

Explanation
-----------
Here we use the package just pushed into the private registry.

To do that we execute the command line: `npm install --save-dev {package-name}` the `--save-dev` option is to persist into the package.json devDependencies list the name/version of the package installed.

Note: I use `tsc --traceResolution` to discover that I miss some info in MyLib package.json file.

Because MyLib is not a module but a namespace compiled in js and followed by a definition file, we can only 'import' it with the absolute path: `import "my-lib-pkg"` in this way the compiler (`tsc`) will search for a node_modules package with the name `my-lib-pkg` read its `package.json` and use the `main` script.

Note: now the IDE is happy and can resolve the dependency correctly and help us to use this fabolous code, we can also compile it! BUT if we execute the `index.ts` file we will receive an error because MyLib is NOT a module and is NOT declared HOW to import it.

To proof this I add other 2 devDependencies: `ts-node` and `typescript`.

After I use the `package.json` 'test' script to execute the command: `ts-node index.ts`, the result is: `ReferenceError: MyLib is not defined`!


Cases:
 - "module": "commonjs" (default):
    - the index.js file present the Object.defineProperty(exports, "__esModule", { value: true });
    - executing it with ts-node throw a ReferenceError
    - the web-browser throw a ReferenceError: exports is not defined
 - "module": "es2015"
    - the index.js file present an invariated import directive
    - ts-note throw a SyntaxError: Unexpected string for the import "my-lib-pkg";
    - the web-browser throw the same SyntaxError