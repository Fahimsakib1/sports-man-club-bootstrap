import React from 'react';

const Sport = (props) => {
    const {name, img, description, timeMinute, age} = props.sport;
    console.log(props.sport);
    return (
        <div className='col'>
            <div className='card mb-3 rounded-4'>
                <img className='image rounded-3 m-2' src={img} alt="" />
                <div className='card-body '>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{description.length > 100 ? description.slice(0,100) + '...' : description}</p>
                    <h6> Playing Time: {timeMinute}</h6>
                    <h6> Playing Time: {age}</h6>
                    <button className='btn btn-primary w-100 mt-2'>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Sport;


