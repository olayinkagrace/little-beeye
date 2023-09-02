import React from "react";
import { FaEye, FaFlagCheckered, FaLemon, FaMicroscope } from "react-icons/fa";

function about() {
  return (
    <main className="bg-slate-100 pt-20 text-black text-lg">
      <section className="bg-zinc-500 py-16 text-center text-yellow-300">
        <h2 className="font-extrabold text-4xl py-4">ABOUT</h2>
        <p>Home / About</p>
      </section>
      <section className="text-lg pt-20 px-32 bg-white">
        <h2 className="text-4xl font-bold text-center ">Eye Solutions</h2>
        <p className="text-center">Correct Rectification For All Age Kids</p>
      </section>
      <section className="px-32 py-8 grid grid-cols-2 gap-4 bg-white">
        <div></div>
        <div>
          <div className="bg-slate-300 p-8 hover:bg-yellow-300 my-5">
            <div className="flex items-center">
              <FaMicroscope />
              <h2 className="font-extrabold text-xl ms-5">Digital Checkup</h2>
            </div>
            <p className="ms-8">
              Facilisi etiam dignissim diam quis enim lobortis scel.
            </p>
          </div>
          <div className="bg-slate-300 p-8 hover:bg-yellow-300 my-5">
            <div className="flex items-center">
              <FaEye />
              <h2 className="font-extrabold text-xl ms-5">
                Clear Prescription
              </h2>
            </div>
            <p className="ms-8">
              Nisl nisi scelerisque eu ultrices vitae auctor eu .
            </p>
          </div>
          <div className="bg-slate-300 p-8 hover:bg-yellow-300 my-5">
            <div className="flex items-center">
              <FaFlagCheckered />
              <h2 className="font-extrabold text-xl ms-5">Durable Lens</h2>
            </div>
            <p className="ms-8">
              Ultrices in iaculis nunc sed quis risus sed vulp.
            </p>
          </div>
          <div className="bg-slate-300 p-8 hover:bg-yellow-300 my-5">
            <div className="flex items-center">
              <FaLemon />
              <h2 className="font-extrabold text-xl ms-5">
                Clear Prescription
              </h2>
            </div>
            <p className="ms-8">
              Nisl nisi scelerisque eu ultrices vitae auctor eu .
            </p>
          </div>
        </div>
      </section>
      <section className="text-lg pt-20 px-32 bg-white">
        <h2 className="text-4xl font-bold text-center ">Comfortable</h2>

        <div className="px-32 py-8 grid grid-cols-2 gap-4 bg-white">
          <div>jfj</div>
          <div>hf</div>
        </div>

        <div className="py-8 grid grid-cols-2 gap-8 bg-white">
          <div>jfj</div>
          <div className="bg-slate-300 p-5 text-left">
            <h2 className="text-3xl font-bold">
              Eco-Friendly Hypoallergic Material
            </h2>
            <p>
              Nam orci urna, ullamcorper venenatis purus a, cursus pretium
              felis. Integer vel erat nec erat luctus scelerisque eu quis nisi.
              Nunc sapien elit, posuere sit amet est quis, elementum
              pellentesque arcu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default about;
