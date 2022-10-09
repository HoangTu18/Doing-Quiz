import { render } from "@testing-library/react";
import React from "react";

function Mycomponent(props) {
  handleClick(e){
    console.log(">> click me my button")
    // merge State => react class
    this.setState({
      name: "Eric",
      age: Math.floor((Math.random() * 100) + 1)
    })
  }
  
  handleOnchangeInput = (e) => {
    console.log(e.target.value);
  };
  render() {

    return (
      <div>
      My name is {this.state.name} and I'm {this.state.age}
      <form>
        <input type="text" onChange={() => handleOnchangeInput(e)} />
        <button>submit</button>
      </form>
    </div>
  );
}
}

export default Mycomponent;
