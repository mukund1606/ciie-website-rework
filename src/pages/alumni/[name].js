import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import alumniData from "@/data/alumniData.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loading from "@/components/Loading";
import Link from "next/link";

export default function AlumniData() {
  const router = useRouter();
  const { name } = router.query;
  const [memberData, setMemberData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    Object.keys(alumniData).forEach((alumni) => {
      if (alumniData[alumni].name === name) {
        setIsData(true);
        setMemberData(alumniData[alumni]);
        setIsLoaded(true);
      } else {
        setIsLoaded(true);
      }
    });
  });
  return (
    <>
      <Head>
        <title>
          {isData ? `${memberData.name} | CIIE | Alumni` : "CIIE | Alumni"}
        </title>
      </Head>
      {!isLoaded ? (
        <Loading />
      ) : isData ? (
        <>
          <Navbar />
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
                  className="object-cover rounded-[2.5rem] w-full md:w-4/6 lg:w-2/6 aspect-video"
                />
              </div>
              <div className="w-full p-4 mb-20 md:w-4/6">
                <h2>{memberData.name}</h2>
                <h4>{memberData.branch}</h4>
                <h4>({memberData.batch})</h4>
                <p className="p-3">{memberData.description}</p>
              </div>
            </div>
          </motion.div>
          <Footer />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
          <h1 className="p-2">Alumni Not Found</h1>
          <Link href="/alumni">
            <h3>Click Me To Redirect to Alumni Page</h3>
          </Link>
        </div>
      )}
    </>
  );
}
