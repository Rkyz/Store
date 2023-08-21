import { useState } from 'react';
import Mobile from './MobileCard';
import Pc from './PcCard';
import Voucher from './VoucherCard';
import PropTypes from 'prop-types'; 

function TabCard({ CardList }) {
  const tabs = ['Mobile Game', 'PC Game', 'Voucher'];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto ">
      <div
                className={`flex space-x-4  justify-center ${
                  CardList ? 'mb-7' : ''
                }`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative py-2 px-4 rounded-md focus:outline-none ${
              index === activeTab ? 'text-blue-500 dark:text-yellow-500' : 'dark:text-white text-black text-opacity-80'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
            <span
              className={`transition-transform duration-500 absolute bottom-0 left-0 w-full h-[1px] ${
                index === activeTab
                  ? 'bg-blue-500 dark:bg-yellow-500 transform scale-x-100'
                  : 'bg-transparent transform scale-x-0'
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Tampilkan konten sesuai tab yang aktif */}
      {activeTab === 0 && <Mobile CardList={CardList} />}
      {activeTab === 1 && <Pc CardList={CardList} />}
      {activeTab === 2 && <Voucher CardList={CardList} />}
    </div>
  );
}

TabCard.propTypes = {
  CardList: PropTypes.bool.isRequired, 
};

export default TabCard;
