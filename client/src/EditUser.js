import React from 'react'
import { Button, DialogTitle, Dialog, TextField, Grid, DialogContent } from "@material-ui/core";
import { useState } from "react"
import { Form } from 'react-bootstrap';

function EditUser({user}){

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


  function handleSubmit(e){
    e.preventDefault()
    console.log("submitted")
  }

  console.log(firstName)

  return(
    <>
        <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
          Edit User
        </Button>
        <Dialog open={open} onClose={handleToClose} onSubmit={handleSubmit} >
        <DialogTitle>{"Sign Up"}</DialogTitle>
        <DialogContent>
        <Form>
         <Grid>
          <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="First Name"
          name='first_name'
          defaultValue={user?.first_name}
          onChange={e=>setFirstName(e.target.value)}
        ></TextField>
        </Grid>
            <Grid>
              <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="Last Name"
          name='last_name'
          defaultValue={user?.last_name}
          onChange={e=>setLastName(e.target.value)}
        ></TextField>
        </Grid>
            <Grid>
              <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="UserName"
          name='username'
          defaultValue={user?.username}
          onChange={e=>setUsername(e.target.value)}
        ></TextField>
        </Grid>
            <Grid>
              <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="Email"
          name='email'
          defaultValue={user?.email}
          onChange={e=>setEmail(e.target.value)}
        ></TextField>
        </Grid>
        </Form>
        </DialogContent>
        <Button type="submit" color="primary" autoFocus>
          Submit
        </Button>
        <Button onClick={handleToClose} color="secondary" autoFocus>
          Close
        </Button>
      </Dialog>
      </>
    )
}
export default EditUser