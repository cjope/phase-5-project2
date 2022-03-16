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
import { useState, useEffect } from "react";

function App() {

  const [user, setUser] = useState(null);
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then(items => setItems(items))
  },[])

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/edit-user" element={<EditUser user={user} setUser={setUser} />} />
        <Route path="/items" element={<Items items={items} setItems={setItems} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/user" element={<User user={user} />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
