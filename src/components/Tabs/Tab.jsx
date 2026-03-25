import React, { useState } from 'react';

const Tab = ({tog, setTog,select}) => {
    return (
        <div className='flex justify-between  max-w-[95%] mx-auto my-16'>
            <h1 className='sara font-bold text-[#131313] text-2xl'>{tog? 'Available Players' : `Selected Player (${select.length}/11) `}</h1>


            <div className="border border-[#13131310] rounded-md ">
                <button className={`${tog && 'bg-[#E7FE29] font-bold' } p-3 rounded-l-md `} onClick={()=> setTog(true)}>Available</button>

                <button className={`${tog || "bg-[#E7FE29] font-bold"} not-first: p-3 rounded-r-md`}  onClick={()=> setTog(false)}>Selected {`(${select.length})`}</button>
            </div>
        </div>
    );
};

export default Tab;