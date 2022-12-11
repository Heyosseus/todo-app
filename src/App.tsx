import "./App.css";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import img from "./assets/card.png";
import "./App.css";
import Main from "./components/Main";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Image>
            <Weekday>Thu 9</Weekday>
            <Time>5:23 AM</Time>
          </Image>
          <Main></Main>
        </Card>
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  /* @media screen and (min-width: 700px) {
    height: 400px;
  } */
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
  font-family: "Russo One", sans-serif;
`;

const Time = styled.div`
  width: 192px;
  height: 58px;
  line-height: 62px;
  color: #fff;
  font-size: 48px;
  margin-left: auto;
  margin-right: 28px;
  margin-top: 8px;
  font-family: "Russo One", sans-serif;
`;
