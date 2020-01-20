import React from 'react';
import "../Calendar/index.css";
import EdiText from 'react-editext';
const Event = (props)=>{
    const onSave = (val) => {
      console.log('Edited Value -> ', val)
      props.saveEvent();
      //value=val;
    }
  
    return (
      <EdiText
      validation={val => val.length <= 18}
      editButtonClassName="custom-edit-button"
      editButtonContent="Edit"
      showButtonsOnHover
      submitOnEnter
      value={props.value}
      onSave = { (val) => { props.saveEvent(props.num, props.celldate, val) } }
     />
    );
  }
  export default Event;