import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import { AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginModal = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        closeModal();
    };

    return (
        <Transition.Root show={true} as={React.Fragment}>
            <Dialog
                as="div"
                static
                className="z-50 fixed inset-0 overflow-y-auto flex justify-center items-center"
                open={true}
                onClose={closeModal}
            >
                <div className="backdrop-blur-md bg-Darkmode bg-opacity-50 rounded-3xl shadow-lg w-[90%] sm:w-[50%] max-h-[100%] sm:max-h-[100%] overflow-hidden flex">
                    <div className="bg-blue-500 w-[50%] relative">
                        <button
                            onClick={closeModal}
                            className="absolute text-white translate-x-4 translate-y-4 text-3xl focus:outline-none"
                        >
                            <AiOutlineClose />
                        </button>
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.896-CTRPJUm-rJl8u5dv0gHaDl&pid=Api&P=0&h=180"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[50%] h-[50vh] p-4 flex flex-col justify-center">
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-center text-white text-xl'>Login</h1>
                            <div className="my-5 mx-5">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="mt-1 p-2 w-full focus:ring-0 bg-transparent text-white outline-none border-b-2 border-white"
                                />
                            </div>
                            <div className="my-5 mx-5">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-white"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="mt-1 p-2 w-full focus:ring-0 bg-transparent outline-none text-white border-b-2 border-white"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2 right-2 text-white focus:outline-none"
                                        onClick={handleShowPassword}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible className='text-2xl' /> : <AiOutlineEye className='text-2xl' />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center mt-7">
                                <button
                                    type="submit"
                                    className="bg-blue-500 w-10/12 h-14 rounded-full text-white"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="flex justify-center mt-3 text-white">
                                <p>Belum punya akun? <a href="" className='text-yellow-500'>Daftar Sekarang</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

LoginModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default LoginModal;
