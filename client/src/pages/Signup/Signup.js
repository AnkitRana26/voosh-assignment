import React, { useState } from 'react'
import './Signup.css'
const initialForm ={
    name:'',
    number:'',
    password:''
}

const Login = () => {

    const [form,setForm] = useState(initialForm);

    const changeHandler =(e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value});
    }

    return <div id="signUpContainer">
        <h1>LogIn</h1>
        <form id="signUpForm">
            <input class="inputField" type="text" name="name" placeholder="Enter Your Name" onChange={changeHandler} value={form.name} />
            <input class="inputField" type="number" name="number" placeholder="Enter Your Mobile Number" onChange={changeHandler} value={form.number} />
            <input class="inputField" type="password" name="password" placeholder="Enter Your Password" onChange={changeHandler} value={form.password} />
            <input type="submit" value="Submit" />
        </form>
    </div>

}

export default Login