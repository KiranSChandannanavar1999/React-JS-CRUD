import { toast } from "react-toastify";
// import Register from './../Components/Register';

let users = JSON.parse(localStorage.getItem("userInfo")) || [];

const registerUser = (user)=>{
    const extEmail= users.find((items)=> items.email === user.email);
    const extMobile = users.find((item)=> item.mobile === user.mobile);

    if(extEmail){
        toast.warning(`${users.email} already registered`)
    }else if(extMobile){
        toast.warning(`${users.mobile} already exist`)

    }else{
        users.push(user);
        toast.success(`user registered succesfuly`);
        saveUsers();
        setTimeout(function(){
            window.location.href = '/login';
        },3000)

    }
}

const loginUser = async (user)=> {
    let {email,password} = user;
    let extEmail = await users.find((items)=> items.email === email);
       if(!extEmail){
           toast.error(`user ${email} does't exist.`)
       }else{
           if(extEmail.password === password){
               localStorage.setItem('loginStatus',true)
               localStorage.setItem('loginUser', JSON.stringify(email))
               toast.success("login succesfull");
               setTimeout(function(){
                   window.location.href = '/';
               },3000)
           }else{
               toast.error(`incorrect password`)
           }
       }

}
const logoutUser = (user)=>{}
const saveUsers = (user)=>{
    localStorage.setItem("userInfo",JSON.stringify(users))

}
export { registerUser,loginUser,logoutUser}