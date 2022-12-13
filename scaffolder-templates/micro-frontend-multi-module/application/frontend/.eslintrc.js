'use strict';

module.exports = {
    root: true,

    extends: [
        './node_modules/@te/eslint-config-thousandeyes/index.js',
        'prettier',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],

    env: {
        node: true,
        es6: true,
    },

    plugins: [
        'jest',
    ],

    overrides: [
        {
            files: [
                '**/*.{j,t}s',
                '**/*.vue',
            ],
            rules: {
                'no-unused-vars': 'off',
                '@typescript-eslint/no-type-alias': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/interface-name-prefix': 'off',
                '@typescript-eslint/no-use-before-define': ['error', { functions: false, enums: false, classes: false }],

                // conflicting with import statments
                '@typescript-eslint/class-name-casing': 'off',
                'no-use-before-define': 'off',
            }
        },
        {
            files: [
                '**/*.spec.{j,t}s?(x)',
                '**/__mocks__/**/*.{j,t}s?(x)',
                'src/tests-utils/**/*.{j,t}s?(x)',
            ],
            env: {
                'jest/globals': true,
                jest: true,
                jasmine: true,
            },
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'max-nested-callbacks': [
                    'warn',
                    5
                ]
            }
        },
    ],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        },
    },
    reportUnusedDisableDirectives: true
};
