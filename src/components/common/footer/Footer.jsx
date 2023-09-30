import React from 'react'
import './footer.css'
import { blog } from '../../../dummydata'
const Footer = () => {
    return (
        <>
            <section className='newletter'>
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima.</h1>
                        <span> Commodi, quia itaque.consectetur important fedback</span>
                    </div>
                    <div className="right row">
                        <input type="emile" placeholder='Entert your email address'/>
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMIA</h1>
                        <span> numquam atque aspernatur ipsam </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi ratione suscipit alias fuga amet! Quibusdam amet magni, suscipit ipsa nemo, ducimus odio nulla veniam .</p>
                        <i class="fa-brands fa-facebook icon"></i>
                        <i class="fa-brands fa-instagram icon"></i>
                        <i class="fa-brands fa-twitter icon"></i>
                    </div>
                    <div className="box link">
                        <h3>EXPLORE</h3>
                        <ul>
                            <li>about us</li>
                            <li>about us</li>
                            <li>about us</li>
                            <li>about us</li>
                            <li>about us</li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Queck link</h3>
                        <ul>
                            <li>about us</li>
                            <li>about us</li>
                            <li>about us</li>
                            <li>about us</li>
                            <li>about us</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Recent post</h3>
                        {blog.slice(0,3).map((val)=>{
                            return(
                                <div className="items flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
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
                                        <h4>{val.title}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="box last">
                        <h3>have a question?</h3>
                        <ul>
                            <li>
                            <i class="fa-solid fa-location-dot"></i>
                            203 fake street ountan view, san fransisco
                            </li>
                            <li>
                            <i class="fa-solid fa-phone"></i>
                            +111445401654
                            </li>
                            <li>
                            <i class="fa-solid fa-paper-plane"></i>
                            exampel@email.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="lagle">
                <p>copyright @2023  all reverser | this templet mede with <i class="fa-solid fa-heart-circle-check"></i> by MD.SHAHIEN</p>
            </div>
        </>
    )
}

export default Footer
