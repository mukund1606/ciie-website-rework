import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 p-5 text-center md:p-8">
        <h2 className="font-extrabold">
          <AnimatedText delay={0.3} text="Centre for " />
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
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 3.3 }}
          viewport={{ once: true }}
          className="w-4/6"
        >
          SRM University, Delhi-NCR, Sonepat
        </motion.h4>
        <br />
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4.2 }}
          viewport={{ once: true }}
          className="w-4/6"
        >
          Our vision is to help students unlock their full potential and prepare
          them for success in a rapidly changing world
        </motion.p>
      </div>
    </>
  );
}
