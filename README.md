# Jest Config

This package contains a function used to create a Jest config object.

Currently, this is a `ts-jest` configuration.

## Installation

```bash
npm install --save-dev @gmjs/eslint-config
```

## Usage

Create an Jest config file, for example `jest.config.ts`:

```ts
import type { JestConfigWithTsJest } from 'ts-jest';
import { getJestConfig } from '@gmjs/jest-config';

export default async (): Promise<JestConfigWithTsJest> => {
  const defaultConfig = await getJestConfig();
  return {
    ...defaultConfig,
  };
};
```
