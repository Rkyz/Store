import {AiFillFire} from 'react-icons/ai'
import {FiInfo} from 'react-icons/fi'
import {SiPhpmyadmin, SiPrivateinternetaccess} from 'react-icons/si'
import {BiUserCheck} from 'react-icons/bi'
import {HiOutlineChevronDown} from 'react-icons/hi'
import {PiStack, PiCardsLight} from 'react-icons/pi'
import {MdManageAccounts} from 'react-icons/md'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
const SideNav = ({expanded}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [dataDropdownVisible, setDataDropdownVisible] = useState(false);
    const [hoverdataDropdownVisible, setHoverDataDropdownVisible] = useState(false);

    const toggleDataDropdown = () => {
        if (!expanded) {
          setDataDropdownVisible(!dataDropdownVisible);
        }
      };
    
      const handleMouseEnter = () => {
        if (expanded) {
          setHoverDataDropdownVisible(true);
        }
      };
    
      const handleMouseLeave = () => {
        if (expanded) {
          setHoverDataDropdownVisible(false);
        }
      };

      const handleDropdownMouseEnterData = () => {
        if (expanded) {
        setHoverDataDropdownVisible(true);
        }
      };
      
      const handleDropdownMouseLeaveData = () => {
        if (expanded) {
        setHoverDataDropdownVisible(false);
        }
      };

    const [managementDropdownVisible, setManagementDropdownVisible] = useState(false);
    const [hovermanageDropdownVisible, setHoverManageDropdownVisible] = useState(false);



    const toggleManagementDropdown = () => {
        if (!expanded) {
            setManagementDropdownVisible(!managementDropdownVisible);

        }
      };
    
      const handleMouseEnterManage = () => {
        if (expanded) {
          setHoverManageDropdownVisible(true);
        }
      };
    
      const handleMouseLeaveManage = () => {
        if (!hovermanageDropdownVisible, expanded) {
          setHoverManageDropdownVisible(false);
        }
        
      };
      const handleDropdownMouseEnter = () => {
        if (expanded) {
        setHoverManageDropdownVisible(true);
        }
      };
      
      const handleDropdownMouseLeave = () => {
        if (expanded) {
        setHoverManageDropdownVisible(false);
        }
      };

    const [infoHomeNavbar, setInfoHomeNavbar] = useState(false);


      const handleNavbarHomeMouseEnter = () => {
        if (expanded) {
        setInfoHomeNavbar(true);
        }
      };
      
      const handleNavbarHomeMouseLeave = () => {
        if (expanded) {
        setInfoHomeNavbar(false);
        }
      };

  return (
                <div>
                    <nav className={`bg-white h-[100vh] z-50 transition-all duration-[700ms] fixed ${expanded ? 'max-lg:w-[320px] lg:w-[65px]':'max-lg:w-0 lg:w-[320px]'}`}>
                        <ul className="w-full bg-transparent flex justify-center items-center h-[72px]">
                            <h1 className={`uppercase font-semibold opacity-75 font antialiased tracking-[2px] font-poppins ${expanded ? 'lg:hidden':'max-lg:hidden'}`}>Unipin</h1>
                            <h1 className={`uppercase font-semibold opacity-75 font antialiased tracking-[2px] font-poppins ${expanded ? 'max-lg:hidden':'max-lg:hidden lg:hidden'}`}>up</h1>
                        </ul>
                        <ul className={`${expanded?'mb-[30px] ':'px-5 max-lg:hidden'}`}>
                            <p className={`uppercase font-normal text-xs antialiased tracking-[1.5px] font-poppins opacity-40  ${expanded ? 'hidden':''}`}>dashboard</p>
                            <div className='my-[15px]'>
                                <div className={`flex flex-col gap-y-[13px] relative  ${expanded?'px-1':'w-full h-[55px] flex justify-center px-4'}`}>
                                    <a href='/admin/dashboard' onMouseEnter={handleNavbarHomeMouseEnter} onMouseLeave={handleNavbarHomeMouseLeave} className={`flex gap-x-[24.5px] items-center before:absolute  ${currentPath === '/admin/dashboard' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:-left-[20px]  ') : 'w-full h-[50px]'} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}>
                                        <AiFillFire className={`opacity-100 ${expanded ? (currentPath === '/' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                                        <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Home</p>
                                    </a>
                                    {infoHomeNavbar && (
                                        <div className={`absolute w-auto h-full bg-transparent  text-white flex items-center left-[75px] ${expanded ? '' : 'hidden'}`}>
                                 <div className='bg-black py-[4px] px-[5px] rounded-sm '>
                                        <p className='font-semibold font-poppins text-sm z-50'>Home</p>
                                 </div>
                             </div>
                        )}
                    </div>
                </div>
            </ul>
            <ul className={`relative bg-transparent ${expanded?'mb-[30px]':'px-5 max-lg:hidden'}`}>
                <p className={`uppercase font-normal text-xs antialiased tracking-[1.5px] font-poppins opacity-40 ${expanded ? 'hidden':''}`}>Users</p>
                <div className={`flex flex-col gap-y-[13px] relative   ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-4'}`}>
                <button
                    onClick={toggleDataDropdown}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`relative flex items-center  ${currentPath === '/admin/data/user' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md justify-center' : ' before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:-left-[20px] ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : 'justify-between'}`}
                    >
                        <div className='flex gap-x-[24.5px] items-center '>
                       <PiStack className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Data</p>
                        </div>
                        <div className={`${expanded?'hidden':''}`}>
                            <HiOutlineChevronDown className='text-md opacity-60'/>
                        </div>
                    </button>
                    <div 
                        onMouseEnter={handleDropdownMouseEnterData}
                        onMouseLeave={handleDropdownMouseLeaveData}
                        className={`absolute top-0 bg-transparent left-[65px] pl-[10px] ${expanded ? '':'hidden'}`}>
                        {hoverdataDropdownVisible && (
                            <div className=' bg-white text-black w-[200px] rounded-md h-auto py-[20px]'>
                                <p className='opacity-60 text-sm  font-bold pb-5 border-b-[1px] border-black border-opacity-30 px-[20px]'>Data</p>
                                <a href='/admin/manage/usermanagement' className={`py-[15px] flex gap-x-[24.5px] hover:text-primary items-center px-[20px] before:absolute `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity`}>Admin </p>
                                </a>
                                <a href='/admin/manage/adminmanagement' className={`flex gap-x-[24.5px] items-center hover:text-primary px-[20px] before:absolute py-[15px] `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity`}>User</p>
                                </a>
                            </div>
                            )}
                   </div>
                </div>
                <div className={`${expanded ? 'hidden':''}`}>
                     {dataDropdownVisible && (
                        <div
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                         className={`text-black px-[30px] mx-[23px] border-l-[1px] border-opacity-60 border-black before:w-20 before:h-20 before:bg-black   `}>
                             <div className={`flex flex-col bg-transparent`}>
                                <a href='/admin/manage/usermanagement' className={` py-[15px] flex gap-x-[24.5px] items-center before:absolute ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}>
                                    <SiPhpmyadmin className={`opacity-60 `}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>User</p>
                                </a>
                                <a href='/admin/manage/adminmanagement' className={`flex gap-x-[24.5px] items-center before:absolute py-[15px] ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}>
                                    <BiUserCheck className={`opacity-60`}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Admin</p>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                <div className={`flex flex-col gap-y-[13px]   ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-4'}`}>
                <a
                    href='/admin/card'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/data/users' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <PiCardsLight className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Card</p>
                    </a>
                </div>
                <div className={`flex flex-col gap-y-[13px] bg-transparent relative ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-4'}`}>
                <button
                    onClick={toggleManagementDropdown}
                    onMouseEnter={handleMouseEnterManage}
                    onMouseLeave={handleMouseLeaveManage}
                    className={`relative flex items-center ${currentPath === '/admin/manage/usermanagement' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px] ') : 'w-full h-[60px] '} ${currentPath === '/admin/manage/adminmanagement' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px] ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : 'justify-between'}`}
                    >
                        <div className='flex gap-x-[24.5px] items-center '>
                       <MdManageAccounts className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Manage</p>
                        </div>
                        <div className={`${expanded?'hidden':''}`}>
                            <HiOutlineChevronDown className={`text-md opacity-60 `}/>
                        </div>
                    </button>
                    <div 
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                        className={`absolute top-0 bg-transparent left-[65px] pl-[10px] ${expanded ? '':'hidden'}`}>
                        {hovermanageDropdownVisible && (
                            <div
                             className='bg-white  text-black w-[200px] rounded-md h-auto py-[20px]'>
                                <p className='opacity-60 text-sm pb-5 border-b-[1px] border-black border-opacity-30 font-bold mb-3 px-[20px]'>Manage</p>
                                <a href='/admin/manage/usermanagement' className={`py-[15px] flex gap-x-[24.5px] items-center px-[20px] before:absolute ${currentPath === '/admin/manage/usermanagement' ? 'text-primary' : ' '} `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity hover:text-primary`}>User Management</p>
                                </a>
                                <a href='/admin/manage/adminmanagement' className={`flex gap-x-[24.5px] items-center px-[20px] before:absolute py-[15px] `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity hover:text-primary`}>Admin Management</p>
                                </a>
                            </div>
                        )}
                   </div>
                </div>
                <div className={`${expanded ? 'hidden':''}`}>
                     {managementDropdownVisible && (
                        <div
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                         className={`text-black px-[30px] mx-[23px] border-l-[1px] border-opacity-60 border-black before:w-20 before:h-20 before:bg-black   `}>
                             <div className={`flex flex-col bg-transparent`}>
                                <a href='/admin/manage/usermanagement' className={` py-[15px] flex gap-x-[24.5px] items-center before:absolute ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}>
                                    <SiPhpmyadmin className={`opacity-60 `}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>User Management</p>
                                </a>
                                <a href='/admin/manage/adminmanagement' className={`flex gap-x-[24.5px] items-center before:absolute py-[15px] ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}>
                                    <BiUserCheck className={`opacity-60`}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Admin Management</p>
                                </a>
                            </div>
                        </div>
                    )}
                
                </div>
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-4'}`}>
                <a
                    href='/admin/card'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/data/users' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <SiPrivateinternetaccess className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Role</p>
                    </a>
                </div>
                
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-4'}`}>
                <a
                    href='/admin/info'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/info' ?  (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <FiInfo className={`opacity-100 ${expanded ? (currentPath === '/admin/info' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Info</p>
                    </a>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default SideNav