import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/action';
import '../../less/todo.less';

import { Button } from 'antd';

class Todo extends Component {
  del = payload => {
    this.props.delTodo(payload)
  }

  add = () => {
    let payload = {
      id: this.props.todos[this.props.todos.length - 1].id + 1,
      name: 'chinese',
      status: 0
    }
    this.props.addTodo(payload)
  }

  update = payload => {
    Object.assign(payload, { status: payload.status === 1 ? 0 : 1 })
    this.props.updateTodo(payload)
  }

  render() {
    return (
      <div className="center">
        <h1>Redux Todo 案例</h1>
        {
          this.props.todos.map(item => {
            return (
              <div key={item.id}>
                <p>{item.name} {item.status === 0 ? '待完成' : '已完成'}</p>
                <Button onClick={() => this.del(item)} size="small">删除</Button>
                <Button style={{ marginLeft: 20 }} onClick={() => this.update(item)} size="small">修改状态</Button>
              </div>
            )
          })
        }
        <Button onClick={this.add} style={{ marginTop: 20 }} >添加</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTodo: actions.addText,
    delTodo: actions.delText,
    updateTodo: actions.updateText
  }, dispatch)
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);