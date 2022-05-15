import Image from "next/image";
import HeaderItem from "./headeritem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-10">
      <div className="flex md:flex-row mb-5 md:justify-between items-center h-auto flex-col active:bg-yellow-300 ">
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
