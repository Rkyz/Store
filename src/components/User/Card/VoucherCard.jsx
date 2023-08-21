import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function VoucherCard({ CardList }) {
  const [Vouchergame, setVouchergame] = useState([]);

  const getDataCard = () => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:3000/game', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        const { games } = response.data; 
        const voucherGamesData = games.filter(game => game.category === 'voucher'); 
        setVouchergame(voucherGamesData); 
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  };

  useEffect(() => {
    getDataCard();
  }, []);

  const backendUrl = 'http://localhost:3000'; // Replace with your backend's URL
  const imageBaseUrl = `${backendUrl}/images/joki`;

  return (
    <div className={`h-[auto] w-[100%] justify-center flex gap-x-5  flex-wrap  ${CardList ? ' gap-y-5' : 'gap-y-20'}`}>
      {Vouchergame.length === 0 ? (
        <div className='my-32'>
          <div className="flex justify-center">
            <span className="circle animate-loader"></span>
            <span className="circle animate-loader animation-delay-200"></span>
            <span className="circle animate-loader animation-delay-400"></span>
          </div>
          <div className='flex justify-center'>
            <p className='animate-bganimate dark:text-white text-black text-opacity-80 '>No Voucher Game Data Available</p>
          </div>
        </div>
      ) : (
        Vouchergame.map(game => (
          <div key={game.id} className={`bg-lightmode dark:bg-slate-500 flex rounded-lg ${CardList ? 'w-[88%] max-lg:w-full flex-row h-[65px] items-center px-3' : 'w-[160px] h-[219px] items-center flex-col py-6 justify-between relative mt-20'}`}>
            <div className={`${CardList ? 'flex items-center' : ''}`}>
              <div className={`${CardList ? 'h-[45px] w-[45px] mr-4 bg-gray-700 ' : 'bg-gray-700 h-[102px] w-[115px] rounded-md  text-center overflow-hidden -translate-y-14'}`}>
                <img src={`${imageBaseUrl}/${game.image}`} alt="" className="w-full h-full object-cover " />
              </div>
              <ul className={`flex flex-col ${CardList ? '' : '-translate-y-12 w-[116px] text-center items-center'}`}>
                <p className="text-yellow-500 text-xs">{game.creator}</p>
                <p className="text-base text-gray-500 dark:text-white">{game.name}</p>
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

VoucherCard.propTypes = {
  CardList: PropTypes.bool.isRequired,
};

export default VoucherCard;
