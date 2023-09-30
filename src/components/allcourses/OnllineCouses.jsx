import React from 'react'
import Title from '../common/title/Title'
import {online} from '../../dummydata'
function OnllineCouses() {
    return (
        <>
            <section className="online">
                <div className="container">
                    <Title title="BROWSE OUR COURSES" subtitle="COUSES"/>

                    <div className="contant grid3">
                        {online.map((val)=>(
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                    <img src={val.hoverCover} alt=""  className='show'/>
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <div className="margin"></div> */}
        </>
    )
}

export default OnllineCouses
