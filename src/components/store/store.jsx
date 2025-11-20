import './store.css'
import React,{ useState } from 'react'
import ProductBox from './productBox/productBox'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect } from 'react'

export default function store() {

    const {t} = useTranslation()

    const [productBox,setProductBox] = useState([
        {img: '/home/product-01-600x600.jpg' , star: 5 , title: t("storeHome").product1  , price: '$13.49' },
        {img: '/home/product-02-600x600.jpg' , star: 5 , title: t("storeHome").product2  , price: '$17.99' },
        {img: '/home/product-03-600x600.jpg' , star: 4 , title: t("storeHome").product3  , price: '$9.99' },
        {img: '/home/product-04-600x600.jpg' , star: 5 , title: t("storeHome").product4  , price: '$125.00' },
    ])

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])

  return (
    <div className="store">
            <div className="store-title">
                <div className="absolute-services-title" style={{color: 'white'}}>
                    <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{t("storeHome").backgroundTitle}</h1>
                </div>
                <span>{t("storeHome").title1}</span>
                <h1 className="title-membership-pice" style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{t("storeHome").title2}</h1>
            </div>
            <div className="product-box-container">
                {
                    productBox.map((product)=> (
                        <ProductBox {...product} />
                    ))
                }
        </div>
    </div>
  )
}

