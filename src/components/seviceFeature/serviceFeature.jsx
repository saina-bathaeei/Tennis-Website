import './serviceFeature.css'

import React, { Component } from 'react'
import FeatureBox from './feature box/featureBox'

export default class ServiceFeature extends Component {

    constructor(props){
        super(props)
        this.state = {
            featureBox : [
                {number: '01' , title: 'Fitness and Gym', info: 'Donec vel egestas sem. Sed sed tempus dolor rhoncus nec porttitor vel.'},
                {number: '02' , title: 'Fitness and Gym', info: 'Donec vel egestas sem. Sed sed tempus dolor rhoncus nec porttitor vel.'},
                {number: '03' , title: 'Fitness and Gym', info: 'Donec vel egestas sem. Sed sed tempus dolor rhoncus nec porttitor vel.'}
            ]
        }
    }

  render() {
    return (
        <div class="contain-sevice-feature">
        <div class="service-features">
            <div class="service-features-img">
                <img src="/home/coach-slider-person.png" alt="" />
                
            </div>
            <div class="service-features-text">
                <div class="title-service-features">
                    <h1>
                        Additional services
                        <br />
                        <span>for your convenience</span>
                    </h1>
                    <p>Curabitur eu nisi eu eros varius elementum ac non massa. Proin bibendum, orci ac vulputate tristique.</p>
                </div>
                <div class="service-feature-boxs">
                    {
                        this.state.featureBox.map((item) => (
                            <FeatureBox {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    )
  }
}
