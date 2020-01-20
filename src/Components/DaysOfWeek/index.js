import React from 'react';
const DaysOfWeek = (props) => {
    
    return(
      <div className = "daysofweek-container" style={{
        overflow:'hidden',
        width:'14%',
        paddingBottom : '1%',
        backgroundColor : '#F0F8FF ',
        color:'black',
        fontSize:'130%',
        boarderColor: 'black',
        border:".5px solid black",
        textAlign: 'center'
      }}>
        {props.date}
      </div>
    );
  }
  export default DaysOfWeek;