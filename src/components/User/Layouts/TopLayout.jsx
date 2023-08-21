import  { useState, useEffect } from 'react';
import LoginModal from './LoginModal';
import Dropdown from '../Dropdown/Dropdown';
import DarkModeToggle from '../../Admin/Layouts/DarkModeToggle';

const TopLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in (e.g., by verifying the presence of the token)
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className="dark:bg-Darkmode bg-lightmode w-full h-[6.25rem] flex items-center lg:px-[190px] max-lg:px-[40px] justify-between backdrop-blur-md bg-opacity-50 fixed z-40">
            <p className="text-black text-opacity-80 dark:text-white">Logo</p>
            <input
                type="search"
                placeholder="Cari Disini"
                className="max-lg:hidden w-5/12 bg-transparent border-[0.1px] rounded-xl p-2 border-black border-opacity-30 dark:text-white text-black text-opacity-80 dark:border-gray-500 focus:outline-none dark:focus:border-gray-500"
            />
            <ul className='flex gap-7 justify-center items-center'>
                {isLoggedIn ? (
                    <div>
                        <Dropdown setIsLoggedIn={setIsLoggedIn}/>
                    </div>
                ) : (
                    <li>
                        <button
                            className="dark:bg-blue-500 bg-yellow-500 dark:text-white text-white px-6 py-2 rounded-lg"
                            onClick={openModal}
                        >
                            Masuk
                        </button>
                    </li>
                )}
                <DarkModeToggle/>
            </ul>

            {/* The modal */}
            {isModalOpen && <LoginModal closeModal={closeModal} />}
        </div>
    );
};

export default TopLayout;
