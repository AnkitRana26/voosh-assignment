import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import { checkToken, loginUser } from '../../utils/api';
import './Login.css'
const initialForm ={
    phone_number:'',
    password:''
}

const Login = () => {

    const [form,setForm] = useState(initialForm);
    const {auth,setAuth} = useContext(Context);
    const navigate = useNavigate();

    useEffect(()=>{
        if(auth.isAuth){
            navigate('/');
        }
    },[auth])


    const changeHandler =(e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value});
    }

    const loginHandler=(e)=>{
        e.preventDefault();
        
        // Post Request for Validate User
        const body ={
            ...form,
            phone_number:Number(form.phone_number)
        }

        loginUser(body).then((res)=>{
            localStorage.setItem('token',res.token);

            checkToken(res.token).then((res)=>{
                setAuth({isAuth:true,userDetails:res.data})
                navigate('/')
            }).catch(err=>console.log(err.message))

        }).catch((err)=>{
            console.log(err.message);
        })

        setForm(initialForm);

    }

    return <div id="loginContainer">
        <h1>LogIn</h1>
        <form onSubmit={loginHandler} id="loginForm">
            <input className="inputField" type="number" name="phone_number" placeholder="Enter Your Mobile Number" onChange={changeHandler} value={form.phone_number} />
            <input className="inputField" type="password" name="password" placeholder="Enter Your Password" onChange={changeHandler} value={form.password} />
            <input type="submit" value="Submit" />
        </form>
    </div>

}

export default Login