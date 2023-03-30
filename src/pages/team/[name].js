import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroNoAnimation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import teamData from "@/data/teamData.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function TeamMember() {
  const { name } = useRouter().query;
  const [memberData, setMemberData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    Object.keys(teamData).forEach((batch) => {
      teamData[batch].forEach((member) => {
        if (member.name === name) {
          setMemberData(member);
          setIsLoaded(true);
        }
      });
    });
  });
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <hr className="h-[2px] bg-lightTheme-black-50 dark:bg-gradient-to-tr to-lightTheme-primary from-lightTheme-secondary border-0 opacity-20" /> */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-5 text-center"
        >
          <div className="flex flex-col items-center justify-center w-full gap-5">
            <div className="flex flex-col items-center justify-center w-full gap-5 p-8 bg-opacity-50 border-y bg-lightTheme-black-25 dark:bg-darkTheme-white-25 dark:bg-opacity-50 drop-shadow-lg">
              <img
                src={memberData.photoUrl}
                alt={memberData.name}
                className="object-cover rounded-full w-96 h-96"
              />
            </div>
            <div className="w-4/6 mb-20">
              <h2>{memberData.name}</h2>
              <h4>{memberData.course}</h4>
              <h4>{memberData.batch}</h4>
              <p>{memberData.description}</p>
            </div>
          </div>
        </motion.div>
      )}
      <Footer />
    </>
  );
}
