import { useState } from "react";

export const BillSplit = function ({
  friends,
  setFriends,
  selectFriend,
  currentFriend,
  setSelectFriend,
}) {
  const [myExpense, setMyExpense] = useState(null);
  const [bill, setBill] = useState(null);
  const [whoPaying, setWhoPaying] = useState("you");

  let friendExpense = bill - myExpense;

  return (
    selectFriend === true && (
      <div className="billSplit">
        <h2>SPLIT A BILL WITH {currentFriend.name}</h2>
        <div className="inputForm">
          <h3>💳 Bill Value</h3>
          <input
            type="text"
            value={bill}
            onChange={(event) => {
              setBill(Number(event.target.value));
            }}
          />
        </div>
        <div className="inputForm">
          <h3>💰 Your Expense</h3>
          <input
            type="text"
            value={myExpense}
            onChange={(event) => {
              if (myExpense <= bill) {
                setMyExpense(event.target.value);
              }
            }}
          />
        </div>
        <div className="inputForm">
          <h3>🧑🏼‍🤝‍🧑🏻 {currentFriend.name}</h3>
          <input type="text" value={bill - myExpense} disabled />
        </div>
        <div className="inputForm">
          <h3>🤑 Who is paying the bill?</h3>
          <select
            className="select"
            value={whoPaying}
            onChange={(event) => {
              setWhoPaying(event.target.value);
              // console.log(event.target.value);
            }}
          >
            <option value="you">You</option>
            <option value={currentFriend.name}>{currentFriend.name}</option>
          </select>
        </div>
        <div className="buttonFormAllign">
          <>&nbsp;</>
          <button
            className="buttonForm"
            onClick={() => {
              const newBalance =
                whoPaying === "you" ? friendExpense : -1 * myExpense;
              console.log(friendExpense);

              // console.log(whoPaying);
              // console.log(newBalance);
              const newObject = {
                id: currentFriend.id,
                name: currentFriend.name,
                image: currentFriend.image,
                balance: newBalance,
              };
              const newArray = friends.map((element) => {
                if (currentFriend.id === element.id) {
                  return newObject;
                } else {
                  return element;
                }
              });
              setFriends(newArray);
            }}
          >
            Split Bill
          </button>
        </div>
      </div>
    )
  );
};
