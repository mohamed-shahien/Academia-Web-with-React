import React from 'react'
import Back from '../common/back/Back'
import TeamesCard from './TeamesCard'
import './teames.css'

const Teams = () => {
    return (
        <>
            <Back title="Team"/>
            <section className="team padding">
                <div className="container grid">
                    <TeamesCard/>
                </div>
            </section>
        
        </>
    )
}

export default Teams
