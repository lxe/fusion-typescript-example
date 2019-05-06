# fusion-typescript-example

[![Edit fusion-ts](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/lxe/fusion-typescript-example/tree/master/?fontsize=14&module=%2Fsrc%2Fcomponents%2FRoot.tsx)

[Fusion.JS](https://fusionjs.com) + [BaseUI](https://baseweb.design) + [TypeScript](https://www.typescriptlang.org/)

## Features

- [Forked](https://github.com/lxe/fusion-cli) fusion-cli to allow webpack configuration
  - New progress plugin
  - Don't babelify node_modules by default (babel is only used to compile [fusion-cli/entries](https://github.com/fusionjs/fusion-cli/tree/master/entries))
  - Other goodies

- Module resolution aliases at `src/` (`import Foo from '../../../foo` -> `import Foo from 'src/foo'`)
- ESLint + [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- Works well with VSCode
- BaseUI included (but no types, since baseui uses flow)

## Get Started

Clone this, then [`yarn`](https://yarnpkg.com/en/) and `yarn dev` 
