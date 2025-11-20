import React, { Component } from 'react'
import { useTranslation } from 'react-i18next'

export default function DownFooter () {

    const {t} = useTranslation()

    return (
        <div className="footer">
            <div className="footer-child">
                <div className="left-footer">
                    <div className="logo">
                        <img src="/logo.png" alt="" />
                    </div>
                    <p>{t("footer").p}</p>
                    <div className="phone-box">
                        <img src="/home/icon/mingcute--phone-call-line.svg" alt="" />
                        <div className="phone-number">
                            <h1>0 (550) 680-34-12</h1>
                            <span>{t("footer").time}</span>
                        </div>
                    </div>
                    <div className="contact-social-media">
                        <img src="/home/icon/ri--facebook-fill.svg" alt="" />
                        <img src="/home/icon/mdi--twitter.svg" alt="" />
                        <img src="/home/icon/mdi--youtube.svg" alt="" />
                        <img src="/home/icon/mdi--instagram.svg" alt="" />
                    </div>
                </div>
                <div className="center-footer">
                    <div className="center-footer-title">
                        <h1>{t("footer").title1}</h1>
                        <div className="line"></div>
                    </div>
                    <div className="center-footer-content">
                        <div className="center-footer-ul">
                            <ul>
                                <li>{t("footer").li1} </li>
                                <li>{t("footer").li2} </li>
                                <li>{t("footer").li3} </li>
                                <li>{t("footer").li4} </li>
                            </ul>
                        </div>
                        <button className="read-more">{t("footer").button} <img src="/home/icon/formkit--arrowright.svg" alt="" /></button>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="center-footer-title">
                        <h1>{t("footer").title2}</h1>
                        <div className="line"></div>
                    </div>
                    <div className="right-footer-img">
                        <img src="/home/beautiful-and-stylish-girl-on-the-tennis-court-1536x1024.jpg" alt="" />
                        <img src="/home/insta-02-140x140.jpg" alt="" />
                        <img src="/home/child-training-tennis.webp" alt="" />
                        <img src="/home/child-training-tennis-1.webp" alt="" />
                        <img src="/home/serving-tennis-player.webp" alt="" />
                        <img src="/home/boy-on-tennis-training.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
  
}
