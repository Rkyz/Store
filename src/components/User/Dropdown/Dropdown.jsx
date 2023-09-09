import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import {AiOutlineLogout} from 'react-icons/ai'
import UserPicture from "../Layouts/UserPicture"



export default function Dropdown({setIsLoggedIn}) {
    const [username , setUsername] = useState();
        const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };
    useEffect(() => {
        getUserSigninData();
      }, []);

    const getUserSigninData = async () => {
        try {
            const token = localStorage.getItem('token'); // Ambil token dari local storage
            if (!token) {
                // Jika tidak ada token, berikan respons sesuai kebutuhan Anda
                return { success: false, message: "Token not found." };
            }
    
            const response = await axios.get('http://localhost:3000/auth/usersignin', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            console.log(response.data.data.username)
            setUsername(response.data.data.username)
        } catch (error) {
            console.error('An error occurred while fetching user signin data:', error);
            return { success: false, message: "An error occurred while fetching user signin data." };
        }
    };
  return (
    <div className=" top-16 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
        <Menu.Button className="flex items-center gap-2 w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <UserPicture/>
                <p className='text-black dark:text-white'>{username}</p>
            </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={handleLogout}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <AiOutlineLogout
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineLogout
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

Dropdown.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
  };
