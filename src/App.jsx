import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import ContentB from "./components/ContentB";
import Footer from "./components/Footer";
import "./style/App.css";
import { DataProvider } from "../DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <header>
          <Navbar />
          <Hero />
        </header>
        <main>
          <Content />
          <ContentB />
        </main>
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
