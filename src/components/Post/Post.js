import React from 'react'
import "./post.css"

function Post() {
  return (
    <div className='post'>
        <div className='postContainer'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src="/images/profile4.jpg" alt="" className='postImage'/>
                    <span className='postUserName'>Nayani Sadamanly</span>
                    <span className='postTime'>5 mins ago</span>
                </div>
            </div>
            <div className='postCenter'>
                <div className='postCaption'>
                   <br/> Hello I am Nayani..! NewSelant !!!
                </div>
                <img src="/images/post1.jpg" alt="" className='postedImage'/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img src="/images/like-removebg-preview.png" alt="" className='readctionPic'/>
                    <img src="/images/heart1.png" alt="" className='readctionPic'/>
                    <img src="/images/haha-removebg-preview.png" alt="" className='readctionPic'/>
                    <span className='likeCount'>Nayani and 220 other</span>
                </div>
                <div className='postBottomRight'>
                    <span className='commentCount'>
                        15 comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post