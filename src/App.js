import React from "react";
import AppHeader from "./components/AppHeader";
import FeaturedIn from "./components/FeaturedIn";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Meals from "./components/Meals";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
      </main>
    </React.Fragment>
  );
};

export default App;
