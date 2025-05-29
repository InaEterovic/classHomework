import React, { useState } from "react";
import LiftStateChild from "./LiftStateChild";

const LiftStateParent: React.FC = () => {
  const [counters, setCounters] = useState([0, 0, 0]);

  const increment = (index: number) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  const decrement = (index: number) => {
    const newCounters = [...counters];
    newCounters[index]--;
    setCounters(newCounters);
  };

  const resetAll = () => {
    setCounters([0, 0, 0]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-bold">Lifting State Example</h1>
      <div className="flex gap-4">
        {counters.map((count, index) => (
          <LiftStateChild
            key={index}
            value={count}
            onIncrement={() => increment(index)}
            onDecrement={() => decrement(index)}
          />
        ))}
      </div>
      <button
        onClick={resetAll}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Reset All
      </button>
    </div>
  );
};

export default LiftStateParent;
