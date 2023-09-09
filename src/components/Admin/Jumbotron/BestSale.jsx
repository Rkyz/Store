
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LiaFlagUsaSolid} from 'react-icons/lia'
import { useState, useEffect } from "react";

const BestSale = () => {
  const [slidesToShow, setSlidesToShow] = useState(7);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Update slidesToShow based on screen width
      if (screenWidth < 1650 && screenWidth >= 1331) {
        setSlidesToShow(6);
      } else if (screenWidth < 1331 && screenWidth >= 1024) {
        setSlidesToShow(5); // Adjust this value as needed
      } else if (screenWidth < 1024 && screenWidth >= 768)  {
        setSlidesToShow(4)
      } else if (screenWidth < 768){
        setSlidesToShow(3)
      } else {
        setSlidesToShow(7); 
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [openCountry, setOpenCountry] = useState(false);

  const toggleOpenCountry = () => {
      setOpenCountry(!openCountry);
  };

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleOpenCountryHover = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full flex items-center gap-5 px-7">
      <div className=" mt-10 bg-transparent relative rel bg-white w-[100%] rounded-md ">
        <div className="w-full h-[70px] flex items-center border-b-[1px] px-[25px] justify-between relative  ">
          <p className="font-poppins font-bold capitalize">top sales</p>
          <button className="hover:before:w-[50px] hover:before:h-[50px] hover:before:bg-black " onClick={toggleOpenCountry} onMouseEnter={toggleOpenCountryHover} onMouseLeave={toggleOpenCountryHover}><LiaFlagUsaSolid className="text-3xl "/></button>
          {isDropdownOpen && (
        <div className="absolute right-[70px] top-[25px] flex items-center justify-center rounded-sm bg-primary px-2 py-[2px] z-50 after:w-2 after:h-2 after:bg-primary after:absolute after:-right-1 after:top-[8px] after:rotate-45">
          <span className="text-white text-sm">Country</span>
        </div>
      )}
          </div>
            {/* Swiper slides */}
            <Slider {...settings} className="mt-8 bg-transparent">
            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.2jnd8KHEIipnx4nBlEqXyAHaEK&pid=Api&rs=1&c=1&qlt=95&w=211&h=118" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">mobile legend</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">24 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.dtWBCTg9TM_3c_mAhoGtRAHaEK&pid=Api&rs=1&c=1&qlt=95&w=215&h=120" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">freefire</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">99 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.dtWBCTg9TM_3c_mAhoGtRAHaEK&pid=Api&rs=1&c=1&qlt=95&w=215&h=120" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">freefire</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">99 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.hyhsT2zhe4LTpMRqp1i5MQHaHa&pid=Api&P=0&h=180" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">valorant</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">99 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.p5hDIHrqGjdqbwkdhsnEpwHaEK&pid=Api&P=0&h=180" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">clash of clan</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">99 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.p5hDIHrqGjdqbwkdhsnEpwHaEK&pid=Api&P=0&h=180" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">clash of clan</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">99 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.p5hDIHrqGjdqbwkdhsnEpwHaEK&pid=Api&P=0&h=180" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">clash of clan</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">99 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-transparent w-[200px] h-[230px] flex-shrink-0 flex flex-col items-center">
                <div className="bg-blue-500 rounded-sm w-[80px] h-[80px] overflow-hidden">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.p5hDIHrqGjdqbwkdhsnEpwHaEK&pid=Api&P=0&h=180" alt="idk" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-[4px] mt-3 items-center">
                  <p className="text-[14px] font-poppins capitalize opacity-75">clash of clan</p>
                  <p className="text-gray-500 text-[12px] font-poppins capitalize">99 sales</p>
                  <button className="w-[66px] h-[35px] mt-[15px] bg-blue-500 text-white rounded-[3px] font-poppins text-[12px]">Detail</button>
                </div>
              </div>
            </div>
            </Slider>
            {/* Add more SwiperSlides as needed */}
          {openCountry && (
            <div className="absolute right-[20px] top-[50px] h-[79%] bg-white border border-gray-500 border-opacity-20 rounded-lg w-[300px] items-center flex justify-center font-poppins font-bold">Gak Tahu Buat Apa Yah</div>
          )}
          </div>
    </div>
  );
};

export default BestSale;
