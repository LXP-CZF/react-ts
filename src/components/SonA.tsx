const SonA = (props: {
    changeMsg(newMsg: string): void, msg?: string 
}) => {
    const newMsg = 'new msg'
    return (
        <>
        {/**<></> 幽灵节点*/}
        <div>组件A{props.msg}</div>
        <button onClick={() => props.changeMsg(newMsg)}>切换msg</button>
        </>
    )
}
export default SonA