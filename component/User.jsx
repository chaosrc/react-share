import React from "react";

// React组件以大写字母开头
// 类组件定义
export class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <span>姓名：</span> {props.name}
        </div>
        <div>
          <span>年龄：</span> {props.age}
        </div>
      </>
    );
  }
}

// 函数组件
export function User2(props) {
  return (
    <>
      <div>
        <span>姓名：</span> {props.name}
      </div>
      <div>
        <span>年龄：</span> {props.age}
      </div>
    </>
  );
}

// 箭头函数
export const User3 = props => {
  return (
    <>
      <div>
        <span>姓名：</span> {props.name}
      </div>
      <div>
        <span>年龄：</span> {props.age}
      </div>
    </>
  );
};

// children
export const User4 = props => {
  return (
    <>
      <div>
        <span>姓名：</span> {props.name}
      </div>
      <div>{props.children}</div>
    </>
  );
};

export const User5 = props => {
  const Name = props.name;
  const Age = props.age;
  return (
    <>
      <div>
        <Name />
      </div>
      <div>
        <Age />
      </div>
      {props.children}
    </>
  );
};
