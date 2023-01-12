## Awesome commandline tool

`npm start <arg>...`

**Example:**

```console
$ npm start AB cD ef

> run-to-completion@1.0.0 start
> node command.js AB cD ef

[ 'AB', 'CD', 'EF' ]
```
## Notes

This repo has problems when tests are introduced. Switch branches and use the debugger to develop some intuition.

| Branch | description |
| ------ | ----------- |
| master | initial commit, has command, it works. |
| add-spec | ok, let's test this. fack, doesn't work!|
| fix-spec | ok. So the problem is when a module is imported, unnecesary code is executed. Let's fix that|
