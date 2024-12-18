# node-ts-loader

Node.js loader for loading ES modules

## Install

```sh
# npm
npm install node-ts-loader --save-dev

# yarn
yarn add -D node-ts-loader
```

## Usage

```sh
node --loader node-ts-loader file.ts

node --loader node-ts-loader/register file.mts

node --import node-ts-loader file.mts

node --import node-ts-loader/register file.ts

cross-env NODE_OPTIONS="--import=node-ts-loader" node file.ts
```