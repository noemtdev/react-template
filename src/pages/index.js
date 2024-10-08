import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
};

export default Index;
