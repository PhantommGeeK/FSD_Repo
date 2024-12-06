import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";

const App = () => {
  const [data, setData] = useState();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;