export const auth_login = async () => {
    const response = await fetch('http://206.189.89.204/app/auth/login', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'}
        ,
        body: JSON.stringify({
            "email": "xtest@hotmail.com",
            "password": "xtest1234"
        })
    });
    let body = await response.json();
    return body.token;
};

export const post_auth = async (title, token) => {
    try {
        const response = await fetch('http://206.189.89.204/app/with_auth/todos/', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify({
                "title": title,
            })
        });
    }catch(err){
        console.log(err);
    }
}

export const put_auth = async (_id, title, token) => {
    try{
        const response = await fetch(`http://206.189.89.204/app/with_auth/todos/${_id}`, {
            method: 'PUT', 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify({
                "title": title,
            })
        });
        //let body = await response.json();
    }catch(err){
        console.log(err);
    }
}

export const delete_auth = async (_id, token) => {
    try{
        const response = await fetch(`http://206.189.89.204/app/with_auth/todos/${_id}`, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        });
    }catch(err){
        console.log(err);
    }
}


