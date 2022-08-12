import { customContext } from '../utils/customContext'

const SonC = () => {
    return (
        <>
            组件C
            <customContext.Consumer>
                {value => <div>{value}</div>}
            </customContext.Consumer>
        </>
    )
}
export default SonC