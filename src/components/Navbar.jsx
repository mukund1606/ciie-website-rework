import { useEffect, useState } from "react";
import srmLogoWhite from "@/assets/SRM_Logo_white.png";
import srmLogoBlack from "@/assets/SRM_Logo_Black.png";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import CIIELogo from "@/utils/CIIELogoNoText";

function NavElement() {
  const navElementProperties = `flex text-center items-center text-lightTheme-black-75 dark:text-darkTheme-white-75 hover:text-lightTheme-black-100 dark:hover:text-darkTheme-white-100 ease-in duration-400 transition hover:scale-110`;
  const router = useRouter();
  const path = router.asPath.split("/")[1];
  return (
    <>
      <li
        className={`${navElementProperties} ${
          path === "" ? "font-extrabold" : "font-extralight"
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`${navElementProperties} ${
          path === "events" ? "font-extrabold" : "font-extralight"
        }`}
      >
        <Link href="/events">Events</Link>
      </li>
      <li
        className={`${navElementProperties} ${
          path === "team" ? "font-extrabold" : "font-extralight"
        }`}
      >
        <Link href="/team">Team</Link>
      </li>
      <li
        className={`${navElementProperties} ${
          path === "alumni" ? "font-extrabold" : "font-extralight"
        }`}
      >
        <Link href="/alumni">Alumni</Link>
      </li>
      <li
        className={`${navElementProperties} ${
          path === "contact-us" ? "font-extrabold" : "font-extralight"
        }`}
      >
        <Link href="/contact-us">Contact Us</Link>
      </li>
      <li
        className={`${navElementProperties} ${
          path === "about-us" ? "font-extrabold" : "font-extralight"
        }`}
      >
        <Link href="/about-us">
          <button className="primary">About Us</button>
        </Link>
      </li>
    </>
  );
}

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDarkMode(e.matches);
      });
  }, [isDarkMode]);

  return (
    <>
      <div className="h-36" />
      <nav className="fixed top-0 z-10 flex flex-col w-full min-w-full rounded-b-lg shadow bg-lightTheme-white dark:bg-darkTheme-black bg-opacity-60 dark:bg-opacity-60 dark:shadow-darkTheme-white-10 backdrop-blur">
        <motion.div
          className="h-2 w-full bg-gradient-to-r from-lightTheme-primary to-lightTheme-secondary z-[100]"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="flex items-center justify-around gap-2 p-1 py-0">
          <div className="image-box">
            <Link href="/">
              {isDarkMode ? (
                <img
                  src={srmLogoWhite.src}
                  alt="logo"
                  className="w-40 transition ease-in hover:scale-105 duration-400"
                />
              ) : (
                <img
                  src={srmLogoBlack.src}
                  alt="logo"
                  className="w-40 transition ease-in hover:scale-105 duration-400"
                />
              )}
            </Link>
          </div>
          <div className="items-center hidden nav md:flex">
            <ul className="flex gap-8 md:gap-5 lg:gap-8">
              <NavElement />
            </ul>
          </div>
          <div className="w-[8rem]">
            <Link href="/">
              <CIIELogo className="w-full p-5 transition ease-in dark:text-darkTheme-white-100 text-lightTheme-black-100 duration-400 hover:scale-110" />
            </Link>
          </div>
          <div className="flex items-center mobile-nav md:hidden">
            <button
              className="p-2 border-2 rounded-lg outline-none text-lightTheme-black-75 dark:text-darkTheme-white-75 border-lightTheme-black-50 dark:border-darkTheme-white-50"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox={isMobileNavOpen ? "0 0 20 20" : "0 0 24 24"}
                fill={isMobileNavOpen ? "currentColor" : "none"}
                stroke={isMobileNavOpen ? "" : "currentColor"}
                strokeWidth={isMobileNavOpen ? 1 : 2}
              >
                {isMobileNavOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div
              className="top-[6.5rem] left-0 w-full md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ul className="flex flex-col items-center gap-2 p-5 border-t-2 border-lightTheme-black-10 dark:border-darkTheme-white-10">
                <NavElement />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
