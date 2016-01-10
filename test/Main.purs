module Test.Main where

import Prelude

import Control.Monad.Eff (Eff())
import Control.Monad.Eff.Console as Console
import Node.Process as Process

main :: forall e. Eff (console :: Console.CONSOLE, process :: Process.PROCESS | e) Unit
main = do
  Console.log "TODO: Tests"
  Process.exit 1
