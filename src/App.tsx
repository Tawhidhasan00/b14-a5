import { Suspense, useState } from "react"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Technology from "./Components/Technology/Technology"
import type Itechnology from "./Type/type"


const technologyPromise = async(): Promise<Itechnology[]> =>  {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}


function App() {

  const [stack, setStack] = useState<Itechnology[]>([])



  const addStack = (tech: Itechnology) => {
    const exists = stack.find((item) => item.id === tech.id);
    if (exists) {
      // toast.warning("Already added!");
      return;
    }
    setStack([...stack, tech]);
    // toast.success(`${tech.name} added`);
  };



  const removeStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    // toast.info("Removed");
  };

  const removeAll = () => {
    setStack([]);
    // toast.error("Stack cleared");
  };


  return (
    <>
      <Navbar/>
      <Hero/>
      <Suspense fallback={ <h2>Loading..!!!</h2> }> 
        <Technology technologyPromise={technologyPromise()} stack={stack} addStack={addStack} removeStack={removeStack} removeAll={removeAll} />
      </Suspense>
      
      
    </>
  )
}

export default App
