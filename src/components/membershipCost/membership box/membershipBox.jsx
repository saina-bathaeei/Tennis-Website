import React, { Component } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect, useState } from 'react'

export default function MembershipBox (props) {

    const {t} = useTranslation()

    const com = t("membershipCost")

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])
  
    return (
        <div className="member-price-box">
            <div className="member-price-box-top">
              <h2 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{props.title}</h2>
              <p>{com.p}</p>
              <div className="member-price">
                  <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir',marginTop:'15px', fontSize:'60px'} : {fontFamily: "Kanit"}}>{props.price} <span>{com.mount}</span></h1>
              </div>
              <button style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{com.button}</button>
            </div>
            <ul>
                <li><img src="/icons/charm--tick.svg" alt="" />{com.perfect}</li>
                
            </ul>
        </div>
    )

}
