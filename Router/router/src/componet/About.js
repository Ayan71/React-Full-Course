import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function clickHnadler() {
    //move to home page
    navigate("/");
  }
  function BackHandler() {
    navigate(-1);
  }
  return (
    <div>
      <div>Ayan shaikhj</div>
      <button onClick={clickHnadler}>Move to Home page</button>;
      <button onClick={BackHandler}>Go Back</button>
    </div>
  );
};

export default About;
