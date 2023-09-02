import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaAlignRight,
  FaCarAlt,
  FaCartPlus,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

export default function Header() {
  return (
    <nav className="px-32 pt-10 bg-slate-100">
      <div className=" relative ">
        <Link href="/">
          <Image src={logo} width={150} height={50} className="absolute" />
        </Link>
        <div className="icons absolute right-0 top-0">
          <FaSearch className="mx-3 icon" />
          <FaHeart className="mx-3 icon" />
          <FaCartPlus className="mx-3 icon" />
          <FaAlignRight className="mx-3 icon" />
        </div>
      </div>
    </nav>
  );
}
