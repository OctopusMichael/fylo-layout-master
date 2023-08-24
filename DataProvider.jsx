import React, { useContext, useState } from "react";

const emailContext = React.createContext();
const buttonContext = React.createContext();
const errContext = React.createContext();
const scrollContext = React.createContext();

export function useEmailcontext() {
  return useContext(emailContext);
}

export function useButtonContext() {
  return useContext(buttonContext);
}

export function useErrContext() {
  return useContext(errContext);
}

export function useScrollcontext() {
  return useContext(scrollContext);
}

export function DataProvider(props) {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.onscroll = () => {
    let y = window.scrollY;
    if (y >= 125) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail.test(email)) {
      setErr(false);
      console.log("email enviado exitosamente");
      form.reset();
      form2.reset();
      setEmail("");
    } else {
      setErr(true);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <scrollContext.Provider value={scroll}>
      <emailContext.Provider value={handleChange}>
        <buttonContext.Provider value={handleSubmit}>
          <errContext.Provider value={err}>
            {props.children}
          </errContext.Provider>
        </buttonContext.Provider>
      </emailContext.Provider>
    </scrollContext.Provider>
  );
}
