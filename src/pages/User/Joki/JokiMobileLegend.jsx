import Layout from "../../../components/User/Layouts/Layout"
import TopLayout from "../../../components/User/Layouts/TopLayout"
import ChatAdmin from "../../../components/User/CustomerService/ChatAdmin"
import { useState, useEffect } from "react"
import ButtonCS from "../../../components/User/CustomerService/ButtonCS"
import { BsUnlock, BsPerson, BsEye, BsEyeSlash, BsImages} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {BiSelectMultiple, BiCategory} from 'react-icons/bi'
import {AiOutlineLogin} from 'react-icons/ai'
import axios from 'axios';
import Swal from 'sweetalert2';


const JokiPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [openCs, setOpenCs] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null); 
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
    setInputType(prevInputType => (prevInputType === 'password' ? 'text' : 'password'));
  };

  const toggleOpenCs = () => {
    setOpenCs(!openCs);
 };

  const toggleExpansion = () => {
    setExpanded(!expanded);
};


  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const steps = [
    'Lengkapi Data Joki dengan Teliti (Progress)',
    'Pilih Produk yang diinginkan (Progress)',
    'Pilih Metode Pembayaran (Progress)',
    'Masukkan Nomor Whatsapp (Progress)',
    'Klik Beli Sekarang & Melakukan Pembayaran (Progress)',
    'Admin akan mengonfirmasi pesanan jika sudah selesai melalui whatsapp (Progress)',
  ];

  const notes = [
    'Matikan centang verify/verikasi akun di pengaturan ML',
    'Jika akun dilogin 3x selama proses joki berlangsung maka dianggap selesai dan uang hangus',
    'Proses pengerjaan tergantung orderan 1x24Jam Max 3 Hari'
  ]

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const response = await axios.post('http://localhost:3000/joki/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
  
      // Menampilkan SweetAlert2 untuk sukses
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Form submitted successfully!',
      });
  
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
  
      // Menampilkan SweetAlert2 untuk error
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while submitting the form.',
      });
    }
  };
  
  useEffect(() => {
    // fetchOptions();
    getDataAll();
  }, []);

  // const handleOptionClick = option => {
  //   setSelectedOption(option);
  //   setIsOpenLogin(false);
  // };

  const [heroes, setHeroes] = useState([]);
  const [selectedEnum, setSelectedEnum] = useState('');

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = () => {
    axios.get('http://localhost:3000/hero/all')
      .then(response => {
        const heroesData = response.data.heroes;
        setHeroes(heroesData);
      })
      .catch(error => {
        console.error('Error fetching heroes:', error);
      });
  };

  const handleSelectChange = (event) => {
    setSelectedEnum(event.target.value);
  };



  const getDataAll = () => {
    axios.get('http://localhost:3000/game')
      .then(response => {
        const heroes = response.data;
        // setLogin(heroes);
        console.log(heroes);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  };

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setSelectedFileName(file.name); // Update the selected file name
    }
  };




  return (
    <div className="relative ">
    <div className="flex transition-all duration-1000">
        <Layout expanded={expanded} handleSearchClick={handleSearchClick}  toggleExpansion={toggleExpansion}/>
        <TopLayout expanded={expanded}/>
        <ChatAdmin openCs={openCs} toggleOpenCs={toggleOpenCs}/>
    </div>
    <div className="max-lg:h-[50rem] scrollbar-hidden relative">
        <div className={`lg:ml-[130px] max-lg:mx-[30px] max-md:mx-[15px] lg:mr-[30px] h-[40vh]  ${searchActive ? 'max-lg:mx-[10px]' : ''}`}>
          <div className="text-white mt-[130px] flex max-lg:flex-col">
            <div className="max-lg:w-full bg-transparent lg:w-[50%] p-5">
                <img src="https://images2.alphacoders.com/109/1099883.jpg" className="w-[100px] object-cover bg-center rounded-full h-[100px] ml-5 mb-3 bg-white" alt="" />
                <div>
                    <h2 className="text-lg font-roboto font-bold">Joki Mobile Legend</h2>
                    <ol className=" mt-4 font-roboto font-semibold">
                        {steps.map((step, index) => (
                        <li key={index} className="text-sm ml-5 mb-2">
                            {index + 1}. {/* Menampilkan nomor urut */}
                            {step}
                        </li>
                        ))}
                    </ol>
                    <h2 className="text-lg font-roboto font-bold my-3">Notes</h2>
                    <ol className="w-[80%] font-semibold font-roboto">
                    {notes.map((note, index) => (
                        <li key={index} className="text-sm mb-1">
                            - {/* Menampilkan nomor urut */}
                            {note}
                        </li>
                        ))}
                    </ol>
                    <h2 className="text-sm mt-5 font-roboto font-bold">JAM BUKA 10.00 - 21.00 WIB</h2>
                </div>
            </div>
            <div className="maxlg:w-full lg:w-[50%] p-2">
                <div className="w-full bg-Darkmode p-5 rounded-2xl">
                    <div className="flex gap-3 mb-5 items-center">
                    <p className="font-roboto font-extrabold text-2xl bg-blue-500 h-[40px] w-[40px] flex justify-center items-center rounded-full">1</p>
                    <h1 className="font-roboto font-bold text-2xl">Akun Game</h1>
                    </div>
                    <form action="" className="flex flex-col gap-3"  onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="bg-transparent border border-gray-500 rounded-md w-full h-14 flex justify-center items-center">
                            <TfiEmail className="w-[10%] text-2xl"/>
                            <input type="email" className="w-[90%] h-full bg-transparent outline-none" placeholder="Email" name="email"/>
                        </div>
                        <div className="bg-transparent border border-gray-500 rounded-md w-full h-14 flex justify-center items-center">
                            <BsUnlock className="w-[10%] text-2xl" />
                            <input
                                type={inputType}
                                className="w-[83%] h-full bg-transparent outline-none pr-2"
                                placeholder="Password"
                                name="password"
                            />
                            <button
                                type="button"
                                className="h-full flex justify-center items-center w-[7%] text-gray-600 hover:text-gray-400 focus:outline-none"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <BsEyeSlash className="w-6 h-6" /> : <BsEye className="w-6 h-6" />}
                            </button>
                            </div>
                        <div className="bg-transparent border border-gray-500 rounded-md w-full h-14 flex justify-center items-center">
                            <BsPerson className="w-[10%] text-2xl"/>
                            <input type="text"className="w-[90%] h-full bg-transparent outline-none" placeholder="Nickname" name="nickname"/>
                        </div>
                        <div className="bg-transparent border border-gray-500 rounded-md w-full h-14 flex justify-center items-center">
                            <BsImages className="w-[10%] text-2xl"/>
                            <input
                          type="file"
                          id="imageInput"
                          className="bg-transparent opacity-0 absolute cursor-pointer"
                          name="image"
                          onChange={(event) => handleFileInputChange(event)} 
                        />
                        <span className="w-[90%] h-full bg-transparent outline-none text-gray-400 flex items-center">
                          {selectedFileName || 'Image'} {/* Display selected file name */}
                        </span>
                        </div>
                        <div className="bg-transparent border border-gray-500 rounded-md w-full h-14 flex justify-center items-center">
                          <BiSelectMultiple className="w-[10%] text-2xl" />
                          <select
                            name="selectedEnum"
                            className="w-[90%] h-full bg-transparent text-gray-400 outline-none mr-5"
                            value={selectedEnum}
                            onChange={handleSelectChange}
                          >
                            <option value="" disabled>Hero</option>
                            {heroes.map(hero => (
                              <option key={hero.id} value={hero.enumValue}>
                                {hero.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="bg-transparent border border-gray-500 rounded-md w-full h-14 flex justify-center items-center">
                          <AiOutlineLogin className="w-[10%] text-2xl"/>
                          <select name="login" className="w-[90%] h-full bg-transparent text-gray-400 outline-none mr-5">
                            <option value="" selected>Login</option>
                            <option value="google">Google</option>
                            <option value="moonton">Moonton</option>
                            <option value="vk">Vk</option>
                            <option value="tiktok">Tiktok</option>
                            <option value="facebook">Facebook</option>
                        </select>
                        </div>
                        <div className="bg-transparent border border-gray-500 rounded-md w-full h-14 flex justify-center items-center">
                          <BiCategory className="w-[10%] text-2xl"/>
                          <select name="category" className="w-[90%] h-full bg-transparent text-gray-400 outline-none mr-5">
                            <option value="" selected>Category</option>
                            <option value="paket">Paket</option>
                            <option value="rank">Rank</option>
                            <option value="joki">Joki</option>
                            <option value="gendong">Gendong</option>
                        </select>
                        </div>
                        <button type="submit" className="bg-blue-600 mt-5 hover:bg-gray-500 h-14 rounded-lg">Submit</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
     </div>
    <ButtonCS toggleOpenCs={toggleOpenCs} openCs={openCs}/>
    </div>
  )
}

export default JokiPage