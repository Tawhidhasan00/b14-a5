import type Itechnology from "../../Type/type";
import TechnologyCard from "./TechnologyCard";

interface ISidebar {
    techProp: Itechnology[]
}


const SideBar = ({techProp}: ISidebar) => {
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">

                            <figure className="flex justify-between ">
                                <img className="w-8 h-8 m-2"
                                 alt="icon" />
                                <div >
                                    
                                </div>
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                            ------------
                            <figure className="flex justify-between ">
                                <img className="w-8 h-8 m-2"
                                 alt="icon" />
                                <div >
                                    
                                </div>
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                    </div>
        </div>
    );
};

export default SideBar;