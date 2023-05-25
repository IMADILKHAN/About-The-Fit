import React,{useState} from "react"
import {Link,redirect} from 'react-router-dom'
import {signin,authenticate,isAuthenticated} from "../auth/helper"
import NavBar from "../core/NavBar"

const Signin = ()=>{
    const [values,setValues] = useState({
        name:"",
        email:"blueaadil@gmail.com",
        password:"123456",
        error:"",
        success:false,
        loading:false,
        didRedirect:false
    })

    const {name,email,password,error,success,loading,didRedirect} = values;
    const handleChange = (name) => (event) =>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then((data)=>{
            console.log("Data",data);
            if (data.token) {


                authenticate(data,()=>{
                    console.log("tokken added");
                    setValues({
                        ...values,
                        didRedirect:true,

                    });

                })
            }
            else {
                setValues({
                    ...values,
                    loading:false,
                })
            }
        })
        .catch(err=> console.log(err))
    }

    const performRedirect = ()=>{
        if (isAuthenticated()) {
              window.location.href = 'http://localhost:3000/';
        }
    }

    const loadingMessage = ()=>{
        return(
            loading && (
                <div className="alert alert-info">
                    <h3>Loading....</h3>
                </div>
            )
        )
    }

    const successMessage = ()=>{
        return (
            <div className="row">
                <div className="col-md-5 offset-sm-3 text-mid">
                    <div
                        className="alert alert-success"
                        style = {{display:success ? "" :"none"}}
                    >
                        Signup Successful <Link to="/sigin"> login now</Link>
                    </div>
                </div>
            </div>
        )
    }

    const failureMessage = ()=>{
        return (
            <div className="row">
                <div className="col-md-5 offset-sm-3 text-mid">
                    <div
                        className="alert alert-danger"
                        style = {{display:error ? "" :"none"}}
                    >
                        Signup Failed
                    </div>
                </div>
            </div>
        )
    }



    const signInForm = ()=>{
        return (
            <div className="row">

                <div className="col-md-6 offset-sm-3 text-left">
                <h3 className="text-center">Login</h3>

                    <form>
                        <div className="form-group">
                            <label className = "text-dark">Email</label>
                            <input
                                className="form-control"
                                value = {email}
                                onChange={handleChange("email")}
                                type = "text"
                                />
                        </div>
                        <div className="form-group">
                            <label className = "text-dark">Password</label>
                            <input
                                className="form-control"
                                value = {password}
                                onChange={handleChange("password")}
                                type = "password"
                                />
                                <button onClick={onSubmit} className="btn btn-success offset-sm-2">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }


    return (
        <div>
        <NavBar/>
            <div className="login-page">

            {loadingMessage()}
            {signInForm()}

            {performRedirect()}
            </div>
        </div>
    )
}


export default Signin
