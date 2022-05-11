import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const App = () => {

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [subscription, setSubscription] = useState(false);

  async function fetchSeries(){

    const response = await fetch("https://demoapi.com/api/series/howimetyourmother")
    const responseJSON = await response.json()

    setCharacters(responseJSON)
    setLoading(false)
  };

  useEffect(()=>{
    setLoading(true)
    setTimeout( () => fetchSeries(), 3000)
    setTimeout( () => setSubscription(true), 10000)
  }, []);

  return (
    <div>
      <title>Series API</title>
      {loading ? <LoadingMask/> : 
        <>
          {characters.map( ({name, details, index}) =>  <Character key={index} name={name} details={details} /> )}
        </>
      }
      {subscription ? <Subscription title='Subscribe to our newsletter' /> : null}
    </div>
  )
}

export default App
