import Layout from "../../../components/Admin/Layouts/Layout.jsx"
import TopLayout from "../../../components/Admin/Layouts/TopLayout.jsx"
import {useState} from "react"

const Dashboard = () => {
  const [expandedAdmin, setExpandedAdmin] = useState(false);
  const toggleExpansionAdmin = () => {
      setExpandedAdmin(!expandedAdmin);
  };
  return (
      <div>
        <div>
          <Layout expandedAdmin={expandedAdmin}/>
          <TopLayout toggleExpansionAdmin={toggleExpansionAdmin} expandedAdmin={expandedAdmin}/>
        </div>

        Dashboard
        </div>
  )
}

export default Dashboard