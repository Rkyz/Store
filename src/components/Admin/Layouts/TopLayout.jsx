import {IoSearch} from "react-icons/io5"
import {BsListTask, BsBell} from "react-icons/bs"
import {CiMenuBurger} from "react-icons/ci"
import {AiOutlinePoweroff, AiOutlineMail} from "react-icons/ai"
import DarkModeToggle from "./DarkModeToggle"

// eslint-disable-next-line react/prop-types
const TopLayout = ({toggleExpansionAdmin, expandedAdmin}) => {
  return (
    <div className={`w-full bg-white dark:bg-Darkmode h-[7rem] transition-padding duration-1000 fixed pr-[3rem] dark:text-white text-black  flex justify-between items-center ${expandedAdmin ? 'pl-[10rem]':'pl-[22.5rem]'}`} >
        <div className="h-full flex items-center gap-3">
            <button onClick={toggleExpansionAdmin}>
             <CiMenuBurger className="text-3xl"/>
            </button>
            <IoSearch className="text-lg text-gray-400 ml-3"/>
            <input type="search" className="bg-transparent outline-none w-[30rem] pr-5 h-[40px] " placeholder="Search Here..." />
        </div>
        <div>
            <ul className="flex gap-10">
                <li>
                    <DarkModeToggle/>
                </li>
                <li>
                    <a href="" className="w-auto h-auto">
                        <AiOutlineMail className="text-2xl"/>
                    </a>
                </li>
                <li>
                    <a href="" className="w-auto h-auto">
                        <BsBell className="text-2xl"/>
                    </a>
                </li>
                <li>
                    <a href="" className="w-auto h-auto">
                        <AiOutlinePoweroff className="text-2xl"/>
                    </a>
                </li>
                <li>
                    <a href="" className="w-auto h-auto">
                        <BsListTask className="text-2xl"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopLayout