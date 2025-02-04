export = {
    plugins: [
        'jest',
    ],
    extends: [
        './typescript-eslint',
    ],
    rules: {
        'jest/consistent-test-it': ['warn', {
            fn: 'test',
            withinDescribe: 'it',
        }],
        'jest/expect-expect': ['error', {
            assertFunctionNames: ['expect', 'request.*.expect'],
            additionalTestBlockFunctions: [],
        }],
        'jest/max-expects': ['error', {
            max: 5,
        }],
        'jest/max-nested-describe': ['error', {
            max: 3,
        }],
        'jest/no-alias-methods': 'warn',
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-deprecated-functions': 'warn',
        'jest/no-disabled-tests': 'error',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'warn',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        // Deprecated; use `jest/no-conditional-in-test`
        'jest/no-if': 'off',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'warn',
        'jest/no-large-snapshots': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-restricted-jest-methods': 'off',
        'jest/no-restricted-matchers': ['error', {
            resolves: 'Use `expect(await promise)` instead.',
            toBeFalsy: 'Avoid `toBeFalsy`',
            toBeTruthy: 'Avoid `toBeTruthy`',
            toMatchSnapshot: 'Use `toMatchInlineSnapshot()` instead',
            toThrowErrorMatchingSnapshot: 'Use `toThrowErrorMatchingInlineSnapshot()` instead',
        }],
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'warn',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-each': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': ['error', {
            allowedPrefixes: [],
            ignore: [],
            ignoreTopLevelDescribe: true,
        }],
        'jest/prefer-mock-promise-shorthand': 'warn',
        'jest/prefer-snapshot-hint': ['error', 'always'],
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-hook': ['error', {
            allowedFunctionCalls: [],
        }],
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': ['warn', {
            ignoreTypeOfDescribeName: true,
        }],
    },
};
