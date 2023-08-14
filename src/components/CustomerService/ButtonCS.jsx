import {RiCustomerService2Line} from 'react-icons/ri'


// eslint-disable-next-line react/prop-types
const ButtonCS = ({ toggleOpenCs, openCs }) => {
  return (
    <div className={`flex justify-center items-center h-[90px] w-[90px] max-lg:hidden fixed z-50 bottom-0 rounded-full overflow-hidden mx-10 my-10 transition-right duration-1000 lg:right-0 max-lg:right-0 delay-300 ${openCs ? 'hidden' : ''}`}>
    <button onClick={toggleOpenCs} className=' text-white bg-blue-500 hover:bg-yellow-500 transition-colors duration-700 w-full h-full flex justify-center items-center rounded-full  '>
      <RiCustomerService2Line className='text-3xl'/>
     </button>
    </div>
  )
}



export default ButtonCS
