import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MobileCard({ CardList }) {
  const [Mobilegame, setMobilegame] = useState([]);

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
        const mobileGamesData = games.filter(game => game.category === 'mobile');
        setMobilegame(mobileGamesData);
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
      {Mobilegame.length === 0 ? (
        <div className='my-32'>
          <div className="flex justify-center">
            <span className="circle animate-loader"></span>
            <span className="circle animate-loader animation-delay-200"></span>
            <span className="circle animate-loader animation-delay-400"></span>
          </div>
          <div className='flex justify-center'>
            <p className='animate-bganimate text-white '>No Mobile Game Data Available</p>
          </div>
        </div>
      ) : (
        Mobilegame.map(game => (
          <div key={game.id} className="w-[148px] relative h-[219px] bg-slate-500 px-20 mt-20 flex flex-col items-center rounded-lg justify-between mb-4">
            <div className='flex flex-col gap-y-3'>
              <div className="bg-gray-700 h-[102px] w-full -translate-y-8 text-center rounded-md overflow-hidden">
                <img src={`${imageBaseUrl}/${game.image}`} alt="" className="w-full h-full object-cover" />
              </div>
              <ul className="-translate-y-9 w-[116px] flex flex-col items-center justify-start">
                <p className="text-center text-xs text-yellow-500 italic">{game.creator}</p>
                <p className={`text-center text-white ${game.type === 'joki' ? 'text-xs mt-1' : 'text-base'}`}>{game.type === 'joki' ? `Joki ${game.name}` : game.name}</p>
              </ul>
            </div>
            {game.type === 'joki' && (
              <button className="border absolute bottom-4 border-yellow-500 p-[3px] w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white bg-joki">
                Joki
              </button>
            )}
            {game.type === 'topup' && (
              <button className="border absolute bottom-4 border-yellow-500 p-[3px] w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white bg-topup">
                Top Up
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

MobileCard.propTypes = {
  CardList: PropTypes.bool.isRequired,
};

export default MobileCard;
