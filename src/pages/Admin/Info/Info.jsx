
import SideNav from "../../../components/Admin/Layouts/SideNav";
import TopNav from "../../../components/Admin/Layouts/TopNav"
import {useState} from "react";
import InfoComponents from "../../../components/Admin/Info/Info"


const Info = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <> < div className = "flex overflow-hidden " > <SideNav expanded={expanded} setExpanded={setExpanded}/>
        <div
            className={`w-full transition-all overflow-hidden duration-[700ms] ${expanded
                ? 'ml-[65.5px]'
                : 'lg:ml-[320px]'}`}>
            <TopNav toggleExpansion={toggleExpansion} expanded={expanded}/>
            <InfoComponents/>
        </div>
    </div>
</>
    )
}

export default Info