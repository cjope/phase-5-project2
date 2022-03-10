import { Dialog, DialogContent, DialogTitle, Button } from "@material-ui/core";
import React, { useState } from "react";
import UserForm from "./UserForm";

function Signup({ setUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  function handleSignUp(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        username: username,
        password,
        password_confirmation: passwordConfirmation,
        age,
        img_url: profilePic,
        bio,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((data) => console.log(data.errors));
      }
    });
  }

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
        Signup
      </Button>
      <Dialog open={open} onClose={handleToClose} onSubmit={handleSignUp}>
        <DialogTitle>{"Sign Up"}</DialogTitle>
        <DialogContent>
          <div>
            <UserForm />
          </div>
        </DialogContent>
        <Button onClick={handleToClose} color="primary" autoFocus>
          Close
        </Button>
      </Dialog>
    </>

    /*
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Profile Image URL"
          onChange={(e) => setProfilePic(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Bio"
          onChange={(e) => setBio(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>*/
  );
}
export default Signup;
