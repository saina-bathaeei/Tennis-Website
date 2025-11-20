import React, { Component } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect, useState } from 'react'


export default function UpFooter () {

    const {t} = useTranslation()

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])

    return (
        <div className="subscribe-footer">
            <h2 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>
                <span style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{t("topFooter").title1}</span>
                <br />
                {t("topFooter").title2}
            </h2>
            <div className="subscribe-input">
                <input style={direction === 'rtl' ? {fontFamily:'Bvazir',left: "-70px"} : {fontFamily: "Kanit"}} type="text" placeholder={t("topFooter").input} />
                <button style={direction === 'rtl' ? {fontFamily:'Bvazir', left: "75px"} : {fontFamily: "Kanit"}} className="read-more">{t("topFooter").button}</button>
            </div>
        </div>
    )
  
}
