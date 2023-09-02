import Form from "@/components/form";
import Map from "@/components/map";
import React from "react";
import { FaAddressCard, FaPhone, FaVoicemail } from "react-icons/fa";

function contact() {
  return (
    <main className="bg-slate-100 pt-20 text-black">
      <section className="bg-zinc-500 py-16 text-center text-yellow-300">
        <h2 className="font-extrabold text-4xl py-4">CONTACT</h2>
        <p>Home / Contact</p>
      </section>
      <section className="grid grid-cols-3 gap-6 text-lg py-20 px-32 bg-white">
        <div className="border b-slate-300 hover:b-yellow-300 p-10 text-base">
            <div className="bg-yellow-300 p-3  w-10">
            <FaPhone />
            </div>
           
            <h2 className="text-2xl font-bold py-5">Phone</h2>
            <p><strong>Toll-Free:</strong>T 0000 - 123 - 456789</p>
            <p className="mt-3"><strong>Fax:</strong>0000 - 123 - 456789</p>
        </div>
        <div className="border b-slate-300 hover:b-yellow-300 p-10 text-base">
            <div className="bg-yellow-300 p-3  w-10">
            <FaVoicemail />
            </div>
           
            <h2 className="text-2xl font-bold py-5">Email</h2>
            <p>info@example.com</p>
            <p className="mt-3">support@example.com</p>
        </div>
        <div className="border b-slate-300 hover:b-yellow-300 p-10 text-base">
            <div className="bg-yellow-300 p-3  w-10">
            <FaAddressCard />
            </div>
           
            <h2 className="text-2xl font-bold py-5">Address</h2>
            <p>No: 58 A, East Madison Street,</p>
            <p className="mt-3">Baltimore, MD, USA 4508</p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-6 bg-white px-32">
        <div>
            <Map />
        </div>
        <div>
        <h2 className="text-3xl font-bold py-5">Contact Form</h2>
        
        <Form />
        </div>
      </section>
    </main>
  );
}

export default contact;
