import React, { use } from 'react';
import PlayerCard from './PlayerCard';

const Player = ({data,setSelect,select,coin, setCoin}) => {
    const formateData = use(data).data.players
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                formateData.map(play=> <PlayerCard key={play.id} data={play} select={select} setSelect={setSelect} coin={coin} setCoin={setCoin}></PlayerCard>)

            }
        </div>
    );
};

export default Player;