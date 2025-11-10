const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
    // convert some legacy configs
    ...compat.extends('plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'),
    {
        files: ['**/*.ts'],
        ignores: ['.eslintrc.js'],
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
            'simple-import-sort': require('eslint-plugin-simple-import-sort'),
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
];
