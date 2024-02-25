// const Friends = function ({ selectFriend, setSelectFriend }) {
//   return <div></div>;
// };
export const SingleFriend = function ({
  currentFriend,
  selectFriend,
  handleSelectFriend,
  index,
}) {
  return (
    <div className="singleFriend">
      <img src={currentFriend.image} alt={currentFriend.name} />
      <div>
        <h2>{currentFriend.name}</h2>
        {currentFriend.balance > 0 ? (
          <span style={{ color: "#337357" }}>
            You owe {currentFriend.name} {currentFriend.balance} €
          </span>
        ) : currentFriend.balance === 0 ? (
          <span style={{ color: "#211C6A" }}>
            You and {currentFriend.name} are Even
          </span>
        ) : (
          <span style={{ color: "red" }}>
            {currentFriend.name} owes you {currentFriend.balance * -1} €
          </span>
        )}
      </div>
      <button
        onClick={() => {
          handleSelectFriend(index);
        }}
      >
        {selectFriend ? "Close" : "Select"}
      </button>
    </div>
  );
};
