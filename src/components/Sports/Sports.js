import React, { useEffect, useState } from 'react';
import Sport from '../Sport/Sport';
import './Sports.css';
import image from '../../images/fahim.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Sports = () => {
    const [sports, setSports] = useState([]);
    useEffect( () => {
        fetch('sports.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, [])

    return (
        // <div className='row'>
        //     <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
        //         <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-75 mt-1 ms-5'>
        //             {
        //                 sports.map(sport => <Sport sport = {sport}></Sport>)
        //             }
        //         </div>
        //     </div>

        //     <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
        //         {/* <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>

        //         </div> */}

        //         <div className='project-cart-container'>

        //             <div className='cart-parent-div'>
        //                 <div className='my-image-and-name'>
        //                     <img src="" alt="" />
        //                     <div className='my-name-address'>
        //                         <h4> Fahim Faysal</h4>
        //                         <p>Dinajpur, Bangladesh</p>
        //                     </div>
        //                 </div>

        //                 <div className='about-myself'>

        //                     <div className='my-age'>
        //                         <h3 style={{color:"blue"}}>Age</h3>
        //                         <h3 style={{marginTop:"-10px"}}>25+</h3>
        //                     </div>

        //                     <div className='my-university'>
        //                         <h3 style={{color:"blue", textAlign:"center"}}>University</h3>
        //                         <h3 style={{textAlign:"center", marginTop:"-10px"}}>AIUB</h3>
        //                     </div>

        //                     <div className='my-study'>
        //                         <h3 style={{color:"blue", textAlign:"center"}}>Study</h3>
        //                         <h3 style={{marginTop:"-10px"}}>BSc in CSE</h3>
        //                     </div>

        //                 </div>

        //                 <h3 className='break-title'> Add a Break</h3>

        //                 <div className='break-section'>
        //                         <p>10<span>m</span></p>
        //                         <p>15<span>m</span></p>
        //                         <p>20<span>m</span></p>
        //                         <p>25<span>m</span></p>
        //                         <p>30<span>m</span></p>
        //                 </div>

        //                 <h3 className='exercise-title'> Sports Details</h3>

        //                 <div className='exercise-section'>

        //                     <div className='exercise-time-div'>
        //                         <h4>Playing Time</h4>
        //                         <p>Mins</p>
        //                     </div>
        //                     <div className='break-time-div'>
        //                         <h4>Break Time</h4>
        //                         <p>Minutes</p>
        //                     </div>
        //                 </div>

        //                 <div className='cart-button'>
        //                     <button> Click Here </button>
        //                 </div>

        //             </div>

        //         </div>

        //     </div>
        // </div>


        <div className='row mt-3'>
            {/* Left Side Sports Card */}
            <div className='col col-md-8 col-lg-8 col-xl-8 col-sm-12'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 ms-2'>
                    {
                        sports.map(sport => <Sport sport = {sport}></Sport>)
                    }
                </div>
            </div>

            {/* Right Side Cart */}
            <div className='col col-md-4 col-lg-4 col-xl-4 col-sm-12'>
                <div className='row mx-auto cart-color rounded-4 me-3'> 
                    <div className='mb-4 pb-4 rounded-3'>

                        <div className='project-cart-container'>

                            <div className='cart-parent-div'>

                                <div className='my-image-and-name'>
                                    <img src={image} alt="" />
                                    <div className='my-name-address'>
                                        <h6 className='fw-bold text-primary my-Name'> Fahim Faysal</h6>
                                        <div className='location-pin-address'>
                                            <FontAwesomeIcon className='location-icon' icon={faLocationDot}></FontAwesomeIcon>
                                            <p className='fw-bold my-Address'>Dinajpur, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='about-myself'>

                                    <div className='my-age'>
                                        <h5 style={{color:"blue"}} className='mb-4 mt-2'>Age</h5>
                                        <h5 className='mb-3'>25+</h5>
                                    </div>

                                    <div className='my-university'>
                                        <h5 style={{color:"blue", textAlign:"center"}}  className='mb-4 mt-2'>University</h5>
                                        <h5 style={{textAlign:"center"}} className='mb-3'>AIUB</h5>
                                    </div>

                                    <div className='my-study'>
                                        <h5 style={{color:"blue", textAlign:"center"}}  className='mb-4 mt-2'>Study</h5>
                                        <h5 className='mb-3'>BSc in CSE</h5>
                                    </div>

                                </div>

                                <h5 className='break-title'> Add a Break</h5>

                                <div className='break-section'>
                                        <p className='mt-3'>10m</p>
                                        <p className='mt-3'>15m</p>
                                        <p className='mt-3'>20m</p>
                                        <p className='mt-3'>25m</p>
                                        <p className='mt-3'>30m</p>
                                </div>

                                <h5 className='exercise-title'> Sports Details</h5>

                                <div className='exercise-section'>
                                    <div className='exercise-time-div py-1'>
                                        <h5 className='mt-2'>Playing Time</h5>
                                        <p className='mt-2'>Mins</p>
                                    </div>
                                    <div className='break-time-div py-1'>
                                        <h5 className='mt-2'>Break Time</h5>
                                        <p className='mt-2'>Minutes</p>
                                    </div>
                                </div>

                                <div className='cart-button'>
                                    <button className='btn btn-primary w-75 mt-3 py-2 fs-6'> Click Here </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;
