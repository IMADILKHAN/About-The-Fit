import React from 'react'
import {Route,Routes} from "react-router-dom";
import {isAuthenticated } from "./index"





export default function privateRoutes({component: Component, ...rest}){
    return (
  <Route
    {...rest}
    render ={(props)=>
    isAuthenticated ? (
        <Component {...props} />
    ) : (
        <Routes
        to={{
            pathname:"/signin",
            state:{from: props.location},
        }}
        />
    )
}
  />
);
}
