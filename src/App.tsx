import { BrowserRouter, Link } from 'react-router-dom'
// import CommentArea from './views/comment-area/CommentArea'
// import TestUseState from './views/test/TestUseState'
// import TableCom from './views/components/TableCom'
// import NotFound from './views/NotFound'
import WrapperRoutes from './routes/index'

/**
 * HashRouter 监听url hash值实现 #
 * BrowerRouter h5的 history.pushState API实现
 * Link 用于指定导航链接，完成声明式的路由跳转  类似于 <router-link/>
 * Routes 提供一个路由出口，组件内部会存在多个内置的Route组件，满足条件的路由会被渲染到组件内部; 类比 router-view
 * Route 用于定义路由路径和渲染组件的对应关系  [element：因为react体系内 把组件叫做react element] path属性用来指定匹配的路径地址，element属性指定要渲染的组件
 */

function App() {
  return (
    <>
      {/* <TestUseState age={18} />
      <TableCom />
      <CommentArea />*/}
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/comment-area">评论区</Link>
        {/* <Routes>
          <Route path='/' element={<TableCom />}></Route>
          <Route path='/comment-area' element={<CommentArea />}></Route>
          <Route path='/use' element={<TestUseState age={18} />}></Route>
          <Route path='/use/:id' element={<TestUseState age={18} />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes> */}
        <WrapperRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
