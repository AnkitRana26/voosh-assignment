import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import { createUser } from '../../utils/api';
import './Signup.css'
const initialForm = {
    name: '',
    phone_number: '',
    password: ''
}

const Login = () => {

    const [form, setForm] = useState(initialForm);
    const { auth, setAuth } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuth) {
            navigate('/');
        }
    }, [auth])

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const signUpHandler = (e) => {
        e.preventDefault();

        // Post Request for Create User
        const body = {
            ...form,
            phone_number: Number(form.phone_number)
        }

        createUser(body).then((res) => {
            if(res.data){
                alert('SignUp Sucessfully')
                navigate('/login')
            }
            else{
                alert(res.err);
            }
            
        })

        setForm(initialForm);

    }

    return <div id="signUpContainer">
        <h1>SignUp</h1>
        <form onSubmit={signUpHandler} id="signUpForm">
            <input className="inputField" type="text" name="name" placeholder="Enter Your Name" onChange={changeHandler} value={form.name} />
            <input className="inputField" type="number" name="phone_number" placeholder="Enter Your Mobile Number" onChange={changeHandler} value={form.phone_number} />
            <input className="inputField" type="password" name="password" placeholder="Enter Your Password" onChange={changeHandler} value={form.password} />
            <input type="submit" value="Submit" />
        </form>
    </div>

}

export default Login