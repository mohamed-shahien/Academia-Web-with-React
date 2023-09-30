import React from 'react'
import {blog} from "../../dummydata"

const BlogCard = () => {
    return (
        <>
            {blog.map((val)=>{
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
        </>
    )
}

export default BlogCard
