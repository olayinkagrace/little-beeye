import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-32 bg-zinc-800 text-white text-lg py-16">
      <div className="flex flex-wrap py-12">
        <Link href="/">
          <Image src={logo} width={220} height={100} />
        </Link>
        <p className="ms-6 w-3/4">
          Eleifend mi in nulla posuere sollicitudin aliquam. Imperdiet nulla
          malesuada pellentesque elit eget. Pharetra sit amet aliquam id diam.
          In fermentum et sollicitudin ac orci phasellus. Nisl pretium fusce id
          velit ut. Amet mauris commodo quis imperdiet massa tincidunt nunc.
          Condimentum lacinia quis vel eros donec. Mauris in aliquam sem
          fringillau.
          <Link href="/" className="text-amber-400 ms-2">
            READ MORE
          </Link>
        </p>
      </div>
      <div className="flex flex-wrap justify-between pt-10">
        <div className="w-1/5">
          <p>
            #No: 58 A, East Madison Street, Baltimore, MD, USA 4508 Phone : 000
            123 456789 Mail : info@example.com
          </p>
          <div className="iconsTwo flex flex-wrap justify-between mt-14">
            <Link href="#">
              <FaFacebook className="icon" />
            </Link>
            <Link href="#">
              <FaInstagram className="icon" />
            </Link>
            <Link href="#">
              <FaTwitter className="icon" />
            </Link>
            <Link href="#">
              <FaYoutube className="icon" />
            </Link>
          </div>
        </div>
        <div className="w-2/5">
          <h2>Subscribe</h2>
          <p>Sign up for all the latest fashion tips, discount updates</p>
          <input
            placeholder="Your Email Address"
            className="text-zinc-400 border-0 border-b-4 mt-14 border-b-zinc-500"
          />
          <p className="text-amber-400 text-3xl inline-block">SEND</p>
        </div>
        <div className="b block">
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
        </div>
        <div className="inline-block">
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
          <Link href="#"><p className="my-4 icon">Supplier</p></Link>
        </div>
      </div>
    </footer>
  );
}
