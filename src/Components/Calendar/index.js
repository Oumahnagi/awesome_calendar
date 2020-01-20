import React,{useState} from 'react';
import "./index.css"
  import Flexbox from 'flexbox-react';

//import DaysOfWeek from '../DaysOfWeek';

//const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const Calendar = (props) => {

  return(
      <div className = "calendar-container" style={{
        height:'100%',
        width:'100%'
        }}>
          <Flexbox 
          style={{
            display:'flex',
          width:'90%',
          height:'auto',
          margin:'auto'
        }}>
          {props.days}
        </Flexbox>
        <Flexbox 
          style={{
            display:'flex',
            flexWrap:'wrap',
          width:'90%',
          height:'inherit',
          margin:'auto'
        }}>
          {props.cells}
        </Flexbox>
      
      
      </div>
    );
    
}
///


export default Calendar;
