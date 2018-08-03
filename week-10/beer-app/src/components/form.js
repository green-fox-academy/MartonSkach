import React from "react";

const Form = props => (
    <form onSubmit={props.getBeer}>
      <button>Show me da beers</button>
    </form>
);

export default Form; 