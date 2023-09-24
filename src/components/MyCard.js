import React, { useState } from "react";
import MyIconCard from "./MyIconCard";
import  {shortName,getRandomColor} from '../utilities/UserImage';
import "../styles/card.css";


const MyCard = (prop) => {
  const {data} = prop;
  const [g, setG] = useState(prop.grpBy);
  
  return (
    <div className="mcard">
      <div className="innercard" >
        <div className="cat">{data.id}</div>
        {g !== "userId" && <div className="photo" style={{ backgroundColor: getRandomColor(), position: "relative" }}>
          {shortName(data.user.name)}
          <div style={{backgroundColor: data.user.available ? "#00FF00" :"#989898"}}
           className="userstatus" />
          </div>
        }
      </div>

      <div className="cardtitle">
        {g !== "status" ? (
          <div className="cicon">
            <MyIconCard prop={data.status} />
          </div>
        ) : null
        }
        <span style={{fontFamily: "Poppins",fontWeight:"550", fontSize: "12px"}} className="text">{data.title}</span>
      </div>
      <div className="bot">
        {g !== "priority" ? (
          <div className="cicon">
            <MyIconCard prop={data.priority} />
          </div>
        ) : null}
        <div className="bottom">
          <div className="circle"></div>
          <div style={{fontFamily: "Poppins",fontWeight:"300", fontSize: "12px"}} className="tag">{data.tag[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
