## Awesome commandline tool

`npm start <arg>...`

**Example:**

```console
$ npm start AB cD ef

> run-to-completion@1.0.0 start
> node command.js AB cD ef

[ 'AB', 'CD', 'EF' ]
```


## Bug

There's a bug when we test. Why does it error in the test case? Hint: look at
the code executed during node module import (require).

```console
$ npm test

> node-dependency-blues@1.0.0 test
> mocha ./command-spec.js


Error: Slash sucks
    at processInput ({{ project-dir }}/node-dependency-blues/command.js:4:11)
    at Object.<anonymous> ({{ project-dir }}/node-dependency-blues/command.js:9:8)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> ({{ project-dir }}/node-dependency-blues/command-spec.js:2:26)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
    at async importModuleDynamicallyWrapper (node:internal/vm/module:438:15)
    at async formattedImport ({{ project-dir }}/node-dependency-blues/node_modules/mocha/lib/nodejs/esm-utils.js:9:14)
    at async exports.requireOrImport ({{ project-dir }}/node-dependency-blues/node_modules/mocha/lib/nodejs/esm-utils.js:42:28)
    at async exports.loadFilesAsync ({{ project-dir }}/node-dependency-blues/node_modules/mocha/lib/nodejs/esm-utils.js:100:20)
    at async singleRun ({{ project-dir }}/node-dependency-blues/node_modules/mocha/lib/cli/run-helpers.js:125:3)
    at async exports.handler ({{ project-dir }}/node-dependency-blues/node_modules/mocha/lib/cli/run.js:370:5)
```

## Solution

use `if (require.main === module )` pattern to separate code that
runs during import, from logic that doesn't.

```console
$ npm test

> node-dependency-blues@1.0.0 test
> mocha ./command-spec.js



  Test capitalization
    ✔ Caps a,b,c


  1 passing (3ms)

```
