import React, { useContext, useState } from "react";

const emailContext = React.createContext();
const buttonContext = React.createContext();
const errContext = React.createContext();



export function useEmailcontext() {
  return useContext(emailContext);
}

export function useButtonContext() {
  return useContext(buttonContext);
}

export function useErrContext() {
  return useContext(errContext);
 }

export function DataProvider(props) {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail.test(email)) {
      setErr(false);
      console.log("email enviado exitosamente");
      setEmail("");
      form.reset()
    } else {
      setErr(true);
    }
  };
  

  

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

 
  return (
  
      <emailContext.Provider value={handleChange }>
        <buttonContext.Provider value={handleSubmit}>
          <errContext.Provider value={err}>
            {props.children}
          </errContext.Provider>
        </buttonContext.Provider>
      </emailContext.Provider>
    
  );
}
