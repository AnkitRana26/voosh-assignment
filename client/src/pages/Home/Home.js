import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import { getOrders, postOrder } from '../../utils/api'
import './Home.css'

const initialForm={
    sub_total:'',
    phone_number:''
}


const Home = () => {
    const [form,setForm]= useState(initialForm);
    const {auth,setAuth,order,setOrder} = useContext(Context);
    const changeHandler =(e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value});
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        const data ={
            sub_total:Number(form.sub_total),
            phone_number:Number(form.phone_number),
            user_id:auth.userDetails['_id']
        }

        postOrder(data).then(res=>{
            getOrders(auth.userDetails['_id']).then(res=>{
                setOrder(res.data);
            })
            .catch(err=>{
                console.log(err.message);
            })
        })
        .catch(err=>{
            console.log(err.message);
        })

    }

    useEffect(()=>{
        getOrders(auth.userDetails['_id']).then(res=>{
            setOrder(res.data);
        })
        .catch(err=>{
            console.log(err.message);
        })
    },[])


    return (
        <div id='homeContainer'>
            <h1>Orders DashBoard</h1>
            <div id='mainConatiner'>
                <div id='orderContainer'>
                    {
                        order.map((ele) => {
                            return <div key={ele['_id']} className='order'>
                                <h2>₹{ele.sub_total}</h2>
                                <h3>Mobile:- {ele.phone_number}</h3>
                            </div>
                        })
                    }
                </div>
                <div id='addOrderContainer'>
                    <h2>Add Order</h2>
                    <form onSubmit={submitHandler} id="addOrderForm">
                        <input className="inputField" type="number" name="sub_total" placeholder="Enter Sub Total" onChange={changeHandler} value={form.sub_total} />
                        <input className="inputField" type="number" name="phone_number" placeholder="Enter Number" onChange={changeHandler} value={form.phone_number} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Home