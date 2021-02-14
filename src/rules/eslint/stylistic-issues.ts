export = {
    rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['warn', 'consistent'],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', 'stroustrup', {
            allowSingleLine: false,
        }],
        // See @typescript-eslint/naming-convention
        'camelcase': 'off',
        'capitalized-comments': ['warn', 'always', {
            ignorePattern: 'eslint|tslint',
            ignoreConsecutiveComments: true,
        }],
        'comma-dangle': ['warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        'comma-spacing': ['warn', {
            before: false,
            after: true,
        }],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'consistent-this': ['error', 'self'],
        'eol-last': ['warn', 'always'],
        'func-call-spacing': ['warn', 'never'],
        'func-name-matching': ['error', 'always'],
        'func-names': ['error', 'always'],
        'func-style': ['error', 'declaration'],
        'function-call-argument-newline': ['warn', 'consistent'],
        'function-paren-newline': ['warn', 'consistent'],
        'id-denylist': ['error', 'arr', 'ctx', 'el', 'elem', 'err', 'ind', 'ptr'],
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': ['warn', 'beside'],
        'indent': ['warn', 4, {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
        }],
        'jsx-quotes': ['warn', 'prefer-double'],
        'key-spacing': ['warn', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'keyword-spacing': ['warn', {
            before: true,
            after: true,
        }],
        'line-comment-position': ['error', {
            position: 'above',
            ignorePattern: '^ == .+',
        }],
        'linebreak-style': ['warn', 'unix'],
        'lines-around-comment': ['warn', {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: false,
            afterLineComment: false,
            allowBlockStart: false,
            allowBlockEnd: false,
            allowObjectStart: false,
            allowObjectEnd: false,
            allowArrayStart: false,
            allowArrayEnd: false,
            allowClassStart: false,
            allowClassEnd: false,
        }],
        'lines-between-class-members': ['warn', 'always', {
            exceptAfterSingleLine: true,
        }],
        'max-depth': ['error', 4],
        'max-len': ['error', {
            code: 120,
            tabWidth: 4,
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
        }],
        // Business object may have many properties an even with basic logic will have many lines of code.
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': ['error', 2],
        'max-params': ['error', {
            max: 3,
        }],
        // Checking for function complexity is enough, while this rule is overridden for test files anyway
        'max-statements': ['off', {
            max: 10,
        }],
        'max-statements-per-line': ['error', {
            max: 1,
        }],
        'multiline-comment-style': ['warn', 'separate-lines'],
        'multiline-ternary': ['warn', 'always-multiline'],
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: true,
            properties: true,
        }],
        'new-parens': 'warn',
        // As long as the line is under the length limit, it should be ok to have any number of calls.
        // The real challenge is to enforce a new line in custom situations, e.g. before ".pipe()" or ".then()".
        // Especially this is a problem in TypeScript, where indents do not work properly all the time (yet).
        'newline-per-chained-call': ['off', {
            ignoreChainWithDepth: 3,
        }],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': ['error', {
            ignorePattern: '^ == .+',
        }],
        'no-lonely-if': 'warn',
        'no-mixed-operators': ['error', {
            groups: [
                ['+', '-'],
                ['*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||', '?:', '??'],
                ['in', 'instanceof'],
            ],
            allowSamePrecedence: true,
        }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': ['warn', {
            max: 1,
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            maxEOF: 0,
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            maxBOF: 0,
        }],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'error',
        'no-restricted-syntax': ['error', 'ForInStatement'],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'warn',
        'no-underscore-dangle': ['error', {
            allowFunctionParams: false,
        }],
        'no-unneeded-ternary': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': ['warn', 'below'],
        'object-curly-newline': ['warn', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ImportDeclaration: { multiline: true },
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ExportDeclaration: 'always',
        }],
        'object-curly-spacing': ['warn', 'always', {
            arraysInObjects: true,
            objectsInObjects: true,
        }],
        'object-property-newline': ['warn', {
            allowAllPropertiesOnSameLine: false,
        }],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn', 'always'],
        'operator-assignment': ['warn', 'always'],
        'operator-linebreak': ['warn', 'before', {
            overrides: {
                '=': 'none',
                '==': 'none',
                '!=': 'none',
                '>=': 'none',
                '<=': 'none',
                '===': 'none',
                '+=': 'none',
            },
        }],
        'padded-blocks': ['warn', 'never'],
        'padding-line-between-statements': 'off',
        'prefer-exponentiation-operator': 'warn',
        'prefer-object-spread': 'warn',
        'quote-props': ['warn', 'consistent-as-needed'],
        'quotes': ['warn', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],
        'semi': ['warn', 'always'],
        'semi-spacing': ['warn', {
            before: false,
            after: true,
        }],
        'semi-style': ['warn', 'last'],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['warn', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': ['warn', {
            int32Hint: false,
        }],
        'space-unary-ops': ['warn', {
            words: true,
            nonwords: false,
        }],
        'spaced-comment': ['warn', 'always'],
        'switch-colon-spacing': ['warn', {
            after: true,
            before: false,
        }],
        'template-tag-spacing': ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        'wrap-regex': 'warn',
    },
};
