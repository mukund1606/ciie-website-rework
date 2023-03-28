import { useEffect, useState } from "react";

export default function Collage({ className, images }) {
  const [randomNum1, setRandomNum1] = useState(0);
  const [randomNum2, setRandomNum2] = useState(1);
  const [randomNum3, setRandomNum3] = useState(2);
  const [randomNum4, setRandomNum4] = useState(3);
  const totalImages = images.length;
  useEffect(() => {
    const findRandomNum = () => {
      setRandomNum1(Math.floor(Math.random() * totalImages));
      setRandomNum2(Math.floor(Math.random() * totalImages));
      setRandomNum3(Math.floor(Math.random() * totalImages));
      setRandomNum4(Math.floor(Math.random() * totalImages));
    };
    setInterval(findRandomNum, 5000);
    return () => {
      clearInterval(findRandomNum);
    };
  }, []);
  return (
    <div className={`${className} grid grid-cols-3 gap-2 md:h-[18rem] `}>
      <div className="w-full col-span-2">
        <div
          style={{
            backgroundImage: `url(${images[randomNum1].srcLink})`,
          }}
          className="w-full duration-500 bg-center  h-[8.5rem] bg-cover aspect-video rounded-2xl"
        ></div>
      </div>
      <div className="w-full col-span-1">
        <div
          style={{
            backgroundImage: `url(${images[randomNum2].srcLink})`,
          }}
          className="w-full duration-500 bg-center  h-[8.5rem] bg-cover aspect-video rounded-2xl"
        ></div>
      </div>
      <div className="w-full col-span-1">
        <div
          style={{
            backgroundImage: `url(${images[randomNum3].srcLink})`,
          }}
          className="w-full duration-500 bg-center  h-[8.5rem] bg-cover aspect-video rounded-2xl"
        ></div>
      </div>
      <div className="w-full col-span-2">
        <div
          style={{
            backgroundImage: `url(${images[randomNum4].srcLink})`,
          }}
          className="w-full duration-500 bg-center  h-[8.5rem] bg-cover aspect-video rounded-2xl"
        ></div>
      </div>
    </div>
  );
}
