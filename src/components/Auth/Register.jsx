import React,{useState} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../data/user";


function Register(){
    const [user,setUser]=useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    })

    const [err,setError]=useState(false)
    const [errmsg,setErrMsg]=useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    })



    const readValue = (event)=>{
        const{name,value}= event.target

        if(name === "name"){
            validateName(value)
        }else if(name === 'email'){
            validateEmail(value)
        }else if(name==="mobile"){
            validateMobile(value)
        }else if(name === "password"){
            validatePass(value)
        }
        setUser({...user,[name]:value })
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        if(err){
            toast.error("check the errors")
        }else{
            console.log('data=',user)
            registerUser(user)
        }
    }

    //validation 
    const validateName = (name)=>{
        if(name===""){
            setError(true)
            setErrMsg({...errmsg, ['name']:"name field should not be empty"})
        }
        // else if(name.length <=2){
        //     setError(true)
        //     setErrMsg({...errmsg, ['name']:"name length can't be lss that 2 char"})
        // }
        else{
            let regx = /^[a-zA-Z\s]+$/;
            if(regx.test(name)===false){
                setError(true)
                setErrMsg({...errmsg, ['name']:"invalid name formate"})
            } else {
                setError(false)
                setErrMsg({...errmsg, ['name']: ""})
            }
           
        }
    }
    //validate name

    const validateEmail = (email)=>{
        if(email===""){
            setError(true)
            setErrMsg({...errmsg, ['email']:"email field should not be empty"})
        }
       
        else{
            let regx = /^\S+@\S+\.\S+$/;
            if(regx.test(email)===false){
                setError(true)
                setErrMsg({...errmsg, ['email']:"invalid email formate"})
            }
            else{
            setError(false)
            setErrMsg({...errmsg, ['email']:""})

            }
           
        }
    }

    //validatioj for mobile 

    const validateMobile = (mobile)=>{
        if(mobile === ""){
            setError(true)
            setErrMsg({...errmsg, ['mobile']:" mobile field should not be empty"})
        }else{
            let regx = /^[6-9]\d{9}$/;
            if(regx.test(mobile)===false){
                setError(true)
                setErrMsg({...errmsg, ['mobile']:"invalid mobile number formate"})

        }else{
            setError(false)
            setErrMsg({...errmsg, ['mobile']:""})
        }
    }
}

       //validate passwords
       const validatePass = (password)=>{
        if(password === ""){
            setError(true)
            setErrMsg({...errmsg, ['password']:" mobile field should not be empty"})
        }else{
            let regx = /^[a-zA-Z0-9\s]+$/;
            if(regx.test(password)===false){
                setError(true)
                setErrMsg({...errmsg, ['password']:"invalid passowrd formate"})

        }else{
            setError(false)
            setErrMsg({...errmsg, ['password']:""})
        }
    }
} 

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md12 text-center">
                    <h3 className="display-3 text-secondary">Register</h3>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-6 offset-md-3 col-lg-6 offset-md-2 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <form autocomplet="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={user.name}  onChange={readValue}  className="form-control" required />
                                    <div>
                                        {
                                            err && errmsg.name?<strong className="text-danger">{errmsg.name}</strong>:
                                            null
                                        }
                                    </div>
                                </div>

                                <div className="form-group mt   -2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={user.email}  onChange={readValue}  className="form-control" required />
                                    <div>
                                        {
                                            err && errmsg.email?<strong className="text-danger">{errmsg.email}</strong>:
                                            null
                                        }
                                    </div>
                                </div>

                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" value={user.mobile}  onChange={readValue} className="form-control" required />
                                    <div>
                                        {
                                            err && errmsg.mobile?<strong className="text-danger">{errmsg.mobile}</strong>:
                                            null
                                        }
                                    </div>
                                </div>

                                <div className="form-group mt-2">
                                    <label htmlFor="password">password</label>
                                    <input type="password" name="password" id="password" value={user.password}  onChange={readValue}  className="form-control" required />
                                    <div>
                                        {
                                            err && errmsg.password?<strong className="text-danger">{errmsg.password}</strong>:
                                            null
                                        }
                                    </div>
                                </div>

                                <div className="form-group mt-2">
                                    <input type="submit" value="Register" className="btn btn-outline-success"/>
                                    <div className="float-end d-flex align-items-center">
                                        <strong className="text-success">already registered?</strong>
                                        <Link to={'/login'} className="btn btn-link">Login</Link>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Register