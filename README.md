# typescriptProject

TypeScript = Javascript + A type system
# Benefits

catch errors during development
use type annotation to analyse code
only active during development
doesn't provide any performance annotation

typescript code => typescript compiler => plain old javascript

website => typescriptiang => playground

# Project Setup

npm i -g typescript ts-node
tcs --help
tsc => compiler of typescript
1) tsc index.ts => generate index.js file
2) than run node index.js

ts-node index.ts => shortcut to above two command in combine

Use case
1) when we spell incorrectly the variable
2) when we called function with changed order of arguments


Syntax + feature v/s design pattren with TS

1) Syntax + feature
a) Types => Easy way to refer to different property + function that has value
Primitive type -> string, number, boolean, void, null, undefined, symbol
Object type -> Function, array, classes, object


npm i -g parcel-bundler
npx parcel index.html