import React from "react";
import { nanoid } from "nanoid";

export const Form = ({ setData }) => {
  const [input, setInput] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    setData((pState) => {
      return [...pState, { title: input, id: nanoid() }];
    });
    setInput("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2.5 bg-pink-300"
        type="text"
      />
      <button className="p-2.5 cursor-pointer bg-blue-400">send</button>
    </form>
  );
};
