import React from 'react';
import './font/Mak-Bold 700.otf';
import './Header.css';
import Timer from './Timer/Timer';
import Calendar  from './Calendar/Calendar';
import SpotifyApplication from './SpotifyApplication/SpotifyApplication';
function Header(){
        return(
            <div className='Header'>
            <div className='dateTime'>
            <div className='dayInfo'>
            <p>Today is :</p>
            <Calendar/>
            <Timer/>
            </div>
            <p className="p__dateTime"> Add your tasks for today </p>
            </div>
            <SpotifyApplication/>
            </div>
        )
    
    
}
export default Header;