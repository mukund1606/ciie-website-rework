import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Navbar />
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-[100vh] gap-5 bg-opacity-80 dark:bg-opacity-80 bg-lightTheme-white dark:bg-darkTheme-black">
        <h1 className="p-2 text-6xl font-bold">404 Page Not Found</h1>
        <Link href="/">
          <h1 className="p-2 text-3xl font-bold">
            Click Me To Go To Home Page
          </h1>
        </Link>
      </div>
    </>
  );
}
