module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier', // prettier
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        '@typescript-eslint/no-restricted-imports': [
            'warn',
            {
                name: 'react-redux',
                importNames: ['useSelector', 'useDispatch'],
                message:
                    'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
            },
        ],
    },
};
