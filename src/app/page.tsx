"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36">
      <h1 className="mb-4 text-xxl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        {count}
      </h1>
      <div className="grid grid-cols-2 gap-40">
        <button
          className="text-9xl bg-red-500 hover:bg-blue-700 text-white font-bold rounded"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          className="text-9xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </main>
  );
}
