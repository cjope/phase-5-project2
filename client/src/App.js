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
import SignUpForm from "./SignUpForm";
import SignUp from "./SignUp";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [user, setUser] = useState(null);
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null)
  // const [image, setImage] = useState("/prof1.jpg")


  // console.log(user?.image)

  useEffect(() => {
    fetch("/me")
    .then(r => r.json())
    .then(user => setUser(user))
  },[])

  // console.log(image)
  // console.log(user?.image.url? "yes":"no")

  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then(items => setItems(items))
  },[])

  return (
    <>
          <ToastContainer/>
      <NavBar user={user} setUser={setUser} />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login user={user} setUser={setUser} error={error} setError={setError}/>} />
        <Route path="/edit-user" element={<EditUser user={user} setUser={setUser} />} />
        <Route path="/items" element={<Items items={items}/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/user" element={<User user={user} />} />
        <Route path="/user-form" element={<SignUpForm />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
