import React from 'react'
import "./addPost.css"
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function AddPost() {
  return (
    <div className='addPost'>
        <div className='addPostContainer'>
            <div className='addPostTop'>
                <img src="/images/profile3.jpg" alt="" className='addPostPic'/>
                <input type="text" placeholder='Whats in your mind..?' className='addPostInput' />
            </div>
            <hr className='PostHr'/>
            <div className='addPostBottom'>
                <div className='addPostOptions'>
                    <div className='addPostOption'>
                        <InsertPhotoOutlinedIcon htmlColor='orange' className='"addPhoto'/>
                        <span className='addPostOptionText'>Add Photo/Video</span>
                    </div>
                    <div className='addPostOption'>
                        <LocationOnIcon htmlColor='red' className='"addPhoto'/>
                        <span className='addPostOptionText'>Add Location</span>
                    </div>
                    <div className='addPostOption'>
                        <LocalOfferIcon htmlColor='blue' className='"addPhoto'/>
                        <span className='addPostOptionText'>Add Tag</span>
                    </div>
                    <div className='addPostOption'>
                        <LiveTvIcon htmlColor='tomato' className='"addPhoto'/>
                        <span className='addPostOptionText'>Go to Live</span>
                    </div>
                </div>
                
                <button className='PostButton'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default AddPost