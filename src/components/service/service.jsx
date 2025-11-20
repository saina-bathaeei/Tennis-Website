import React from "react";
import { useState } from "react";
import './service.css'
import SportClubBox from "./sport-club-box/sport-club-box";
import Title from "../title/title";
import { useTranslation } from "react-i18next";

export default function Service () {

        const {t} = useTranslation()

        const com = t("serviceHome").component

        const [sportBox,setSportBox] = useState([
            {bigImage:'src/assets/image/service-01-365x450.jpg',smallImage:'src/assets/image/icon/exercise.png',title: com.A.title , info: com.A.p},
            {bigImage:'/home/service-image2-copyright.jpg',smallImage:'src/assets/image/icon/tennis-racket.png',title: com.B.title , info: com.B.p},
            {bigImage:'src/assets/image/service-03-365x450.jpg' , smallImage:'src/assets/image/icon/education.png',title: com.C.title , info: com.C.p},
            {bigImage:'src/assets/image/service-04-365x450.jpg' , smallImage:'src/assets/image/icon/lawn-mower.png',title: com.D.title , info: com.D.p}
        ])

    
        return(
            <>
            <Title title={t("serviceHome").backgroundTitle} mainTitle={t("serviceHome").title}/>
            <div className="four-services-box">
                {
                    sportBox.map((item) => (
                        <SportClubBox {...item}></SportClubBox>
                    ))
                }
            </div>
            </>
        )
}

