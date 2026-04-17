import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendsContext";

const ListedText = () => {
  const { storedText } = useContext(FriendContext);
  return (
    <div className="p-10">
      {storedText.map((friend) => (
        <div>
          <div className="flex items-center">
            <img
              className="rounded-full w-20 h-20"
              src={friend.picture}
              alt={friend.name}
            />
            <div className="ml-5"></div>
            <h2 className="font-semibold text-xl text-[#244D3F]">
              {friend.name}
            </h2>
            <p className="text-gray-600 pl-10">{friend.next_due_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListedText;
