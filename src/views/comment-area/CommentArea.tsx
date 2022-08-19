import React, { createRef } from 'react'
import { v4 as uuid } from 'uuid'
import avatar from '../../assets/images/robot.png'
import './index.css'
// 时间格式化
function formatDate(time: Date) {
  return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
}
class CommentArea extends React.Component {
  textareaRef: any = createRef()
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot'
      },
      {
        id: 2,
        name: '时间',
        type: 'time'
      }
    ],
    active: 'hot',
    list: [
      {
        id: uuid(),
        author: 'Alan Peter',
        comment: 'Less I Have You',
        time: new Date(),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1
      },
      {
        id: uuid(),
        author: '新裤子',
        comment: '你要跳舞吗',
        time: new Date('2022-08-08 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      },
      {
        id: uuid(),
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2022-08-09 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1
      }
    ]
  }
  changeTab = (type: string) => {
    this.setState({
      active: type
    })
  }
  handleAddComment = () => {
    console.log(this.textareaRef)
    if (this.textareaRef?.current.value) {
      this.setState({
        list: [
          ...this.state.list,
          {
            id: uuid(),
            author: '五月天',
            comment: this.textareaRef?.current.value,
            time: new Date(),
            // 1: 点赞 0：无态度 -1:踩
            attitude: 1
          }
        ]
      })
    } else {
      alert('请输入评论')
    }
  }
  handleDelComment = (id: string | number) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id)
    })
  }
  handleAttitude = (id: string | number, attitude: number) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) item.attitude = attitude
        return item
      })
    })
  }

  render(): React.ReactNode {
    return (
      <div className="app">
        <div className="comment-container">
          <div className="comment-head">
            <span>{this.state.list.length}条评论</span>
          </div>
          <div className="tabs-order">
            <ul className="sort-container">
              {this.state.tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={tab.type === this.state.active ? 'on' : ''}
                  onClick={() => this.changeTab(tab.type)}
                >
                  按{tab.name}排序
                </li>
              ))}
            </ul>
          </div>
          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              {/* ref绑定 获取真实dom  非受控表单组件*/}
              <textarea
                ref={this.textareaRef}
                cols={80}
                rows={5}
                placeholder="发条友善的评论"
                className="ipt-txt"
              />
              <button
                className="comment-submit"
                onClick={this.handleAddComment}
              >
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>
          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map((item) => (
              <div className="list-item" key={item.id}>
                <div className="user-face">
                  <img className="user-head" src={avatar} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{formatDate(item.time)}</span>
                    <span
                      className={item.attitude === 1 ? 'like liked' : 'like'}
                    >
                      <i
                        className="icon"
                        onClick={() => this.handleAttitude(item.id, 1)}
                      />
                    </span>
                    <span
                      className={item.attitude === -1 ? 'hate hated' : 'hate'}
                    >
                      <i
                        className="icon"
                        onClick={() => this.handleAttitude(item.id, -1)}
                      />
                    </span>
                    <span
                      className="reply btn-hover"
                      onClick={() => this.handleDelComment(item.id)}
                    >
                      删除
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentArea
