import { useState } from 'react';
import { PlanContainer, Input, GreenButton, MintButton, RedButton } from './styled-components';
import PropTypes from 'prop-types';

function Plan(props) {
    const [input, setInput] = useState(props.plan);
    const [prevInput, setPrevInput] = useState(props.plan);
    const [isUpdate, setIsUpdate] = useState(false);
    const updatePlan = () => {
        if(props.editPlan(input)===false){
            setInput(prevInput);
            return;
        }
        setIsUpdate(false);
        setPrevInput(input);
    }
    const editPlan = () => {
        setIsUpdate(true);
    }
    const deletePlan = () => {
        props.deletePlan();
    }

    return(
        <div>
            {isUpdate
                ?
                <PlanContainer>
                    <Input 
                        type='text' 
                        value={input} 
                        onChange={(event) => setInput(event.target.value)}
                    ></Input>
                    <GreenButton onClick={updatePlan}>Update</GreenButton>
                </PlanContainer>
                :
                <PlanContainer style={{disply: 'flex'}}>
                    <div>{input}</div>
                    <div>
                        <MintButton onClick={editPlan}>Edit</MintButton>
                        <RedButton onClick={deletePlan}>Delete</RedButton>
                    </div>
                </PlanContainer>
            }
        </div>
    )}

Plan.propTypes = {
    editPlan: PropTypes.func.isRequired,
    deletePlan: PropTypes.func.isRequired,
}

export default Plan;