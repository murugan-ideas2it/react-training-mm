import React from 'react'

class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("componentDidMount"+this.state.count);
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("componentDidUpdate"+this.state.count);
  }
  componentWillUnmount() {
    // document.title = `You clicked ${this.state.count} times`;
    console.log("componentWillUnmount"+this.state.count);
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me Example
        </button>
      </div>
    );
  }
}

export default Example1