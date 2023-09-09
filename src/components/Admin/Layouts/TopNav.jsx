import {GiHamburgerMenu} from 'react-icons/gi'
import {BiCodeAlt} from 'react-icons/bi'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import {FiSettings, FiActivity} from 'react-icons/fi'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import {AiOutlineMail, AiOutlineBell} from 'react-icons/ai'
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
const TopNav = ({toggleExpansion}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setIsOpenNotification(false); 
    };
  
    const toggleDropdownNotification = () => {
      setIsOpenNotification(!isOpenNotification);
      setIsOpen(false); 
    };
  
    return (
        <div className='w-full'>
            <nav className={`bg-primary h-[115px] px-[29px] pt-[29px] flex justify-between items-start `}>
                <div>
                    <button onClick={toggleExpansion}>
                        <GiHamburgerMenu className='text-white text-xl'/>
                    </button>
                </div>
                <div className='flex gap-[15px]'>
                    <button>
                        <AiOutlineMail className='text-white text-xl font-bold'/>
                    </button>
                    <button onClick={toggleDropdownNotification}>
                        <AiOutlineBell className='text-white text-xl font-bold'/>
                    </button>
                    <div className="relative inline-block text-left">
                    <div>
                        <button
                        type="button"
                        onClick={toggleDropdown}
                        className="flex gap-3 items-center text-white text-sm focus:outline-none"
                        >
                        <img
                            src="https://tse2.mm.bing.net/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&pid=Api&P=0&h=180"
                            alt="idk"
                            className="w-[30px] h-[30px] bg-cover rounded-full"
                        />
                        <p className="text-white text-sm">Hi, Ujang Saruman</p>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="z-50 origin-top-right absolute right-0 px-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                            className="py-1 flex flex-col gap-y-4"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <p className='font-bold font-poppins opacity-70 text-sm tracking-widest text-center mt-3'>LOGGED IN 5 MIN AGO</p>
                            <a href="#" className='flex items-center gap-2 hover:text-blue-500'>
                                <CgProfile/>
                                <p>Profile</p>
                            </a>
                            <a href="#" className='flex items-center gap-2 hover:text-blue-500'>
                                <FiActivity/>
                                <p>Activity</p>
                            </a>
                            <a href="#" className='flex items-center gap-2 hover:text-blue-500'>
                                <FiSettings/>
                                <p>Settings</p>
                            </a>
                            {/* Logout */}
                            <a href="#" className='flex items-center gap-2 text-red-500 my-5 hover:text-blue-500 before:w-full before:h-[0.08px] before:opacity-20 before:bg-black before:absolute before:bottom-[65px] before:right-0'>
                                <CgLogOut/>
                                <p>Logout</p>
                            </a>
                        </div>
                        </div>
                    )}

                    {isOpenNotification && (
                        <div className="z-50 origin-top-right absolute right-[160px] mt-2 w-[350px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                            className=" flex flex-col"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <div className='w-full h-[58px] flex justify-between p-[15px] bg-transparent '>
                                <p className='text-sm opacity-70'>Notifications</p>
                                <a href='#' className='text-sm text-blue-500'>Mark All As Read</a>
                            </div>
                            <div className='px-[15px] h-[320px] overflow-y-scroll hidden-scroll'>
                                <div className='flex gap-[15px] w-full h-[76px] bg-transparent items-center'>
                                    <ul className='bg-blue-500 w-[40px] h-[40px] rounded-full flex justify-center items-center'>
                                        <BiCodeAlt className='text-xl text-white'/>
                                    </ul>
                                    <ul className='flex flex-col gap-1'>
                                        <li><p className='capitalize text-sm font-poppins opacity-70'>New Update Has Been Added</p></li>
                                        <li><p className='uppercase text-xs opacity-70'>2 min ago</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-full h-[59px] flex justify-center items-center'>
                                <a href="#" className='text-blue-500 text-sm font-poppins flex items-center gap-1'>View All <span><MdKeyboardDoubleArrowRight className='text-lg'/></span></a>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopNav