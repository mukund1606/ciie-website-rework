import Navbar from "@/components/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
        <h1 className="p-2 text-6xl font-bold">Loading...</h1>
      </div>
    </>
  );
}
