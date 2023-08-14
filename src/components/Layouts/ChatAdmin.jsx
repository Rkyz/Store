import {MdOutlineClose} from 'react-icons/md'
// eslint-disable-next-line react/prop-types
const ChatAdmin = ({openCs, toggleOpenCs}) => {
    return (
        <div
            className={`text-white bg-blue-500 z-50  bottom-0 fixed h-[550px] w-[400px] right-[30px] rounded-3xl ${openCs
                ? ' bottom-[30px]'
                : 'h-0 w-0'} `}>
            <div
                className={`w-full bg-yellow-500 h-[50px] rounded-t-2xl flex justify-between items-center px-[15px] ${openCs ? '':'hidden'}`}>
                <ul className="flex">
                    <li className="flex items-center mr-1">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </li>
                    <li>Name</li>
                </ul>
                <ul>
                    <li>
                      <button onClick={toggleOpenCs} className='bg-transparent p-2 rounded-full'>
                        <MdOutlineClose/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ChatAdmin