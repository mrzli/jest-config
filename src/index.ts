import { JestConfigWithTsJest } from 'ts-jest';

export async function getJestConfig(): Promise<JestConfigWithTsJest> {
  return {
    preset: 'ts-jest',
    verbose: true,
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
    },
  };
}
