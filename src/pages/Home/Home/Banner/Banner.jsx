import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='background h-[450px]'>
             <div className='flex justify-center items-center h-full'>
                <div>
                <h1 className='text-[54px] text-white font-bold'>Download High Quality Images by creators</h1>
                <p className='text-white text-center py-5'>Over 2.4 million+ stock Images by our talented community</p>
                {/* <input type="text" placeholder="Search high resulation images, categories, wallpapers" className="input input-bordered w-full"/> */}
                <div className="form-control w-full">
                <div className="input-group w-full">
                    <input type="text" placeholder="Search high resulation images, categories, wallpapers" className="input input-bordered w-full" />
                    <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                </div>
                </div>
             </div>
        </div>
    );
};

export default Banner;