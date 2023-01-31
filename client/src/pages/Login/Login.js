import React, { useState } from 'react'
import './Login.css'
const initialForm ={
    number:'',
    password:''
}

const Login = () => {

    const [form,setForm] = useState(initialForm);

    const changeHandler =(e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value});
    }

    return <div id="loginContainer">
        <h1>LogIn</h1>
        <form id="loginForm">
            <input class="inputField" type="number" name="number" placeholder="Enter Your Mobile Number" onChange={changeHandler} value={form.number} />
            <input class="inputField" type="password" name="password" placeholder="Enter Your Password" onChange={changeHandler} value={form.password} />
            <input type="submit" value="Submit" />
        </form>
    </div>

}

export default Login