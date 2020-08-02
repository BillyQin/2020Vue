import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/index.js', // 入口文件
  output: {
    file: 'dist/umd/vue.js',
    format: 'umd', // 模块化类型
    name: 'Vue', // 全局变量名字
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      open: true,
      openPage: '/index.html',
      port: 3000,
      contentBase: '',
    })
  ]
}