import { useState } from "react";
import { Transition } from "@headlessui/react";
import { CgMenuRight, CgClose } from "react-icons/cg";

const data = [
  {
    id: 1,
    name: "Wisata",
  },
  {
    id: 2,
    name: "Sewa",
  },
  {
    id: 3,
    name: "Kontak",
  },
  {
    id: 4,
    name: "Tentang",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Transition
        show={toggle}
        className="w-full h-screen bg-white fixed z-40"
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="">
          <div className="flex items-end flex-col">
            <button
              className="m-5"
              onClick={() => setToggle((toggle) => !toggle)}
            >
              <CgClose size={38} />
            </button>
          </div>
          <div className="flex flex-col">
            {data.map((menu) => (
              <div
                key={menu.id}
                className="ml-7 mb-12 cursor-pointer text-5xl rounded-md transition-all"
              >
                {menu.name}
              </div>
            ))}
          </div>
        </div>
      </Transition>
      <nav>
        <div className="max-w-screen-xl m-auto flex justify-between items-center py-8 px-5 md:px-0">
          <div className="">
            <h1 className="font-bold text-2xl text-blue-700">Travelku</h1>
          </div>

          <div className="block md:hidden">
            <button onClick={() => setToggle((toggle) => !toggle)}>
              <CgMenuRight size={38} />
            </button>
          </div>
          <div className="hidden md:flex">
            {data.map((menu) => (
              <div
                key={menu.id}
                className="mx-3 px-3 py-1 cursor-pointer hover:text-blue-800 hover:bg-blue-500 hover:bg-opacity-10 rounded-md transition-all"
              >
                {menu.name}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
