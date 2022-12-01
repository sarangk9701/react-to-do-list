import React, {useState} from "react";
import "./App.css";
import Form from "./component/Form";
import List from "./component/List";

export default function App() {
  // state={
  //   todoData : []
  //   ,value: ""
  // };

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault(); //form 안에 input을 전송할때 페이지 리로드 되는 것을 막아줌.

    //새로운 할 일 데이터
    let newTodo = {
        id: Date.now(),  //고유한 값이 여야 해서 date 씀
        title: value,
        completed: false
    }



    //원래 있던 할 일에 새로운 할 일 추가
    //this.setState({ todoData: [...todoData, newTodo],value : ""});
    setTodoData(prev =>[...prev, newTodo]);
    setValue("");
  }


  //render() { //class컴포넌트는 render()가 들어가야 함
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          <h1 class="text-3xl font-bold underline">
          Hello world!
          </h1>

        <List todoData={todoData} setTodoData={setTodoData}/>
        
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

        </div>
      </div>
    )
  }
//}