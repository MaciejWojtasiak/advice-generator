import Number from "./Number";
import Quote from "./Quote";
import Divider from "./Divider";
import dice from "./assets/icon-dice.svg";
import { useEffect, useState } from "react";

function Advice() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();
    setAdvice(data.slip);
  };
  const handleClick = () => {
    fetchData();
  };
  return (
    <div className="advice">
      <Number number={advice.id} />
      <Quote text={advice.advice} />
      <Divider />
      <button onClick={handleClick} className="btn">
        {<img src={dice} alt="" />}
      </button>
    </div>
  );
}

export default Advice;
