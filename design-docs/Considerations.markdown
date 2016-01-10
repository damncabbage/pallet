Considerations
==============



## Placement of Files

Files need to be placed such that:

* Accidental `import`ing of files that weren't specified as project dependencies isn't possible (like Haskell's Cabal, npm v2, ied, and unlike [npm v3](https://github.com/npm/npm/issues/10599)).

* At least for a while, things that look for files in `bower_components/purescript-*/src/**/*.purs` will find them.
  * This conflicts with the first item, as far as I can tell, and with how psc and Pulp works; psc needs to be given all paths up-front in order to compile, and cannot distinguish between direct and deeper dependencies.
  * Maybe we can add different paths in `ps_modules/`, and add something to psc that would include both, eg. `psc src/**/*.purs --direct-dep ps_modules/direct/*/src/**/*.purs --indirect-dep ps_modules/transitive/*/src/**/*.purs`, but that warns if the first group imports anything from the indirect/transitive group.

* Arbitrary groupings (dev vs production) are possible. Use convention to settle on those two groups (maybe even only initially exposing those two to the end user, but allowing more groups to be internally-defined)
