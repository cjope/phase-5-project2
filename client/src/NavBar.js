import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";

function NavBar({ user, setUser, image }) {

  console.log(user)

  return (
    <>
        <div className="nav">
            <h1>Pantry Pal</h1>
        <div >
            {user ? 
              <div className="nav">
                <p>Welcome, {user.first_name}!</p>
                  <img
                    className="profile-pic"
                    // src={user.image? user.image.url: "/prof1.jpg"}
                    src={user?.image?.url}
                    alt="profile"
                  />
                <Logout setUser={setUser} />
              </div>
             : 
              <div >
                <Login setUser={setUser}></Login>
                <SignUp setUser={setUser}></SignUp>
              </div>
            }
            </div>
            </div>
    </>
  );
}

export default NavBar;
