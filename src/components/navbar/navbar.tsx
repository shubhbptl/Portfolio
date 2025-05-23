import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu.jsx";
import { MdMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
const navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navbar = [
    { text: "Home", link: "Home" },
    { text: "About", link: "About" },
    { text: "Project", link: "Project" },
    { text: "Contact", link: "/" },
  ];

  return [
    <>
      <nav
        className={` ${
          openMenu && "shadow-600"
        } font-poppins sticky bg-[#1E1E1E] z-10 top-0`}
      >
        <div className="flex justify-between items-center py-4 pl-4 pr-4 ">
          <div className=" text-2xl font-bold uppercase text-white">
            <p className="bg-gradient-to-br from-stone-500 via-[#FD6F00] to-yellow-600 bg-clip-text text-transparent hover:bg-gradient-to-r hover:cursor-pointer hover:from-slate-500 hover:to-slate-800 hover:bg-clip-text hover:text-transparent">
              Shubh
            </p>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 pl-15">
              {navbar.map((items, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="inline-block py-1 px-3 text-white hover:font-semibold hover:text-[#FD6F00] cursor-pointer"
                      to={items.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-65}
                      onClick={() => {
                        setOpenMenu(false);
                      }}
                    >
                      {items.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:block text-white">
            <button className="bg-transparent border-2 rounded-3xl p-2 transition-all duration-300 ease-in hover:bg-[#FD6F00]">
              Download CV
            </button>
          </div>
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className=" md:hidden text-white"
          >
            {!openMenu && (
              <MdMenu
                className={`text-3xl hover:scale-125 active:text-[#FD6F00] ${
                  openMenu && `scale-125`
                }`}
              ></MdMenu>
            )}
            {openMenu && (
              <IoCloseOutline
                className={`text-3xl hover:scale-125 active:text-[#FD6F00] hover:cursor-pointer hover:${
                  openMenu && `scale-125`
                }`}
              />
            )}
          </button>
        </div>
      </nav>
      <ResponsiveMenu open={openMenu} setOpen={setOpenMenu} />
    </>,
  ];
};

export default navbar;
