"use client";
import Link from "next/link";
import { ReactElement, ReactNode, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logo from "../../../../public/brand/Logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import NavMenu from "@/src/components/common/menus/nav_menu/navMenu";
import MainButton from "@/src/components/common/buttons/main_button/mainButton";
import { CiSearch } from "react-icons/ci";
import SearchBar from "@/src/components/common/search_bar/searchBar";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { RootState } from "@/src/lib/redux/store";
import { logOut } from "@/src/lib/redux/slices/AuthSlice";
const Navbar = () => {
  // state
  const [currentMenu, setCurrentMenu] = useState<null | string>(null);
  const isAuthorized = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  // dispatch
  const dispatch = useDispatch<any>();
  // interfaces
  interface INavIcons {
    icon: ReactNode;
    href?: string;
    onClick?: () => void;
    label: string;
    isResponsive: boolean;
    menu?: ReactElement;
  }

  const navIcons: INavIcons[] = [
    {
      icon: <CiSearch />,
      onClick: () => {
        setCurrentMenu(currentMenu === null ? "Search" : null);
      },
      label: "Search",
      isResponsive: true,
    },
    {
      icon: <GiShoppingCart />,
      onClick: () => {
        setCurrentMenu(currentMenu === null ? "Cart" : null);
      },
      label: "Cart",
      isResponsive: false,
      menu: (
        <NavMenu withStyle="absolute top-[150%] right-[0px] w-max">
          <NavMenu.MenuHeader withStyle="flex gap-1">
            <b className="small-paragraph">Shopping cart</b>
            <p className="small-paragraph font-gray-600">(1)</p>
          </NavMenu.MenuHeader>
          <NavMenu.MenuBody></NavMenu.MenuBody>
          <NavMenu.MenuFooter withStyle="">
            <div className="flex justify-between">
              <p className="small-paragraph font-gray-600">Total:</p>
              <b className="small-paragraph">$1231.00</b>
            </div>

            <MainButton
              buttonLabel={"Checkout now"}
              buttonRole={"button"}
              isHollow={false}
              isLarge={false}
              isLoading={false}
              isDisabled={false}
              buttonIcon={<FaArrowRightLong size={20} />}
              withStyle="mt-2"
              buttonFontSize="small-paragraph"
            />
          </NavMenu.MenuFooter>
        </NavMenu>
      ),
    },
    {
      icon: <MdOutlineFavoriteBorder />,
      onClick: () => {
        setCurrentMenu(currentMenu === null ? "Wishlist" : null);
      },
      label: "Wishlist",
      isResponsive: false,
      menu: (
        <NavMenu withStyle="absolute top-[150%] right-[0px]">
          <NavMenu.MenuHeader>
            <b className="small-paragraph">Wishlist</b>
          </NavMenu.MenuHeader>
          <NavMenu.MenuBody></NavMenu.MenuBody>
        </NavMenu>
      ),
    },
    {
      icon: isAuthorized ? <IoLogOutOutline /> : <CgProfile />,
      href: isAuthorized ? undefined : "/auth",
      onClick: isAuthorized
        ? () => {
            dispatch(logOut());
          }
        : undefined,
      label: "Profile",
      isResponsive: false,
    },
  ];

  return (
    <nav className="bg-[#1b6392] sticky top-0 z-[1000] shadow-lg">
      <div className="container m-auto flex justify-between items-center p-2 xl:p-3 gap-5 sm:gap-10 xl:gap-20 relative">
        <Link href="/" className="w-[110px] sm:w-[250px] ">
          <Image
            src={Logo}
            alt="Logo"
            className="object-contain object-center w-full h-full"
          />
        </Link>

        <SearchBar withStyle="hidden sm:flex" />
        <span>
          <ul className="flex gap-2 xl:gap-4 items-center leading-[0px]">
            {navIcons.map((icon, index) => (
              <li
                key={index}
                className={`relative ${icon.isResponsive && "block sm:hidden"}`}
              >
                {icon.href ? (
                  <Link
                    href={icon.href}
                    title={icon.label}
                    className="text-[#ffffff] text-[23px] xl:text-[26px]"
                  >
                    {icon.icon}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={icon.onClick}
                      title={icon.label}
                      className="text-[#ffffff] text-[23px] xl:text-[26px]"
                    >
                      {icon.icon}
                    </button>
                    {icon.menu && icon.label === currentMenu && icon.menu}
                  </>
                )}
              </li>
            ))}
          </ul>
        </span>
        <div
          className={`absolute bg-[#ffffff] p-1.5 top-[100%] left-[0px] w-full overflow-hidden flex sm:hidden duration-300 ${
            currentMenu === "Search"
              ? "visible opacity-1"
              : "invisible opacity-0"
          }`}
        >
          <SearchBar
            withStyle={`search-hidden ${
              currentMenu === "Search" && "search-visible"
            } border shadow-md`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
