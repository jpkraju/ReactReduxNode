import users from "./users.json"
export function validateLogin(username, password) {
    console.log('>>> ', username, password);

    var user = {
        user_id: "",
        first_name: "",
        last_name: "",
        error: "",
    }

    var userobj=users.find((x)=>x.username===username)
    if(userobj!==undefined ){
        if(userobj.password===password){
            user.user_id=userobj.user_id;
            user.first_name=userobj.first_name;
            user.last_name=userobj.last_name;
        }
        else{
            user.error="Incorrect Password";
        }
    }
    else{
        user.error="user" +username+ "does not exist!!";
    }
    console.log(user.error);
    return user;
}
export function validateSubmit(firstName,lastName,email,mobile,password, retypePassword){
    var user = {
        first_name: "",
        last_name: "",
        Email:"",
        Mobile:"",
        Password:"",
        RetypePassword:"",
        error: "",
    }
    user.first_name=firstName;
    user.last_name= lastName;
    user.Email=email;
    user.Mobile=mobile;
    user.Password=password;
    user.RetypePassword=retypePassword;
    console.log(user);
}