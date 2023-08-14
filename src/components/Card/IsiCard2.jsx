import { useState } from 'react';

function IsiCard2() {
  const numCards = 5; // Jumlah kartu yang ingin ditampilkan
  const [cards, setCards] = useState(Array.from({ length: numCards }));

  return (
    <div className="h-[auto]  w-[100%] justify-center flex gap-x-5 gap-y-20 flex-wrap ">
      {cards.map((_, index) => (
        <div
          key={index}
          className="w-[148px] h-[219px] bg-slate-500 px-4 py-6 flex flex-col items-center rounded-lg"
        >
          <div className="bg-gray-700 h-[102px] w-[102px] -translate-y-16 rounded-xl overflow-hidden">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.896-CTRPJUm-rJl8u5dv0gHaDl&pid=Api&P=0&h=180"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="-translate-y-12 w-[116px] flex flex-col items-center">
            <p className="text-center text-xs text-white">
              Card {Math.random().toString().substring(2, 1)}
            </p>
            <p className="text-center">
              Card {Math.random().toString().substring(2, 1)}
            </p>
          </ul>
          <button className="border border-yellow-500 p-[3px] w-[116px] h-[26px] flex items-center justify-center rounded-full text-sm translate-y-3 text-yellow-500 hover:bg-yellow-500 hover:text-white">
            Isi Ulang
          </button>
        </div>
      ))}
    </div>
  );
}

export default IsiCard2;
