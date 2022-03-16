// import { useState } from "react";

// function Login({user, setUser}) {
//   const [username, setUsername] = useState(null);
//   const [password, setPassword] = useState(null); 

//   function handleLogin(e) {
//     e.preventDefault();
//     fetch("/login", {
//       method: "POST",
//       body: JSON.stringify({username, password}),
//       headers: {
//         "Content-Type": "application/json"

//       }
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => console.log(user));
//       } else {
//         r.json().then((data) => console.log(data.errors));
//       }
//     })
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="username"
//           onChange={(e) => setUsername(e.target.value)}
//         ></input>
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
// export default Login;


import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { FormLabel, Input } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Login({ setUser }) {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    setUsername("");
    setPassword("");
  };

  function handleLogin(e) {
    e.preventDefault();
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
        return r.json().then((json) =>
          toast.error(json.errors, {
            autoClose: 1000,
            hideProgressBar: true,
          })
        );
      }
    });
    handleToClose();
  }

  return (
    <div style={{}}>
      <ToastContainer />
      <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleToClose} onSubmit={handleLogin}>
        <DialogTitle>{"Please Log In"}</DialogTitle>
        <DialogContent>
          <Form>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </Form>
          <Form>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
          <Button
            onClick={handleLogin}
            color="primary"
            autoFocus
            primary="true"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
