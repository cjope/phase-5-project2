import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
      
      <Link to="/items">Items</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login</Link>
      <Link to="/user">User</Link>
      <Link to="/edit-user">EditUser</Link>
      <Link to="/user-form">UserForm</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
}
export default Menu;
