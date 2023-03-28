import { Html, Head, Main, NextScript } from "next/document";
import CIIELogo from "@/utils/CIIELogo";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightTheme-white dark:bg-darkTheme-black scrollbar-thumb-lightTheme-black-50 scrollbar-thin scrollbar-track-lightTheme-black-25 dark:scrollbar-thumb-darkTheme-white-50 dark:scrollbar-track-darkTheme-white-25">
        <div className="overflow-x-hidden App">
          <CIIELogo className="h-[100vh] fixed top-0 -z-10 dark:text-darkTheme-white-100 text-lightTheme-black-100 p-5 w-full blur-[10px]" />
          <div className="z-10 bg-lightTheme-white dark:bg-darkTheme-black bg-opacity-60 dark:bg-opacity-60 ">
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  );
}
