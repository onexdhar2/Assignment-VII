// import { use } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import FriendsContext, { FriendContext } from "../../context/FriendsContext";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaArchive } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const FriendsPromies = fetch("/AllFriendsData.json").then((res) => res.json());

const FriendsDetais = () => {
  const { id } = useParams();
  // console.log(id);

  // const friends = use(FriendsPromies);
  const friends = useLoaderData();
  // console.log(friends);
  const expectedFriend = friends.find((friend) => friend.id === parseInt(id));
  // console.log(expectedFriend);

  const { handleMarkAsContacted, handleMarkAsTexted, handleMarkAsVideo } =
    useContext(FriendContext);

  return (
    <div className="flex justify-center items-center pt-10 pb-50 gap-20">
      <div>
        <div className="shadow-lg p-10">
          <img
            className="rounded-full"
            src={expectedFriend?.picture}
            alt={expectedFriend?.picture}
          />
          <h2 className="font-semibold text-2xl text-[#244D3F]">
            {expectedFriend?.name}
          </h2>
          <span className="bg-red-500 text-white py-1 px-3 rounded-full uppercase text-sm mt-2 inline-block">
            {expectedFriend?.status}
          </span>
          <p className=" uppercase text-[#244D3F] bg-[#CBFADB] w-20 text-center mt-2 rounded-full mb-2">
            family
          </p>
          <p className="uppercase">{expectedFriend?.tags?.join(", ")}</p>
          <p>{expectedFriend?.email}</p>
        </div>
        <div className="p-3 text-center shadow-xl mt-2">
          <div className="flex text-center justify-center">
            <MdOutlineNotificationsNone className="text-2xl text-[#244D3F]" />
            <p className=" mb-5 font-bold">2 weeks</p>
          </div>
          <div className="flex text-center justify-center gap-1">
            <FaArchive className="text-xl text-[#244D3F]" />
            <div className=" mb-5 font-bold">Archive</div>
          </div>
          <div className="flex text-center justify-center gap-1">
            <MdAutoDelete className="text-2xl text-[#244D3F]" />
            <div className=" mb-5 font-bold">Delete</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-5 mb-10">
          <div className=" text-center shadow-lg p-5">
            <p className="font-semibold text-2xl">
              {expectedFriend?.days_since_contact}
            </p>
            <p className="text-[#64748B]">Days Since Contact</p>
          </div>
          <div className="text-center  shadow-lg p-5">
            <p className="font-semibold text-2xl">{expectedFriend?.goal}</p>
            <p className="text-[#64748B]">Goal (Days)</p>
          </div>
          <div className="text-center shadow-lg  p-5">
            <p className="font-semibold text-2xl">
              {expectedFriend?.next_due_date}
            </p>
            <p className="text-[#64748B]">Next Due</p>
          </div>
        </div>
        <div className=" shadow-lg p-5 mb-20">
          <div className="flex justify-between mb-5">
            <p className="text-[#244D3F] text-[20px]">Relationship Goal</p>
            <button className="btn btn-outline">Edit</button>
          </div>
          <p>Connect every 30 days</p>
        </div>
        <div className="shadow-lg p-5">
          <p className="text-[#244D3F] text-[20px] mb-5">Quick Check-In</p>
          <div className="flex gap-5">
            <button
              className="btn btn-active"
              onClick={() => {
                handleMarkAsContacted(expectedFriend);
              }}
            >
              <IoCall />
              Call
            </button>
            <button
              className="btn btn-active"
              onClick={() => {
                handleMarkAsTexted(expectedFriend);
              }}
            >
              <IoMdText /> Text
            </button>
            <button
              className="btn btn-active"
              onClick={() => {
                handleMarkAsVideo(expectedFriend);
              }}
            >
              <FaVideo />
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetais;
