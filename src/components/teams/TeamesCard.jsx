import React from 'react'
import { team } from '../../dummydata'

const TeamesCard = () => {
  return (
    <>
    {team.map((val)=>(
      <div className='items shadow'>
        <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
                    <i class="fa-brands fa-facebook icon"></i>
                    <i class="fa-brands fa-instagram icon"></i>
                    <i class="fa-brands fa-twitter icon"></i>
                    <i class="fa-brands fa-tiktok icon"></i>
            </div>
        </div>
        <div className="details">
          <h2>{val.name}</h2>
          <p>{val.work}</p>
        </div>
      </div>
    ))}
    </>
  )
}

export default TeamesCard
