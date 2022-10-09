import React from "react";

handleOnchangeInput = (e) => {
  alert("me");
};
function Mycomponent(props) {
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

export default Mycomponent;
