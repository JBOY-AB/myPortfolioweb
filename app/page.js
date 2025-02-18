"use client";

import { useState, useEffect } from "react";
import Header from "../components/header.jsx";
import About from "@/components/about.jsx";
import Services from "@/components/services.jsx";
import Portfolio from "@/components/portfolio.jsx";
import Contact from "@/components/contact.jsx";
import Loading from "@/components/Loading.jsx";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </>
      )}
    </main>
  );
}
