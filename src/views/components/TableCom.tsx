import { Input, Popconfirm, Table } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

/**
 * 开一个终端运行 npm run mock-serve / yarn mock-serve 不要关闭
 * json-server用于模拟服务端接口数据，可以根据json数据建立一个完整的web服务
 */

const { Search } = Input
interface tableList {
    id: string | number,
    name: string,
    des: string
}
const TableCom: React.FC = () => {
    const [tableData, setTableData] = useState<tableList[]>([])
    const columns = [
        {
            title: '任务编号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '任务名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '任务描述',
            dataIndex: 'des',
            key: 'des',
        },
        {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
            render: (_: any, record: { id: React.Key }) =>
              <Popconfirm title="确认要删除吗" onConfirm={() => handleDelete(record.id)}>
                <a>删除</a>
              </Popconfirm>
        }
    ]
    
    const loadData = async (value: string = '') => {
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
        setTableData(tableData.filter(item => item.id !== id))
    }
    return (
        <div style={{width: '600px', textAlign: 'center'}}>
            <Search allowClear placeholder="请输入关键字" enterButton="搜索" onSearch={onSearch} />
            <Table dataSource={tableData} columns={columns} />
        </div>
    )
}
export default TableCom