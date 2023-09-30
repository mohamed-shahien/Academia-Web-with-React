import React from 'react'
import Title from '../common/title/Title'
import PriceCard from '../pricing/PriceCard'

const Hprice = () => {
    return (
        <>
            <section className='hpricing padding'>
                <Title subtitle="our pricing" title="pricing & paceges"/>
                <div className="container price grid ">
                    <PriceCard/>
                </div>
            </section>
        </>
    )
}

export default Hprice
