import React,{useState,setState} from 'react'
import Calendar from './Components/Calendar';
import Flexbox from 'flexbox-react';
import Cell from './Components/Cell';
import EmptyCell from './Components/EmptyCell';
import Event from './Components/Event';
import "./Components/Calendar/index.css";
import DaysOfWeek from './Components/DaysOfWeek';
const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
let NUM_OF_DAYS_IN_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const getFirstDay = () => {
   const currDate = new Date();
   return (new Date(currDate.getFullYear(),currDate.getMonth(),1));
}

const App = (props) => {
   const [currDate, setCurrDate] = useState( getFirstDay() );
   const [firstYear,setFirstYear] = useState (currDate.getFullYear());
   console.log(firstYear);
   const [history, setHistory] = useState([]);
   const [calendarSheets,setCalendarSheets] = useState([]);
   const [events,setevents] = useState([]);
   const increaseMonth = () =>{
      let newDate = new Date(currDate.getFullYear(),currDate.getMonth()+1,1);
      
      setCurrDate(newDate);
      
   }
   
   
   const decreaseMonth = () =>{
      if(currDate.getMonth()+currDate.getFullYear()-firstYear>0){
         let newDate = new Date(currDate.getFullYear(),currDate.getMonth()-1,1);
         setCurrDate(newDate)
         return newDate;
      }
   }
   const prevMonth = () =>{
      if(currDate.getMonth()+currDate.getFullYear()-firstYear>0)
      setCurrDate(decreaseMonth()); 
      
   }
   
  const saveEvent = (num,celldate,val) =>{
     console.log("events");
     console.log(events);
   let newevents = events.slice();
      let year = 12*(currDate.getFullYear()-firstYear);
   newevents[currDate.getMonth()+year][celldate][num]=(<Event 
      value={val} 
      num ={num }
      
      celldate={celldate}
      saveEvent={saveEvent} />);
   //setevents(newevents);//1!!!!!!!
  }

   const addEvent = (date) =>{
      console.log("events")
      console.log(events)
      let newevents = events.slice();
      let year = 12*(currDate.getFullYear()-firstYear);
      newevents[currDate.getMonth()+year][date].push(//tut
        <Event value={"event"} 
        num ={newevents[currDate.getMonth()+year][date].length }//tut
        
        celldate={date}
        saveEvent={saveEvent} />
      );
      //setevents(newevents);

  }

   const generateSheet = () =>{
      //console.log("generating")
      let firstSheet = calendarSheets.slice();
      let firstSheetEvent =[...events];
       
      //firstSheetEvent.push([]);
      let cells = [];
      let daycells = [];
      for(let i=0;i<days.length;i++){
         daycells.push(
            <DaysOfWeek 
            date = {days[i]}
                     />
                  );
               }
      for(let i = 0; i < currDate.getDay(); i++){
         cells.push(<EmptyCell/>)
      }
      let year = 12*(currDate.getFullYear()-firstYear);
      
      for(let i = 0; i < NUM_OF_DAYS_IN_MONTH[currDate.getMonth()]; i++){//tut
         firstSheetEvent[currDate.getMonth()+year].push([]);
         // console.log("month")
         // console.log(currDate.getMonth())
         cells.push(<Cell
            //addEvent = {addEvent}
            events = {firstSheetEvent[currDate.getMonth()+year][i]}
            month = {currDate.getMonth()+year}
            allevents = {events}
            setAllEvents = {setevents}
            date = {i+1}
            addEvent={addEvent}
            
            />);
         }
         for(let i = 0; i <35-NUM_OF_DAYS_IN_MONTH[currDate.getMonth()]-currDate.getDay(); i++){
            cells.push(<EmptyCell/>)
         }
         if(cells.length>35){
            while(cells.length<42){
               cells.push(<EmptyCell/>)
            }
         }
         firstSheet.push(<Calendar
            days = {daycells}
            cells = {cells}
            events = {firstSheetEvent[currDate.getMonth()+year]}//tut
            />)
            calendarSheets.push(<Calendar
               cells = {cells}
               events = {firstSheetEvent[currDate.getMonth()+year]}
               />)
               
               //calendarSheets.push(firstSheet);
               setCalendarSheets(firstSheet);
               setevents(firstSheetEvent);
               
               // console.log(firstSheet);
               // console.log(firstSheetEvent);
               // console.log("EVENTS ON GEN")
               // console.log(events)
               
            }

   if(!history.includes(currDate.toDateString())){
      console.log("!includes");
      let newhistory=history;
      newhistory.push(currDate.toDateString());
      history.push(currDate.toDateString());
      let newevents=events;
      newevents.push([]);
      setHistory(newhistory);
      setevents(newevents);
      generateSheet();
   }
   //setevents(events);
   let year = 12*(currDate.getFullYear()-firstYear);
   return (
      
      <div className = "App" style={{
         height:'100%',
         position:'absolute',
       width:'100%'
       }}>

       <Flexbox 
       flexDirection={'row'} 
       flexWrap={"row wrap"} 
       height={"8%"}
       >
       <button 
         className="button"
         onClick={prevMonth} 
         style={{
           width:"46%",
           textAlign: 'center'
       }}>ᐸ</button>
       <div style={{
          fontSize:'30px',
          margin:"auto"
       }}>{ MONTHS[currDate.getMonth()]+","+currDate.getFullYear() }</div>
       
       <button 
         className="button"
         onClick={()=>{
           increaseMonth()
         }}
         style={{
           width:"46%",
           padding: '0',
          
           textAlign: 'center'
         }}>ᐳ</button>
       </Flexbox>
    {calendarSheets[currDate.getMonth()+year]}
    </div>
   
   )
}

export default App;