import React from "react";
import { useState } from "react";
import MyCard from "./MyCard";
import MyIconHeader from "./MyIconHeader";
import Dp from "./Dp";
import { BiPlus,BiDotsHorizontalRounded } from "react-icons/bi";
import "../styles/block.css"

const Block = (props) => {
  const [arr, setArr] = useState(props.arr);
  const [users, setUsers] = useState(props.users);
  const [grp, setgrp] = useState(props.grps);
  const prios = ["Urgent", "High", "Medium", "Low", "No priority"];

  return (
    <div>
      <div className="cb-nav">
        <div className="cb-textbar">
          {grp === "userId" ? (
            <Dp name={users[props.name].name} available={users[props.name].available}/>
          ) : (
            <MyIconHeader prop={props.name} />
          )}
          <h1 className="cb-text" >
            {props.name.length === 1
              ? prios[4 - props.name]
              : grp === "userId"
              ? users[props.name].name
              : props.name}
          </h1>
          <h1 className="cb-count">
            {arr.length}
          </h1>
        </div>
        <div>
          <BiPlus />
          <BiDotsHorizontalRounded />
        </div>
      </div>

      <div className="card">
        {arr.map((d, index) => {
          d["user"] = users[d.userId];
          return <MyCard key={index} data={d} grpBy={grp} />;
        })}
      </div>
    </div>
  );
};

export default Block;
