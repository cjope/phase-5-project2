import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function NavBar({ user, setUser, image }) {
  const navigate = useNavigate()

  return (
    <div className="nav">
      <Box sx={{ flexGrow: 1 }} position="static">
        <AppBar >
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton onClick={e=>{navigate("/")}} ><img src="orange-timer.png" alt="orange" /></IconButton>

            </Typography>
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
          </Toolbar>
        </AppBar>
      </Box>

    
          


    </div>
  );
}
export default NavBar;
