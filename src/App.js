import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <main>
        <Hero />
      </main>
    </React.Fragment>
  );
};

export default App;
