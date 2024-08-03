import { FC, ReactNode } from "react";

interface INavMenu {
  children: ReactNode;
  withStyle?: string;
}

const MenuHeader: FC<INavMenu> = ({ children, withStyle = "" }) => {
  return (
    <div className={`${withStyle} p-2 border-b border-[#adb7bc]`}>
      {children}
    </div>
  );
};

const MenuBody: FC<INavMenu> = ({ children, withStyle = "" }) => {
  return <div className={`${withStyle} p-2`}>{children}</div>;
};

const MenuFooter: FC<INavMenu> = ({ children, withStyle = "" }) => {
  return (
    <div className={`${withStyle} p-2 border-t border-[#adb7bc]`}>
      {children}
    </div>
  );
};

interface IMainNavMenu extends FC<INavMenu> {
  MenuHeader: typeof MenuHeader;
  MenuFooter: typeof MenuFooter;
  MenuBody: typeof MenuBody;
}
const NavMenu: IMainNavMenu = ({ children, withStyle = "" }) => {
  return (
    <div
      className={`flex flex-col bg-[#ffffff] shadow-lg rounded-sm ${withStyle}`}
    >
      {children}
    </div>
  );
};

export { MenuBody, MenuFooter, MenuHeader };

NavMenu.MenuHeader = MenuHeader;
NavMenu.MenuFooter = MenuFooter;
NavMenu.MenuBody = MenuBody;

export default NavMenu;
