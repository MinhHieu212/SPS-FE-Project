import React from "react";
import { Link } from "react-router-dom";
import { HcmutIcon, MenuIcon, CloseIcon } from "../../Assets/Icons/Icons";
import "./Header.scss";
import { StudentInfoModal } from "../../Modals";

const Header = ({ showSideBar, setShowSideBar }) => {
  function handleShowSideBar() {
    setShowSideBar(!showSideBar);
  }
  return (
    <div className="Header_container w-[100vw] h-[66px] md:h-[55px] bg-[#3C8DBC] flex items-center justify-between shadow-md fixed z-50 -translate-y-full ">
      <div className="Header_SystemName flex items-center transition-all">
        {!showSideBar && (
          <Link to="/Home">
            <div className="flex items-center justify-center text-white font-bold text-[20px] bg-[#367FA9] h-[66px] md:h-[55px] w-[66px] bg-gradient-to-br from-cyan-500 to-#3C8DBC">
              BK
            </div>
          </Link>
        )}
        {showSideBar && (
          <Link to="/Home">
            <div className="flex items-center justify-center text-white font-bold text-[20px] bg-[#367FA9] h-[66px] md:h-[55px] w-[250px] bg-gradient-to-br from-cyan-500 to-#3C8DBC">
              Smart Printing System
            </div>
          </Link>
        )}
        <div
          id="Header_SideBarIcon"
          className="Header_MenuIcon flex items-center justify-center text-white font-bold text-[20px] h-[66px] md:h-[55px] w-[66px] cursor-pointer"
          onClick={handleShowSideBar}
        >
          {!showSideBar && <MenuIcon />}
          {showSideBar && <CloseIcon />}
        </div>
      </div>
      <StudentInfoModal>
        <div className="Header_UserInfo flex items-center justify-between gap-3 mr-4">
          {<HcmutIcon />}
          <span className="Header_UserName text-white pr-3 font-semibold cursor-pointer">
            {localStorage.getItem("email")}
          </span>
        </div>
      </StudentInfoModal>
    </div>
  );
};

export default Header;
