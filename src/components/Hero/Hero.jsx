import React from 'react';
// import bg from '../../images'
import cricket from '../../images/assets/banner-main.png'

const Hero = () => {
    return (
        <div className='heros  max-w-[95%] mx-auto mt-20 h-400 rounded-2xl' >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md p-10">
                    <img src={cricket} alt="" className='max-w-50 mx-auto' />
                    <h1 className="mb-5 text-3xl font-bold my-4 sara">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h3 className="mb-5 inter text-[#FFFFFF70] text-2xl">
                        Beyond Boundaries Beyond Limits
                    </h3>
                    <div className='border border-[#E7FE29] max-w-50 p-2 rounded-lg mx-auto'>

                        <button className="w-full btn bg-[#E7FE29] border-none rounded-lg font-bold">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;