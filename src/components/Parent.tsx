import React from "react";
import SonA from './SonA'
import SonB from './SonB'
import SonC from "./SonC"
import { customContext } from '../utils/customContext'

export default class Parent extends React.Component {
    state = {
        msg: 'this is message',
        newMsg: '',
        messageProvider: '跨组件传递message'
    }
    changeMsg = (val: string) => {
        this.setState({
            msg: val,
            newMsg: val,
            messageProvider: `修改跨组件传递${val}`
        })
    }
  render(): React.ReactNode {
    return (
    <>
        {/**使用Provider包裹上层组件提供数据 */}
        <customContext.Provider value={this.state.messageProvider}>
            <SonA msg={this.state.msg} changeMsg={this.changeMsg} />
            <SonB msg={this.state.newMsg}>
                children属性普通文本
                <p>这是htlm标签children属性</p>
                <div>children属性JSX{this.state.newMsg}</div>
            </SonB>
            <SonC />
        </customContext.Provider>
    </>
  )}
}