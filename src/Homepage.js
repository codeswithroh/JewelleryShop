import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Section from "./components/Section";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
    </>
  );
}

export default Homepage;
