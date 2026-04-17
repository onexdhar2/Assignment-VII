import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendsContext";

const Timeline = () => {
  const { storedFriends } = useContext(FriendContext);
  console.log(storedFriends, "context");
  return <div>Timeline</div>;
};

export default Timeline;
