import React from "react";
import "../styles/menu.css"

const Menu = ({ grpBy, handleGrpBy, handleOrdBy, ordBy }) => {
  return (
    <div className="menuBar">
      <div className="menuBar-cnt" >
        <label className="label" for="grps">Grouping</label>
        <select name="grpBy" id="grps" value={grpBy} onChange={handleGrpBy}>
          { ordBy!=="priority" ? <option className="opn"  value="priority">Priority</option> 
          
          : <></>}
          <option className="opn" value="userId"> UserId</option>
          <option className="opn" value="status">Status</option>
        </select>
      </div>
      <div className="menuBar-cnt">
        <label className="label" for="order">Order By</label>
        <select id="order" name="ordBy" value={ordBy} onChange={handleOrdBy}>
        { grpBy!=="priority" ? 
          <option className="opn" value="priority">Priority</option> : <></>
        }
          <option className="opn" value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Menu;
