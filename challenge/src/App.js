import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// https://jsonplaceholder.typicode.com/users

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((error) => alert("Error: 101"));
  }, []);

  return (
    <div className="App">
      <div className="client_list">
        <div className="header">
          <h1>Search for a client</h1>
          <form>
            <input
              type="text"
              placeholder="Search using name"
              className="client_input"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
