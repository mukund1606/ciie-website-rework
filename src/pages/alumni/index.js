import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import alumniData from "@/data/alumniData.json";
import Link from "next/link";
import Head from "next/head";

export default function Alumni() {
  return (
    <>
      <Head>
        <title>Alumni | CIIE</title>
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-5 p-2 text-center md:p-8"
      >
        <div className="p-5">
          <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-lightTheme-primary to-lightTheme-secondary">
            Featuring CIIE Alumni
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-10">
          {Object.keys(alumniData).map((alumni) => {
            const data = alumniData[alumni];
            return (
              <Link
                href={`/alumni/${data.name}`}
                className="flex flex-col items-center justify-center w-4/5 gap-5 p-5 py-8 lg:py-16 bg-opacity-50 border rounded-[3rem] bg-lightTheme-black-25 dark:bg-darkTheme-white-25 dark:bg-opacity-50 drop-shadow-lg hover:scale-105 duration-300 ease-in text-center cursor-pointer"
                key={data.name}
              >
                <img
                  src={data.photoUrl}
                  alt={data.name}
                  className="object-cover rounded-[1.5rem] w-full md:w-4/6 lg:w-3/6 aspect-video"
                />
                <div className="flex flex-col gap-2">
                  <h4>{data.name}</h4>
                  <h5>{data.branch}</h5>
                  <h5>({data.batch})</h5>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
      <hr className="h-[2px] bg-lightTheme-black-50 dark:bg-gradient-to-tr to-lightTheme-primary from-lightTheme-secondary border-0 opacity-20 my-8" />
      <Footer />
    </>
  );
}
