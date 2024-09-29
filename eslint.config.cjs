module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    rules: {
        'prettier/prettier': 'error',

        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling', 'index'],
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],

        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
