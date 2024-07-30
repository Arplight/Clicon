"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import Logo from "../../../../public/brand/Logo.svg";
import Image from "next/image";

const Navbar = () => {
  interface INavIcons {
    icon: ReactNode;
    href?: string;
    onClick?: () => void;
    label: string;
    isResponsive: boolean;
  }

  const navIcons: INavIcons[] = [
    {
      icon: <CiSearch />,
      onClick: () => {
        console.log("Cart clicked");
      },
      label: "Search",
      isResponsive: true,
    },
    {
      icon: <GiShoppingCart />,
      onClick: () => {
        console.log("Cart clicked");
      },
      label: "Cart",
      isResponsive: false,
    },
    {
      icon: <MdOutlineFavoriteBorder />,
      onClick: () => {
        console.log("Wishlist clicked");
      },
      label: "Wishlist",
      isResponsive: false,
    },
    {
      icon: <CgProfile />,
      href: "/auth",
      label: "Profile",
      isResponsive: false,
    },
  ];

  return (
    <nav className="bg-[#1b6392] sticky top-0 z-[1000] shadow-lg">
      <div className="container m-auto flex justify-between items-center p-2 xl:p-3 gap-5 sm:gap-10 xl:gap-20">
        <Link href="/" className="w-[110px] sm:w-[250px] ">
          <Image
            src={Logo}
            alt="Logo"
            className="object-contain object-center w-full h-full"
          />
        </Link>

        <span className="w-full rounded-[3px] grow bg-[#ffffff] flex items-center px-1 py-0.5 xl:py-1 hidden sm:flex">
          <input
            type="text"
            placeholder="Search..."
            style={{ fontSize: 14 }}
            className="grow focus:outline-none"
            maxLength={80}
          />
          <CiSearch size={24} />
        </span>
        <span>
          <ul className="flex gap-2 xl:gap-4 items-center leading-[0px]">
            {navIcons.map((icon, index) => (
              <li
                key={index}
                className={`relative text-[#ffffff] text-[23px] xl:text-[26px] ${
                  icon.isResponsive && "block sm:hidden"
                }`}
              >
                {icon.href ? (
                  <Link href={icon.href} title={icon.label}>
                    {icon.icon}
                  </Link>
                ) : (
                  <button onClick={icon.onClick} title={icon.label}>
                    {icon.icon}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
