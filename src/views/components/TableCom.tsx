import { Button, Input, Popconfirm, Table } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 开一个终端运行 npm run mock-serve / yarn mock-serve 不要关闭
 * json-server用于模拟服务端接口数据，可以根据json数据建立一个完整的web服务
 */

/**
 * 声明式 【 Link to】  vs  编程式 【调用路由方法进行路由跳转】
 * 概念:  通过js编程的方式进行路由页面跳转，比如说从首页跳转到关于页
 * 实现步骤：
 * 导入一个 useNavigate 钩子函数
 * 执行 useNavigate 函数 得到 跳转函数
 * 在事件中执行跳转函数完成路由跳转
 * 相当于 $router.push; navigate('/about', { replace: true } )相当于$router.replace
 */

const { Search } = Input
interface tableList {
  id: string | number
  name: string
  des: string
}
const TableCom: React.FC = () => {
  const navigate = useNavigate()
  const [tableData, setTableData] = useState<tableList[]>([])
  const columns = [
    {
      title: '任务编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '任务名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '任务描述',
      dataIndex: 'des',
      key: 'des'
    },
    {
      title: '操作',
      dataIndex: 'do',
      key: 'do',
      render: (_: any, record: { id: React.Key }) => (
        <Popconfirm
          title="确认要删除吗"
          onConfirm={() => handleDelete(record.id)}
        >
          <span
            style={{ color: '#3F92FE', cursor: 'pointer', fontSize: '13px' }}
          >
            删除
          </span>
        </Popconfirm>
      )
    }
  ]

  const loadData = async (value = '') => {
    const res = await axios.get(`http://localhost:3007/data/?q=${value}`)
    setTableData(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    loadData()
  }, []) // 给空数组，只在初始化时执行
  const onSearch = (value: string) => {
    loadData(value)
  }
  const handleDelete = async (id: string | number) => {
    await axios.delete(`http://localhost:3007/data/${id}`)
    setTableData(tableData.filter((item) => item.id !== id))
  }
  return (
    <div style={{ width: '600px', textAlign: 'center' }}>
      <Button onClick={() => navigate('/use?id=001')}>跳转到评论区</Button>
      <Button onClick={() => navigate('/use/002')}>跳转到评论区</Button>
      <Search
        allowClear
        placeholder="请输入关键字"
        enterButton="搜索"
        onSearch={onSearch}
      />
      <Table dataSource={tableData} columns={columns} />
    </div>
  )
}
export default TableCom
