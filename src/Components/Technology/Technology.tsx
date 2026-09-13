import { use } from "react";
import type Itechnology from "../../Type/type";
import AvailableTechs from "./AvailableTechs";
import SideBar from "./SideBar";

interface ItechnologyList {
    technologyPromise: Promise<Itechnology[]>;
    stack: Itechnology[];
    addStack: (tech: Itechnology) => void;
    removeStack: (id: string) => void;
    removeAll: () => void;
}


const Technology = ({technologyPromise, stack, addStack, removeStack, removeAll}: ItechnologyList) => {
    const technologies = use(technologyPromise)


    return (
        <div className="container mx-auto"> 

            <div className="space-y-2 ">
                <h2 className="text-5xl font-bold text-[#111827] "> Explore the Technologies </h2>
                <p className="text-[18px] text-gray-500 my-4">Pick one technology per category to build your ideal stack</p>
            </div>

            <div className="mt-15 flex justify-between gap-10">
                <AvailableTechs techProp={technologies} stack={stack} addStack={addStack} />
                <SideBar stack={stack} removeStack={removeStack} removeAll={removeAll} />
            </div>
        </div>
    );
};

export default Technology;