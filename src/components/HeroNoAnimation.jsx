import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-5 p-5 text-center md:p-8"
      >
        <h2 className="font-extrabold">
          Centre for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
            Innovation
          </span>
          ,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
            Incubation
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
            Entrepreneurship
          </span>
        </h2>
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="w-4/6"
        >
          SRM University, Delhi-NCR, Sonepat
        </motion.h4>
        <br />
      </motion.div>
    </>
  );
}
