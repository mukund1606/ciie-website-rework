import { motion } from "framer-motion";
import testimonalsData from "../data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center w-full py-5">
      <div className="flex flex-col items-center px-5 mx-auto md:p-10">
        <h3 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
          What our customers are saying about us
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 p-5">
        {testimonalsData.map((data, i) => (
          <motion.div
            key={i}
            className="flex flex-col duration-300 lg:w-[30%] md:w-[40%] w-full ease-in-out shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-12 rounded-lg bg-lightTheme-black-5 dark:bg-darkTheme-white-5 sm:px-8 md:px-12">
              <p className="relative px-6 py-1 text-lg italic text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
              className="w-8 h-8 text-lightTheme-secondary"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                {data.testimonial}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-lightTheme-secondary"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gradient-to-r from-lightTheme-primary via-lightTheme-secondary to-lightTheme-primary">
              <img
                src={data.image}
                alt=""
                className="w-24 h-24 mb-2 -mt-16 bg-center bg-cover rounded-full"
              />
              <p className="text-xl font-semibold leading-tight text-lightTheme-black-10 dark:text-darkTheme-white-100">
                {data.name}
              </p>
              <p className="text-sm uppercase text-lightTheme-black-10 dark:text-darkTheme-white-100">
                {data.position}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
