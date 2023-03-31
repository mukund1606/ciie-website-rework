import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div
        className="flex flex-col justify-center gap-5 p-6 md:p-10 lg:p-12 xl:p-16 2xl:p-20"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 4.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-center text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
          What is CIIE
        </h3>
        <p>
          The Centre for Innovation, Incubation and Entrepreneurship (CIIE) is a
          student organization at SRM University that is dedicated to fostering
          and nurturing innovative ideas among students. Our mission is to
          provide a platform for students to explore their entrepreneurial
          interests, learn from industry experts, and build innovative solutions
          to real-world problems. We aim to inspire and empower the next
          generation of entrepreneurs and leaders by promoting creativity,
          innovation, and collaboration. Join us to unleash your potential and
          make a positive impact on the world!
        </p>
      </motion.div>
    </>
  );
}
