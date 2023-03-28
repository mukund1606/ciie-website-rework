import { Html, Head, Main, NextScript } from "next/document";
import CIIELogo from "@/utils/CIIELogoNoText";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightTheme-white dark:bg-darkTheme-black scrollbar-thumb-lightTheme-black-50 scrollbar-thin scrollbar-track-lightTheme-black-25 dark:scrollbar-thumb-darkTheme-white-50 dark:scrollbar-track-darkTheme-white-25">
        <div className="overflow-x-hidden App">
          <div className="flex items-center justify-center">
            <CIIELogo className="h-[80%] fixed top-32 -z-10 dark:text-darkTheme-white-100 text-lightTheme-black-100 p-5 blur-[10px]" />
          </div>
          <div className="z-10 bg-lightTheme-white dark:bg-darkTheme-black bg-opacity-60 dark:bg-opacity-60 ">
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  );
}
