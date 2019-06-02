import React from "react";
import ReactDOM from "react-dom";
import { User, User2 } from "./User";

// 组件的使用
const App = props => {
  const user = {
    name: "小明",
    age: 25
  };
  return (
    <>
      <User name="张三" age="20" />
      <User2 name={user.name} age={user.age} />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
