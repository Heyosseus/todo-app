import styled from 'styled-components';
import plus from '../assets/Vector.png';
import completed from '../assets/completed.png';
import React, { FC, useState } from 'react';
import { ITodos } from '../Interfaces';

const Main: React.FC<any> = () => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<ITodos[]>([]);
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if(e.target.name === 'task'){
    setInput(e.target.value);
    }else{

    }
  };

  const submitHandler = (e: any): void => {
    e.preventDefault();
    console.log([...todos]);
    const newTask = {text : input}
    setTodos([...todos, newTask]);
    setInput('');
  };

  return (
    <>
    <Container>
      <Circle>
        <Completed></Completed>
      </Circle>
      <Input name='task' value={input} onChange={inputHandler}></Input>
      <Button onClick={submitHandler}>
        <Plus></Plus>
      </Button>
    </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  width: 375px;
  height: 48px;
  display: flex;
  margin: 26px;
  gap: 10px;
`;
const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Note',
})`
  background: #ebeff2;
  width: 250px;
  height: 48px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 22px;
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
`;
const Button = styled.button`
  width: 88px;
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
  background: #20eeb0;
  width: 24px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: 14px;
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
