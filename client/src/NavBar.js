import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";

function NavBar({ user, setUser, image }) {


  return (
    <div className="nav">
        <div >
            <img src="orange-timer.png" alt="orange" />
            </div>
        <div >
            {user ? 
              <div className="nav">
                <p>Welcome, {user.first_name}!</p>
                
                <Logout setUser={setUser} />
              </div>
             : 
              <div className="nav" >
                <Login setUser={setUser}></Login>
                <SignUp setUser={setUser}></SignUp>
              </div>
            }
            {/* </div> */}
            </div>
    </div>
  );
}

export default NavBar;
