import { useRef, useState } from "react";

export const UseRefDemo = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current !== null) return; // already running
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4 text-center">
      <h2 className="text-2xl font-bold">⏱ Stopwatch</h2>

      <div className="text-5xl font-mono text-blue-600">{seconds}s</div>

      <div className="flex justify-center gap-3">
        <button
          onClick={start}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
