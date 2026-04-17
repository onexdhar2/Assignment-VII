import React from "react";

const Counter = ({ counter }) => {
  return (
    <div className="flex justify-around text-center mt-10">
      {counter.map((item) => (
        <ul className="shadow-md p-4 rounded-xl" key={item.id}>
          <li className="font-bold text-2xl">{item.value}</li>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Counter;
