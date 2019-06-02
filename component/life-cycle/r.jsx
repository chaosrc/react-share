import React from "react";

// https://reactjs.org/docs/react-component.html
//http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(props, state) {}
  componentDidMount() {}

  shouldComponentUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return <input />;
  }
}
