import React, { useState } from 'react'
import './Home.css'
const data = [
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    },
    {
        id: 1,
        sub_total: 500,
        phone_number: 999999999
    }
]

const initialForm={
    sub_total:''
}


const Home = () => {
    const [form,setForm]= useState(initialForm);
    const changeHandler =(e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value});
    }
    return (
        <div id='homeContainer'>
            <h1>Orders DashBoard</h1>
            <div id='mainConatiner'>
                <div id='orderContainer'>
                    {
                        data.map((ele) => {
                            return <div className='order'>
                                <h2>₹{ele.sub_total}</h2>
                                <h3>Mobile:- {ele.phone_number}</h3>
                            </div>
                        })
                    }
                </div>
                <div id='addOrderContainer'>
                    <h2>Add Order</h2>
                    <form id="addOrderForm">
                        <input class="inputField" type="number" name="sub_total" placeholder="Enter Sub Total" onChange={changeHandler} value={form.sub_total} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Home