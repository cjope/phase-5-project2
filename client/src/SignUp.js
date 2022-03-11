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
  const [image, setImage] = useState([]);
  const [open, setOpen] = React.useState(false);

  console.log(image)

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
        username,
        password,
        password_confirmation: passwordConfirmation,
        age,
        image: image,
        bio,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
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
            <UserForm 
            setAge={setAge}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setPasswordConfirmation={setPasswordConfirmation}
            setImage={setImage}
            setBio={setBio}
            setFirstName={setFirstName}
            setLastName={setLastName}
            />
          </div>
        </DialogContent>
        <Button onClick={handleToClose} color="primary" autoFocus>
          Close
        </Button>
      </Dialog>
    </>
  );
}
export default Signup;
