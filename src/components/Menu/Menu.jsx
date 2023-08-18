import {SlDiamond} from 'react-icons/sl'
import {TbPackages} from 'react-icons/tb'
import {GrGroup} from 'react-icons/gr'
import {BsStar, BsBoxSeam, BsHeart, BsTrophy, BsController} from 'react-icons/bs'

const Menu = () => {
  return (
    <div className="w-full mt-5 h-[400px] flex flex-col items-center overflow-hidden bg-transparent rounded-lg ">
        <ul className="lg:w-[800px] max-lg:w-[70%] h-[50%]  flex justify-around items-center mx-5 gap-4">
            <li className="flex flex-col text-white gap-y-3 items-center ">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <SlDiamond className='text-3xl'/>
                </a>
                <p>Diamond</p>
            </li>
            <li className="flex flex-col text-white gap-y-3 items-center">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <BsStar className='text-3xl'/>
                </a>
                <p>Starlight</p>
            </li>
            <li className="flex flex-col text-white gap-y-3 items-center">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <BsBoxSeam className='text-3xl'/>
                </a>
                <p>Gift Skin</p>
            </li>
            <li className="flex flex-col text-white gap-y-3 items-center">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <BsHeart className='text-3xl'/>
                </a>
                <p>Kharisma</p>
            </li>
        </ul>
        <ul className="lg:w-[800px] max-lg:w-[70%] h-[50%]  flex justify-around items-center mx-5 gap-4">
             <li className="flex flex-col text-white gap-y-3 items-center">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <BsBoxSeam className='text-3xl'/>
                </a>
                <p>Paket</p>
            </li>
            <li className="flex flex-col text-white gap-y-3 items-center">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <BsController className='text-3xl'/>
                </a>
                <p>Rank</p>
            </li>
            <li className="flex flex-col text-white gap-y-3 items-center">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <BsTrophy className='text-3xl'/>
                </a>
                <p>Classic</p>
            </li>
            <li className="flex flex-col text-white gap-y-3 items-center">
                <a href="" className=" bg-white w-[100px] h-[100px] text-center flex items-center justify-center rounded-xl text-black">
                    <GrGroup className='text-3xl'/>
                </a>
                <p>Gendong</p>
            </li>
        </ul>
    </div>
  )
}

export default Menu