import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

interface openMenu {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ResponsiveMenu = ({ open, setOpen }: openMenu) => {
  const nav = [
    { name: "Home", link: "Home" },
    { name: "About", link: "About" },
    { name: "Project", link: "Project" },
    { name: "Contact", link: "Contact" },
  ];
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className=" top-15  right-0 fixed w-fit h-fit z-20 "
        >
          <div className="text-m font-poppins inset-ring-2 font-semibold uppercase bg-[#1E1E1E] text-white p-4 mr-5 rounded-2xl">
            <ul className="flex flex-col self-center items-center text-center cursor-pointer">
              {nav.map((items) => {
                return (
                  <Link
                    to={items.link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-65}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="hover:text-[#FD6F00] hover:bg-[#d8c5a3] rounded-2xl p-5 w-full"
                  >
                    {items.name}
                  </Link>
                );
              })}
              <a
                href="www.google.com"
                target="_blank"
                onClick={() => {
                  setOpen(false);
                }}
                className="text-m font-poppins hover:text-[#FD6F00] hover:bg-[#d8c5a3] rounded-2xl p-5 w-full"
              >
                Download CV
              </a>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
