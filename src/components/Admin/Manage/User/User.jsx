import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className="flex mt-4">
      {pageNumbers.map((page) => (
        <li key={page} className={`mx-1 cursor-pointer flex items-center justify-center w-[40px] h-[40px] ${currentPage === page ? 'font-semibold bg-blue-500 rounded-md text-white' : 'font-normal'}`}>
          <a onClick={() => onPageChange(page)}>{page}</a>
        </li>
      ))}
    </ul>
  );
};

const User = () => {
  const dummyUserData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+1234567890',
      active: true,
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+1234567890',
      active: true,
    },
 
    // Add more user objects as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyUserData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dummyUserData.length / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-transparent p-10 h-auto">
      <div className="flex justify-between">
        <p className="text-primary text-[20px] font-semibold font-poppins">User Management</p>
        <button className="bg-primary text-white hover:bg-yellow-500 p-3 rounded-md">Add User</button>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full border-collapse w-full">
          <thead>
            <tr>
              <th className="w-1/6 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Image
              </th>
              <th className="w-1/6 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="w-1/6 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="w-1/6 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="w-1/6 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Active
              </th>
              <th className="w-1/6 px-6 py-3 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.0-04r9amTAKzaELTAGtRTgHaEK&pid=Api&P=0&h=180"
                    alt={user.name}
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <span className="px-2">|</span>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalPages > 1 && (
          <div className="mt-4 flex justify-start">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
