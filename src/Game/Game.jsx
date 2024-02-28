import React from 'react'
import restart from '../assets/icon-restart.svg'
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissor from '../assets/scissor.png'
import './Game.css'
import Options from '../Options/Options'
import { useState , useEffect} from 'react'
function Game(props) {
    const [choices, setChoices] = useState(["rock","paper","scissor"])
    const [p1Choice, setP1Choice] = useState("scissor")
    const [p2Choice, setP2Choice] = useState(null)
    const [result, setResult] = useState("START!")
    const [cpuScore, setCpuScore] = useState(0)
    const [ties, setTies] = useState(0)
    const [yourScore, setYourScore] = useState(0)

    function startGameCpu(choice){
        let cpu=Math.floor(Math.random()*3);
        setP1Choice(prev => choices[cpu]);
        if(choices[cpu]=="rock" && choice=="paper"){
            setResult("Paper Beats Rock!")
            setYourScore(yourScore+1)
        }
        else if(choices[cpu]=="paper" && choice=="scissor"){
            setResult("Scissor Beats Paper!")
            setYourScore(yourScore+1)
        }
        else if(choices[cpu]=="scissor" && choice=="rock"){
            setResult("Rock Beats Scissor!")
            setYourScore(yourScore+1)
        }
        else if(choices[cpu]=="rock" && choice=="scissor"){
            setResult("Rock Beats Scissor!")
            setCpuScore(cpuScore+1)
        }
        else if(choices[cpu]=="paper" && choice=="rock"){
            setResult("Paper Beats Rock!")
            setCpuScore(cpuScore+1)
        }
        else if(choices[cpu]=="scissor" && choice=="paper"){
            setResult("Scissor Beats Paper!")
            setCpuScore(cpuScore+1)
        }
        else{
            setResult("Draw!")
            setTies(ties+1)
        }
    }
    function reset(){
        setCpuScore(0)
        setTies(0)
        setYourScore(0)
        setResult("START!")
    }
    
    
    

    return (
        <main className='game'>
            <header>
                <i className="fa-solid fa-gamepad" onClick={()=>props.setPage("home")}></i>
                <h2>CPU VS P1</h2>
                <button onClick={reset}><img src={restart} alt="" /></button>
            </header>
            <section className='board'>
                <section className='player1'>
                    {props.gameType=="human" && <Options setP1Choice={setP1Choice} p1Choice={p1Choice}  start={startGameCpu}/>}
                    <div className="container">
                   <img className='player1_choice' src={p1Choice =="rock"? rock:p1Choice=="paper"?paper:scissor} alt={`CPU choice ${p1Choice}`} />
                    </div>
                </section>
                <h3>{result}</h3>
                <section className='player2'>
                    <div className="container">
                    <img className='player2_choice' src={p2Choice =="rock"? rock:p2Choice=="paper"?paper:scissor} alt={`Player choice ${p2Choice}`} />
                    </div>
                    <Options setP2Choice={setP2Choice} p2Choice={p2Choice} start={startGameCpu} />
                </section>
            </section>
            <section className="scores">
                <h4 className='player1_score'>CPU<br/> {cpuScore}</h4>
                <h4 className='ties'> Ties<br/> {ties}</h4>
                <h4 className='player2_score'>You<br/> {yourScore}</h4>
            </section>
        </main>
    )
}

export default Game