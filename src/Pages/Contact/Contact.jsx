import './Contact.css'
import React from 'react'
import NavBar from '../../components/nav bar/nav'
import Footer from '../../components/footer/footer'

import PhoneIcon from '@mui/icons-material/Phone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

export default function Contact() {

    const {t} = useTranslation()

  return (
    <>
    <div className="about-nav">
        <NavBar/>
    </div>
    <div className='contact'>
        <div className="contact-left">
            <form action="">
                <div className='contact-container-name'>
                    <div className='contact-name'>
                        <label htmlFor="">{t("contactPage").input1}</label>
                        <input type="text" placeholder={t("contactPage").input1} />
                    </div>
                    <div className='contact-last'>
                        <label htmlFor="">{t("contactPage").input2}</label>
                        <input type="text" placeholder={t("contactPage").input2} />
                    </div>
                </div>
                <div className='contact-email'>
                    <label htmlFor="">{t("contactPage").input3}</label>
                    <input type="text" placeholder={t("contactPage").input3} />
                </div>
                <div className='contact-message'>
                    <label htmlFor="">{t("contactPage").input4}</label>
                    <textarea name="" id=""></textarea>
                </div>
                <button>{t("contactPage").button}</button>
            </form>
        </div>
        <div className="contact-right">
            <div className="contact-info">
                <div className="contact-info-box">
                    <div className="info-box-img"><PhoneIcon/></div>
                    <div className="info-box-information">
                        <h3>{t("contactPage").info1}</h3>
                        <p>09125426945</p>
                    </div>
                </div>

                <div className="contact-info-box">
                    <div className="info-box-img"><LocationPinIcon/></div>
                    <div className="info-box-information">
                        <h3>{t("contactPage").info2}</h3>
                        <p>Znjan</p>
                    </div>
                </div>

                <div className="contact-info-box">
                    <div className="info-box-img"><EmailIcon/></div>
                    <div className="info-box-information">
                        <h3>{t("contactPage").info3}</h3>
                        <p>sbathae@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-img">
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
