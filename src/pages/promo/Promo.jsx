import Layout from "../../components/Layouts/Layout"
import { useState } from "react";
const Promo = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };
  return (
    <div>
      <Layout expanded={expanded} toggleExpansion={toggleExpansion}/>
      promo
    </div>
  )
}

export default Promo
