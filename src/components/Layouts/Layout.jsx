import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GiHamburger } from 'react-icons/gi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { AiOutlinePercentage } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiCalculator2 } from 'react-icons/ci';
import { TbZodiacLibra } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types'; // Import PropTypes

// eslint-disable-next-line react/prop-types
const Layout = ({ expanded, toggleExpansion, handleSearchClick }) => {
    const [showLogo, setShowLogo] = useState(false); 
    const location = useLocation();

    const currentPath = location.pathname;

    useEffect(() => {
        const delayTimeout = setTimeout(() => {
            setShowLogo(expanded);
        }, expanded ? 650 : 0);
        return () => {
            clearTimeout(delayTimeout);
        };
    }, [expanded]);


    return (
        <div>
            <nav
                className={`text-white bg-Darkmode z-50 ${
                    expanded
                    ? 'w-[260px] max-lg:h-full max-lg:bg-Darkmode max-lg:bg-opacity-30 lg:transition-width lg:duration-1000'
                    : 'w-[100px] lg:transition-width max-lg:transition-width max-lg:duration-0'
                } h-[100%] max-lg:h-[90px] fixed bottom-0 left-0 right-0 backdrop-blur-md bg-opacity-50 max-lg:bg-opacity-100 justify-center flex felx-col max-lg:w-full`}
                >

                <ul className='flex flex-col w-full max-lg:items-center max-lg:flex-row max-lg:justify-center z-30'>
                    <li className='flex gap-4 items-center justify-between h-[100px] p-8 max-lg:hidden'>
                        <button onClick={toggleExpansion}>
                            <GiHamburger className={`text-3xl ${expanded ? 'text-white' : 'text-white'}`} />
                        </button>
                        <p className={`${showLogo ? 'block' : 'hidden'}`}>Logo</p>
                    </li>
                    <li className={`h-[70px] flex items-center lg:px-8 max-lg:p-5 md:p-9 ${expanded ? 'max-lg:hidden' : ''} ${currentPath === '/' ? 'bg-blue-500 max-lg:rounded-full max-lg:w-[65px] max-lg:h-[65px]' : ''}`}>
                        <NavLink to='/' className={`text-sm w-full flex items-center ${expanded ? 'flex-row gap-6' : 'flex-col'}`}>
                            <HiOutlineHomeModern className='text-3xl' />
                            <p className='max-lg:hidden'>Beranda</p>
                        </NavLink>
                    </li>
                    <li className={`h-[70px] flex items-center lg:px-8 max-lg:p-5 md:p-9 ${expanded ? 'max-lg:hidden' : ''}  ${currentPath === '/promo' ? 'bg-blue-500 max-lg:rounded-full max-lg:w-[65px] max-lg:h-[65px]' : ''}`}>
                        <NavLink to='/promo' className={`text-sm w-full flex items-center ${expanded ? 'flex-row gap-6' : 'flex-col'}`}>
                            <AiOutlinePercentage className='text-3xl' />
                            <p className='max-lg:hidden'>Promo</p>
                        </NavLink>
                    </li>
                    <li className={`lg:hidden h-[7vh] flex items-center px-6 relative bottom-7 ${expanded ? 'max-lg:hidden' : ''} ${currentPath === '/game' ? 'bg-blue-500' : ''}`}>
                    <button
                        className={`text-sm flex bg-yellow-500 hover:bg-blue-500 transition-colors duration-500 w-[65px] h-[65px] rounded-full justify-center items-center ${expanded ? 'flex-row gap-6' : 'flex-col'}`}
                        onClick={handleSearchClick}
                    >
                        <BsSearch className='text-3xl max-lg:text-2xl' />
                    </button>
                    </li>
                    <li className={`h-[70px] flex items-center lg:px-8 max-lg:p-5 md:px-9 ${expanded ? 'max-lg:hidden' : ''} ${currentPath === '/game' ? 'bg-blue-500 max-lg:rounded-full max-lg:w-[65px] max-lg:h-[65px]' : ''}`}>
                        <NavLink to='/game' className={`text-sm w-full flex items-center ${expanded ? 'flex-row gap-6' : 'flex-col'}`}>
                            <IoGameControllerOutline className='text-3xl' />
                            <p className='max-lg:hidden'>Game</p>
                        </NavLink>
                    </li>
                    <li className={`h-[7vh] flex items-center lg:px-8 max-lg:p-5 md:px-9 lg:hidden ${expanded ? 'max-lg:hidden' : ''}`}>
                        <button onClick={toggleExpansion}>
                            <GiHamburger className={`text-3xl ${expanded ? 'text-white' : 'text-white'}`} />
                        </button>
                        <p className={`max-lg:hidden ${showLogo ? 'block' : 'hidden'}`}>Logo</p>
                    </li>
                    <span className={`w-full h-[0.2px] max-lg:hidden bg-white ${expanded ? ' h-[0.5px]' : 'hidden'}`}></span>
                    <div className={`absolute max-lg:overflow-hidden lg:relative max-lg:backdrop-blur-3xl max-lg:bg-Darkmode max-lg:z-50 max-lg:text-white max-lg:rounded-ss-[2rem] max-lg:rounded-se-[2rem] ${expanded ? 'h-auto max-lg:w-[32rem] max-md:w-[96%] bottom-0 pb-10' : ' hidden'}`} style={{ backdropFilter: expanded ? 'none' : 'blue(10px)' }}>
                        <li className={`lg:hidden h-[7vh] flex items-center px-8 justify-between ${expanded ? '' : 'bg-transparent'} ${currentPath === '/hitungwr' && expanded ? 'bg-blue-500' : ''}`}>
                            <h1>Logo</h1>
                            <button onClick={toggleExpansion}>Close</button> 
                        </li>
                        <li className={`h-[7vh] flex items-center px-8 ${expanded ? '' : 'bg-transparent'} ${currentPath === '/hitungwr' && expanded ? 'bg-blue-500' : ''}`}>
                            <NavLink to='/hitungwr' className={`text-sm w-full flex items-center ${expanded ? 'flex-row gap-6' : 'flex-col hidden'}`}>
                                <CiCalculator2 className='text-3xl font-bold' />
                                Winrate
                            </NavLink>
                        </li>
                        <li className={`h-[7vh] flex items-center px-8 ${expanded ? '' : 'bg-transparent'} ${currentPath === '/hitungzodiac' && expanded ? 'bg-blue-500' : ''}`}>
                        <NavLink to='/hitungwr' className={`text-sm w-full flex items-center ${expanded ? 'flex-row gap-6' : 'flex-col hidden'}`}>
                            <TbZodiacLibra className='text-3xl font-bold' />
                            Zodiac
                        </NavLink>
                    </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

Layout.propTypes = {
    CardList: PropTypes.array.isRequired, 
  };

export default Layout;
