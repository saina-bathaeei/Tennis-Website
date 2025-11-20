import React, { Component } from 'react'
import './rentCourt.css'

export default function RentCourt () {
    return (
        <div class="rent-court">
            <div class="rent-court-1"></div>
            <div class="rent-court-2">
                <div className='rent-court-child'>
                    <div className="title">
                        <h1>court</h1>
                        <h1 style={{color: '#10181a'}}>rent</h1>
                    </div>
                    <div className="time-and-price">
                        <div className="time">
                            <div className='time-child'><h3>09:00 - 15:00</h3></div>
                            <div className='time-child'><h3>15:00 - 21:00</h3></div>
                            <div className='time-child'><h3>saturday/sunday</h3></div>
                        </div>
                        <div className="time-and-price-img">
                            <img src="/home/icon/game-icons--tennis-ball.svg" alt="" id="" />
                            <img src="/home/icon/game-icons--tennis-ball.svg" alt="" id="" />
                            <img src="/home/icon/game-icons--tennis-ball.svg" alt="" id=""/>
                        </div>
                        <div className="price">
                            <h3>$15 per hour</h3>
                            <h3>$25 per hour</h3>
                            <h3>$40 per hour</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rent-court-3"></div>
            <div class="rent-court-4"></div>
        </div>
    )
}
