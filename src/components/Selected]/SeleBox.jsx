import React from 'react';
import { toast } from 'react-toastify';

const SeleBox = ({data,setSelect,select,coin, setCoin}) => {
    console.log(data)
    return (
        <div className='border p-4 m-3 border-[#13131310] rounded-lg flex justify-between items-center'>
            <div className="">
                <img src="" alt="" />
                <div className="">
                    <h1 className='font-bold text-lg'>{data.name}</h1>
                    <p className='text-[#13131360] sara'>{data.category}</p>
                </div>
            </div>
            <button className='btn rounded-full bg-white' onClick={()=>{
                const ele = select.filter(se => se.id !== data.id)
                setSelect(ele)
                toast.warning("Delete a player")
                setCoin(coin + data.price_usd)
            }}>
                <i class="fa-solid fa-trash-can text-red-600"></i>

            </button>
        </div>
    );
};

export default SeleBox;