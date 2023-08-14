import { useState } from 'react';
import IsiCard from './IsiCard';
import Card2 from './isiCard1';
import Card3 from './IsiCard2';
import PropTypes from 'prop-types'; 

function TabCard({ CardList }) {
  const tabs = ['Mobile Game', 'PC Game', 'Voucher'];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto ">
      <div
                className={`flex space-x-4  justify-center ${
                  CardList ? 'mb-7' : 'mb-24'
                }`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative py-2 px-4 rounded-md focus:outline-none ${
              index === activeTab ? 'text-yellow-500' : 'text-white'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
            <span
              className={`transition-transform duration-500 absolute bottom-0 left-0 w-full h-[1px] ${
                index === activeTab
                  ? 'bg-yellow-500 transform scale-x-100'
                  : 'bg-transparent transform scale-x-0'
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Tampilkan konten sesuai tab yang aktif */}
      {activeTab === 0 && <IsiCard CardList={CardList} />}
      {activeTab === 1 && <Card2 />}
      {activeTab === 2 && <Card3 />}
    </div>
  );
}

TabCard.propTypes = {
  CardList: PropTypes.array.isRequired, 
};

export default TabCard;
