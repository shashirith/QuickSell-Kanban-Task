import React from "react";
import { useState } from "react";
import "../styles/navbar.css";
import { VscSettings } from "react-icons/vsc";
import Menu from "./Menu";

const Navbar = ({ title, grpBy, handleGrpBy, handleOrdBy, ordBy }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dd-cnt dd-profile">
      <button className="btn" onClick={() => setOpen(!open)}>
        <VscSettings className="settingIcon"/>
        <span className="title">{title}</span>
      </button>
      {open && (
        <Menu ordBy={ordBy} grpBy={grpBy} handleGrpBy={handleGrpBy} handleOrdBy={handleOrdBy}/>
      )}
    </div>
  );
};

export default Navbar;
