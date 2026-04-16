import React, { use } from "react";
import { Link } from "react-router";

const AllFriendsData = fetch("/AllFriendsData.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(AllFriendsData);
  return (
    <div className="grid grid-cols-4 mt-10">
      {friends.map((friend) => (
        <Link
          key={friend.id}
          to={`/friendsDetails/${friend.id}`}
          className="border p-4 rounded-lg mb-4"
        >
          {/* <img src={friend.avatar} alt={friend.name} className="w-16 h-16 rounded-full" /> */}
          <h3 className="text-xl font-bold">{friend.name}</h3>
          <p>{friend.days_since_contact}</p>
          <p>{friend.tags}</p>
          <p>{friend.status}</p>
        </Link>
      ))}
    </div>
  );
};

export default AllFriends;
