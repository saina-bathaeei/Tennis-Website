import React, { Component } from 'react'
import './review.css'

export default class Review extends Component {

  render() {
    return (
      <div className='rev'>
            <div className='two-vir'>
                <img src="/home/icon/mdi--comma.svg" alt="" />
                <img src="/home/icon/mdi--comma.svg" alt="" />
            </div>
            <div className="review-info">
                <p>{this.props.info}</p>
                <h3>{this.props.name}</h3>
                <h5>{this.props.location}</h5>
                <div className="person">
                    <img src={this.props.img} alt="" />
                </div>
            </div>
      </div>
    )
  }
}
