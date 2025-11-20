import React, { useState } from 'react'
import './membershipCost.css'
import MembershipBox from './membership box/membershipBox'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect } from 'react'

export default function MembershipCost (props) {

    const {t} = useTranslation()

    const com = t("membershipCost").component

    const [member,setMember] = useState([
        {title: com.A.title , price: com.A.price ,img1:'/home/icon/teenyicons--tick-outline.svg',img2:'/home/icon/system-uicons--cross.svg',img3:'/home/icon/system-uicons--cross.svg',img4:'/home/icon/system-uicons--cross.svg' },
        {title: com.B.title , price: com.B.price ,img1:'/home/icon/teenyicons--tick-outline.svg',img2:'/home/icon/teenyicons--tick-outline.svg',img3:'/home/icon/system-uicons--cross.svg',img4:'/home/icon/system-uicons--cross.svg' },
        {title: com.C.title , price: com.C.price ,img1:'/home/icon/teenyicons--tick-outline.svg',img2:'/home/icon/teenyicons--tick-outline.svg',img3:'/home/icon/teenyicons--tick-outline.svg',img4:'/home/icon/system-uicons--cross.svg' },
        {title: com.D.title , price: com.D.price  ,img1:'/home/icon/teenyicons--tick-outline.svg',img2:'/home/icon/teenyicons--tick-outline.svg',img3:'/home/icon/teenyicons--tick-outline.svg',img4:'/home/icon/teenyicons--tick-outline.svg' }
    ])

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])

  
    return (
        <>
        <div className="membership-price">
            <div className="membership-price-title">
                <div className="absolute-services-title" style={{zIndex: 1 , color: '#f2f7f3'}}>
                    <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{t("membershipCost").backgroundTitle}</h1>
                </div>
                <span>{t("membershipCost").title1}</span>
                <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}} className="title-membership-pice">{t("membershipCost").title2}</h1>
            </div>
            <div className="membership-price-box">
                {
                    member.map((mem) => (
                        <MembershipBox {...mem} /> 
                    ))
                }
            </div>
        </div>
        </>
    )

}
