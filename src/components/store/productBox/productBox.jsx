import '../store.css'
import React from 'react'

export default function productBox(props) {
  return (
    <div className='product-box-new'>
        <div className="product-img" style={{backgroundImage: `url(${props.img})`}}>
            <div className="rating-product"><img src="/icons/material-symbols--star-rounded.svg" alt="" />{props.star}</div>
        </div>
        <div className="product-info">
            <div className="product-info-top">
                <div className="product-name">{props.title}</div>
                <div className="product-price">{props.price}</div>
            </div>
            <button><img src="/icons/iconamoon--shopping-bag-fill (1).svg" alt="" /></button>
        </div>
    </div>
  )
}
