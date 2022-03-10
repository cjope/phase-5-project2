import { FormLabel, Input } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { useState } from "react";

function UserForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  return (
    <>
      <Form>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          id="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></Input>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          id="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></Input>

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
      <Form>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></Input>
      </Form>
      <Form>
        <FormLabel>Profile Pic</FormLabel>
        <Input
          // style={{ display: "flex", flexDirection: "row-reverse" }}
          type="file"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
        ></Input>
      </Form>
    </>
  );
}
export default UserForm;
