import React from "react";
import "./App.css";
const App = ({naam,email,no}) => {
  return (
    <div id="disp">
      <h1>Student Details:</h1>
      <h2>Name:{naam}</h2>
      <h2>Email id: {email}</h2>
      <h2>Mobile No:{no}</h2>
    </div>
  );
}
export default App;
