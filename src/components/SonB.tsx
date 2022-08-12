import React from "react";

export default class SonB extends React.Component<{msg: string, children: any[]}> {
    // children相当于vue的插槽slot
    render() {
        return (
            <>
                <div>组件B{this.props.msg}</div>
                {this.props.children.map((item: any, index: number) => (
                    <div key={index}>{item}</div>
                ))}
            </>
        )
    }
}