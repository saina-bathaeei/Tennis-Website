import './ShopHeading.css'
import React from 'react'
import NavBar from '../nav bar/nav'
import { useTranslation } from 'react-i18next'

export default function ShopHeading() {

  const {t} = useTranslation()

  return (
    <div className="shop-heading">
        <NavBar/>
    <div className='shop-header-container'>
        <h1>{t("shop").landing.title}</h1>
        <p>{t("shop").landing.p}</p>
        <button>{t("shop").landing.button}</button>
    </div>
    </div>
    
  )
}
