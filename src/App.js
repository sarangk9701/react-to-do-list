import React, {Component} from "react";
import "./App.css";

export default class App extends Component{
  render() { //class컴포넌트는 render()가 들어가야 함
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
        </div>
      </div>
    )
  }
}