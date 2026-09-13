import { FaStar } from "react-icons/fa";
import type Itechnology from "../../Type/type";
import type { BadgeType } from "../../Type/type";

interface ItechCard {
    tech: Itechnology;
}



const badgeStyle: Record<BadgeType, string> = {
    Popular: "bg-blue-50 text-blue-500 border-blue-100",
    Versatile: "bg-green-50 text-green-500 border-green-100",
    Fast: "bg-orange-50 text-orange-500 border-orange-100",
    Standard: "bg-green-50 text-green-500 border-green-100",
    "Top SQL": "bg-blue-50 text-blue-500 border-blue-100",
    Cache: "bg-red-50 text-red-500 border-red-100",
    Ubiquitous: "bg-yellow-50 text-yellow-500 border-yellow-100",
    Essential: "bg-sky-50 text-sky-500 border-sky-100",
    Robust: "bg-red-50 text-red-500 border-red-100",
    Modern: "bg-cyan-50 text-cyan-500 border-cyan-100",
    Containers: "bg-blue-50 text-blue-500 border-blue-100"
}


const TechnologyCard = ({tech}: ItechCard) => {
    return (
        <div> 
            
                    <div className="card bg-base-100 w-full shadow-sm">

                            <figure className="flex justify-between px-5 pt-5">
                                <img className="w-8 h-8 m-2"
                                src={tech.icon} alt="icon" />
                                <div className={`border rounded-full font-medium ${badgeStyle[tech.badge]} p-1`}>
                                    {tech.badge}
                                </div>
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title text-[22px] font-bold"> {tech.name} </h2>
                                <p className="text-gray-500 font-medium"> {tech.description} </p>

                                -----------

                                <div className="flex justify-between gap-12 my-3">
                                    <span className="font-bold text-gray-500 bg-gray-200 rounded-[5px] w-18 h-6 text-center"> {tech.category} </span>
                                    <p className="font-medium text-gray-500 w-30"> {tech.difficulty} </p>
                                    <div className="flex justify-center items-center">
                                        <FaStar className="text-yellow-500"/>
                                        <p className="font-medium ">  {tech.rating} </p>
                                    </div>
                                </div>

                                <div className="">
                                    <button className="btn w-78 text-gray-300 bg-black rounded-2xl h-12">Add to Stack</button>
                                </div>
                            </div>
                    </div>
            
        </div>
    );
};

export default TechnologyCard;