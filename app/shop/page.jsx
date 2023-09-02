import React from "react";
import {
  FaCircle,
  FaEyeSlash,
  FaList,
  FaPlus,
  FaRegListAlt,
} from "react-icons/fa";
import Image from "next/image";
import glass1 from "../../public/glass.png";
import glass2 from "../../public/glass2.png";

function shop() {
  return (
    <main className="bg-slate-100 pt-20 text-black">
      <section className="bg-zinc-500 py-16 text-center text-yellow-300 ">
        <h2 className="font-extrabold text-4xl py-4">COLLECTION</h2>
        <p>Home / Products</p>
      </section>
      <section className="bg-white flex flex-wrap px-10 py-16">
        <div className="w-1/3">
          <h3 className="font-bold text-2xl py-4 mb-2">Category</h3>
          <hr />
          <div className="flex flex-wrap justify-between items-center my-3">
            <div className="flex">
              <FaEyeSlash />
              <p className="ms-2">Trending</p>
            </div>
            <FaPlus />
          </div>
          <div className="flex flex-wrap justify-between items-center my-3">
            <div className="flex">
              <FaEyeSlash />
              <p className="ms-2">Elegant Products</p>
            </div>
            <FaPlus />
          </div>
          <h3 className="font-bold text-2xl py-4 mb-2">Best Sellers</h3>
          <hr />

          <div className="text-center border justify-center border-yellow-300 my-5">
            <Image
              src={glass1}
              width={300}
              height={105}
              className="w-auto h-auto "
            />
            <p className="text-xl font-medium">Shield Glass</p>
            <p className="text-xl font-medium mb-10">$185.00</p>
          </div>
          <h3 className="font-bold text-2xl py-4 mb-2">Availability</h3>
          <hr />
          <div className="flex flex-wrap py-7">
            <div className="flex items-center pe-8">
              <FaCircle />
              <p className="ps-4">In Stock (12)</p>
            </div>
            <div className="flex items-center">
              <FaCircle />
              <p className="ps-4">Out Of Stock (0)</p>
            </div>
          </div>
          <h3 className="font-bold text-2xl py-4 mb-2">Price</h3>

          <hr />
          <p>The highest price is $210.00</p>
          <label>From $</label>
          <input className="border border-yellow-300 w-10" />
          <label>To $</label>
          <input className="border border-yellow-300" />
          <button className="bg-yellow-300 p-3 center hover:bg-black hover:text-yellow-300 w-3/3 my-4">
            ClearAll
          </button>

          <h3 className="font-bold text-2xl py-4 mb-2">
            Best Collections Ever
          </h3>
          <hr />
          <Image src={glass2} width={300} height={100} className="py-8" />
          <button className="bg-yellow-300 p-3 center hover:bg-black hover:text-yellow-300">
            Shop Now
          </button>
        </div>

        <div className="w-2/3">
          <div className="border border-zinc-300 my-7">
            <div className="flex flex-wrap justify-between items-center p-4">
              <div className="flex">
                <FaRegListAlt className="bg-yellow-300" />
                <FaList />
              </div>
              <div className="flex">
                <label>Sorted By</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
            <div className="text-center border justify-center border-yellow-300 py-3">
              <Image
                src={glass1}
                width={300}
                height={105}
                className="w-auto h-auto "
              />
              <p className="text-xl font-medium mt-7">Shield Glass</p>
              <p className="text-xl font-medium mb-10">$185.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default shop;
