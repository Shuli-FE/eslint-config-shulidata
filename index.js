/** * Shuli-FE ESLint 规则 - JavaScript * @ref http://eslint.cn/docs/rules/ * @off 表示此配置被关闭了，并且后面说明了关闭的原因 * @warn 表示此配置只给出警告但不会阻止流程 * @error 表示此配置是强制执行的 */module.exports = {	extends: [		'./rules/base/possible-errors',		'./rules/base/best-practices',		'./rules/base/strict-mode',		'./rules/base/variables',		'./rules/base/node-and-common',		'./rules/base/stylistic-issues',		'./rules/base/es6'	].map(require.resolve),		parserOptions: {		ecmaVersion: 2017,		sourceType: 'module'	},		env: {		'browser': true,		'es6': true	},		root: true};