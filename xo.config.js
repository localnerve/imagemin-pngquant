import js from '@eslint/js';

const customRules = {
  'n/prefer-global/buffer': 0,
  '@typescript-eslint/ban-types': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/no-named-default': 'off',
  'promise/prefer-await-to-then': 'off',
  '@typescript-eslint/no-restricted-types': 'off',
};

const xoConfig = [{
  files: ['xo.config.js'],
  space: true,
}, {
  rules: {
    ...js.configs.recommended.rules,
    ...customRules,
  },
}];

export default xoConfig;
