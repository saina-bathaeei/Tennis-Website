
import React, { Component } from 'react'
import { useTranslation } from 'react-i18next'

import i18next from 'i18next'
import { useEffect, useState } from 'react'

export default function Wearing() {

    const {t} = useTranslation()
    const com = t("wearing")
    const [direction,setDirection] = useState('')


    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])


    return (
        <div className="wearing">
            <div className="wear-collection">
                <div className="wearing-info">
                    <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir', fontStyle: 'normal'} : {fontFamily: "Kanit",fontStyle: 'italic'}} className="wearing-title">{com.component.A.title2}
                        <br />
                        <span>{com.component.A.title}</span>
                    </h1>
                    <p style={direction === 'rtl' ? {fontFamily:'Lvazir', fontStyle: 'normal', opacity: '0.5'} : {fontFamily: "Kanit",fontStyle: 'italic'}}>{com.component.A.p}</p>
                    <button style={direction === 'rtl' ? {fontFamily:'Lvazir', fontStyle: 'normal'} : {fontFamily: "Kanit",fontStyle: 'italic'}} className="read-more">{com.button} <img style={direction === 'rtl' ? {display: 'none'} : {display: "block"}} src="/home/icon/formkit--arrowright.svg" alt="" /></button>
                </div>
      
                <div className="img-wearing-cotain"><img src="/home/coach-slider-person.png" alt="" /></div>
            </div>
            <div className="ac-shoe">
                <div className="accessories">
                    <div className="wearing-info">
                        <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir', fontStyle: 'normal'} : {fontFamily: "Kanit",fontStyle: 'italic'}}>{com.component.B.title}</h1>
                        <p style={direction === 'rtl' ? {fontFamily:'Lvazir', fontStyle: 'normal', opacity: '0.5'} : {fontFamily: "Kanit",fontStyle: 'italic'}}>{com.component.B.p}</p>
                        <button style={direction === 'rtl' ? {fontFamily:'Lvazir', fontStyle: 'normal'} : {fontFamily: "Kanit",fontStyle: 'italic'}} className="read-more">{com.button} <img style={direction === 'rtl' ? {display: 'none'} : {display: "block"}} src="/home/icon/formkit--arrowright.svg" alt="" /></button>
                    </div>
                    <div className="img-wearing-cotain"><img style={{width: 275}} src="/home/collection-02.jpg" /></div>
                    
                </div>
                <div className="running-shoes">
                    <div className="wearing-info">
                        <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir', fontStyle: 'normal'} : {fontFamily: "Kanit",fontStyle: 'italic'}}>{com.component.C.title}</h1>
                        <p style={direction === 'rtl' ? {fontFamily:'Lvazir', fontStyle: 'normal', opacity: '0.5'} : {fontFamily: "Kanit",fontStyle: 'italic'}}>{com.component.C.p}</p>
                        <button style={direction === 'rtl' ? {fontFamily:'Lvazir', fontStyle: 'normal'} : {fontFamily: "Kanit",fontStyle: 'italic'}} className="read-more">{com.button} <img style={direction === 'rtl' ? {display: 'none'} : {display: "block"}} src="/home/icon/formkit--arrowright.svg" alt="" /></button>
                    </div>
                    <div className="img-wearing-cotain"><img style={{width: 300}} src="/home/collection-03.jpg" alt="" /></div>
                </div>
            </div>
        </div>
    )
}
