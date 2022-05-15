import { useState } from "react";
import request from "../utility/request";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/outline";
// import { HiMenu } from "react-icons/hi";

import { useMediaQuery } from "react-responsive";

export default function Nav() {
  const router = useRouter();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [showNav, setShowNav] = useState(false);
  const showNavigation = () => {
    setShowNav(!showNav);
  };

  const RealNav = () => {
    return (
      <div className="relative flex flex-col lg:flex-row px-10 sm:px-20 whitespace-nowrap  lg:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer lg:last:pr-24 transform duration-1000 hover:scale-125 hover:translate-x-2 hover:text-white  active:text-red-900 active:bg-blue-600 font-bold w-1/5"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
    );
  };

  return (
    <nav className="relative">
      {isTabletOrMobile && (
        <button onClick={showNavigation}>
          <MenuIcon className=" h-8 mb-1 ml-2" />
        </button>
      )}
      {(showNav || isDesktopOrLaptop) && <RealNav />}

      {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-12 h-10" /> */}
    </nav>
  );
}
