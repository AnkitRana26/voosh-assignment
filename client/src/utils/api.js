const apiURL = process.env.REACT_APP_API_URL



export const createUser =async(body)=>{

    try{

        const res = await fetch(apiURL+'add-user',{
            method:'POST',
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json();
        return data;

    }catch(err){
        console.log(err.message);
    }

}

export const loginUser =async(body)=>{

    try{

        const res = await fetch(apiURL+'login-user',{
            method:'POST',
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json();
        return data;

    }catch(err){
        console.log(err.message);
    }

}

export const checkToken =async(token)=>{

    try{
        const res = await fetch(apiURL+`loggedIn/${token}`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err.message);
    }


}


export const postOrder = async (body)=>{
    
    try{
        const token = localStorage.getItem('token');
        const res = await fetch(apiURL+'add-order',{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json',
                token:token
            }
        })
        const data =await res.json();
        return data;
    }catch(err){
        console.log(err.message);
    }


}
export const getOrders = async (userId)=>{
    
    try{
        const token = localStorage.getItem('token');
        const res = await fetch(apiURL+`get-order?user_id=${userId}`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                token:token
            }
        })
        const data =await res.json();
        return data;
    }catch(err){
        console.log(err.message);
    }


}