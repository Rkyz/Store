import Table from "../Info/Table"
import axios from 'axios';
import { useState } from "react";
import Swal from 'sweetalert2';

const Info = () => {
  const [linkyt, setLinkyt] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false); 

  const handleLinkytChange = (e) => {
    setLinkyt(e.target.value);
    setIsEmpty(false); 
  };

  const isValidYouTubeUrl = (url) => {
    const youtubeUrlRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;
    return youtubeUrlRegex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!linkyt.trim()) {
      setIsEmpty(true); 
      return;
    }

    if (!isValidYouTubeUrl(linkyt)) {
      setIsValidUrl(false);
      return;
    }

    setIsValidUrl(true);

    try {
      const response = await axios.post('http://localhost:3000/info/create', { linkyt });
      console.log(response.data);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data has been created successfully!',
      }).then(() => {
        window.location.reload();
      });

      setLinkyt('');
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  return (
    <div className="w-full h-full bg-transparent p-[20px]">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-black text-2xl font-bold font-poppins capitalize opacity-60">Info</h1>
        <div className="bg-white rounded-md w-full h-auto flex">
          <div className="w-full p-[20px] flex">
            <form className="flex-col gap-3 flex w-full">
              <div className="flex flex-col gap-2">
                <span className="text-black text-opacity-60 uppercase font-semibold">Link yt</span>
                <input
                  value={linkyt}
                  onChange={handleLinkytChange}
                  type="text"
                  className={`border ${isValidUrl ? 'border-gray-500' : 'border-red-500'} text-black text-opacity-60 outline-none rounded-md h-[50px] px-5`}
                />
                {isEmpty && <p className="text-red-500">Input cannot be empty</p>}
                {!isEmpty && !isValidUrl && <p className="text-red-500">Invalid YouTube URL</p>}
              </div>
              <button className="bg-primary text-white h-[50px] rounded-md" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
        <div className="w-full bg-white mt-5 mb-5">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Info

