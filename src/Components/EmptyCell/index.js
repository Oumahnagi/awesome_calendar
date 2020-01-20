import React from 'react';
import "../Calendar/index.css"
const EmptyCell = (props) => {
    return(
  <div className = "cell-container"  style={{
        overflow:'hidden',
        width:'14%',
        height:'20%',
        backgroundColor: 'white',
        color:'black',
        borderColor: 'black',
        border:".5px solid black",
        backgroundImage: 'linear-gradient(to left top, #c6c6c6 0%, #c6c6c6 50%, transparent 51%)'
        
      }}
      >
  
      </div>
  
    );
  }
  export default EmptyCell;