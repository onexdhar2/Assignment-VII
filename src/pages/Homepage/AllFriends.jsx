import React, { use } from "react";
import { Link } from "react-router";

const AllFriendsData = fetch("/AllFriendsData.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(AllFriendsData);
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mt-10">Your Friends</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 items-center justify-items-center">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            to={`/friendsDetails/${friend.id}`}
            className="p-4 w-60 text-center rounded-lg mb-4 flex flex-col items-center shadow-xl mt-10"
          >
            <img src={friend.picture} className="w-16 h-16 rounded-full" />
            <h3 className="text-xl font-bold">{friend.name}</h3>
            <p className="uppercase text-[#64748B]">
              {friend.days_since_contact}
            </p>
            <p className="uppercase text-[#244D3F] bg-[#CBFADB] p-2 mt-5 rounded-2xl">
              {friend.tags?.join(", ")}
            </p>
            <p className="uppercase bg-[#EFAD44] p-2 text-white mt-5 rounded-2xl">{friend.status}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
