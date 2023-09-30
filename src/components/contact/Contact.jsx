import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d183358.4342105583!2d31.77035426078557!3d31.357619026307983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1696039093349!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
    return (
        <>
            <Back title="Contact us"/>
            <section className="contact us">
                <div className="contact padding">
                    <div className="container shadow flexSB">
                        <div className="left row">
                        <iframe src={map}></iframe>
                        </div>
                        <div className="right row">
                            <h1>contact Us</h1>
                            <p>dolor sit amet consectetur adipisicing elit. Ducimus, eaque.</p>
                            <div className="items grid2">
                                <div className="box">
                                    <h4>ADDRESS :</h4>
                                    <p>155 west street 12f,sude</p>
                                </div>
                                <div className="box">
                                    <h4>EMAILE : </h4>
                                    <p>info@gamail.com</p>
                                </div>
                                <div className="box">
                                    <h4>PHONE : </h4>
                                    <p>+201019508320</p>
                                </div>
                            </div>
                            <form action="">
                                <div className="flexSB">
                                    <input type="text" placeholder='Name'/>
                                    <input type="email" placeholder='Email'/>
                                </div>
                                <input type="text" placeholder='Subject'/>
                                <textarea cols="30" rows="10">
                                    Creat your message here...
                                </textarea>
                                <button className='primary-Btn'>SEND MESSAGE</button>
                            </form>
                            <h3>follow us here</h3>
                            <span>facebook tiktok twitter instagrame</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
