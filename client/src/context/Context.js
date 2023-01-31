import React,{useEffect, useState} from "react";
import { checkToken } from "../utils/api";


export const Context = React.createContext();



export const ContextProvider = ({children})=>{

    const [auth,setAuth] = useState({
        isAuth : false,
        userDetails : null
    });
    const [order,setOrder]= useState([]);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            checkToken(token).then((res)=>{
                setAuth({isAuth:true,userDetails:res.data})
            }).catch(err=>console.log(err.message))
        }
        
    },[])

    return <Context.Provider value={{auth,setAuth,order,setOrder}}>
        {children}
    </Context.Provider>


}