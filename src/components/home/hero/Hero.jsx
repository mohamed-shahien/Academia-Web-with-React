import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'
const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle="wlcome to academia" title="best online education"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus pariatur aspernatur repellendus earum accusantium dolorum, odit tempore, commodi cum voluptatibus harum quam illum a quas. Nobis deserunt obcaecati quibusdam fugiat.</p>
                        <div className="button">
                            <button className='primary-Btn'>
                                get started now <i class="fa-solid fa-arrow-right"></i>
                            </button>
                            <button >
                                view course <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </>
    )
}

export default Hero
