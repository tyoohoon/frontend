import React, { useState, useEffect } from 'react';
import { auth_login, post_auth, put_auth, delete_auth } from './Auth';
import { Header1, InputContainer, Input, PlansContainer } from './styled-component';
import { GreenButton } from '../../components/styled-components';
import Plan from '../../components/Plan';

function Todo() {
    const [plans, setPlans] = useState([]);
    const [order, setOrder] = useState(0);
    const [inputTitle, setInputTitle] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchToken = async () => {
            const token = await auth_login();
            setToken(token);
            console.log(token);
        };
        fetchToken();
        get_no_auth();
    },[]);

    const addPlan = async () => { 
        if(! await inputIsValid(inputTitle, false)) return false;
        let newPlan = {
            id: order,
            plan: inputTitle,
        };
        setOrder(order + 1);
        plans.push(newPlan);
        setInputTitle('');

        //await post_no_auth(newPlan);
        await post_auth(newPlan.plan, token);
        get_no_auth();
    };

    const editPlan = async (_id, title) => { 
        if(! await inputIsValid(title, true)) return false;
        // let newPlans = [...plans];
        // let targetPlan = newPlans.find(a => a._id===_id );
        // console.log(targetPlan);
        // targetPlan.title = title;
        // setPlans(newPlans);
        
        //await put_no_auth(_id, title);
        await put_auth(_id, title, token);
        get_no_auth();
    };

    const deletePlan = async (id) => {
        // let newPlans = [...plans];
        // newPlans = newPlans.filter(a => a.id !== id);
        // setPlans(newPlans);

        //await delete_no_auth(id);
        await delete_auth(id, token);
        get_no_auth();
    };

    const inputIsValid = async (input, canBeNull) => {
        //canBeNull==true if called from editPlan()
        //canBeNull==false if called from addPlan()
        let isValid = true;
        if(canBeNull===false && input==null)
            isValid = false;
        else if(input.length < 2 || input.length > 50)
            isValid = false;
        else if(/[^A-Za-z\u0E00-\u0E7F0-9\d]/i.test(input))
             isValid = false;
        if(isValid === false)
            alert('The input can A-Z, a-z, ก-ฮ, and 0-9');
        return isValid;
    };
    
    //Level1 : No auth ------------------------------------------
    const get_no_auth = async () => {
        const response = await fetch('http://206.189.89.204/app/no_auth/todos/', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'}
            }
        );
        let todos = await response.json();       
        let tmpPlan = {};
        let tmpPlans = [];
        todos.data.map((todo) => {
            tmpPlan = {
                order: todo._id,
                title: todo.title,
            }
            tmpPlans.push(tmpPlan);
        });
        setPlans(tmpPlans);
    };

    const post_no_auth = async (newPlan) => {
        const response = await fetch('http://206.189.89.204/app/no_auth/todos/', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'}
            ,
            body: JSON.stringify({
                "title": newPlan.plan
            })
        });
    };

    const put_no_auth = async (_id, title) => {
        const response = await fetch(`http://206.189.89.204/app/no_auth/todos/${_id}`, {
            method: 'PUT', 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'}
            ,
            body: JSON.stringify({
                "title": title
            })
        });
    };

    const delete_no_auth = async (_id) => {
        const response = await fetch(`http://206.189.89.204/app/no_auth/todos/${_id}`, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'}
        });
    };

    return (
        <div>
            <Header1>What's the Plan for Today?</Header1>
            <InputContainer>
                <Input
                    type='text'
                    placeholder='Enter some plan'
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') addPlan()}
                    }
                >
                </Input>
                <GreenButton onClick={addPlan}>
                    Add
                </GreenButton>
            </InputContainer>
            <PlansContainer>
                {
                    plans.map((a) =>
                        <Plan 
                            key={a.order}
                            plan={a.title}
                            editPlan={(newTitle) => editPlan(a.order, newTitle)}
                            deletePlan={() => deletePlan(a.order)}
                        />
                    )
                }
            </PlansContainer>
        </div>
    )
}

export default Todo;