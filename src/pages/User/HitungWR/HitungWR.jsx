import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import Layout from "../../../components/User/Layouts/Layout";
import TopLayout from "../../../components/User/Layouts/TopLayout";
import Footer from "../../../components/User/Layouts/Footer";
import ChatAdmin from "../../../components/User/CustomerService/ChatAdmin";
import ButtonCS from "../../../components/User/CustomerService/ButtonCS";

const HitungWR = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const [openCs, setOpenCs] = useState(false);

    const toggleOpenCs = () => {
        setOpenCs(!openCs);
    };

    const calculateMatchesToTarget = (totalMatches, currentWinrate, targetWinrate) => {
        const matchesNeeded = Math.ceil((totalMatches * targetWinrate - totalMatches * currentWinrate) / (100 - targetWinrate));
        return matchesNeeded;
    };

    const handleCalculate = (e) => {
        e.preventDefault();

        const totalMatches = parseFloat(e.target.totalMatches.value);
        const currentWinrate = parseFloat(e.target.currentWinrate.value);
        const targetWinrate = parseFloat(e.target.targetWinrate.value);

        if (isNaN(totalMatches) || isNaN(currentWinrate) || isNaN(targetWinrate)) {
            Swal.fire("Error", "Please enter valid numbers for all fields.", "error");
            return;
        }

        if (targetWinrate < currentWinrate) {
            Swal.fire("Error", "Target winrate must be higher than your current winrate.", "error");
            return;
        }

        const matchesToTarget = calculateMatchesToTarget(totalMatches, currentWinrate, targetWinrate);

        if (matchesToTarget <= 0) {
            Swal.fire("Congratulations!", "You have already reached the target winrate.", "success");
        } else {
            Swal.fire("Result", `You need to win ${matchesToTarget} matches to reach the target winrate.`, "info");
        }
    };

    return (
        <div className="overflow-y-hidden mt">
            <div className="flex transition-all duration-1000">
                <Layout expanded={expanded} toggleExpansion={toggleExpansion} />
                <TopLayout expanded={expanded} />
                <ChatAdmin openCs={openCs} toggleOpenCs={toggleOpenCs}/>
            </div>
            <div className="overflow-y-scroll scrollbar-hidden h-full lg:pl-[130px] mt-[130px] max-lg:px-[30px] lg:pr-[30px]">
                <div className="mt-[30px] max-lg:h-[60vh] h-[50vh]">
                    <div className="bg-transparent dark:text-white flex flex-col items-center w-full h-[100vh]">
                        <h1 className="font-bold text-4xl mb-7">Logo</h1>
                        <div>
                            <h1 className="text-xl">Kalkulator Winrate Mobile Legend</h1>
                            <p className="dark:text-gray-400">Digunakan untuk menghitung total pertandingan yang harus ditempuh untuk mencapai target winrate yang diinginkan.</p>
                        </div>
                        <span className="w-[53rem] max-lg:w-[100%] my-5 h-[0.2px] bg-white"></span>
                        <form className="flex flex-col w-[53rem] max-lg:w-[100%]" onSubmit={handleCalculate}>
                            <label htmlFor="totalMatches">Total Pertandingan Kamu</label>
                            <input type="number" id="totalMatches" name="totalMatches" placeholder="Contoh: 1313" className="mb-4 h-10 px-4 rounded-md text-black" />
                            <label htmlFor="currentWinrate">Total Winrate Kamu</label>
                            <input type="number" id="currentWinrate" name="currentWinrate" placeholder="Contoh: 54.3" className="mb-4 h-10 px-4 rounded-md text-black" />
                            <label htmlFor="targetWinrate">Winrate Yang Diinginkan</label>
                            <input type="number" id="targetWinrate" name="targetWinrate" placeholder="Contoh: 99" className="mb-8 h-10 px-4 rounded-md text-black" />
                            <button type="submit" className="w-[53rem] max-lg:w-[100%] border hover:text-white dark:border-blue-500 border-yellow-500 p-5 rounded-full dark:hover:bg-blue-500 hover:bg-yellow-500">Hasil</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
            <ButtonCS toggleOpenCs={toggleOpenCs} openCs={openCs}/>
        </div>
    );
};

export default HitungWR;
