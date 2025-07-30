import { eslint } from '@old7even/eslint';

export default eslint(
  {
    typescript: true,
    react: true,
    jsx: true,
    ignores: ['dist'],
  },
  {
    rules: {
      'react/no-unstable-context-value': 'off',
      'ts/no-require-imports': 'off',
    },
  }
);
