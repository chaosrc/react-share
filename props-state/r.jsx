import React from "react";

export class Input extends React.Component {
  state = {
    inputValue: "",
    isCheck: false
  };
  constructor(props) {
    super(props);
    // this.state = {
    //     inputValue = ''
    // }
  }
  handleInputChange = e => {
    const value = e.target.value;
    // 异步执行
    this.setState({
      inputValue: value
    });
  };
  handleCheck = () => {
    // 异步执行
    this.setState(preview => ({ isCheck: !preview }));
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <label>{this.state.isCheck ? "是" : "否"}</label>
        <button onClick={this.handleCheck} />
      </>
    );
  }
}
