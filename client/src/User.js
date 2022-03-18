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
        
           <img style={{width: "300px", height:"300px"}} src={user?.image?.url} alt="profile"></img>
       
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default User;
