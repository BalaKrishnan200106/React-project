import React from "react"; 

 const Contactcard =(props) => {

  const {id,name,email} = props.contact;

 
  return ( 

    
       <div className="item">
    <div className="contect">
      
      <div className="header">{name}</div>
      <div>{email}</div>

    </div>
    <br/>
    <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>

    </div>

  );
  }
  

 export default Contactcard;