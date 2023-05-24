import React from 'react'
import "./leftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PagesIcon from '@mui/icons-material/Pages';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className='leftPaneContainer'>
        <div className='leftPaneMenu'>
          <li className='leftPaneMenuItem'>
              <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
              <GroupIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Group</span>
          </li>
          <li className='leftPaneMenuItem'>
              <RssFeedIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Feed</span>
          </li>
          <li className='leftPaneMenuItem'>
              <PagesIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Pages</span>
          </li>
          <li className='leftPaneMenuItem'>
              <CalendarMonthIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Events</span>
          </li>
          <li className='leftPaneMenuItem'>
              <SettingsSuggestIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Settings</span>
          </li>
          <li className='leftPaneMenuItem'>
              <SportsEsportsIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Games</span>
          </li>
          <li className='leftPaneMenuItem'>
              <NewspaperIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>News</span>
          </li>
          <li className='leftPaneMenuItem'>
              <WorkIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Jobs</span>
          </li>
          <li className='leftPaneMenuItem'>
              <LocalGroceryStoreOutlinedIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuText'>Market</span>
          </li>
          <hr/>

          <div className='pagesYouLiked'>
            <h3>Pages You Liked</h3>
          </div><br/>
          
          <div className='pageList'>
          <li className='pageListItem'>
            <img src="/images/profile2.jpg" alt="" className='pagePic'/>
            <span className='PageName'>code with Lasa</span>
          </li>
          <li className='pageListItem'>
            <img src="/images/profile2.jpg" alt="" className='pagePic'/>
            <span className='PageName'>Kamal Fernando</span>
          </li>
          <li className='pageListItem'>
            <img src="/images/profile2.jpg" alt="" className='pagePic'/>
            <span className='PageName'>Programming</span>
          </li>
          <li className='pageListItem'>
            <img src="/images/profile2.jpg" alt="" className='pagePic'/>
            <span className='PageName'>Java</span>
          </li>
          <li className='pageListItem'>
            <img src="/images/profile2.jpg" alt="" className='pagePic'/>
            <span className='PageName'>code with Lasa</span>
          </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPane