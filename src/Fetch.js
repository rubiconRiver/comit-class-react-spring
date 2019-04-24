// @ts-check
import React, { useState, useEffect } from "react";
import Posts from "./Posts";

export default function Fetch(props) {
  const [fetchJSON, setFetchJSON] = useState(undefined);
  useEffect(() => {
      fetchData();
  }, [])

  function fetchData() {
    //This should be the endpoint for your GET Request in Spring
    fetch("http://localhost:9000/greetings", {
        method: 'GET'
    })
      .then(response => response.json())
      .then(json => setFetchJSON(json));
  }

  return (
    <div>
      {fetchJSON ? fetchJSON.map(({ id, name}) => (
        
            <Posts key={id} id={id} name={name} />
          ))
        : null}
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
}
