import { FormLabel, Input} from "@material-ui/core";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";

function UserForm({setAge, setUsername, setEmail, setPassword, setPasswordConfirmation, setImage, setFirstName, setLastName}) {
// function UserForm({setImage}) {

  // console.log(setImage)

  return (
    <>
      <Form 
      // encType="multipart/form-data"
      >
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          id="first_name"
          onChange={(e) => setFirstName(e.target.value)}
        ></Input>
  
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          id="last_name"
          onChange={(e) => setLastName(e.target.value)}
        ></Input>

        <FormLabel>Age</FormLabel>
        <Input
          type="text"
          id="age"
          onChange={(e) => setAge(e.target.value)}
        ></Input>

        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
 
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
  
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>

        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          id="password_confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></Input>

        <FormLabel>Profile Pic</FormLabel>
        <Input
          style={{ marginLeft: "5%" }}
          type="file"
          id="image"
          accept="image/*"
          multiple={false}
          onChange={(e) => setImage(e.target.files[0])}
        ></Input>
          <Button type="submit" color="primary" autoFocus>
          Submit
        </Button>
        {/* <button type="submit" >Submit</button> */}
      </Form>
    </>
  );
}
export default UserForm;
