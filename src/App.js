import React from "react";
import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </React.Fragment>
  );
};

export default App;
