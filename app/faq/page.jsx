import React from "react";

function faq() {
  return (
    <main className="bg-slate-100 pt-20 text-black">
      <section className="bg-zinc-500 py-16 text-center text-yellow-300">
        <h2 className="font-extrabold text-4xl py-4">FAQ</h2>
        <p>Home / faq</p>
      </section>
      <section className="grid grid-cols-3 gap-6 text-lg py-20 px-32 bg-white">
        <h2 className="text-4xl font-bold">Frequently Asked</h2>
      </section>
      <section className="bg-yellow-300 text-xl">
        <div className="py-16 px-32 ">
          <h2 className="text-4xl font-bold center ">Payment Information</h2>
          <div className="py-16">
            <h2 className="text-2xl font-bold mb-5">
              WHAT PAYMENT METHODS ARE ACCEPTED?
            </h2>
            <p className="text-zinc-900">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div className="py-16">
            <h2 className="text-2xl font-bold mb-5">
              HOW DO I TRACK MY ORDER?
            </h2>
            <p className="text-zinc-900">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default faq;
