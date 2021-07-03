import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import apple from "../apple.svg";
import "./Apple.scss";

const Apple = () => {
  const clicked = useSelector((state) => state.click); // Trigger button global state

  useEffect(() => {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");

    setTimeout(() => {
      // IMG 1
      if (clicked) {
        let Count;
        function randomInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        Count = randomInteger(40, 57) + "%"; // Create random number for random positioning of apples.
        img1.style.left = Count;

        img1.src = apple;
        img1.className = "apple";
      }
    }, 3000);

    setTimeout(() => {
      // IMG 2
      if (clicked) {
        let Count2;
        function randomInteger2(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        Count2 = randomInteger2(40, 57) + "%"; // Create random number for random positioning of apples.
        img2.style.left = Count2;

        img2.src = apple;
        img2.className = "apple";
      }
    }, 3500);

    setTimeout(() => {
      // IMG 3
      if (clicked) {
        let Count3;

        function randomInteger3(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        Count3 = randomInteger3(40, 57) + "%"; // Create random number for random positioning of apples.
        img3.style.left = Count3;

        img3.src = apple;
        img3.className = "apple";
      }
    }, 4000);

    if (!clicked) {
      img1.className = ""; 
      img1.src = "";
      img2.className = "";
      img2.src = "";
      img3.className = "";
      img3.src = "";
    }
  }, [clicked]);

  // setTimeout(() => {
  //   const apple_flake = document.createElement("img");
  //   const img = document.getElementById("img");
  //   if (clicked) {
  //     apple_flake.classList.add("apple");
  //     apple_flake.classList.add("fall");
  //     img.style.top = Math.random() * window.innerWidth + "px";
  //     img.style.left = Math.random() * 20 + 35 + "%";
  //     img.style.top = Math.random() * 20 + 35 + "%";
  //     img.style.animationDuration = Math.random() * 1 + 2 + "s";
  //     img.classList = "apple";
  //   }
  // }, 3000);

  return (
    <>
      <img id="img1" />
      <img id="img2" />
      <img id="img3" />
    </>
  );
};

export default Apple;
