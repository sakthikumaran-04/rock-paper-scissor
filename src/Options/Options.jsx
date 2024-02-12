import React, { useEffect } from 'react'
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissor from '../assets/scissor.png'
import { useRef} from 'react'

function Options(props) {
    const rockRef = useRef("")
    const paperRef = useRef("")
    const scissorRef = useRef("")

    
    

  return (

    <div className="options">
        <button ref={rockRef} value="rock" onClick={()=>{
            if(props.setP1Choice){
                props.setP1Choice(prev => rockRef.current.value)
                console.log(props.p1Choice)
            }else{
                props.setP2Choice(prev => rockRef.current.value)
                console.log(props.p2Choice)
            }
            props.start(rockRef.current.value);
        }}><img src={rock} alt="" /></button>
        <button ref={paperRef} value="paper" onClick={()=>{
            if(props.setP1Choice){
                props.setP1Choice(prev => paperRef.current.value)
                console.log(props.p1Choice)
            }else{
                props.setP2Choice(prev => paperRef.current.value)
                console.log(props.p2Choice)
            }
            props.start(paperRef.current.value);
        }}><img src={paper} alt="" /></button>
        <button ref={scissorRef} value="scissor" onClick={()=>{
            if(props.setP1Choice){
                props.setP1Choice(prev => scissorRef.current.value)
                console.log(props.p1Choice)
            }else{
                props.setP2Choice(prev => scissorRef.current.value)
                console.log(props.p2Choice)
            }
            props.start(scissorRef.current.value);
        }}><img src={scissor} alt="" /></button>
    </div>
  )
}

export default Options