import { useState } from "react";

function Items({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <div>
      <h1>Items</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Items;
