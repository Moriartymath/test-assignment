"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export const metadata = {
  title: "error",
};

function Error({ error, reset }) {
  const router = useRouter();

  function handleReload() {
    startTransition(() => {
      reset();
      router.refresh();
    });
  }
  return (
    <div className="w-1/3 flex flex-col justify-center items-center gap-8 bg-white rounded-md p-6 border-2 border-black">
      <h1 className="text-1xl">Error: {error.message}</h1>
      <button
        onClick={() => handleReload()}
        className="py-2 px-4 border-2 border-gray-500 rounded-md"
      >
        try again
      </button>
    </div>
  );
}

export default Error;
