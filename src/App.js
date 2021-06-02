import './App.css';
import styled from 'styled-components';
import React from 'react';

var buttonColor = '#f1f1f1';

const Header1 = styled.h1`
  text-align: center;
`
const Header2 = styled.h2`
  text-align: center;
`
const Header3 = styled.h3`
  text-align: center;
`
const Header4 = styled.h4`
  text-align: center;
`
const Header5 = styled.h5`
  text-align: center;
`
const Header6 = styled.h6`
  text-align: center;
`
// const CenterDiv = styled.div`
//   display: flex;
//   justifyContent: center;
//   alignItems: baseline;
// `

const Input = styled.input`
  height: 2em;
  width: 30em;
`
const Button = styled.button`
  background: ${buttonColor};
  margin: 0 0 0 1em;
  height: 2.5em;
`
// const GreenButton = styled(Button)`
//   color: green;
//   border-color: green;
// `

function App() {
  // const [color, setColor] = useState('rgrg');
  return (
    <div>
      <div>
        <Header1>What's the Plan for Today?</Header1>
        {/* <CenterDiv> */}
        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'baseline',
        }}>
          <Input type='text' placeholder='Enter some plan'></Input>
          <Button type='submit'>Add</Button>
        </div>
        {/* </CenterDiv> */}
      </div>
    </div>
  );
}

export default App;
