import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full gap-5">
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
