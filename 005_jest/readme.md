Jest
=====

Environment
-----------

- Windows10
- visual studio code 1.28.2
- Typescript 3.1.6
- npm packaes:
    - "@types/jest": "^23.3.9"
    - "@types/node": "^10.12.0"
    - "jest": "^23.6.0"
    - "ts-jest": "^23.10.4"
    - "typescript": "^3.1.6"

Commands
--------

- `npm init`   - to init the package.json
- `npm install -g typescript`   - to install typescript compiler (tsc)
- `tsc`   - to compile all *.ts accordingly with the tsconfig.json file
- `npm install`   - to restore npm packages (package.json file)
- `npm prune`   - remove packages that are not present in package.json or in relative dependencies
- `node test`  - to execute the stage 'test' (in this case execute jest)
- `npm run-script <stage>` - to execute an arbitrary stage (script)

Credits
-------

- https://jestjs.io
- Huafu Gandon https://github.com/huafu
- https://kulshekhar.github.io/ts-jest/
