import TableCom from '../../views/components/TableCom'
import CommentArea from '../../views/comment-area/CommentArea'
import TestUseState from '../../views/test/TestUseState'

export default [
  {
    path: '/',
    element: <TableCom />
    // children: [
    //   {
    //     element: <Board />,
    //     index: true, // index设置为true 变成默认的二级路由
    //   },
    //   {
    //     path: 'article',
    //     element: <Article />,
    //   },
    // ],
  },
  {
    path: '/comment-area',
    element: <CommentArea />
  },
  {
    path: '/use',
    element: <TestUseState age={18} />
  },
  {
    path: '/use/:id',
    element: <TestUseState age={18} />
  }
]
