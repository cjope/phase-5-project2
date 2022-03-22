import {TextField } from "@material-ui/core";
import { Form } from "react-bootstrap";
// import Button from "@material-ui/core/Button";
// import { TextField } from "material-ui";

function SignUpForm({setAge, setUsername, setEmail, setPassword, setPasswordConfirmation, setFirstName, setLastName, firstName}) {
// function SignUpForm({setImage}) {

  // console.log("SignUpForm", image)

  return (
    <>
 <Form>
         {/* <Grid> */}
          <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="First Name"
          name='first_name'
          onChange={e=>setFirstName(e.target.value)}
        ></TextField>
        {/* </Grid> */}
            {/* <Grid> */}
              <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="Last Name"
          name='last_name'
          onChange={e=>setLastName(e.target.value)}
        ></TextField>
        {/* </Grid> */}
            {/* <Grid> */}
              <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="UserName"
          name='username'
          onChange={e=>setUsername(e.target.value)}
        ></TextField>
        {/* </Grid> */}
            {/* <Grid> */}
              <TextField 
          required
          variant="outlined"
          id="outline-required"
          label="Email"
          name='email'
          onChange={e=>setEmail(e.target.value)}
        ></TextField>
        {/* </Grid> */}
        </Form>
    </>
  );
}
export default SignUpForm;
