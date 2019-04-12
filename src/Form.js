// @ts-check
import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  const onChange = name => event => {
    switch (name) {
      case "firstName":
        setName(event.target.value);
        break;
      default:
      break;
    }
  };

  function onSubmit() {
    alert(name);
    //this should be the endpoint for your POST API in spring
    fetch("http://localhost:9000/greetings", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
      });
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={onChange("firstName")} />
      <input type="submit" value="Submit" />
    </form >
  );
}
