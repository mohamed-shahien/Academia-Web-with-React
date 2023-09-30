import React, { useState } from 'react'
import Head from './Head'
import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
    const [click,setclick] = useState(false)
    return (
        <>
            <Head/>
            <header>
                <nav  className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB"}> {/*مو الكليكل بترو اعرض اول واحد لو مش بترو اعرض فليكس*/ }
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/courses">all courses</Link></li>
                        <li><Link to="/team">team</Link></li>
                        <li><Link to="/pricing">pricing</Link></li>
                        <li><Link to="/journal">journal</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">git certificate</div>
                    </div>
                    <button className='toggle' onClick={()=>{setclick(!click)}}>
                        {click ? <i class="fa-solid fa-x"></i> :<i class="fa-solid fa-bars"></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header;