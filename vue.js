/** * Shuli-FE ESLint 规则 - Vue * * 包含所有 ESLint 规则，以及所有 eslint-plugin-vue 规则 * @off 表示此配置被关闭了，并且后面说明了关闭的原因 */module.exports = {	parser: 'vue-eslint-parser',	plugins: ['vue'],	extends:		[			'./index.js',			'./rules/vue/possible-errors',			'./rules/vue/best-practices',			'./rules/vue/variables',			'./rules/vue/stylistic-issues'		].map(require.resolve)};