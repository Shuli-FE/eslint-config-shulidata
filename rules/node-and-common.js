module.exports = {	rules: {		// callback 之后必须立即 return		// @off Limitations 太多了		'callback-return': 'off',		// require 必须在全局作用域下		// @off 条件加载很常见		'global-require': 'off',		// callback 中的 error 必须被处理		'handle-callback-err': 'error',		// 禁止直接使用 Buffer		'no-buffer-constructor': 'error',		// 相同类型的 require 必须放在一起		// @off 太严格了		'no-mixed-requires': 'off',		// 禁止直接 new require('foo')		'no-new-require': 'error',		// 禁止对 __dirname 或 __filename 使用字符串连接		'no-path-concat': 'error',		// 禁止使用 process.env.NODE_ENV		// @off 使用很常见		'no-process-env': 'off',		// 禁止使用 process.exit(0)		// @off 使用很常见		'no-process-exit': 'off',		// 禁止使用指定的模块		// @off 它用于限制某个具体的模块不能使用		'no-restricted-modules': 'off',		// 禁止使用 node 中的同步的方法，比如 fs.readFileSync		// @off 使用很常见		'no-sync': 'off'	}};