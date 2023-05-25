import React,{useState} from "react"
import { Link,Redirect } from "react-router-dom";
import {signup} from "../auth/helper";


export default function Signup(){
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false,
    });

    const {name,email,password,error,success} = values;

    const handleChange = (name) => (event) =>{
        setValues({...values,error:false,[name]:event.target.value})
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data=>{
            console.log("data",data);
            if(data.email === email){
                setValues({
                    ... values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
            } else{
                setValues({
                    ...values,
                    error:true,
                    success:false
                })
            }
        })
        .catch(err=>{console.log(err)})
    }

    const successMessage = ()=>{
        return (
            <div className="row">
                <div className="col-md-5 offset-sm-3 text-mid">
                    <div
                        className="alert alert-success"
                        style = {{display:success ? "" :"none"}}
                    >
                        Signup Successful
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
    const signUpForm = ()=>{
        return (
            <div className="row">
                <div className="col-md-5 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className = "text-dark">Name</label>
                            <input
                                className="form-control"
                                value = {name}
                                onChange={handleChange("name")}
                                type = "text"
                                />
                        </div>
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
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }


    return(
        <>
            {failureMessage()}
            {successMessage()}
            {signUpForm()}
            <p className="text-dark text-center">
                {JSON.stringify(values)}
            </p>
        </>
    )
}
