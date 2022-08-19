/**
 * 定义基础路由
 * @type { *[] }
 */

let moduleRoutes: any[] = []
//以下方法是读取./modules/目录下的所有ts文件
const routerContext = require.context('./modules/', true, /\.tsx$/)
routerContext.keys().forEach((filePath: any) => {
  const routerModule = routerContext(filePath)
  // 兼容 import export 和 require module.export 两种规范 Es modules commonjs
  moduleRoutes = [...moduleRoutes, ...(routerModule.default || routerModule)]
})

moduleRoutes = [...moduleRoutes]
console.log(moduleRoutes, 'moduleRoutes')

export const routes = moduleRoutes
