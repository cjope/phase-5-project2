import { Dialog, DialogContent, DialogTitle, Button } from "@material-ui/core";
import React, { useState } from "react";
import UserForm from "./UserForm";

function Signup({ setUser }) {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [age, setAge] = useState([]);
  const [bio, setBio] = useState([]);
  const [email, setEmail] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [passwordConfirmation, setPasswordConfirmation] = useState([]);
  const [image, setImage] = useState(null);
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
    data.append("image", image)
    data.append("age",age)
    data.append("bio",bio)
    data.append("email",email)

    fetch("/signup", {
      method: "POST",
      body: data,
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
      } else {
        r.json().then((data) => console.log(data.errors));
      }
    })
  }

  // console.log(image)
  return (
    <>

    {/* <form onSubmit={handleSignUp}>
      <input type="text" onChange={e=>setUsername(e.target.value)} placeholder="setUsername" />
      <input type="text" onChange={e=>setFirstName(e.target.value)} placeholder="setFirstName" />
      <input type="text" onChange={e=>setLastName(e.target.value)} placeholder="setLastName" />
      <input type="text" onChange={e=>setEmail(e.target.value)} placeholder="setEmail" />
      <input type="text" onChange={e=>setPassword(e.target.value)} placeholder="setPassword" />
      <input type="text" onChange={e=>setPasswordConfirmation(e.target.value)} placeholder="setPasswordConfirmation" />
      <input type="file" accept="image/*" multiple={false} onChange={e=>setImage(e.target.files[0])} />
      <button type="submit"></button>
    </form> */}



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
