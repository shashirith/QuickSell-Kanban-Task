import React from 'react'
import {
    BiSignal1,
    BiSignal2,
    BiSignal3,
    BiDotsHorizontalRounded,
} from "react-icons/bi";
import {
    BsCheckCircle,
    BsCircleHalf,
    BsCircle,
    BsXCircle,
    BsExclamationCircleFill,
} from "react-icons/bs";
import { FaExclamation } from "react-icons/fa";
import '../styles/icon.css';

const MyIconCard = ({ prop }) => {
    if (prop === "Cancelled") return <BsXCircle />;
    else if (prop === "Todo") return <BsCircle />;
    else if (prop === "In progress") return <BsCircleHalf style={{color: "gold"}}/>;
    else if (prop === "Backlog") return <BsExclamationCircleFill style={{color: "maroon"}} />;
    else if (prop === "Done") return <BsCheckCircle />;
    else if (prop === 0)
      return (
        <BiDotsHorizontalRounded className="icons"/>
      );
    else if (prop === 1)
      return (
        <BiSignal1 className="icons"/>
      );
    else if (prop === 2)
      return (
        <BiSignal2 className="icons" />
      );
    else if (prop === 3)
      return (
        <BiSignal3 className="icons" />
      );
    else if (prop === 4) {
      return <div className="exclamation">
        <FaExclamation style={{color: "#fff", fontSize: "10px"}} />
      </div>
    }
};

export default MyIconCard;