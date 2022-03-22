import { Dialog, DialogContent, DialogTitle, Button } from "@material-ui/core";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { toast, Flip } from "react-toastify";

function Signup({ setUser }) {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [passwordConfirmation, setPasswordConfirmation] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  function handleSignUp(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("username",username);
    data.append("first_name", firstName) 
    data.append("last_name",lastName)
    data.append("password",password)
    data.append("password_confirmation",passwordConfirmation)
    data.append("email",email)

    fetch("/signup", {
      method: "POST",
      body: data,
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        handleToClose()
      } else {
        toast.error("please review your information", {
          autoClose: 1000,
          hideProgressBar: true,
          transition: Flip,
          position: "top-center"
        })
      }
    })
  }


  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
        Signup
      </Button>
      <Dialog open={open} onClose={handleToClose} onSubmit={handleSignUp}>
        <DialogTitle>{"Sign Up"}</DialogTitle>
        <DialogContent>
            <SignUpForm 
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setPasswordConfirmation={setPasswordConfirmation}
            setFirstName={setFirstName}
            setLastName={setLastName}
            />
        </DialogContent>
        <Button type="submit" color="primary" autoFocus>
          Submit
        </Button>
        <Button onClick={handleToClose} color="secondary" autoFocus>
          Close
        </Button>
      </Dialog>
    </>
  );
}
export default Signup;
