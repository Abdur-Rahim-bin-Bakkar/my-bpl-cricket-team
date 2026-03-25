import React from 'react';
import SeleBox from './SeleBox';

const Selected = ({ select, setSelect, coin, setCoin}) => {
    console.log(select)
    return (
        <div>
            {
                select.map(sel => <SeleBox data={sel} select={select} setSelect={setSelect} coin={coin} setCoin={setCoin}></SeleBox>)
            }
           
        </div>
    );
};

export default Selected;