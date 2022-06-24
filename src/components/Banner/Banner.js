import React from 'react'
import './Banner.css'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import workout from '../../assets/workout.jpeg'
import mobility from '../../assets/mobility.jpg'
import drills from '../../assets/drills.jpg'

function Banner() {
    return (
        <>
            <div id="banner">
                <div className="banner__main__parent">
                    <h1>Runner's Workout</h1>
                    <div className="banner__box">
                        <div className="banner__box__item banner__box__one">
                            <img src={workout} alt="" />
                            <div className="banner__box__content">
                                <p>STRENGTH</p>
                                <BsFillArrowRightCircleFill size={20} className='banner__box__icon' />
                            </div>
                        </div>
                        <div className="banner__box__item  banner__box__two">
                            <img src={mobility} alt="" />
                            <div className="banner__box__content">
                                <p>MOBILITY</p>
                                <BsFillArrowRightCircleFill size={20} className='banner__box__icon' />
                            </div>
                        </div>
                        <div className="banner__box__item banner__box__three">
                            <img src={drills} alt="" />
                            <div className="banner__box__content">
                                <p>DRILLS</p>
                                <BsFillArrowRightCircleFill size={20} className='banner__box__icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner