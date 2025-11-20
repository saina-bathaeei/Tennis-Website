import React, { useState } from 'react'
import './benefit.css'
import BenefitL from './benefit-left/benefitL'
import BenefitR from './benefit-right/benefitR'
import { useTranslation } from 'react-i18next'

export default function Benefit (props) {

  const {t} = useTranslation()
  const com = t("benefit")

  const [benefitBoxRight,setBenefitBoxRight] = useState([
    {img:'/home/icon/court.png' , title: com.title1  , info: com.p  },
    {img:'/home/icon/tennis.png' , title: com.title2 , info: com.p  },
    {img:'/home/icon/medal.png' , title: com.title3  , info: com.p  }
  ])

  const [benefitBoxLeft,setBenefitBoxLeft] = useState([
    {img:'/home/icon/court.png' , title: com.title1  , info: com.p  },
    {img:'/home/icon/tennis.png' , title: com.title2 , info: com.p  },
    {img:'/home/icon/medal.png' , title: com.title3  , info: com.p  }
  ])

    return (
      <div class="benefits">
        <div className='benefit-feature-left'>
        {
            benefitBoxRight.map((left) => (
              <BenefitL {...left} />
            ))
          }
        </div>
          

          <div className='benefit-feature-right'>
          {
            benefitBoxLeft.map((right) => (
              <BenefitR {...right} />
            ))
          }
          </div>
          
        </div>
    )
}