import { use } from "react";
import type Itechnology from "../../Type/type";
import AvailableTechs from "./AvailableTechs";
import SideBar from "./SideBar";

interface ItechnologyList {
    technologyPromise: Promise<Itechnology[]>
}


const Technology = ({technologyPromise}: ItechnologyList) => {
    const technologies = use(technologyPromise)
    console.log(technologies)
    return (
        <div className="container mx-auto"> 

            <div className="space-y-2 ">
                <h2 className="text-5xl font-bold text-[#111827] "> Explore the Technologies </h2>
                <p className="text-[18px] text-gray-500 my-4">Pick one technology per category to build your ideal stack</p>
            </div>

            <div className="mt-15 flex justify-between gap-10">
                <AvailableTechs techProp={technologies} />
                <SideBar techProp={technologies}/>
            </div>
        </div>
    );
};

export default Technology;