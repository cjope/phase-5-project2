import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

function NavBar({ user, setUser, image }) {
  const navigate = useNavigate()

  return (
    <div className="nav">
      <div >
        <img onClick={e=>{navigate("/")}} style={{cursor: "pointer"}} src="orange-timer.png" alt="orange" />
      </div>
      <div >
        {user ? 
          <div className="nav">
            <p>Welcome, {user.username}!</p>
            <Logout setUser={setUser} />
          </div>
          : 
          <div className="nav" >
          <Login setUser={setUser}></Login>
          <SignUp setUser={setUser}></SignUp>
          </div>
        }
      </div>
    </div>
  );
}
export default NavBar;
