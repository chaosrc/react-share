import React from "react";

export const List = props => {
  const list = props.list || [];
  return (
    <div>
      <ul className="rc-list">
        {/* 不能写循环 */}
        {list.map(item => {
          return <li key={item.key}>{item.value}</li>;
        })}
      </ul>
      {/* 不能写 if else */}
      {props.hasButton && <button>添加</button>}
    </div>
  );
};
