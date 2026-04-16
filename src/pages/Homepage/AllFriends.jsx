import React, { use } from "react";

const AllFriendsData = fetch("/AllFriendsData.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(AllFriendsData);
  console.log(friends);
  return (
    <div className="grid grid-cols-4 mt-10">
      {friends.map((friend) => (
        <div key={friend.id} className="border p-4 rounded-lg mb-4">
          {/* <img src={friend.avatar} alt={friend.name} className="w-16 h-16 rounded-full" /> */}
          <h3 className="text-xl font-bold">{friend.name}</h3>
          <p>{friend.days_since_contact}</p>
          <p>{friend.tags}</p>
          <p>{friend.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AllFriends;
