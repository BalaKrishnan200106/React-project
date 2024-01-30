import React, { useState} from "react";
import './App.css';
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
// import Contactcard from "./Components/Contactcard";


function App() {

  const[contacts , setcontacts]= useState([]);

  const addContactHandler = (contact) => {

console.log(contact);

setcontacts([...contacts , contact]);

  }
  return(
    
    <div className="ui container">
       <Header/>
    <AddContact addContactHandler ={addContactHandler}/>

    <ContactList contacts={contacts}/>
     
    </div>
    );

}

export default App;
