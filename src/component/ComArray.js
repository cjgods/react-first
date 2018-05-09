import React, { Component } from 'react';
import '../App.css';

class ComArray extends Component {
  render(){
    const {user} = this.props
    return (
      <div>
        <div>姓名：{user.name}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
      </div>
    )
  }

}

export default ComArray;
