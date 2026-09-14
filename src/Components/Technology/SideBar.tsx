import { RxCross2 } from "react-icons/rx";
import type Itechnology from "../../Type/type";

interface ISidebar {
    stack: Itechnology[];
    removeStack: (id: string) => void;
    removeAll: () => void;
}


const SideBar = ({stack, removeStack, removeAll}: ISidebar) => {
    return (
        <div>
            
            <div className="card bg-base-100 w-80 shadow-sm p-4">
                    <h2 className="font-bold text-xl">Your Stack</h2>   
                    <p className="text-gray-400 text-medium"> {
                                    stack.length > 0 ? (
                                        <div>
                                            {stack.length} Technologies Selected
                                        </div>
                                    ) : (
                                        <div>
                                            No technologies selected yet
                                        </div>
                                    )
                                } </p>

                    {
                        stack.length === 0 ? 
                        (
                            <div className="border border-dashed p-8 mt-5 text-centertext-gray-400 rounded-xl">
                                Your Stack is empty
                            </div>
                        ) : (
                            <div className="space-y-3 mt-5"> {stack.map((item) => (
                                <div key={item.id} className="border rounded-lg p-3 flex items-center justify-between" >

                                        <div className="flex gap-3 items-center">
                                            <img src={item.icon} className="w-8" />
                                            <div>
                                                <h3 className="font-semibold">{item.name}</h3>
                                                <p className="text-xs text-gray-400">{item.category}</p>
                                            </div>
                                        </div>

                                        <RxCross2 className="text-xl " onClick={() => removeStack(item.id)} />
                                </div>
                                ))}
                            </div>
                        )
                    }

                    <button
                            onClick={removeAll}
                            className="border border-red-300 text-red-500 w-full py-2 mt-5 rounded-lg"
                            > Remove All
                    </button>
            </div>

        </div>
    );
};

export default SideBar;