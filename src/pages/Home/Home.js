import React from 'react'
import NavBar from "../../components/Navigation/NavBar";
import LeftPane from '../../components/LeftPane/LeftPane';
import RightPane from '../../components/RightPane/RightPane';
import PostPane from '../../components/PostPane/PostPane';
import "./home.css"

function Home() {
  return (
    <>
    <NavBar/>
    <div className='bottomContainer'>
      <LeftPane/>
      <PostPane/>
      <RightPane/>
    </div>
    </>
  )
}

export default Home