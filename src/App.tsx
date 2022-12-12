import './App.css';
import GlobalStyle from './styles/global';
import styled from 'styled-components';
import img from './assets/card.png';
import './App.css';
import Main from './components/Main';
import { useState } from 'react';



function App() {
  const date = new Date();
  const showTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const weekDays: string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
  ];
  const week: number = date.getUTCDay();
  const showDay: number = date.getUTCDate();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Image>
            <Weekday style={{ paddingLeft: '8px', gap: '2px' }}>
              {weekDays[week]}
              {showDay}
            </Weekday>
            <Time style={{ left: 'auto' }}>{showTime}</Time>
          </Image>
          <Main 
            // input={input}
            // setInput={setInput}
            // todos={todos}
            // setTodos={setTodos}
          ></Main>
        </Card>
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  
`;
const Card = styled.div`
  background: #fff;
  width: 430px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0px 0px;
  @media screen and (min-width: 700px) {
    height: 600px;
    
  }
`;
const Image = styled.div`
  width: 430px;
  height: 202px;
  border-radius: 10px 10px 0px 0px;
  background: url(${img});
`;

const Weekday = styled.div`
  width: 60px;
  height: 22px;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  margin-left: auto;
  margin-right: 28px;
  padding-top: 124px;
  font-family: 'Russo One', sans-serif;
`;

const Time = styled.div`
  width: 248px;
  height: 58px;
  line-height: 62px;
  color: #fff;
  font-size: 48px;
  margin-left: auto;
  margin-top: 8px;
  font-family: 'Russo One', sans-serif;
`;
