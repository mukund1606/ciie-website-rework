import { motion } from "framer-motion";
import testimonalsData from "../data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="w-full py-8 mt-2">
      <div className="flex flex-col items-center p-5 mx-auto md:p-10">
        <h1 className="p-2 text-4xl font-bold leading-none text-center md:text-5xl">
          What our customers are saying about us
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 lg:justify-center">
        {testimonalsData.map((data, i) => (
          <motion.div
            key={i}
            className="flex flex-col lg:w-[30%] mx-6 my-6 duration-500 ease-in-out shadow-lg hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-12 bg-gray-200 rounded-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-[#09AEB8]"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                {data.testimonial}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-[#09AEB8]"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#0A87C2] bg-gray-700 text-slate-100">
              <img
                src={data.image}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
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
