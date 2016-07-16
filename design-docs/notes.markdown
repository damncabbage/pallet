Args sketch:

```
Usage: pallet [global-options] <command> [command-options]

Commands:
  browserify  Produce a deployable bundle using Browserify.
  build       Build the project.
  dep         Invoke Bower for package management.
  docs        Generate project documentation.
  init        Generate an example PureScript project.
  psci        Launch a PureScript REPL configured for the project.
  run         Compile and run the project.
  server      Launch a Webpack development server.
  test        Run project tests.

Global options:
  --help -h               Show this help message.
  --version -v            Show current pallet version.

Use `pallet <command> --help` or `pallet help <command>` to learn about command-specific options.
```

Sample workflow:
```
$ pallet new app example
* Initialising new app project "example"
* Creating new files:
  ✓  package.json
  ✓  bower.json
  !  .gitignore

  <!> A .gitignore already exists; do you want to add the following:
    /bower_components/
    /node_modules/

    # Compiled output
    /output/

    # Local development
    /.pallet-cache/
    /.pulp-cache/
    /.psci*
    /src/.webpack.js

  ... to your .gitignore (y/N)?

  ✓+ .gitignore
  ✓  src/Main.purs
  ✓  test/Main.purs
* Done.

$ pallet new lib example
* Creating new files:
  ✓  package.json
  ✓  bower.json
  ✓  .gitignore
  ✓  src/Main.purs
  ✓  test/Main.purs
* Done.

$ pallet new lib example
* Creating new files:
  !  package.json

  <!> A package.json already exists! We want to add one with the following:
    {
      "name": "pallet",
      "version": "0.0.1",
      "description": "A package manager for Purescript.",
      "main": "pallet.js",
      "bin": {
        "pallet": "pallet-bin"
      },
      "scripts": {
        "lint": "jshint src",
        "compile": "pulp build --force --optimise --to pallet.js",
        "build": "npm run lint && npm run compile",
        "test": "pulp run test",
        "docs": "doctoc README.markdown && pulp docs",
        "prepublish": "npm run build"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/damncabbage/pallet.git"
      },
      "keywords": [
        "purescript"
      ],
      "author": "Rob Howard <rob@robhoward.id.au>",
      "license": "Apache-2.0",
      "bugs": {
        "url": "https://github.com/damncabbage/pallet/issues"
      },
      "homepage": "https://github.com/damncabbage/pallet#readme",
      "dependencies": {
        "bower": "1.7.2",
        "yargs": "^3.31.0"
      },
      "devDependencies": {
        "doctoc": "0.15.0",
        "jshint": "^2.8.0",
        "pulp": "^7.0.0",
        "purescript": "~0.7.6"
      }
    }

  ... We can't merge this automatically. Do you want to:
  1) Stop now, or
  2) Skip this file?
  (1 or 2)> 1
* Stopped.

$ pallet new lib example
* Creating new files:
  !  package.json

  => A package.json already exists! We want to add one with the following:
       {
         "name": "pallet",
         "version": "0.0.1",
         ...
       }

     ... We can't merge this automatically. Do you want to:
     1) Stop now, or
     2) Skip this file?
     (1 or 2)> 2

  ➲  package.json
  ✓  bower.json
  ✓  .gitignore
  ✓  src/Main.purs
  ✓  test/Main.purs
* Done.

$ pallet new lib example
* Creating new files:
  !  package.json

  => A package.json already exists! We want to add one with the following:
    {
      "name": "pallet",
      "version": "0.0.1",
      ...
    }

  ... We can't merge this automatically, and we can't ask you how you wish to proceed (this is a
  non-interactive terminal; see http://...TODO.../ for more).
* Stopped.

$ pallet new lib example
* Creating new files:
  !  package.json

  => We couldn't write a new package.json! We want to add one with the following:
       {
         "name": "pallet",
         "version": "0.0.1",
         ...
       }

     ... But we failed to write it out with this error:
       package.json: Permission denied
* Failed.

$ pallet new lib example --force
* Creating new files:
  !  package.json

  => A package.json already exists! We want to add one with the following:
       {
         "name": "pallet",
         ...
       }

     ... We can't merge this automatically. You've told us with --force that you want to proceed
     regardless. Overwriting this file...

  => We couldn't write a new package.json!
     ... But we failed to write it out with this error:
       package.json: Permission denied
* Failed.


$ pallet install bower:purescript-yargs

* Added purescript-yargs ^1.2.9 to bower.json



```
