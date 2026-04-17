import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendsContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedCall from "../../components/ListedFriend/ListedCall";
import ListedText from "../../components/ListedFriend/ListedText";
import ListedVideo from "../../components/ListedFriend/ListedVideo";
const Timeline = () => {
  const { storedFriends, storedText, storedVideo } = useContext(FriendContext);
  console.log(storedFriends, "context");
  console.log(storedText, "context");
  console.log(storedVideo, "context");
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Call</Tab>
          <Tab>Text</Tab>
          <Tab>Video</Tab>
        </TabList>

        <TabPanel>
          <ListedCall/>
        </TabPanel>
        <TabPanel>
          <ListedText/>
        </TabPanel>
        <TabPanel>
          <ListedVideo/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Timeline;
