import React from 'react'
import "./rightPane.css"

function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className='rightPaneContainer'>
        
        <div className='adContainer'>
          <span className='sponsered'>Sponsored</span><br/>
          <img src="/images/ad.jpg" alt="" className='adImage'/><br/>
          <span className='adText'>
            Order Your food with food delivery services. We can deliver your food on your home.Order now...!!!
          </span>
        </div>

        <div className='birthdayContainer'>
          <img src="/images/birthday.png" alt="" className='birthdayImage'/>
          <span className='birthdaytext'>
            <b>Jhon Alice</b> and <b>2 others</b> having birthday today..!
           </span>
        </div>

        <div className='friendList'>
          <li className='onlineFried'>
            <div className='onlineFriendImageContainer'>
              <img src="images/profile2.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>Nayani fernando</span>
          </li>

          <li className='onlineFried'>
            <div className='onlineFriendImageContainer'>
              <img src="images/profile2.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>Nayani fernando</span>
          </li>

          <li className='onlineFried'>
            <div className='onlineFriendImageContainer'>
              <img src="images/profile2.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>Nayani fernando</span>
          </li>

          <li className='onlineFried'>
            <div className='onlineFriendImageContainer'>
              <img src="images/profile2.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>Nayani fernando</span>
          </li>

          <li className='onlineFried'>
            <div className='onlineFriendImageContainer'>
              <img src="images/profile2.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>Nayani fernando</span>
          </li>

          <li className='onlineFried'>
            <div className='onlineFriendImageContainer'>
              <img src="images/profile2.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>Nayani fernando</span>
          </li>

          <li className='onlineFried'>
            <div className='onlineFriendImageContainer'>
              <img src="images/profile2.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>Nayani fernando</span>
          </li>
        </div>
      </div>
    </div>
  )
}

export default RightPane