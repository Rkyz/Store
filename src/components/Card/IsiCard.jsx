import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes


function IsiCard({ CardList }) {
  const numCards = 6; // Jumlah kartu yang ingin ditampilkan
  const [cards] = useState(Array.from({ length: numCards }));

  return (
    <div 
    className={` h-[auto] w-[100%] justify-center flex gap-x-5  flex-wrap  ${
      CardList ? ' gap-y-5' : 'gap-y-20'
    }`}>
      {cards.map((_, index) => (
          <div
          key={index}
          className={`bg-slate-500 flex rounded-lg ${
            CardList ? 'w-[88%] max-lg:w-full flex-row h-[63px] items-center px-2' : 'w-[148px] h-[219px] items-center flex-col py-6'
          }`}
        >
          <div         
            className={`bg-gray-700  rounded-md overflow-hidden ${
            CardList ? 'h-[45px] w-[45px] mr-4' : 'h-[102px] w-[102px] -translate-y-16'
          }`}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.896-CTRPJUm-rJl8u5dv0gHaDl&pid=Api&P=0&h=180"
              alt=""
              className="w-full h-full object-cover"
              
            />
          </div>
          <ul
          className={`flex flex-col  ${
            CardList ? '' : '-translate-y-12 w-[116px] items-center'
          }`}>
            <p className="text-xs text-black-400">
              Card {Math.random().toString().substring(2, 1)}
            </p>
            <p className=" text-white">
              Card {Math.random().toString().substring(2, 1)}
            </p>
          </ul>
          <button 
              className={`border  border-yellow-500  w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white ${
                CardList ? 'max-lg:right-[6%] lg:right-[11%] absolute xl:right-[9%]' : 'translate-y-3'
             }`}
          >
            Isi Ulang
          </button>
        </div>
      ))}
    </div>
  );
}

IsiCard.propTypes = {
  CardList: PropTypes.array.isRequired, 
};


export default IsiCard;
