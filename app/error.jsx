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
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <h1>Error: {error.message}</h1>
      <button onClick={() => handleReload()}>try again</button>
    </div>
  );
}

export default Error;
