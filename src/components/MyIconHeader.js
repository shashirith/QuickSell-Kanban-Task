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

const MyIconHeader = ({ prop }) => {
    if (prop === "Cancelled") return <BsXCircle />;
    else if (prop === "Todo") return <BsCircle />;
    else if (prop === "In progress")
      return <BsCircleHalf style={{ color: "gold" }} />;
    else if (prop === "Backlog")
      return <BsExclamationCircleFill style={{ color: "maroon" }} />;
    else if (prop === "Done") return <BsCheckCircle />;
    else if (prop === "0") return <BiDotsHorizontalRounded />;
    else if (prop === "1") return <BiSignal1 />;
    else if (prop === "2") return <BiSignal2 />;
    else if (prop === "3") return <BiSignal3 />;
    else if (prop === "4")
      return (
        <div
          style={{
            backgroundColor: "red",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "15px",
            height: "15px",
          }}
        >
          <FaExclamation style={{ color: "#fff", fontSize: "10px" }} />
        </div>
      );
  };
  

export default MyIconHeader