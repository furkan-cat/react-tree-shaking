import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import basket from "../basket.svg";
import apple from "../apple.svg";
import "./Basket.scss";

const Basket = () => {
  const clicked = useSelector((state) => state.click); // Trigger button global state

  useEffect(() => {
    // Get images via image id
    const img1 = document.getElementById("apple-basket1");
    const img2 = document.getElementById("apple-basket2");
    const img3 = document.getElementById("apple-basket3");
    
    setTimeout(() => {
      // If global state is true show the apples
      if (clicked) {
        img1.src = apple;
        img2.src = apple;
        img3.src = apple;
      }
    }, 6000);
    // If global state is false remove the apples
    if (!clicked) {
      img1.src = "";
      img2.src = "";
      img3.src = "";
    }
  }, [clicked]);

  return (
    <>
      <img className="basket" src={basket} alt="" />
      <img className="basket--apple1" id="apple-basket1" />
      <img className="basket--apple2" id="apple-basket2" />
      <img className="basket--apple3" id="apple-basket3" />
    </>
  );
};

export default Basket;
