import Link from "next/link";
import React from "react";


interface NavBarProps {
    heading?: string;
}
const Navbar:React.FC<NavBarProps> = ({heading = "Client & Server Side Data Fetching"}) => {
  return (
    <>
        <div className="relative h-20 flex flex-col lg:flex-row gap-2 md:gap-0 items-center justify-between  p-3 md:px-20 ">
          <h1 className="text-2xl text-center md:text-start font-bold"> {heading} <span className="text-red-700">Demo.</span></h1>
          
          <div className="mt-5 lg:mt-0">
            <ul className="flex gap-6 text-[16px] font-normal ">
              <Link href="/">
              <li className="cursor-pointer hover:underline hover:text-red-800 ease-in duration-300">Home</li>
              </Link>
              <Link href="/client">
              <li className="cursor-pointer hover:underline hover:text-red-800 ease-in duration-300">Client Side</li>
              </Link>
              <Link href="/server">
              <li className="cursor-pointer hover:underline hover:text-red-800 ease-in duration-300">Server Side</li>
              </Link>
            </ul>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;