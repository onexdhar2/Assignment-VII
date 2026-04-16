// import { use } from "react";
import { useLoaderData, useParams } from "react-router";

const FriendsPromies = fetch("/AllFriendsData.json").then((res) => res.json());

const FriendsDetais = () => {
  const { id } = useParams();
  console.log(id);

  // const friends = use(FriendsPromies);
  const friends = useLoaderData();
  console.log(friends);
  const expectedFriend = friends.find((friend) => friend.id === parseInt(id));
  console.log(expectedFriend);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src="" alt="" />
        <div>Emma Wilson</div>
        <div>Overdue</div>
        <div>family</div>
        <div>"Former colleague, great mentor"</div>
        <div>Preferred: email</div>
        <div>Snooze 2 weeks</div>
        <div>Archive</div>
        <div>Delete</div>
      </div>
      <div>
        <div className="flex">
          <div>
            <div>62</div>
            <div>Days Since Contact</div>
          </div>
          <div>
            <div>30</div>
            <div>Goal (Days)</div>
          </div>
          <div>
            <div>62</div>
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
          <div>Call</div>
          <div>Text</div>
          <div>Video</div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetais;
