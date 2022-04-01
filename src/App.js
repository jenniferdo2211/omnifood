import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <main>
        <Hero />
      </main>
    </React.Fragment>
  );
}

export default App;
