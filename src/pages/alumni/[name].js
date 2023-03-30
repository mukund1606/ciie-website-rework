import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import alumniData from "@/data/alumniData.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AlumniData() {
  const { name } = useRouter().query;
  const [memberData, setMemberData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Object.keys(alumniData).forEach((alumni) => {
      if (alumniData[alumni].name === name) {
        setMemberData(alumniData[alumni]);
        setIsLoaded(true);
      }
    });
  });
  return (
    <>
      <Navbar />
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
                className="object-cover rounded-[2.5rem] w-[45rem] h-[25rem]"
              />
            </div>
            <div className="w-4/6 mb-20">
              <h2>{memberData.name}</h2>
              <h4>{memberData.branch}</h4>
              <h4>({memberData.batch})</h4>
              <p className="p-3">{memberData.description}</p>
            </div>
          </div>
        </motion.div>
      )}
      <Footer />
    </>
  );
}
