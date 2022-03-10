function Logout({ setUser }) {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Logout;
