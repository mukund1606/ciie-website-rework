import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroNoAnimation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="h-[2px] bg-lightTheme-black-50 dark:bg-gradient-to-tr to-lightTheme-primary from-lightTheme-secondary border-0 opacity-20" />
      <hr className="h-[2px] bg-lightTheme-black-50 dark:bg-gradient-to-tr to-lightTheme-primary from-lightTheme-secondary border-0 opacity-20" />
      <Footer />
    </>
  );
}
