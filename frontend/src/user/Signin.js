import React,{useState} from "react"
import {Link} from 'react-router-dom'

const Signin = ()=>{
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false,
        loading:false,
        didRedirect:false
    })

    const {name,email,password,error,success,loading,didRedirect} = values;
    const handleChange = (name) => (event) =>{
        setValues({...values,error:false,[name]:event.target.value})
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
                <div className="col-md-5 offset-sm-3 text-left">
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
                        </div>
                        <button onClick={()=>{}} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }


    return (
        <div>
            <h3 className="text-center">Welcome To Sigin Page</h3>
            {signInForm()}
            <p className="text-center">{JSON.stringify(values)}</p>


        </div>
    )
}


export default Signin
