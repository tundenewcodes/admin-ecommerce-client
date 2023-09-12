/* eslint-disable react/prop-types */


import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import { URL } from "../url";


export const UserContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(null)
    
    const URL = "https://admin-backend-api.onrender.com"
    useEffect(()=>{
      getUser()

    },[])

    const getUser=async()=>{
      try{
        const userFromLocalStorage = localStorage.getItem("token")
       
        setUser(userFromLocalStorage)

      }
      catch(err){
        console.log(err)
      }
    }
    
    console.log(user);
    return (<UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>)
}