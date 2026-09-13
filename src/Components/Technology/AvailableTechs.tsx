import type Itechnology from "../../Type/type";
import TechnologyCard from "./TechnologyCard";

interface ItechCard {
    techProp: Itechnology[];
}

const AvailableTechs = ({techProp}: ItechCard) => {
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                techProp.map((techs): any => {
                    return (
                        <div >
                            <TechnologyCard tech={techs}/>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default AvailableTechs;