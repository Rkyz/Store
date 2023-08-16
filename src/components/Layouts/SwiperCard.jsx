

import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './SwiperCard.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // Import CSS for coverflow effect
import {ImFacebook} from 'react-icons/im'
import {AiOutlineWhatsApp, AiOutlineTwitter} from 'react-icons/ai'

const SwiperCard = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]} // Menambahkan module EffectCoverflow
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            effect='coverflow' // Menggunakan efek coverflow
            coverflowEffect={{ rotate: 30, slideShadows: false }} // Konfigurasi efek coverflow
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='h-full z-10 lg:mt-[130px] max-lg:mt-[130px] max-md:mt-[115px]'
        >
            <SwiperSlide>
                <div className="bg-Darkmode border-gray-600 text-white rounded-xl shadow-lg flex h-full max-lg:flex-col z-30">
                    <div className='w-[85%] max-2xl:w-[80%] max-lg:w-full max-lg:h-[75%]'>
                        <img
                            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-05/rsz_performance_pct26_sport_science_center_-_greg_wilson_2.jpg?itok=KDkCUqRs"
                            alt="Image"
                            className="w-full h-full object-cover rounded-lg z-10"
                        />
                    </div>
                    <div className='w-[15%] max-2xl:w-[20%] max-lg:w-[100%] max-lg:flex-row p-4 flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                        <h3 className='text-yellow-400'>1 August 2006</h3>
                        <h3 className="text-xl font-semibold mb-2">Lorem</h3>
                        </div>
                        <div className='flex gap-5 flex-col'>
                            <button className='text-left text-yellow-500 max-lg:hidden'>Baca Selengkapnya</button>
                            <div className="flex justify-end gap-2 relative max-lg:left-0">
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <ImFacebook/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-green-500 flex justify-center items-center">
                                    <AiOutlineWhatsApp/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <AiOutlineTwitter/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-Darkmode border-gray-600 text-white rounded-xl shadow-lg flex h-full max-lg:flex-col z-30">
                    <div className='w-[85%] max-2xl:w-[80%] max-lg:w-full max-lg:h-[75%]'>
                        <img
                            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-05/rsz_performance_pct26_sport_science_center_-_greg_wilson_2.jpg?itok=KDkCUqRs"
                            alt="Image"
                            className="w-full h-full object-cover rounded-lg z-10"
                        />
                    </div>
                    <div className='w-[15%] max-2xl:w-[20%] max-lg:w-[100%] max-lg:flex-row p-4 flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                        <h3 className='text-yellow-400'>1 August 2006</h3>
                        <h3 className="text-xl font-semibold mb-2">Lorem</h3>
                        </div>
                        <div className='flex gap-5 flex-col'>
                            <button className='text-left text-yellow-500 max-lg:hidden'>Baca Selengkapnya</button>
                            <div className="flex justify-end gap-2 relative max-lg:left-0">
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <ImFacebook/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-green-500 flex justify-center items-center">
                                    <AiOutlineWhatsApp/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <AiOutlineTwitter/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-Darkmode border-gray-600 text-white rounded-xl shadow-lg flex h-full max-lg:flex-col z-30">
                    <div className='w-[85%] max-2xl:w-[80%] max-lg:w-full max-lg:h-[75%]'>
                        <img
                            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-05/rsz_performance_pct26_sport_science_center_-_greg_wilson_2.jpg?itok=KDkCUqRs"
                            alt="Image"
                            className="w-full h-full object-cover rounded-lg z-10"
                        />
                    </div>
                    <div className='w-[15%] max-2xl:w-[20%] max-lg:w-[100%] max-lg:flex-row p-4 flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                        <h3 className='text-yellow-400'>1 August 2006</h3>
                        <h3 className="text-xl font-semibold mb-2">Lorem</h3>
                        </div>
                        <div className='flex gap-5 flex-col'>
                            <button className='text-left text-yellow-500 max-lg:hidden'>Baca Selengkapnya</button>
                            <div className="flex justify-end gap-2 relative max-lg:left-0">
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <ImFacebook/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-green-500 flex justify-center items-center">
                                    <AiOutlineWhatsApp/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <AiOutlineTwitter/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-Darkmode border-gray-600 text-white rounded-xl shadow-lg flex h-full max-lg:flex-col z-30">
                    <div className='w-[85%] max-2xl:w-[80%] max-lg:w-full max-lg:h-[75%]'>
                        <img
                            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-05/rsz_performance_pct26_sport_science_center_-_greg_wilson_2.jpg?itok=KDkCUqRs"
                            alt="Image"
                            className="w-full h-full object-cover rounded-lg z-10"
                        />
                    </div>
                    <div className='w-[15%] max-2xl:w-[20%] max-lg:w-[100%] max-lg:flex-row p-4 flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                        <h3 className='text-yellow-400'>1 August 2006</h3>
                        <h3 className="text-xl font-semibold mb-2">Lorem</h3>
                        </div>
                        <div className='flex gap-5 flex-col'>
                            <button className='text-left text-yellow-500 max-lg:hidden'>Baca Selengkapnya</button>
                            <div className="flex justify-end gap-2 relative max-lg:left-0">
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <ImFacebook/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-green-500 flex justify-center items-center">
                                    <AiOutlineWhatsApp/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <AiOutlineTwitter/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-Darkmode border-gray-600 text-white rounded-xl shadow-lg flex h-full max-lg:flex-col z-30">
                    <div className='w-[85%] max-2xl:w-[80%] max-lg:w-full max-lg:h-[75%]'>
                        <img
                            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-05/rsz_performance_pct26_sport_science_center_-_greg_wilson_2.jpg?itok=KDkCUqRs"
                            alt="Image"
                            className="w-full h-full object-cover rounded-lg z-10"
                        />
                    </div>
                    <div className='w-[15%] max-2xl:w-[20%] max-lg:w-[100%] max-lg:flex-row p-4 flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                        <h3 className='text-yellow-400'>1 August 2006</h3>
                        <h3 className="text-xl font-semibold mb-2">Lorem</h3>
                        </div>
                        <div className='flex gap-5 flex-col'>
                            <button className='text-left text-yellow-500 max-lg:hidden'>Baca Selengkapnya</button>
                            <div className="flex justify-end gap-2 relative max-lg:left-0">
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <ImFacebook/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-green-500 flex justify-center items-center">
                                    <AiOutlineWhatsApp/>
                                </button>
                                <button className="w-7 h-7 text-white rounded-3xl bg-blue-500 flex justify-center items-center">
                                    <AiOutlineTwitter/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* Tambahkan SwiperSlide lain jika diperlukan */}
        </Swiper>
    );
};

export default SwiperCard;

