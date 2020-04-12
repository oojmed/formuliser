#!/bin/sh

cp ../src/js/info/compounds.js compounds.mjs

node --experimental-modules genCompoundMarkdown.mjs