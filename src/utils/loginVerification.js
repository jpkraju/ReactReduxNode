import users from "./users.json";
export function validateLogin(username, password) {
  console.log(">>> ", username, password);

  var user = {
    user_id: "",
    first_name: "",
    last_name: "",
    email_id: "",
    phone: "",
    error: "",
  };

  var userobj = users.find((x) => x.username === username);
  if (userobj !== undefined) {
    if (userobj.password === password) {
      user.user_id = userobj.user_id;
      user.first_name = userobj.first_name;
      user.last_name = userobj.last_name;
      user.email_id = userobj.email_id;
      user.phone = userobj.phone;
    } else {
      user.error = "Incorrect Password";
    }
  } else {
    user.error = "user " + username + " does not exist!!";
  }
  console.log(user.error);
  return user;
}
export function validateSubmit(
  firstName,
  lastName,
  email,
  mobile,
  password,
  retypePassword,
  gender
) {
  var user = {
    first_name: "",
    last_name: "",
    Email: "",
    Mobile: "",
    Password: "",
    RetypePassword: "",
    gender: "",
    error: "",
  };
  user.first_name = firstName;
  user.last_name = lastName;
  user.Email = email;
  user.Mobile = mobile;
  user.Password = password;
  user.RetypePassword = retypePassword;
  user.gender = gender;
  console.log(user);
}
