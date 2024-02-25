import { useState } from "react";
import { SingleFriend } from "./SingleFriend";
import { NewFriendForm } from "./NewFriendForm";
import { BillSplit } from "./BillSplit";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const App = function () {
  const [selectFriend, setSelectFriend] = useState("");
  const [friends, setFriends] = useState(initialFriends);
  const handleSelectFriend = function (index) {
    setSelectFriend((previousSelect) => {
      return previousSelect === index ? " " : index;
    });
  };

  return (
    <div className="main">
      <div>
        {friends.map((element, index) => {
          return (
            <div>
              <div className="friends">
                <SingleFriend
                  currentFriend={element}
                  selectFriend={selectFriend === index}
                  handleSelectFriend={handleSelectFriend}
                  index={index}
                  key={element.id}
                />
              </div>
              <BillSplit
                selectFriend={selectFriend === index}
                setSelectFriend={setSelectFriend}
                currentFriend={element}
                friends={friends}
                setFriends={setFriends}
                key={element.id}
              />
            </div>
          );
        })}
      </div>
      <NewFriendForm friends={friends} setFriends={setFriends} />
    </div>
  );
};
export default App;
