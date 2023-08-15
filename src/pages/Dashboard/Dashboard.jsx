import Card from "../../components/Card/Card";
import TabCard from "../../components/Card/TabCard";
import Footer from "../../components/Layouts/Footer";
import Layout from "../../components/Layouts/Layout";
import SwiperCard from "../../components/Layouts/SwiperCard";
import TopLayout from "../../components/Layouts/TopLayout";
import {useState, useEffect} from "react";
import {GrLinkPrevious, GrLinkNext} from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import { AiOutlineUnorderedList } from "react-icons/ai";
import ButtonCS from "../../components/CustomerService/ButtonCS";
import ChatAdmin from "../../components/CustomerService/ChatAdmin";

const Dashboard = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };
    const [openCs, setOpenCs] = useState(false);

    const toggleOpenCs = () => {
        setOpenCs(!openCs);
    };
    const [CardList, setCardList] = useState(false);

    const toggleList = () => {
        setCardList(!CardList);
    };

    const [searchActive, setSearchActive] = useState(false);

    const handleSearchClick = () => {
      setSearchActive(!searchActive);
    };


    const [selectedVideo, setSelectedVideo] = useState(1);

    const videos = [
        { id: 1, url: 'https://www.youtube.com/embed/eLD6crse074', thumbnail: 'https://www.youtube.com/embed/eLD6crse074.jpg' },
        { id: 2, url: 'https://www.youtube.com/embed/zPWA5w0Yxco', thumbnail: 'https://www.youtube.com/embed/zPWA5w0Yxco.jpg' },
        { id: 3, url: 'https://www.youtube.com/embed/eLD6crse074', thumbnail: 'https://www.youtube.com/embed/eLD6crse074.jpg' },
      ];
      
  
    const handleVideoClick = (videoId) => {
      setSelectedVideo(videoId);
    };


    
  const [swiperDirection, setSwiperDirection] = useState('vertical');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSwiperDirection('horizontal');
      } else {
        setSwiperDirection('vertical');
      }
    };

    handleResize(); // Panggil fungsi pertama kali
    window.addEventListener('resize', handleResize);

    // Cleanup listener pada unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className="relative ">
            <div className="flex transition-all duration-1000">
                <Layout expanded={expanded} handleSearchClick={handleSearchClick}  toggleExpansion={toggleExpansion}/>
                <TopLayout expanded={expanded}/>
                <ChatAdmin openCs={openCs} toggleOpenCs={toggleOpenCs}/>
            </div>
            <div className="max-lg:h-[50rem] scrollbar-hidden relative">
                <div className={`lg:ml-[130px] max-lg:mx-[30px] mt-[30px] max-lg:mr-[30px] lg:mr-[30px] h-[40vh]  ${searchActive ? 'max-lg:mx-[0px]' : ''
                              }`}>
                    <SwiperCard/>
                    <div className="flex justify-between">
                        <ul>
                            <p className="text-yellow-500 mt-5 text-[12px] uppercase font-semibold ">
                                Game Populer
                            </p>
                            <h1 className="text-white text-[32px] font-bold">Tren Sekarang</h1>
                        </ul>
                        <ul className="flex items-end gap-3">
                            <button
                                className="w-10 h-10 border border-white bg-white rounded-full text-center flex justify-center items-center">
                                <GrLinkPrevious className="text-white"/>
                            </button>
                            <button
                                className="w-10 h-10 border border-white bg-white rounded-full text-center flex justify-center items-center">
                                <GrLinkNext className="text-white"/>
                            </button>
                        </ul>
                    </div>
                    <Card/>
                    <div 
                        className={`w-full flex text-center justify-center gap-3 ${
                                CardList ? 'mb-6' : ' mb-6'
                              } ${
                                searchActive ? 'max-lg:fixed bg-black max-lg:z-40 max-lg:top-0 max-lg:bottom-0 max-lg:left-0 max-lg:right-0 max-lg:w-full max-lg:h-full items-start max-lg:p-10' : 'items-center'
                              }`}>
                    <input
                            type="search"
                            placeholder="Cari Disini"
                            className={`max-lg:w-[90%] lg:w-[100%] bg-transparent border-[0.1px] rounded-xl p-2 text-white border-gray-500 focus:outline-none focus:border-gray-500 lg:hidden ${searchActive ? 'max-lg:w-full':''}`}
                        />
                    <button className={`lg:hidden ${searchActive ? 'max-lg:hidden':''}`} onClick={toggleList}>
                      <AiOutlineUnorderedList className="text-white text-4xl"/>
                    </button>
                    </div>
                    <TabCard CardList={CardList} />
                    <div className="w-full flex justify-center mt-8">
                        <button className=" text-white  w-[88%] max-lg:w-full bg-yellow-500 h-10 rounded-md">Lebih Banyak</button>
                    </div>
                    <div className="w-full flex h-[999px] flex-col mt-10">
                        <p className="text-yellow-500 mt-5 text-[12px] uppercase font-semibold ">
                            Saluran Game
                        </p>
                        <h1 className="text-white text-[32px] font-bold mb-7">Info Terkini</h1>
                        <div className="w-full flex max-lg:flex-col mb-10">
                        <div className="w-full h-[35rem] flex max-lg:flex-col">
                            <div className="w-[70%] bg-gray-300 max-lg:w-full h-[100%] max-lg:h-[70%]">
                                {selectedVideo && (
                                <iframe
                                    title="Video Player"
                                    src={videos.find((video) => video.id === selectedVideo)?.url}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                                )}
                            </div>
                            <div className="w-[30%] max-lg:w-full h-[100%] max-lg:h-[30%]">
                            <Swiper
                                direction={swiperDirection}
                                modules={Pagination}
                                pagination={{ clickable: true }}
                                className="w-full h-full bg-yellow-500"
                                >
                                {videos.map((video) => (
                                    <SwiperSlide key={video.id}>
                                    <div
                                        className="flex justify-center items-center h-full cursor-pointer"
                                        onClick={() => handleVideoClick(video.id)}
                                        style={{ backgroundImage: `url(${video.thumbnail})`, backgroundSize: 'cover' }}
                                    >
                                        Video {video.id}
                                    </div>
                                    </SwiperSlide>
                                ))}
                                </Swiper>
                            </div>
                            </div>
                        </div>
                    <Footer/>
                    </div>
                    {/* <div className="w-full flex h-[999px] flex-col mt-10">
                        <p className="text-yellow-500 mt-5 text-[12px] uppercase font-semibold ">
                            Saluran Game
                        </p>
                        <h1 className="text-white text-[32px] font-bold mb-7">Info Terkini</h1>
                    </div> */}
                </div>
            </div>
            <ButtonCS toggleOpenCs={toggleOpenCs} openCs={openCs}/>
        </div>
    );
};

export default Dashboard;
