import React,{useState,forceUpdate} from 'react';
import "../Calendar/index.css"
import Flexbox from 'flexbox-react';
import Event from '../Event';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const Cell = (props) => {

  const forceUpdate = useForceUpdate();

    return(
      <div className = "cell-container"  style={{
        overflow:'hidden',
        //width:'inherit',
        width:'14%',
        height:'20%',
        backgroundColor : 'white',
        color:'black',
        borderColor: 'black',
        border:".5px solid black"
      }}
      onDoubleClick={() => {
        props.addEvent(props.date - 1)
        forceUpdate();
      }}  
       //onMouseEnter={hoverTile}
       >
        {props.date}
        <Flexbox style={{
           width:'90%',
           height:'90%',
           flexDirection:'column'}}>
          {props.events}
        </Flexbox>
        
      </div>
    );
  }

  
  
  
  export default Cell;