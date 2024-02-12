import React from 'react';
import logo from '../assets/logo.png'
import './Home.css'
function Home(props) {
  return (
    <main className="home">
        <img className='logo' src={logo} alt="" />
        <h1>Rock Paper Scissor</h1>
        <p>Game Which Reminds Childhood Memories</p>
        <button className='vs_cpu' onClick={()=>{props.setGameType("cpu"); setTimeout(()=>{props.setPage("game")},400)}}>New Game (vs CPU)</button>
        {/* <button className='vs_player' onClick={()=> {props.setGameType("human");setTimeout(()=>{props.setPage("game")},400)}}>New Game (vs Player)</button> */}
    </main>
  )
}

export default Home