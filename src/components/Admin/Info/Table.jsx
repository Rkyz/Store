import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const extractYouTubeVideoId = (link) => {
  const url = new URL(link);
  const videoId = url.searchParams.get('v') || url.pathname.split('/').pop();
  return videoId;
};

const Admin = () => {
  const [linkYt, setLinkYt] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/info');
      const linkYtData = response.data;
      setLinkYt(linkYtData);
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch data from the server.',
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onDeleteClick = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this video!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/info/delete/${id}`);
          // Perbarui state setelah penghapusan
          setLinkYt((prevLinkYt) => prevLinkYt.filter((user) => user.id !== id));
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Video deleted successfully.',
          }).then(() => {
            window.location.reload();
          });
        } catch (error) {
          console.error('Error deleting video:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to delete video.',
          });
        }
      }
    });
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = linkYt.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(linkYt.length / itemsPerPage);

  return (
    <div className="bg-transparent p-10 h-auto">
      <div className="overflow-x-auto">
        {linkYt.length === 0 ? (
          <p className="text-center text-gray-500 text-xl mt-5">No data available</p>
        ) : (
          <table className="min-w-full border-collapse w-full">
            <thead>
              <tr>
                <th className="w-1/6 px-6 py-3 white text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="w-1/6 px-6 py-3 white text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Linkyt
                </th>
                <th className="w-1/6 px-6 py-3 white text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="w-1/6 px-6 py-3 whitespace-no-wrap"></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <img
                      src={`https://img.youtube.com/vi/${extractYouTubeVideoId(user.linkyt)}/mqdefault.jpg`}
                      alt={user.linkyt}
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">{user.linkyt}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Status
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                    <span className="px-2">|</span>
                    <button
                      className="text-red-600 hover:text-red-900 cursor-pointer"
                      onClick={() => onDeleteClick(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-start">
            <ul className="flex mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`mx-1 cursor-pointer flex items-center justify-center w-[40px] h-[40px] ${
                    currentPage === index + 1 ? 'font-semibold bg-blue-500 rounded-md text-white' : 'font-normal'
                  }`}
                  onClick={() => onPageChange(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
