function User(props) {
  const user = props.userData;

  function backbuttonclickhandler(e) {
    e.preventDefault();
    // setPageno(0)
    props.logout();
  }
  return (
    <>
      <h1>Welcome {user.first_name + " " + user.last_name}</h1>
      <h3>Your Id: {user.user_id}</h3>
      <h3>Email Id: {user.email_id}</h3>
      <h3>Phone number: {user.phone}</h3>
      <input
        type="button"
        name="back"
        id="back"
        value="Logout"
        onClick={backbuttonclickhandler}
      />
    </>
  );
}

export default User;
