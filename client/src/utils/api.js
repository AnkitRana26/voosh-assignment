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