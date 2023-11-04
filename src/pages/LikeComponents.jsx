import React, { Component } from "react";
import './LikeComponent.css';
class LikeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="testLike">
        <p>Compteur : {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          Like Test
        </button>
      </div>
    );
  }
}

export default LikeComponent;