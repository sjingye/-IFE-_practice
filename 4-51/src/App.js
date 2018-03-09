import React, { Component } from 'react';
import Table from './components/Table/Table';
import './App.css';

class App extends Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <header className="App-header">
          <h1 className="App-title">问卷管理</h1>
          <p className="App-des">我的问卷</p>
        </header>
        <div className="App-intro">
          <div className="table-wrapper">
            <Table></Table>
            <button>新建问卷</button>
          </div>
          <button>新建问卷</button>
        </div>
      </div>
    );
  }
}

export default App;
