import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

// 2. 使用useRoutes方法传入routes生成Routes组件
const WrapperRoutes = () => {
  const element = useRoutes(routes)
  console.log(element, 'element')
  return element
}

export default WrapperRoutes
