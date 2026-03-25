import React, { useState } from 'react';
import user from '../../images/assets/user 1.png'
import flag from '../../images/assets/report 1.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ data, setSelect, select, coin, setCoin }) => {
    const [dis, setDis] = useState(false)
    return (
        <div className='card m-4 p-5 shadow'>
            <img src={data.image} alt="" className='rounded-md' />
            <div className="card-body">
                <h1 className='flex gap-3 text-2xl font-bold'><img src={user} alt="" />{data.name}</h1>
                <div className="flex justify-between my-3">
                    <div className='flex gap-3'><img src={flag} alt="" />{data.country}</div>
                    <button className='btn'>{data.category}</button>
                </div>
                <p className='font-bold text-lg'>Ranking: {data.icc_ranking_t20}</p>
                <p className='font-bold text-lg'>{data.batting_style ? data.batting_style : ""}  {data.bowling_style ? data.bowling_style : ""}  </p>

                <div className="flex justify-between ">
                    <p className='font-bold text-lg'>Price: $ {data.price_usd}</p>
                    <button disabled={dis} className='sara btn bg-white' onClick={() => {
                        if (coin < data.price_usd) {
                            toast.error('your amount is very low')
                            return
                        }
                        if (select.length > 10) {
                            toast.error('over 11')
                            return
                        }
                        // if (select.find(sele => sele.id !== data.id)) {

                        // }
                        setSelect([...select, data])
                        setDis(true)
                        setCoin(coin - Number(data.price_usd))
                        toast.success(`successful add ${select.length + 1}`)

                    }}>{dis ? "Selected" : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;