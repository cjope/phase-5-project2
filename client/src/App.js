import "./App.css";
import EditUser from "./EditUser";
import Home from "./Home";
import Items from "./Items";
import Login from "./Login";
import Logout from "./Logout";
import Menu from "./Menu";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import UserForm from "./UserForm";
import SignUp from "./SignUp";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  function onLogin(username, password) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        return r.json().then((json) => console.log(json.errors));
      }
    });
  }

  return (
    <>
      <NavBar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/items" element={<Items onLogin={onLogin} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
