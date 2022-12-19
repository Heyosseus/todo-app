import styled from "styled-components";
import plus from "../assets/Vector.png";
import completed from "../assets/completed.png";
import React, { FC, useState } from "react";
import trashIcon from "../assets/delete.png";
import lineCircle from '../assets/line circle.png'

const Main: React.FC<any> = () => {
  const time = new Date();
  const showTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<any>([
    {
      text: 'Dinner with Anna',
      id: 1,
      time: showTime
    },
    {
      text: 'Go to Gym',
      id: 1,
      time: showTime
    }
  ]);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const submitHandler = (e: any): void => {
    e.preventDefault();
    console.log([...todos]);
    if (todos !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: inputText.trim(), time: showTime },
      ]);
    }
    setInputText("");
  };

  const handleDelete = (id:any) => {
    const removeItem = todos.filter((todo:any) => {
      return todo.id !== id
    })
    setTodos(removeItem)
  }

  return (
    <>
      <Container>
        <Input value={inputText} onChange={inputHandler}></Input>
        <Button onClick={submitHandler}>
          <Plus></Plus>
        </Button>
      </Container>
      {todos.map((item: any) => (
        <Todos key={item.id}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Heading>{item.text}</Heading>
            <DateTime>{item.time}</DateTime>
          </div>
          <div style={{ display: "flex" }}>
            <Circle></Circle>
            <Delete onClick={()=>handleDelete(item.id)}></Delete>
          </div>
        </Todos>
      ))}
    </>
  );
};

export default Main;

const Container = styled.div`
  width: 380px;
  height: 48px;
  display: flex;
  margin: 26px;
  gap: 10px;
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: flex-end;
    width: 550px;
  }
`;
const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Note',
})`
  background: #ebeff2;
  width: 270px;
  height: 48px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 22px;
  margin-left: 16px;

  font-family: 'Inter', sans-serif;
  ::placeholder {
    width: 40px;
    height: 18px;
    font-size: 16px;
    color: #888888;
    line-height: 20px;
    padding-left: 12px;
    font-family: 'Inter', sans-serif;
  }
  @media screen and (min-width: 700px) {
    width: 600px;
  }
`;
const Button = styled.button`
  width: 92px;
  height: 48px;
  background: #20eeb0;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
const Circle = styled.div`
  background: url(${lineCircle});
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 15px; */
  margin-right: 14px;
`;
const Completed = styled.div`
  background: url(${completed});
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Plus = styled.div`
  background: url(${plus});
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Delete = styled.div`
  background: url(${trashIcon});
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover{
    cursor: pointer;
  }
`;

const Todos = styled.div`
  margin-left: 42px;
  display: flex;
  width: 365px;
  justify-content: space-between;
  margin-top: 24px;
  @media screen and (min-width: 700px) {
    width: 535px;
  }
`;
const Heading = styled.div`
  color: #0d0d0d;
  font-size: 18px;
  text-transform: capitalize;
  line-height: 21.78px;
`;
const DateTime = styled.div`
  color: #888888;
  font-size: 14px;
`;
