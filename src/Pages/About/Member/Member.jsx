import React from 'react';

const Member = ({member}) => {
    const {name, image, position} = member
    return (
        <div>
            <div>
                <img className='w-full rounded-md' src={image} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='text-lg text-secondary font-manrope mt-4 mb-2 font-bold'>{name}</h3>
                <p className='text-[13px] font-light'>{position}</p>
            </div>
        </div>
    );
};

export default Member;