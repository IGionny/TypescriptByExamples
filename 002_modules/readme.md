Modules
=====

Environment
-----------

- Windows10
- visual studio code 1.28.2
- Typescript 3.1.6

Commands
--------

- `npm init`   - to init the package.json
- `npm install -g typescript`   - to install typescript compiler (tsc)
- `tsc`   - to compile all *.ts accordingly with the tsconfig.json file

Concepts
--------
A module is a file that contains an top-level export or import keyword.
All the code in a module (variables, functions, classes) works in their scope and not in the Global ones.
Modules can share some parts via export keyword.
Modules import one another using a module loader.
Well-known modules loaders used in JavaScript are the CommonJS module loader for Node.js and require.js for Web applications.
SystemJS is another one: https://github.com/systemjs/systemjs

Credits
--------
https://www.typescriptlang.org/docs/handbook/modules.html
https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

Import keyword browser native support
-------------------------------------
Chrome: from 61 release date 5/09/2017
Edge: from 16 release date June 16, 2015
Firefox: from 60 release date 	2017-04-10
Safari: from 10.1 release date July 19, 2017


#### Module: none
With the Module option set to 'none' we cannot use the 'export' or 'import' keywords.
To load in browser the 'module' dependency, we need to add it via <script src=..>

### Module: CommonJS: the default choice when the target is es5 or es3
CommonJS use the ES6 syntax and can be supported natively by the browser.


### Module: SystemJS
To use SystemJS as module loader we can't open the the HTML file directly because the browser block all the cross-origin requests that don't come from http or https protocols.
We use `lite-server` and run it with `npm start`
