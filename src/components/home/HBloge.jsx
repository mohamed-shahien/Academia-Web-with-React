import React from 'react'
import Title from '../common/title/Title'
import { blog } from '../../dummydata'
const HBloge = () => {
    return (
        <div>
            <section className='blog'>
                <div className="container">
                    <Title subtitle="our blog" title="recent from blog"/>
                    <div className="grid2">
                        {blog.slice(0,3).map((val)=>{
                            return(
                                <div className="items shadow">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <div className="admin flexSB">
                                            <span>
                                                <i class="fa-solid fa-user"></i>
                                                <label>{val.type}</label>
                                            </span>
                                            <span>
                                                <i class="fa-solid fa-calendar-days"></i>
                                                <label>{val.date}</label>
                                            </span>
                                            <span>
                                                <i class="fa-solid fa-comments"></i>
                                                <label>{val.com}</label>
                                            </span>
                                        </div>
                                        <h1>{val.title}</h1>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HBloge
