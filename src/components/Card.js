import React from "react";
const Card = (props) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: " #fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "10px",
    borderRadius: " 8px",
  };
  const cardText ={
    textAlign: 'center',
    marginTop: '20px'
  }
  return (
    <div style={cardStyle}>
      <img alt="not found" style={{ maxWidth: "100vw", height: "auto" }} src={props.img}>
        
      </img>
      <div style={cardText}><h3>{props.title}</h3>
      <p>{props.msg}</p></div>
    </div>
  );
};
export default Card;
