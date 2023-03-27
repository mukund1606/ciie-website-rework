import { motion } from "framer-motion";

export default function Collage({ className, images, ...props }) {
  return (
    <div className={`${className} grid grid-cols-3 gap-2 md:h-[18rem] `}>
      <div className="w-full col-span-2">
        <motion.img
          src={images[0].directLink}
          className="object-cover w-full rounded-md h-[8.5rem]"
          loading="lazy"
        />
      </div>
      <div className="w-full col-span-1">
        <motion.img
          src={images[1].directLink}
          className="object-cover w-full h-[8.5rem] rounded-md"
          loading="lazy"
        />
      </div>
      <div className="w-full col-span-1">
        <motion.img
          src={images[2].directLink}
          className="object-cover w-full h-[8.5rem] rounded-md"
          loading="lazy"
        />
      </div>
      <div className="w-full col-span-2">
        <motion.img
          src={images[3].directLink}
          className="object-cover w-full h-[8.5rem] rounded-md"
          loading="lazy"
        />
      </div>
    </div>
  );
}
