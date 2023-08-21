import { PiStackFill } from 'react-icons/pi';
import { BsHouses, BsInfoCircle } from 'react-icons/bs';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { FiLayers } from 'react-icons/fi';
import { MdKeyboardDoubleArrowLeft, MdOutlineGamepad } from 'react-icons/md';
import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';


// eslint-disable-next-line react/prop-types
const Layout = ({expandedAdmin}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed h-full z-50">
      <nav className={`bg-white dark:bg-Darkmode w-[20rem] h-full overflow-y-scroll scrollbar-hidden duration-1000 ${expandedAdmin ? 'w-[8rem]':'w-[20rem] px-10'}`}>
        <div className={`bg-white dark:bg-Darkmode h-[7rem] flex justify-center items-center gap-3 ${expandedAdmin ? '':'pr-5 '}`}>
          <PiStackFill className={`text-blue-500 dark:text-white text-4xl ${expandedAdmin ? 'hidden':''}`} />
          <span className={`font-roboto font-extrabold dark:text-white text-blue-500 ${expandedAdmin ? 'text-2xl':'text-4xl'}`}>
            Judul
          </span>
        </div>
        <div className={`bg-transparent dark:text-white overflow-hidden text-black flex gap-5 items-center ${expandedAdmin ? 'px-10':''}`}>
          <img
            src="https://images5.alphacoders.com/131/thumbbig-1316292.webp"
            alt=""
            className="w-[50px] h-[50px] bg-contain rounded-full"
          />
          <div className={`${expandedAdmin ? 'hidden opacity-0':'opacity-100'}`}>
            <h1 className="font-poppins font-bold">Rio Alamsyah</h1>
            <h1 className="font-poppins text-sm text-gray-400">
              Front-End Developer
            </h1>
          </div>
        </div>
        <ul className={`mt-10 w-full h- bg-transparent flex justify-between flex-col ${expandedAdmin ? '':''}`}>
          <li className={`w-full bg-transparent gap-[2rem] flex flex-col h-auto ${expandedAdmin ? '':''}`}>
            <a
              href=""
              className="flex w-full h-full justify-between items-center dark:text-white text-black hover:text-blue-500 transition-colors duration-300"
            >
              <p className={`font-poppins font-normal ${expandedAdmin ? 'hidden':''}`}>Dashboard</p>
              <BsHouses/>
            </a>
            <Menu>
              <Menu.Button
                className="flex w-full h-full justify-between items-center dark:text-white text-black hover:text-blue-500 transition-colors duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <p className={`font-poppins font-normal ${expandedAdmin ? 'hidden':''}`}>Page Control</p>
                <div className='flex gap-3'>
                    <MdKeyboardDoubleArrowLeft className='text-lg'/>
                    <FiLayers/>
                </div>
              </Menu.Button>
              <Transition
                show={menuOpen}
                enter="transition duration-1000 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  static
                  className="relative right-0 mt-2 origin-top-right bg-white dark:bg-Darkmode flex flex-col gap-3 rounded-md focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-transparent text-blue-500' : 'dark:text-white text-black'
                        } px-4 py-2 text-base font-poppins flex items-center gap-3`}
                      >
                        <HiArrowSmallRight/>
                        <p className={`${expandedAdmin ? 'hidden':''}`}>First Item</p>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <a
              href=""
              className="flex w-full h-full justify-between items-center dark:text-white text-black hover:text-blue-500 transition-colors duration-300"
            >
              <p className={`font-poppins font-normal ${expandedAdmin ? 'hidden':''}`}>Info</p>
              <BsInfoCircle />
            </a>
            <a
              href=""
              className="flex w-full bg-transparent h-full ab bottom-0 justify-between items-center dark:text-white text-black hover:text-blue-500 transition-colors duration-300"
            >
              <p className={`font-poppins font-normal ${expandedAdmin ? 'hidden':''}`}>Game</p>
              <MdOutlineGamepad />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
