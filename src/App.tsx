import { Suspense } from "react"
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

  return (
    <>
      <Navbar/>
      <Hero/>
      <Suspense fallback={ <h2>Loading..!!!</h2> }> 
        <Technology technologyPromise={technologyPromise()}/>
      </Suspense>
      
    </>
  )
}

export default App
