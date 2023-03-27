import { motion } from "framer-motion";
import CIIELogo from "../utils/CIIELogo";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-5 p-5 md:p-8">
        <h2 className="font-extrabold">
          <AnimatedText delay={0.3} text="Centre of " />
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
            <AnimatedText delay={0.8} text="Innovation" />
          </span>
          <AnimatedText delay={1.3} text=" , " />
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
            <AnimatedText delay={1.8} text="Incubation " />
          </span>
          <AnimatedText delay={2.3} text=" and " />
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
            <AnimatedText delay={2.8} text="Entrepreneurship" />
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 3.3 }}
          viewport={{ once: true }}
          className="w-4/6"
        >
          Our vision is to help students unlock their full potential and prepare
          them for success in a rapidly changing world
        </motion.p>
        {/* <div className="md:w-4/5 flex flex-col lg:flex-row justify-center items-center p-10">
          <div className="flex gap-5 flex-col text-center lg:text-left text-[#0047ab] dark:text-slate-200">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              SRM University, Delhi-NCR, Sonepat
            </h2>
          </div>
        </div> */}
      </div>
    </>
  );
}
