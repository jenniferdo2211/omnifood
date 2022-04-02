import React from "react";
import AppHeader from "./components/AppHeader";
import FeaturedIn from "./components/FeaturedIn";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Meals from "./components/Meals";

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
