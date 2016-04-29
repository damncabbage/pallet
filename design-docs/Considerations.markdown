Considerations
==============



## Placement of Files

Files need to be placed such that:

* Accidental `import`ing of files that weren't specified as project dependencies isn't possible (like Haskell's Cabal, npm v2, ied, and unlike [npm v3](https://github.com/npm/npm/issues/10599)).

* At least for a while, things that look for files in `bower_components/purescript-*/src/**/*.purs` will find them.
  * This conflicts with the first item, as far as I can tell, and with how psc and Pulp works; psc needs to be given all paths up-front in order to compile, and cannot distinguish between direct and deeper dependencies.
  * Maybe we can add different paths in `ps_modules/`, and add something to psc that would include both, eg. `psc src/**/*.purs --direct-dep ps_modules/direct/*/src/**/*.purs --indirect-dep ps_modules/transitive/*/src/**/*.purs`, but that warns if the first group imports anything from the indirect/transitive group.
  * Exposed modules would become possible with this (internal modules shift from the first group to the second, and from dependencies in the second to the files in the third), but it's likely just abusing the mechanism.

* Arbitrary groupings (dev vs production) are possible. Use convention to settle on those two groups (maybe even only initially exposing those two to the end user, but allowing more groups to be internally-defined)

* `node_modules` needs to still be the home for any native-JS libraries, at the very least. And
  those libraries need to be able to `require()` their dependencies.


## Backwards-Compatibility

* `bower_components` location as mentioned earlier.
* We need to be able to install Bower-registered packages (ie. the entire current ecosystem).
* We need to be able to move packages from Bower to NPM (or whatever final registry we've decided on).
* We don't want to run our own registry. But it's looking more like Pursuit may end up as a
  secondary registry, eg. for API information, or as a single point to figure out where a
  package is.
  * Maybe there are multiple definitions of "registry". Index + pointers, vs npm's package host.
  * Aside: does Pursuit have any access controls right now?


## Compiler-Versioning

* Things are changing pretty frenetically, even now. We need to be able to indicate what version of
  Purescript a package is meant to work with.



## Rough Notes

* Package definition:
  * Specifies an "engine" range.

* To-the-right progression:
  * has-engines => (resolve-deps => has-deps) => build ==> run   <--- only useful if there's a main
                                                       "=> repl
                                                       "=> test
                                                             ^... Generalise these to tasks?
                                                             default to main for each
                                                             category.
  * has-engines installs the engines that the head/current package requires, uses a simple flag as cache.
    * engines are going to need some build preferences; psc already has three ways to install it,
      let along Node. :\
    * I say "engines" because there's both Node and PSC-itself deps.
  * resolve-deps either figures it out from scratch, checking both purescript deps and FFI deps (eg. npm) meet both each other's. Uses a lockfile as cache, also keyed by engine.
  * has-deps installs deps from web, local manifest in .pallet is cache.

* To look at:
  * Lein profiles, for config overlays.

* Scattered thoughts:
  * init/new can use a Library or App (later option to make this configuraable or something, leave hardcoded for now)
    * Get different task lists, library doesn't have a Main... or does it?
  * Exposed modules. Are they a good idea? Maybe default to everything, with the option to
    explicitly list? Maybe required so we can say what's in a package without needing to
    deep-inspect on publish?

