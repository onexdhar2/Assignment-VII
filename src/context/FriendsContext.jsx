import React, { Children, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = React.createContext();

const FriendsContext = ({ children }) => {
  const [storedFriends, setStoredFriends] = useState([]);
  const [storedText, setStoredText] = useState([]);

  const handleMarkAsContacted = (friendToAdd) => {
    console.log(friendToAdd, "friends");
    const isExistFriend = storedFriends.find(
      (friend) => friend.id === friendToAdd.id,
    );
    if (isExistFriend) {
      toast.error("Already Marked as Contacted");
    } else {
      setStoredFriends([...storedFriends, friendToAdd]);
      toast.success(`${friendToAdd.name} Marked as Contacted`);
    }
  };

  const handleMarkAsTexted = (friendToAdd) => {
  const isExistFriend = storedText.find(
    (friend) => friend.id === friendToAdd.id
  );

  if (isExistFriend) {
    toast.error("Already Marked as Texted");
  } else {
    setStoredText([...storedText, friendToAdd]);
    toast.success(`${friendToAdd.name} Marked as Texted`);
  }
};

  const data = {
    storedFriends,
    setStoredFriends,
    handleMarkAsContacted,
    storedText,
    setStoredText,
    handleMarkAsTexted,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendsContext;
