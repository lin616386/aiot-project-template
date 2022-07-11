const alias = require('./ucf-config/ucf.config.alias');

module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es2021: true,
		es6: true,
		amd: true,
		node: true,
	},
	globals: {
		window: true,
		module: true,
	},
	extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	settings: {
		"import/resolver": [
      'node',
      {
      	webpack: {
      		config: {
      			resolve: {
      				extensions: ['', '.js', '.jsx', '.less'],
      				alias,
      			},
      		},
      	},
      },
    ],
	},
	plugins: ['react', 'prettier', 'import'],
	rules: {
		"prettier/prettier": 'error',
		indent: [
      'error',
      'tab',
      {
      	ignoredNodes: [
          'TemplateLiteral',
          'ConditionalExpression',
          'ArrayExpression',
        ],
      	SwitchCase: 1,
      	ArrayExpression: 'first',
      },
    ],
		"no-unused-vars": 0,
		"linebreak-style": [0, 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		"padding-line-between-statements": [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
		"template-curly-spacing": 'off',
		"react/prop-types": [
      0,
      { ignore: 'ignore', customValidators: 'customValidator' },
    ],
		// 'no-mixed-spaces-and-tabs': [0, 'smart-tabs'],
		"guard-for-in": 'error',
		"block-scoped-var": 'warn',
		"require-await": 'error',
		"wrap-iife": 'error',
		"no-label-var": 'error',
		"jsx-quotes": ['error', 'prefer-double'],
		"import/no-extraneous-dependencies": [
      0,
      {
      	devDependencies: true,
      	optionalDependencies: true,
      	peerDependencies: true,
      },
    ],
		"react/jsx-filename-extension": [1, { extensions: ['.js', '.jsx'] }],
		"react/jsx-props-no-spreading": 0,
		"func-names": ['error', 'never'],
		"no-prototype-builtins": [0, 'never'],
		"no-unused-expressions": [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
		"no-console": ['error', { allow: ['warn', 'error', 'log'] }],
		"import/no-unresolved": [2, { commonjs: true, amd: true }],
		"no-use-before-define": [
      'error',
      { functions: false, classes: true, variables: true },
    ],
		"no-underscore-dangle": [0, 'never'],
		"no-template-curly-in-string": [0, 'never'],
		"consistent-return": [0, 'never'],
		"no-return-assign": [0, 'never'],
		"prefer-destructuring": ['error', { object: true, array: false }],
		"no-plusplus": ['error', { allowForLoopAfterthoughts: true }],
		"react/prefer-stateless-function": [2, { ignorePureComponents: true }],
		"no-dynamic-require": 0,
		"max-len": ['error', 300, 2],
		"multiline-ternary": 0,
		"max-params": ['error', 5],
		"react/jsx-no-bind": 0,
		"global-require": 0,
		"jsx-a11y/alt-text": 0,
	},
};
