import React from "react";
import Banner from "../../components/Banner";
import Counter from "../../components/Counter";
import AllFriends from "./AllFriends";

const Homepage = () => {
  const counter = [
    {
      id: 1,
      name: "Total Friends",
      value: 10,
    },
    {
      id: 2,
      name: "On Track",
      value: 3,
    },
    {
      id: 3,
      name: "Need Attention",
      value: 6,
    },
    {
      id: 4,
      name: "Need Attention",
      value: 12,
    },
  ];
  return (
    <div>
      <Banner />
      <Counter counter={counter} />
      <AllFriends/>
    </div>
  );
};

export default Homepage;
