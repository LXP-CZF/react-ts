import axios from "axios"
import { useState, useEffect, useRef } from "react"
import SonA from "../../components/SonA"
import SonB from '../../components/SonB'
import { customContext } from '../../utils/customContext'
/**
 * useState
 * 1.修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型
 * 2.useState 的初始值(参数)只会在组件第一次渲染时生效。也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值
 * 3.只能出现在函数组件或者其他hook函数中 
 * 4.不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook）
 */
 type propsType = {
    age: number
}
const TestUseState: React.FC<propsType> = (props) => {
    const $refSpan = useRef(null)
    const $refSonB = useRef(null) 
    const [count, setCount] = useState(0)
    const [username, setUsername] = useState('小丸子')
    const [age, setAge] = useState(() => {
        return props.age
    })
    console.log(useState(0), 55)
    /**
     * useEffect (相当于vue的watch？)
     * 1、响应式
     * 2、不添加依赖项，组件初始渲染、组件更新 （不管是哪个状态引起的更新）
     * 3、添加空数组，组件只在首次渲染时执行一次
     * 4、添加特定依赖项，副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
     * 5、如果想要清理副作用 可以在副作用函数中的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑；组件卸载时自动执行，组件更新时，下一个useEffect副作用函数执行之前自动执行
     */
    // useEffect(()=> {
    //     console.log('执行了副作用')
    //     document.title = `当前已点击了${count}次`
    // })

    // useEffect(()=> {
    //     document.title = `当前已点击了${count}次`
    // },[])
    useEffect(()=> {
        console.log($refSpan, 'dom')
        document.title = `当前已点击了${count}次`
        // const timerId = setInterval(() => {
        //     setCount(count + 1)
        //   }, 1000)
          return () => {
            // 用来清理副作用的事情
            // clearInterval(timerId)
          }
    },[count])

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            
        console.log(res)
    }
    return (
        <customContext.Provider value={'通过createContext.Provider传递数据，利用useContext函数获取数据'}>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            {username}
            <button onClick={() => setUsername(username + 1)}>{username}</button>
            <span ref={$refSpan}>年龄： {age}</span>
            <button onClick={() => setAge(age + 1)}>修改年龄</button>
            {/**函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件 */}
            <SonB msg={username} ref={$refSonB}>
                凑数
                <div>children属性JSX{age}</div>
            </SonB>
            <SonA msg={username} changeMsg={function (newMsg: string): void {
                throw new Error("Function not implemented.")
            } } />
        </customContext.Provider>
    )
}
export default TestUseState