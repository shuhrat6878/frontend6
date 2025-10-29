import React from "react";

export const Card = ({ title, id, setData }) => {
  const [showInput, setShowInput] = React.useState(false);
  const [input, setInput] = React.useState(title);

  const [count, setCount] = React.useState(0);

  const deleteItem = () => {
    setData((pState) => {
      const newArr = pState.filter((item) => item.id !== id);

      return newArr;
    });
  };

  const editItem = () => {
    if (showInput) {
      setData((pState) => {
        return pState.map((item) =>
          item.id === id ? { id, title: input } : item
        );
      });
    }
    setShowInput(!showInput);
  };

  return (
    <div className="border border-red-400 p-5 my-2.5">
      <h2 className="text-4xl">{count}</h2>
      {!showInput ? (
        <h2 className="text-shadow-blue-800 text-3xl mb-2.5">{title}</h2>
      ) : (
        <div className="mb-2.5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-blue-400 w-full text-3xl"
            type="text"
          />
        </div>
      )}
      <div>
        <button
          className="bg-green-400 p-2.5 cursor-pointer mr-2.5 rounded-full"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <button
        onClick={deleteItem}
        className="bg-red-400 p-2.5 cursor-pointer mr-2.5 rounded-2xl"
      >
        Delete
      </button>
      <button
        onClick={editItem}
        className="bg-blue-400 p-2.5 cursor-pointer rounded-2xl"
      >
        {showInput ? "Save" : "Edit"}
      </button>
    </div>
  );
};
