import React, { Component } from 'react'
import './featureBox.css'

export default class FeatureBox extends Component {
  render() {
    return (
    <div className="feature-box">
        <div className="feature-number">
            <h1>{this.props.number}</h1>
        </div>
        <div className="feature-box-text">
            <h2>Fitness and Gym</h2>
            <p>Donec vel egestas sem. Sed sed tempus dolor rhoncus nec porttitor vel.</p>
        </div>
    </div>
    )
  }
}
