import React from 'react'
import Game from "./Game/Game"
import Home from "./Home/Home"
import { useState } from 'react';


function App() {

  const [page, setPage] = useState("home");
  const [gameType, setGameType] = useState("")


  return (
    <>
      {page=="home" && <Home setPage={setPage} setGameType={setGameType}/>}
      {page=="game" && <Game gameType={gameType} setPage={setPage}/>}
    </>
  )
}

export default App
