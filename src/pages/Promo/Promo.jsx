import Layout from "../../components/Layouts/Layout"
import TopLayout from "../../components/Layouts/TopLayout"
import ChatAdmin from "../../components/CustomerService/ChatAdmin"
import { useState } from "react"
import ButtonCS from "../../components/CustomerService/ButtonCS"

const Promo = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [openCs, setOpenCs] = useState(false);

  const toggleOpenCs = () => {
    setOpenCs(!openCs);
 };

  const toggleExpansion = () => {
    setExpanded(!expanded);
};



  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div className="relative ">
    <div className="flex transition-all duration-1000">
        <Layout expanded={expanded} handleSearchClick={handleSearchClick}  toggleExpansion={toggleExpansion}/>
        <TopLayout expanded={expanded}/>
        <ChatAdmin openCs={openCs} toggleOpenCs={toggleOpenCs}/>
    </div>
    <div className="max-lg:h-[50rem] scrollbar-hidden relative">
        <div className={`lg:ml-[130px] max-lg:mx-[30px] max-md:mx-[15px] lg:mr-[30px] h-[40vh]  ${searchActive ? 'max-lg:mx-[10px]' : ''}`}>
          <p className="text-white mt-[130px]">Promo</p>
        </div>
     </div>
    <ButtonCS toggleOpenCs={toggleOpenCs} openCs={openCs}/>
    </div>
  )
}

export default Promo