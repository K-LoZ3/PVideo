import React from 'react';
import '../assets/styles/components/Player.scss'

const Player = props => {
   const { match: { params: { id } } } = props;

   return (
      <div className="Player">
         <video controls autoPlay>
            <source src="" type="vidoe/mp4" />
         </video>
         <div className="Player-back">
            <button type="button" onClick={() => props.history.goBack()}>
               Regresar
            </button>
         </div>
      </div>
   );
}

export default Player;