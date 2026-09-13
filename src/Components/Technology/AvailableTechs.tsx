import type Itechnology from "../../Type/type";
import TechnologyCard from "./TechnologyCard";

interface ItechCard {
    techProp: Itechnology[];
    stack:Itechnology[];
    addStack:(tech:Itechnology)=>void;
}

const AvailableTechs = ({techProp, stack, addStack}: ItechCard) => {
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                techProp.map((techs): any => {
                    return (
                        <div >
                            <TechnologyCard 
                                            key={techs.id}
                                            tech={techs} 
                                            addStack={addStack} 
                                            added={ stack.some((item)=>item.id===techs.id)} />
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default AvailableTechs;