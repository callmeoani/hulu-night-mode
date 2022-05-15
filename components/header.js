import Image from "next/image";
import { useState, useEffect } from "react";
import HeaderItem from "./headeritem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //clean up the function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <header onScroll={handleScroll} className="w-full fixed top-0 left-0 z-10">
    <header
      className={`w-full fixed top-0 left-0 z-10 ${
        isScrolled && "bg-[#22093c]"
      }`}
    >
      <div
        className={`flex md:flex-row mb-5 md:justify-between items-center h-auto flex-col`}
      >
        <div className="flex flex-grow max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIOINS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <div className="">
          <Image
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
