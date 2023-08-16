
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function SearchCard({ CardList }) {
  const [Voucher, setVoucher] = useState([]);

  const getDataCard = () => { 
    axios.get('http://localhost:3000/cards/:id')
      .then(response => {
        setVoucher(response.data);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  };

  useEffect(() => {
    getDataCard();
  }, []); 

  return (
    <div className={`h-[auto] w-[100%] justify-center flex gap-x-5  flex-wrap  ${CardList ? ' gap-y-5' : 'gap-y-20'}`}>
      {Voucher.length === 0 ? (
          <p className="text-center text-white w-full">No data available</p>
        ) : (
          Voucher.map((game,index) => (
            <div key={index} className={`bg-slate-500 flex rounded-lg ${CardList ? 'w-[88%] max-lg:w-full flex-row h-[63px] items-center px-2' : 'w-[148px] h-[219px] items-center flex-col py-6 justify-between relative'}`}>
            <div className={` ${CardList ? 'flex items-center' : ''}`}>
             <div className={`${CardList ? 'h-[45px] w-[45px] mr-4 bg-gray-700 ' : 'bg-gray-700 h-[102px] w-full  text-center rounded-md overflow-hidden -translate-y-14'}`}>
               <img src={game.photoUrl} alt="" className="w-full h-full object-cover" />
             </div>
             <ul className={`flex flex-col ${CardList ? '' : '-translate-y-12 w-[116px] items-center text-center'}`}>
               <p className="text-xs text-white">{game.creator}</p>
               <p className="text-white text-base">{game.name}</p>
             </ul>
             </div>
             <button className={`border border-yellow-500 w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white ${CardList ? 'max-lg:right-[6%] lg:right-[11%] absolute xl:right-[9%]' : 'translate-y-3 absolute bottom-7'}`}>
               Isi Ulang
             </button>
           </div>
          ))
        )}
    </div>
  );
}

SearchCard.propTypes = {
  CardList: PropTypes.bool.isRequired,
};

export default SearchCard;
