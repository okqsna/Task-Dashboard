import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import './SpotifyApplication.css';
function SpotifyApplication(){
    const size = {
        width: 300,
        height: 180,
      };
      const view = 'list';
      const theme = 'black';
      const uri="spotify:playlist:6iprFT2TRmVmtgRZvLiSEH?si=e112170af4ac4641";
    return(
        <div className='SpotifyApplication'>
        <SpotifyPlayer uri={uri} size={size} view={view} theme={theme}/>,
        </div>
      )
}

export default SpotifyApplication;