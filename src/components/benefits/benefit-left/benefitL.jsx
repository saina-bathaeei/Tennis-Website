import React, { Component } from 'react'
import i18next from 'i18next'
import { useEffect, useState } from 'react'

export default function BenefitL (props) {

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])

    return (
    <div class="benefit-box">
        <img src={props.img} alt="" />
        <div class="benefit-box-info">
            <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir', fontStyle: 'normal'} : {fontFamily: "Kanit",fontStyle: 'italic'}}>{props.title}</h1>
            <p style={direction === 'rtl' ? {fontFamily:'Lvazir', fontSize: '14px'} : {fontFamily: "Kanit",fontSize: '16px'}}>{props.info}</p>
        </div>
    </div>
    )

}
