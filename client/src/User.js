

function User({user}) {



  return (
    <div className="user">
      {user ? (
        <div style={{display: "flex"}} >
          <div>
          <p>Username: {user.username}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          
          </div>
        
          {/* <img src="https://drive.google.com/uc?export=view&id=1MHbMm1UyjPNNPG-Sc-E7gK2au-MUiSca" alt="driveimage"/> */}

           {/* <img style={{width: "300px", height:"300px"}} src="https://drive.google.com/uc?export=view&id=1MHbMm1UyjPNNPG-Sc-E7gK2au-MUiSca" alt="profile"></img> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default User;
