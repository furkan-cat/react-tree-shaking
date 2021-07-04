import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import apple from "../../assets/apple.svg";
import { randomInteger } from "../../utils/randomInteger";
import "./Apple.scss";

const Apple = () => {
  // Trigger button global state
  const clicked = useSelector((state) => state.click);
  // Reach to DOM elements through useRef
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      // IMG 1
      if (clicked) {
        let Count1;
        // Create random number for random positioning of apples through the helper function from utils folder
        Count1 = randomInteger(40, 57) + "%";
        img1Ref.current.style.left = Count1;

        img1Ref.current.src = apple;
        img1Ref.current.className = "apple";
      }
    }, 3000);

    setTimeout(() => {
      // IMG 2
      if (clicked) {
        let Count2;
        // Create random number for random positioning of apples through the helper function from utils folder
        Count2 = randomInteger(40, 57) + "%";
        img2Ref.current.style.left = Count2;

        img2Ref.current.src = apple;
        img2Ref.current.className = "apple";
      }
    }, 3500);

    setTimeout(() => {
      // IMG 3
      if (clicked) {
        let Count3;
        // Create random number for random positioning of apples through the helper function from utils folder
        Count3 = randomInteger(40, 57) + "%";
        img3Ref.current.style.left = Count3;

        img3Ref.current.src = apple;
        img3Ref.current.className = "apple";
      }
    }, 4000);

    if (!clicked) {
      // If it's not clicked, delete apples from the page
      img1Ref.current.className = "";
      img1Ref.current.src = "";

      img2Ref.current.className = "";
      img2Ref.current.src = "";
      
      img3Ref.current.className = "";
      img3Ref.current.src = "";
    }
  }, [clicked]);

  return (
    <React.Fragment>
      <img ref={img1Ref} />
      <img ref={img2Ref} />
      <img ref={img3Ref} />
    </React.Fragment>
  );
};

export default Apple;
