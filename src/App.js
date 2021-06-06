import './App.css';
// import styled from 'styled-components';
// import React, { useState, useEffect } from 'react';
// import Plan from './components/Plan';
import Todo from './pages/todo/Todo';

// var buttonColor = '#f1f1f1';

// const Header1 = styled.h1`
//   text-align: center;
// `
// const Header2 = styled.h2`
//   text-align: center;
// `
// const Header3 = styled.h3`
//   text-align: center;
// `
// const Header4 = styled.h4`
//   text-align: center;
// `
// const Header5 = styled.h5`
//   text-align: center;
// `
// const Header6 = styled.h6`
//   text-align: center;
// `
// const CenterDiv = styled.div`
//   display: flex;
//   justifyContent: center;
//   alignItems: baseline;
// `

// const Input = styled.input`
//   height: 2em;
//   width: 30em;
// `
// const Button = styled.button`
//   background: ${buttonColor};
//   margin: 0 0 0 1em;
//   height: 2.5em;
// `
// const GreenButton = styled(Button)`
//   color: green;
//   border-color: green;
// `

// const fetchTodoList = async () => {
//   try {
//     const response = await fetch('http://206.189.89.204/app/no_auth/todos', {method: 'GET', headers: {'Content-Type' : 'application/json'}});
//     //'accept' : 'application/json'
//     // const resjson = await response.json();
//   // console.log(response);
//     return(response.json());
//   } catch (error) {
//     console.log('err', error)
//   }
// }

function App() {
  // const [plans, setPlans] = useState([]);
  // const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   fetchTodoList().then(res => {console.log(res)});
  // }, [])

  // const handleInput = (event) => {
  //   setInputValue(event.target.value);
  //   //console.log('input: ' + inputValue);
  // }
  // const addPlan = () => {
  //   setPlans([...plans, inputValue]);
  //   setInputValue('');
  // }
  // const updatePlan = (newPlan, index) => {
  //   const newPlans = [...plans];
  //   newPlans[index] = newPlan;
  //   setPlans(newPlans);
  // }
  // const deletePlan = (index) => {
  //   const newPlans = [...plans];
  //   newPlans.splice(index, 1);
  //   setPlans(newPlans);
  // }
  return (
    <div>
      <Todo/>
    </div>
    // <div>
    //   <div>
    //     <Header1>What's the Plan for Today?</Header1>
    //     <div style={{
    //       display: 'flex', 
    //       justifyContent: 'center', 
    //       alignItems:'baseline',
    //     }}>
    //       <Input type='text' placeholder='Enter some plan' value={inputValue} onChange={handleInput}></Input>
    //       <Button onClick={addPlan}>Add</Button>
    //     </div>
    //   </div>

    //   <div style={{ display: 'flex', 
    //   justifyContent: 'center',
    //   flexDirection: 'column' }}>
    //     {plans.map((a, index) => <Plan key={a} plan={a} updatePlan={(newValue) => updatePlan(newValue, index)} deletePlan={() => deletePlan(index)}/>)}
    //   </div>
    // </div>
  );
}

export default App;
