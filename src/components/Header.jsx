import React from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function Header(props){
    let loginStatus = localStorage.getItem("loginStatus") || false

    const logout = ()=>{
        if(window.confirm("are you sure want logout?")){
            toast.success("logout succesfll");
            localStorage.removeItem('login status');
            window.location.reload();

        }else{
            return null;
        }
    }

    return(
       <header>
           <nav className="navbar navbar-expand-md navbar-dark bg-primary">
               <div className="container">
                   <Link rel="stylesheet" href="" className="navbar-brand" >CMS</Link>

                   <button className="navbar-toggler" data-bs-target="menu" data-bs-toggle="collapse">
                       <span className="navbar-toggler-icon"></span>
                   </button>


                   <div className={loginStatus?"collapse navbar-collapse justify-content-between":"collapse navbar-collapse justify-content-end"} id="menu">
                      {
                          loginStatus?(
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/`} href="" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/about`} href="" className="nav-link">About</Link>
                            </li>
                        </ul>
                          ):null

                      }
                      {
                            loginStatus ?(
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={`/login`} onClick={logout} href="" className="nav-link btn btn-danger">logout</Link>
                                </li>
                  
                            </ul>
                            ):( <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/login`} href="" className="nav-link">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/register`} href="" className="nav-link">Register</Link>
                            </li>
                        </ul>)
                      }

                      

                   </div>
               </div>
           </nav>
       </header> 
    )
}
export default Header