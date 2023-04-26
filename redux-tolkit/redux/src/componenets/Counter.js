import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increament())}>Increamenet</button>
      <br />

      <br />
      <div>{count}</div>
      <br />
      <br />
      <button>Decrement </button>
    </div>
  );
};

export default Counter;
