import React, { useReducer } from 'react';
import { validate } from '../Validators/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  id,
  element,
  label,
  type,
  placeholder,
  rows,
  errorText,
  validators,
}) => {
  const [initialState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    isTouched: false,
  });

  const changeHandler = (e) => {
    dispatch({
      type: 'CHANGE',
      val: e.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const elementType =
    element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={initialState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={initialState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !initialState.isValid &&
        initialState.isTouched &&
        `form-control--invalid`
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elementType}
      {!initialState.isValid && initialState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
