import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { click } from "../../actions/index";
import "./Tree.scss";
import tree from "../../assets/tree.svg";

const Tree = () => {
  // Button trigger global state
  const clicked = useSelector((state) => state.click);

  // Dispatch
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <img
        className={clicked ? "tree tree--clicked" : "tree"}
        src={tree}
        alt=""
      />
      <button className="button" onClick={() => dispatch(click())}>
        Shake The Tree
      </button>
    </React.Fragment>
  );
};

export default Tree;
