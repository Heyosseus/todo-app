import "./App.css";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import img from "./assets/card.png";
import "./App.css";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const date = new Date();
  const showTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const week: number = date.getUTCDay();
  const showDay: number = date.getUTCDate();

  return (
    <>
      <GlobalStyle />
      <Content>
        <Style style={{display:'none'}}>Todo</Style>

        <Card>
          <Image>
            <div>
              <Weekday style={{ paddingLeft: "8px", gap: "2px" }}>
                {weekDays[week]}
                {showDay}
              </Weekday>
              <Time style={{ marginRight: "12px" }}>{showTime}</Time>
            </div>
          </Image>
          <Main
          // input={input}
          // setInput={setInput}
          // todos={todos}
          // setTodos={setTodos}
          ></Main>
        </Card>
      </Content>
    </>
  );
}

export default App;
const Content = styled.div`

`;
const Card = styled.div`
  background: #fff;
  width: 430px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0px 0px;
  @media screen and (min-width: 700px) {
    height: 580px;
    width: 620px;
  }
`;
const Image = styled.div`
  width: 430px;
  height: 202px;
  border-radius: 10px 10px 0px 0px;
  background: url(${img});
  @media screen and (min-width: 700px) {
    width: 620px;
    background-size: cover;
  }
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
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
  }
`;

const Time = styled.div`
  width: 220px;
  height: 68px;
  line-height: 62px;
  color: #fff;
  font-size: 48px;
  margin-left: 202px;
  margin-top: 8px;
  font-family: 'Russo One', sans-serif;
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: flex-end;
    width: 300px;
    margin-left: 282px;
  }
`;

const Style = styled.div`
  color: #007fdb;
  font-size: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 220px; */
  visibility: hidden;
  @media screen and (min-width: 700px) {
    visibility: hidden;
  }

`;
