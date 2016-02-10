# generator-babel-webpack-boilerplate
[![Travis build status](http://img.shields.io/travis/j5int/generator-babel-webpack-boilerplate.svg?style=flat)](https://travis-ci.org/j5int/generator-babel-webpack-boilerplate)
[![Dependency Status](https://david-dm.org/j5int/generator-babel-webpack-boilerplate.svg)](https://david-dm.org/j5int/generator-babel-webpack-boilerplate)
[![devDependency Status](https://david-dm.org/j5int/generator-babel-webpack-boilerplate/dev-status.svg)](https://david-dm.org/j5int/generator-babel-webpack-boilerplate#info=devDependencies)

A [Yeoman](http://yeoman.io/) generator to author libraries in ES2015 (and beyond!) for Node and the browser.

### Features

- Author in [ES2015](https://babeljs.io/docs/learn-es2015/) (even the unit tests)
- Export as ES5 & [UMD](https://github.com/umdjs/umd)
- [Mocha](http://mochajs.org/)-[Chai](http://chaijs.com/)-[Sinon](http://sinonjs.org/) testing stack
- Unit tests that work in Node and in the browser

### Installation

Install `yo` and this generator globally.

`npm install -g yo generator-babel-webpack-boilerplate`

### Using Yeoman

Navigate to the directory you'd like to use for your project, then run `yo babel-boilerplate`.

Answer a few questions, and your project will be scaffolded.

### Basic Guide

Write your code in `src`. The entry file is what you named the project in kebab case ([although the filename
can be changed](https://github.com/j5int/generator-babel-webpack-boilerplate#i-want-to-change-the-primary-source-file)).

Run `npm run build` to compile the source into a distributable format.

Put your unit tests in `test/unit`. The `npm test` command runs the tests using Node. If your library / tests
require the DOM API, see the `test/setup/node.js` file.

### npm Scripts

- `npm run test` - run the unit tests
- `npm run test:watch` - Continuously run the unit tests as you make changes to the source
   and test files themselves
- `npm run build-browser-tests` - Build the library for use with the browser test runner.
- `npm run build-browser-tests:watch` - Watch and rebuild the library for browser tests on change
- `npm run build` - Build the library in deployment form
- `npm run build-dev` - Build the library in development form

### Browser Tests

The [browser spec runner](https://github.com/j5int/generator-babel-webpack-boilerplate/blob/master/test/runner.html)
can be opened in a browser to run your tests. For it to work, you must first run `npm run build-browser-tests`.
There is an option to watch and rebuild too.

### FAQ

#### What Babel features are supported?

Nearly all Babel features *should* be supported by this boilerplate. If you find a feature that is throwing an error
when you use it, follow these steps:

1. Double check to make sure that you're not typoing the new syntax ;)
2. Determine what task is failing (for instance, is it JSCS?)
3. Check that project's issue tracker to see if it is a known issue
4. If it isn't, then open an issue here

Because of the fact that dependencies of this boilerplate, such as JSCS, are maintained by a team separate from Babel, there
may be a delay between when a new feature is added to Babel and when those other libraries add support for it.

#### When should I consider using this boilerplate?

You're authoring any library that exports a single file. From small libraries to full-fledged
JavaScript web apps, I use this generator for both.

#### When might I not want to use this boilerplate?

You can always use this boilerplate as inspiration, but it works best for smaller libraries.
If you're building a full-scale webapp, you will likely need to make more changes to the build system.
This is because the boilerplate only deals with JavaScript; common build tasks
like CSS preprocessing, image minification, or HTML template building are
intentionally omitted from this boilerplate.

There are so many different preferences and needs when it comes to building a
webapp, it wouldn't make sense to pick any one configuration for this boilerplate.

Luckily, it's relatively straightforward to add those things to the boilerplate
on a per-project basis.

#### What's the browser compatibility?

As a rule of thumb, Babel works best in IE9 and above.

#### Are there examples?

Quite a few. Check them out on [the wiki](https://github.com/j5int/generator-babel-webpack-boilerplate/wiki/Examples).

#### Is there a version for Node-only projects?

There is, though I wouldn't recommend using it. It's unmaintained, and Node is rapidly
adding support for ES2015 features as of v4. Before you decide to transpile your Node code,
double-check to make sure that it isn't already supported.

With that said, you can still check out the project
[over here](https://github.com/jmeas/es6-node-boilerplate).

### Customizing

This boilerplate is, to a degree, customizable. To make changes,
find what you're looking to do below and follow the instructions.

#### I want to change the primary source file

The primary source file for the library is `src/index.js`. Only the files that this
file imports will be included in the final build. To change the name of this entry file:

1. Rename the file
2. Update the value of `entryFileName` in `package.json` under `babelBoilerplateOptions`

#### I want to change the destination file name or directory

1. Update `main` in `package.json`

#### I want to change what variable my module exports

`MyLibrary` is the name of the variable exported from this boilerplate. You can change this by following
these steps:

1. Ensure that the variable you're exporting exists in your scripts
2. Update the value of `exportVarName` in `package.json` under `babelBoilerplateOptions`
3. Check that the unit tests have been updated to reference the new value

#### I don't want to export a variable

When prompted for the name of the library's main variable, leave the response empty.

#### My library depends on an external module

In the simplest case, you just need to install the module and use it in your scripts.

If you want to access the module itself in your unit test files, you will need to set up the
test environment to support the module. To do this:

1. Load the module in the [test setup file](https://github.com/j5int/generator-babel-webpack-boilerplate/blob/master/test/setup/setup.js).
2. Add any imported variables to globals object in the
[test globals JSON](https://github.com/j5int/generator-babel-webpack-boilerplate/blob/master/test/setup/.globals.js).
