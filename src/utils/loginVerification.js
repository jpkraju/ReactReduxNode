import users from "./users.json";

export function validateLogin(username, password) {
  // console.log('>>> ', username, password);
  var user = {
    user_id: "",
    first_name: "",
    last_name: "",
    error: "",
  };
  var userobj = users.find((x) => x.username === username);

  if (userobj !== undefined) {
    if (userobj.password === password) {
      user.user_id = userobj.user_id;
      user.first_name = userobj.first_name;
      user.last_name = userobj.last_name;
    } else {
      user.error = "Incorrect password !!";
    }
  } else {
    user.error = "User " + username + " does not exists !!";
  }

//   console.log(user);
  return user;
}
