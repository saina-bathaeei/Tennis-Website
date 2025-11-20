import './Coach.css'
import CoachBox from '../CoachBox/CoachBox'
import { useTranslation } from 'react-i18next';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import i18next from 'i18next'
import { useEffect, useState } from 'react'

export default function Coach() {

    const {t} = useTranslation()

    const [direction,setDirection] = useState('')

    const com = t("coachHome").component

    const [coachInfo,setCoachInfo] = useState([
        {name: com.A.name ,star:'5',exprience: com.A.ex,benefit1: com.A.perfect1 , benefit2: com.A.perfect2 , benefit3: com.A.perfect3 ,img:'/coach/copied-coach-1.jpg'},
        {name: com.B.name,star:'4.5',exprience: com.B.ex,benefit1: com.B.perfect1 , benefit2: com.B.perfect2 , benefit3: com.B.perfect3  ,img:'/coach/copied-coach-2.jpg'},
        {name: com.C.name,star:'4.1',exprience: com.C.ex,benefit1: com.C.perfect1 , benefit2: com.C.perfect2 , benefit3: com.C.perfect3  ,img:'/coach/copied-coach-3.jpg'},
        {name: com.D.name,star:'4.7',exprience: com.D.ex,benefit1: com.D.perfect1 , benefit2: com.D.perfect2 , benefit3: com.D.perfect3  ,img:'/coach/copied-coach-4.jpg'},
        {name: com.F.name,star:'3.9',exprience: com.F.ex,benefit1: com.F.perfect1 , benefit2: com.F.perfect2 , benefit3: com.F.perfect3 ,img:'/coach/copied-coach-5.jpg'},
    ])
    const [swiperCount,setSwiperCount] = useState(3)

    useEffect(() => {
        if(window.innerWidth < 450){
            setSwiperCount(1)
        }else if(window.innerWidth < 810 && window.innerWidth > 450){
            setSwiperCount(2)
        console.log(window.innerWidth)
        }

        setDirection(i18next.dir())
    },[i18next,i18next.language])


    

  return (
    <div className="coach">
        <div className="services-title">
            <div className="absolute-services-title">
                <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{t("coachHome").backgroundTitle}</h1>
            </div>
            <div className="main-services-title">
                <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir',fontStyle:'normal'} : {fontFamily: "Kanit",fontStyle:'italic'}}>{t("coachHome").title1} <span>{t("coachHome").title2}</span> {t("coachHome").title3}
                <br />
                {t("coachHome").title4}</h1>
            </div>
        </div>
        <div className="coach-boxes">
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={swiperCount}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            {
                coachInfo.map((c) => (
                    <SwiperSlide>
                        <CoachBox {...c}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
    </div>
  )
}
