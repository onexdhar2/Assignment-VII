import React, { Children, useState } from "react";

export const FriendContext = React.createContext();

const FriendsContext = ({ children }) => {


const [storedFriends, setStoredFriends] = useState([]);

  const handleMarkAsContacted = (friendToAdd) => {
    console.log(friendToAdd, "friends");
    const isExistFriend = storedFriends.find(
      (friend) => friend.id === friendToAdd.id,
    );
    if (isExistFriend) {
      alert("Already Marked as Contacted");
    } else {
      setStoredFriends([...storedFriends, friendToAdd]);
      alert(`${friendToAdd.name} Marked as Contacted`);
    }
  };



  const data={
    storedFriends,
    setStoredFriends,
    handleMarkAsContacted
  }
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendsContext;
