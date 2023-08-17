import { useState, useEffect } from 'react';
import './Card.css'
import axios from 'axios';

const Card = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getDataCard();
  }, []);

  const getDataCard = () => { 
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/game/trending', {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
    })
    
      .then(response => {
        setGames(response.data.popularCards);
        console.log(response.data)
        console.log(Array.isArray(response.data.popularCards));

      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  };

  return (
    <div className='w-full h-[32vh] mt-5 bg-transparent '>
      <div className="flex gap-5 items-center justify-center  overflow-scroll scrollbar-hidden bg-transparent text-white w-full h-[30vh] pt-[2.9rem]">
      {games.length === 0 ? (
        <div>
          <div className="flex justify-center">
            <span className="circle animate-loader"></span>
            <span className="circle animate-loader animation-delay-200"></span>
            <span className="circle animate-loader animation-delay-400"></span>
          </div>
          <div className='flex justify-center'>
            <p className='animate-bganimate'>No Popular Data Available</p>
          </div>
        </div>
        ) : (
          games.map(game => (
            <div key={game.id} className="w-[148px] relative h-[219px] bg-slate-500 px-20 flex flex-col items-center rounded-lg justify-between">
              <div className='flex flex-col gap-y-3'>
                <div className="bg-gray-700 h-[102px] w-full -translate-y-8 text-center rounded-md overflow-hidden">
                  <img src={game.photoUrl} alt="" className="w-full h-full object-cover" />
                </div>
                <ul className="-translate-y-9 w-[116px] flex flex-col items-center justify-start">
                  <p className="text-center text-xs">{game.creator}</p>
                  <p className="text-center text-base">{game.name}</p>
                </ul>
              </div>
              <button className="border absolute bottom-4 border-yellow-500 p-[3px] w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white">Isi Ulang</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Card;
