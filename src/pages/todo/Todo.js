import React, { useState } from 'react';
import { Header1, InputContainer, Input, PlansContainer } from './styled-component';
import { GreenButton } from '../../components/styled-components';
import Plan from '../../components/Plan';

function Todo() {
    const [plans, setPlans] = useState([]);
    const [planId, setPlanId] = useState(0);
    const [inputPlan, setInputPlan] = useState('');

    const addPlan = () => { 
        //add a plan to plans array
        if(!inputIsValid(inputPlan, false)) return false;
        let newPlan = {
            id: planId,
            plan: inputPlan,
        };
        setPlanId(planId + 1);
        plans.push(newPlan);
        setInputPlan('');
    };

    const editPlan = (id, value) => { 
        //edit a plan in plans array given id and a new value
        if(!inputIsValid(value, true)) return false;
        let newPlans = [...plans];
        let targetPlan = newPlans.find(a => a.id===id );
        targetPlan.plan = value;
        setPlans(newPlans);
    };

    const deletePlan = (id) => {
        //delete a plan from plans array given an id
        let newPlans = [...plans];
        newPlans = newPlans.filter(a => a.id !== id);
        setPlans(newPlans);
    };

    const inputIsValid = (input, canBeNull) => {
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

    return (
        <div>
            <Header1>What's the Plan for Today?</Header1>
            <InputContainer>
                <Input
                    type='text'
                    placeholder='Enter some plan'
                    value={inputPlan}
                    onChange={(e) => setInputPlan(e.target.value)}
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
                            key={a.id}
                            plan={a.plan}
                            editPlan={(newValue) => editPlan(a.id, newValue)}
                            deletePlan={() => deletePlan(a.id)}
                        />
                    )
                }
            </PlansContainer>
        </div>
    )
}

export default Todo;