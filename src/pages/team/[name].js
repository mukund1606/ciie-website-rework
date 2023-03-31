import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import teamData from "@/data/teamData.json";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Loading from "@/components/Loading";

export default function TeamMember() {
  const router = useRouter();
  const { name } = router.query;
  const [memberData, setMemberData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    Object.keys(teamData).forEach((batch) => {
      teamData[batch].forEach((member) => {
        if (member.name === name) {
          setMemberData(member);
          setIsData(true);
          setIsLoaded(true);
        }
      });
    });
    setIsLoaded(true);
  });
  return (
    <>
      <Head>
        <title>{isData ? memberData.name : "Loading..."} | CIIE</title>
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
                <div
                  style={{
                    backgroundImage: `url(${memberData.photoUrl})`,
                  }}
                  className="bg-center bg-cover rounded-full w-96 h-96"
                ></div>
              </div>
              <div className="w-4/6 mb-20">
                <h2>{memberData.name}</h2>
                <h4>{memberData.course}</h4>
                <h4>{memberData.batch}</h4>
                <p>{memberData.description}</p>
              </div>
            </div>
          </motion.div>
          <Footer />
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
            <h1 className="p-2">Team Member Not Found</h1>
            <Link href="/team">
              <h3>Click Me To Redirect to Team Page</h3>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
