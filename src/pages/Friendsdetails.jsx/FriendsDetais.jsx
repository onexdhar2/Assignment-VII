// import { use } from "react";
import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import FriendsContext, { FriendContext } from "../../context/FriendsContext";

const FriendsPromies = fetch("/AllFriendsData.json").then((res) => res.json());

const FriendsDetais = () => {
  const { id } = useParams();
  // console.log(id);

  // const friends = use(FriendsPromies);
  const friends = useLoaderData();
  // console.log(friends);
  const expectedFriend = friends.find((friend) => friend.id === parseInt(id));
  // console.log(expectedFriend);

  const { handleMarkAsContacted, handleMarkAsTexted } =
    useContext(FriendContext);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src={expectedFriend?.picture} alt={expectedFriend?.picture} />
        <h2 className="font-semibold text-2xl text-[#244D3F]">
          {expectedFriend?.name}
        </h2>
        <span className="bg-red-500 text-white py-1 px-3 rounded-full">
          {expectedFriend?.status}
        </span>
        <p className="">family</p>
        <p>{expectedFriend?.tags?.join(", ")}</p>
        <p>{expectedFriend?.email}</p>
        <div>Snooze 2 weeks</div>
        <div>Archive</div>
        <div>Delete</div>
      </div>
      <div>
        <div className="flex">
          <div>
            <p>{expectedFriend?.days_since_contact}</p>
            <div>Days Since Contact</div>
          </div>
          <div>
            <div>{expectedFriend?.goal}</div>
            <div>Goal (Days)</div>
          </div>
          <div>
            <div>{expectedFriend?.next_due_date}</div>
            <div>Next Due</div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div>Relationship Goal</div>
            <div>Edit</div>
          </div>
          <div>Connect every 30 days</div>
        </div>
        <div>Quick Check-In</div>
        <div className="flex">
          <button
            className="btn btn-active"
            onClick={() => {
              handleMarkAsContacted(expectedFriend);
            }}
          >
            Call
          </button>
          <button
            className="btn btn-active"
            onClick={() => {
              handleMarkAsTexted(expectedFriend);
            }}
          >
            Text
          </button>
          <button className="btn btn-active">Video</button>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetais;
