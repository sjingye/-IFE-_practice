import React, { Component } from 'react';
import './index.css';
const questionData = [
  {
    title: '这是我的第一份',
    time: '2016-04-12 20:46:52',
    status: '发布中',
    operation: '发布中',
  },
  {
    title: '这是我的第er份',
    time: '2016-04-12 20:46:52',
    status: '发布中',
    operation: '发布中',
  }
]
export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td></td>
            <td>标题</td>
            <td>时间</td>
            <td>状态</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
        {questionData.map((item, i) => {
          return (
            <tr key={i}>
              <td><input type="checkbox" value="checked"/></td>
              {
                Object.keys(item).map((key,j) => {
                  return (
                    <td key={j}>{item[key]}</td>
                  )
                })
              }
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}