import { COLORS } from "../constants";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhatWeAutomate from "../components/WhatWeAutomate";
import Process from "../components/Process";
import Workshops from "../components/Workshops";
import About from "../components/About";
import AuditCTA from "../components/AuditCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Stats />
      <WhatWeAutomate />
      <Process />
      {/* <Workshops /> */}
      <About />
      <AuditCTA />
      <Footer />
    </div>
  );
}
