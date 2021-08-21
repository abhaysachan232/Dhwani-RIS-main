import React from 'react'

import Countdown from "react-countdown";

const TimerCounter = () => {
    const renderer = ({ seconds}) => {
  
    return (
      <span>
        {seconds}
      </span>
    );
  }


    return (
      <>
      <Countdown date = {Date.now() + 8000}renderer = {renderer} >
    
  </Countdown>
      </>
    )
}

export default TimerCounter;
