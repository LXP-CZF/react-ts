import { useContext } from 'react'
import { customContext } from '../utils/customContext'
const SonA = (props?: {
    changeMsg(newMsg: string): void, msg?: string 
}) => {
    const newMsg = 'new msg'
    const username = useContext(customContext)
    return (
        <>
        {/**<></> 幽灵节点*/}
        <div>组件A{props?.msg}</div>
        <div>{username}</div>
        <button onClick={() => props?.changeMsg(newMsg)}>切换msg</button>
        </>
    )
}
export default SonA