import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div className="container">
      <h1>{login ? "Login Form" : "Registration Form"}</h1>

      {!login && <input placeholder="Enter Name" />}

      <input placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />

      <button onClick={() => alert("Success")}>
        {login ? "Login" : "Register"}
      </button>

      <p onClick={() => setLogin(!login)}>
        {login ? "Create Account" : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default App;