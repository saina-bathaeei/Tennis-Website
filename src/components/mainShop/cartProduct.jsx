import React, { Component } from 'react'

export default class CartProduct extends Component {
    removePro(n){
        this.props.removeProduct(n)
    }
  render() {
    return (
      <div className='product-cart'>
        <img className='img-cart' src={this.props.img} alt="" />
        <div className='info-contain-cart'>
            <div className="info-cart">
                <h1>{this.props.title}</h1>
                <span>1 * {this.props.price}</span>
                </div>
        </div>
        <div className="contain-cart">
          <img className='cart-cross' src="/home/icon/maki--cross.svg" alt="" onClick={this.removePro.bind(this , this.props.title)} />
        </div>
      </div>
    )
  }
}
