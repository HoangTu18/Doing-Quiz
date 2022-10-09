import React from "react";

function Mycomponent(props) {
  handleOnchangeInput = (e) => {
    alert("me");
  };
  return (
    <div>
      My name is {this.state.name} and I'm {this.state.age}
      <form>
        <input type="text" onChange={() => handleOnchangeInput(e)} />
      </form>
    </div>
  );
}

export default Mycomponent;
