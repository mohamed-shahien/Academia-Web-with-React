import React from 'react'
import Back from '../common/back/Back'
import PriceCard from './PriceCard'
import './price.css'
import Faq from './Faq'

const Price = () => {
  return (
    <>
      <Back title="Choose right plan"/>
      <section className="padding price">
        <div className="grid container">
          <PriceCard/>
        </div>
      </section>
      <Faq/>
    </>
  )
}

export default Price
