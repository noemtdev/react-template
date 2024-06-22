import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />

      <main className="container mx-auto px-8 py-12 flex-grow">
        <section className="text-center">
          <h2 className="text-5xl bolded mb-8">
            404, page not found.
          </h2>
          <a href="/" className="hover:underline text-2xl">
            Return to start
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
