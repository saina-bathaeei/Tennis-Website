import React, { Component } from 'react'
import './membership.css'

export default function Membership () {
    return (
    <div className="membership-services">
        <div className="membership-feature">
            <div className="membership-feature-title">
                <h1>TENNIS
                    <br />
                    <span>CLUB CUP</span>
                </h1>
                <p>Mauris pulvinar laoreet mi, ut consequat mi imperdiet nec ut sed puru.</p>
            </div>
            <div className="main-feature-membership">
                <div className="membership-box">
                    <div className="img-membership-box">
                        <img src="/home/icon/mdi--tick.svg" alt=""/>
                    </div>
                    <h3>1 individual training</h3>
                </div>
                <div className="membership-box">
                    <div className="img-membership-box">
                        <img src="/home/icon/mdi--tick.svg" alt=""/>
                    </div>
                    <h3>Personal changing box</h3>
                </div>
                <div className="membership-box">
                    <div className="img-membership-box">
                        <img src="/home/icon/mdi--tick.svg" alt=""/>
                    </div>
                    <h3>Free access to the gym</h3>
                </div>
                <div className="membership-box">
                    <div className="img-membership-box">
                        <img src="/home/icon/mdi--tick.svg" alt=""/>
                    </div>
                    <h3>Parking place</h3>
                </div>
            </div>
            <button>read more <img src="/home/icon/formkit--arrowright.svg" alt=""/></button>
        </div>
        <div className="membership-coach">
            <div className="contain-coach-info">
                <div className="coach-info">
                    <div className="coach-info-date">21 Apr 2023</div>
                    <div className="coach-info-name">Marcus Crown – German Stiller</div>
                    <div className="coach-info-time">03:00 Court 01</div>
                </div>
                
                <div className="coach-info">
                    <div className="coach-info-date">21 Mar 2023</div>
                    <div className="coach-info-name">Andreas Medvedev – Antony Fonsteur</div>
                    <div className="coach-info-time">06:00 Court 01</div>
                </div>

                <div className="coach-info">
                    <div className="coach-info-date">28 Feb 2023</div>
                    <div className="coach-info-name">Serena Larsson – Olivia Schneider</div>
                    <div className="coach-info-time">08:00 Court 01</div>
                </div>
            </div>
            <button>View More <img src="/home/icon/formkit--arrowright.svg" alt="" /></button>
        </div>
        <div className="membership-services-img"></div>
    </div>
    )
}
