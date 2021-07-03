import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import basket from "../../assets/basket.svg";
import apple from "../../assets/apple.svg";
import "./Basket.scss";

const Basket = () => {
  // Trigger button global state
  const clicked = useSelector((state) => state.click);

  // Reach to DOM elements through useRef
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      // If global state is true show the apples
      if (clicked) {
        img1Ref.current.src = apple;
        img2Ref.current.src = apple;
        img3Ref.current.src = apple;
      }
    }, 6000);
    // If global state is false remove the apples
    if (!clicked) {
      img1Ref.current.src = "";
      img2Ref.current.src = "";
      img3Ref.current.src = "";
    }
  }, [clicked]);

  return (
    <React.Fragment>
      <img className="basket" src={basket} alt="" />
      <img className="basket--apple1" id="apple-basket1" ref={img1Ref} />
      <img className="basket--apple2" id="apple-basket2" ref={img2Ref} />
      <img className="basket--apple3" id="apple-basket3" ref={img3Ref} />
    </React.Fragment>
  );
};

export default Basket;
