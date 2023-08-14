import  { useState } from 'react';
import LoginModal from './LoginModal';

const TopLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    

    return (
        <div className="bg-Darkmode w-full h-[6.25rem] flex items-center lg:px-[190px] max-lg:px-[40px] justify-between backdrop-blur-md bg-opacity-50 fixed z-40">
            <p className="text-white">Logo</p>
            <input
                type="search"
                placeholder="Cari Disini"
                className="max-lg:hidden w-5/12 bg-transparent border-[0.1px] rounded-xl p-2 text-white border-gray-500 focus:outline-none focus:border-gray-500"
            />
            <ul className='flex gap-4 justify-center items-center'>
                <li>
                    <button
                        className="bg-blue-500 px-6 py-2 rounded-lg"
                        onClick={openModal}
                    >
                        Masuk
                    </button>
                </li>
            </ul>

            {/* The modal */}
            {isModalOpen && <LoginModal closeModal={closeModal} />}
        </div>
    );
};

export default TopLayout;
