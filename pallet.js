// Generated by psc-bundle 0.7.6.1
var PS = { };
(function(exports) {
  /* global exports, console */
  "use strict";

  // module Control.Monad.Eff.Console

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Console"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["log"] = $foreign.log;;
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  "use strict";
  // module Node.Process

  /* global exports */
  /* global process */

  exports.process = process;

  exports.exit = function(code) {
      return function() {
          process.exit(code);
      };
  };
 
})(PS["Node.Process"] = PS["Node.Process"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Node.Process"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  var Data_StrMap = PS["Data.StrMap"];
  var Data_Posix = PS["Data.Posix"];
  var Data_Posix_Signal = PS["Data.Posix.Signal"];
  var Node_Stream = PS["Node.Stream"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];
  var Node_Platform = PS["Node.Platform"];
  exports["exit"] = $foreign.exit;;
 
})(PS["Node.Process"] = PS["Node.Process"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Node_Process = PS["Node.Process"];     
  var main = function __do() {
      Control_Monad_Eff_Console.log("Usage: pallet --help")();
      return Node_Process.exit(1)();
  };
  exports["main"] = main;;
 
})(PS["Main"] = PS["Main"] || {});

PS["Main"].main();