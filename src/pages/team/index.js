import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroNoAnimation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import teamData from "@/data/teamData.json";
import Link from "next/link";
import Head from "next/head";

export default function Team() {
  return (
    <>
      <Head>
        <title>Team | CIIE</title>
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-5 p-5 text-center md:p-8"
      >
        <div className="p-5">
          <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-lightTheme-primary to-lightTheme-secondary">
            Presenting You The Team Members of CIIE
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-20">
          {Object.keys(teamData).map((batch) => {
            return (
              <div
                className="flex flex-col items-center justify-center w-4/5 gap-5 p-5 bg-opacity-50 border rounded-[3rem] bg-lightTheme-black-25 dark:bg-darkTheme-white-25 dark:bg-opacity-50 drop-shadow-lg"
                key={batch}
              >
                <div>
                  <h3>{batch}</h3>
                </div>
                <div
                  key={batch}
                  className="flex flex-wrap justify-center gap-8"
                >
                  {teamData[batch].map((member) => {
                    return (
                      <Link
                        href={`/team/${member.name}`}
                        key={member.name}
                        className="flex flex-col items-center justify-center gap-5 p-5 text-center cursor-pointer hover:scale-110 md:p-8"
                      >
                        <div
                          style={{
                            backgroundImage: `url(${member.photoUrl})`,
                          }}
                          className="bg-center bg-cover rounded-full w-80 h-80"
                        ></div>
                        <h4>{member.name}</h4>
                        <h5>{member.course}</h5>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <hr className="h-[2px] bg-lightTheme-black-50 dark:bg-gradient-to-tr to-lightTheme-primary from-lightTheme-secondary border-0 opacity-20" />
      <Footer />
    </>
  );
}
