import React from "react";

function Form() {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Name"
        className="p-3 mb-4 border b-zinc-100 w-3/4"
      />
      <br />
      <input
        type="text"
        placeholder="Email "
        className="p-3 my-4 border b-zinc-100 w-3/4"
      />
      <br />
      <input
        type="text"
        placeholder="Phone"
        className="p-3 my-4 border b-zinc-100 w-3/4"
      />
      <br />

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
        className="p-3 my-4 border b-zinc-100 w-3/4"
      ></textarea><br />
      <button className="bg-yellow-300 p-3 px-9  hover:bg-black hover:text-yellow-300 my-4">
       SEND
      </button>
    </form>
  );
}

export default Form;
