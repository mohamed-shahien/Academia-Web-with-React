import React from 'react'
import {coursesCard} from '../../dummydata';
import './courses.css'
const CoursesCard = () => {
    return (
        <>
        
        <section className="coursesCards ">
            <div className="container grid2">
                {coursesCard.map((val)=>{
                    return(
                        <div className="items">
                            <div className="content flex">
                                <div className="left">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                </div>
                                <div className="text">
                                    <h1>{val.coursesName}</h1>
                                    <div className="rate">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <label htmlFor="">(5.0)</label>
                                    </div>
                                    <div className="detasils">
                                        {val.courTeacher.map((detailes)=>(
                                            <>
                                                <div className="box">
                                                    <div className="dimg">
                                                        <img src={detailes.dcover} alt="" />
                                                    </div>
                                                    <div className="para">
                                                        <h4>{detailes.name}</h4>
                                                    </div>
                                                </div>
                                                <span>{detailes.totalTime}</span>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="price">
                                <h3>{val.priceAll} / {val.pricePer}</h3>
                            </div>
                            <button className="outline-Btn">ENROOL NOW !</button>
                        </div>

                    )
                })}
            </div>
        </section>
        
        
        </>
    )
}

export default CoursesCard
