import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 0;
  outline: none;
  font-size: 18px;
  color: black;
`;
const Form = styled.form`
  border: 1px solid #666;
  padding: 1rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 15px;
  margin: 1rem 0;
`;

const Button = styled.button`
  border: none;
  background: #db4c3f;
  padding: 1rem 0;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Add = (props) => {

  return (
    <Form>
      <Input value={props.title} onChange={props.getChange} type="text" placeholder="Nombre de la tarea" />
      <Button onClick={props.onSubmit} disabled={props.title.length > 0 ? false: true}>Agregar tarea</Button>
    </Form>
  );
};

export default Add;
