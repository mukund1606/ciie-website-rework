import Head from "next/head";
import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cards from "@/components/Cards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          CIIE - Center for Innovation, Incubation and Entrepreneurship
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <hr className="h-[2px] bg-lightTheme-black-50 dark:bg-gradient-to-tr to-lightTheme-primary from-lightTheme-secondary border-0 opacity-20" />
      {/* <About /> */}
      <hr className="h-[2px] bg-lightTheme-black-50 dark:bg-gradient-to-tr to-lightTheme-primary from-lightTheme-secondary border-0 opacity-20" />
      {/* <Cards /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
