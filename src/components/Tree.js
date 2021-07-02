import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { click } from "../actions/index";
import "./Tree.scss";
import tree from "../tree.svg";

const Tree = () => {
  const clicked = useSelector((state) => state.click);
  const dispatch = useDispatch();

  return (
    <>
      <img className={clicked ? "tree clicked" : "tree"} src={tree} alt="" />
      <button className="button" onClick={() => dispatch(click())}>
        Shake The Tree
      </button>
    </>
  );
};

export default Tree;
