
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function IsiCard1({ CardList }) {
  const [Mobilegame, setMobilegame] = useState([]);

  const getDataCard = () => { 
    axios.get('http://localhost:3000/game')
      .then(response => {
        const mobilegameData = response.data.filter(game2 => game2.category === 'pc');
        setMobilegame(mobilegameData);
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
      {Mobilegame.length === 0 ? (
        <div className='my-32'>
            <div className="flex justify-center">
                <span className="circle animate-loader"></span>
                <span className="circle animate-loader animation-delay-200"></span>
                <span className="circle animate-loader animation-delay-400"></span>
            </div>
            <div className='flex justify-center'>
                <p className='animate-bganimate text-white '>No Pc Game Data Available</p>
            </div>
        </div>
        ) : (
          Mobilegame.map(game2 => (
            <div key={game2.id} className={`bg-slate-500 flex rounded-lg ${CardList ? 'w-[88%] max-lg:w-full flex-row h-[63px] items-center px-2' : 'w-[148px] h-[219px] items-center flex-col py-6 justify-between relative mt-20'}`}>
            <div className={`  ${CardList ? 'flex items-center' : ''}`}>
             <div className={`${CardList ? 'h-[45px] w-[45px] mr-4 bg-gray-700 ' : 'bg-gray-700 h-[102px] w-full rounded-md  text-center overflow-hidden -translate-y-14'}`}>
               <img src={game2.photoUrl} alt="" className="w-full h-full object-cover " />
             </div>
             <ul className={`flex flex-col ${CardList ? '' : '-translate-y-12 w-[116px] text-center items-center'}`}>
               <p className="text-xs text-white">{game2.creator}</p>
               <p className="text-white text-base">{game2.name}</p>
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

IsiCard1.propTypes = {
  CardList: PropTypes.bool.isRequired,
};

export default IsiCard1;
