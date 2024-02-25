import { useState } from "react";

export const NewFriendForm = function ({ friends, setFriends }) {
  const handleSubmit = function (event) {
    event.preventDefault();
  };
  const [friendName, setFriendName] = useState("");
  let URL = "https://i.pravatar.cc/48";
  return (
    <div className="newFriendForm">
      <form onSubmit={handleSubmit}>
        <div className="inputForm">
          <h3>🤼‍♂️ Friend Name</h3>
          <input
            type="text"
            value={friendName}
            onChange={(event) => {
              setFriendName(event.target.value);
            }}
          />
        </div>
        <div className="inputForm">
          <h3>📷 Image URL</h3>
          <input type="text" value={URL} />
        </div>
        <div className="buttonFormAllign">
          <>&nbsp;</>
          <button
            className="buttonForm"
            onClick={() => {
              setFriends([
                ...friends,
                {
                  id: Date.now(),
                  name: friendName,
                  image: URL,
                  balance: 0,
                },
              ]);
            }}
          >
            Add
          </button>
        </div>
      </form>
      {/* <div className="buttonFormAllign">
              <>&nbsp;</>
              <button className="buttonForm">Add Friend</button>
            </div> */}
    </div>
  );
};
