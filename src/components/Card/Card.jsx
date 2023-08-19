import { useState, useEffect } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Card = ({ activeCategory }) => {
  const [games, setGames] = useState([]);
  const backendUrl = 'http://localhost:3000'; // Replace with your backend's URL
  const imageBaseUrl = `${backendUrl}/images/joki`;

  const getDataCard = () => {
    const token = localStorage.getItem('token');
    const apiUrl = `${backendUrl}/game`;

    console.log('Active Category:', activeCategory);
    console.log('API URL:', apiUrl);

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const { games } = response.data;
        setGames(games);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  };

  useEffect(() => {
    getDataCard();
  }); 

  const filteredGames = games.filter(game => {
    if (activeCategory === 'all') {
      return true; 
    } else if (activeCategory === 'joki') {
      return game.type === 'joki'; 
    } else if (activeCategory === 'popular') {
      return game.category === 'popular'; 
    } else if (activeCategory === 'topup') {
      return game.type === 'topup'; 
    }
  });

  const getNoDataMessage = () => {
    if (activeCategory === 'all') {
      return 'No Data Available';
    } else if (activeCategory === 'joki') {
      return 'No Data Joki Available';
    } else if (activeCategory === 'popular') {
      return 'No Data Popular Available';
    } else if (activeCategory === 'topup') {
      return 'No Data Topup Available';
    }
  };

  const topupGames = filteredGames.filter(game => game.type === 'topup');
  const jokiGames = filteredGames.filter(game => game.type === 'joki');

  return (
    <div className='w-full h-auto mt-10 bg-transparent '>
      <div className="flex gap-5 items-center justify-center overflow-x-scroll scrollbar-hidden bg-transparent text-white w-full h-auto pt-[2.9rem]">
        {filteredGames.length === 0 ? (
          <div>
            <div className="flex justify-center">
              <span className="circle animate-loader"></span>
              <span className="circle animate-loader animation-delay-200"></span>
              <span className="circle animate-loader animation-delay-400"></span>
            </div>
            <div className='flex justify-center'>
              <p className='animate-bganimate'>{getNoDataMessage()}</p>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            {topupGames.map(game => (
              <div key={game.id} className="w-[148px] relative h-[219px] bg-slate-500 px-20 flex flex-col items-center rounded-lg justify-between mb-4">
              <div className='flex flex-col gap-y-3'>
                <div className="bg-gray-700 h-[102px] w-full -translate-y-8 text-center rounded-md overflow-hidden">
                  <img src={`${imageBaseUrl}/${game.image}`} alt="" className="w-full h-full object-cover" />
                </div>
                <ul className="-translate-y-9 w-[116px] flex flex-col items-center justify-start">
                  <p className="text-center text-xs text-yellow-500 italic">{game.creator}</p>
                  <p className={`text-center ${game.type === 'joki' ? 'text-xs mt-1' : 'text-base'}`}>{game.type === 'joki' ? `Joki ${game.name}` : game.name}</p>
                </ul>
              </div>
              <NavLink to={`/topup/${encodeURIComponent('Mobile Legend')}`} className="border absolute bottom-4 border-yellow-500 p-[3px] w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Top Up
                </NavLink>
              </div>
            ))}
            {jokiGames.map(game => (
              <div key={game.id} className="w-[148px] relative h-[219px] bg-slate-500 px-20 flex flex-col items-center rounded-lg justify-between mb-4">
               <div className='flex flex-col gap-y-3'>
                <div className="bg-gray-700 h-[102px] w-full -translate-y-8 text-center rounded-md overflow-hidden">
                  <img src={`${imageBaseUrl}/${game.image}`} alt="" className="w-full h-full object-cover" />
                </div>
                <ul className="-translate-y-9 w-[116px] flex flex-col items-center justify-start">
                  <p className="text-center text-xs text-yellow-500 italic">{game.creator}</p>
                  <p className={`text-center ${game.type === 'joki' ? 'text-xs mt-1' : 'text-base'}`}>{game.type === 'joki' ? `Joki ${game.name}` : game.name}</p>
                </ul>
              </div>
              <NavLink className="border absolute bottom-4 border-yellow-500 p-[3px] w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Joki
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  activeCategory: PropTypes.string.isRequired,
};


export default Card;
