import  { useEffect, useState } from 'react';
import axios from 'axios';

function UserPicture() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/auth/usersignin", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }


  const firstLetter = userData.username ? userData.username.charAt(0).toUpperCase() : '';

  const circleStyle = {
    backgroundColor: stringToColor(userData.id),
    color: '#ffffff' 
  };


  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const color = "#" + ((hash & 0x00FFFFFF).toString(16)).toUpperCase();
    return color.padEnd(7, '0');
  }

  return (
    <div className="h-[50px] w-[50px] rounded-full border border-gray-300 flex justify-center items-center text-xl font-semibold" style={circleStyle}>
        {firstLetter}
    </div>
  );
}

export default UserPicture;
