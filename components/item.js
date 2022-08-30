import { useState } from "react";
import styled from "styled-components";

const ItemCustom = styled.div`
  border-bottom: 1px solid #f5f5f5;
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  align-items: center;
  padding: 0 1rem;
  justify-content: center;
  
  &:hover {
    background: #f5f5f5;
  }
  .input-group {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  &.complete{
    opacity: 0.8;
  }
  &.complete label,
  &.complete p{
    text-decoration: line-through;
  }
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #666;
    border-radius: 100%;
    background: #fff;
    transform: translate(0, -50%);
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: #db4c3f;
    position: absolute;
    top: 10px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    transform: translate(0, -50%);
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  label {
    font-size: 18px;
    display: block;
    width: 100%;
    padding: 1rem 0;
  }
  .actions {
    display: flex;
    justify-content: end;
    span{
      cursor: pointer;
    }
  }
  p{
    padding: 1rem 0;
    margin: 0;
  }
`;

const Item = (props) => {
  
  return (
    <ItemCustom className={`${props.data.completed ? 'complete': ''}`}>
      
      <div onClick={()=>props.updateData(props.data)} className={`input-group`}>
        <input readOnly checked={props.completed} id={`check-${props.data.id}`} type="radio" />
        <label htmlFor={`check-${props.data.id}`}></label>
      </div>
      <p onClick={()=> props.editText(props.data)}>{props.data.title}</p>
      <div className="actions">
        <span className="material-symbols-outlined" onClick={()=>props.deleteData(props.data)}>delete</span>
      </div>
    </ItemCustom>
  );
};

export default Item;
