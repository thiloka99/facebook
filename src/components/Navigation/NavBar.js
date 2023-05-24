import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css"

function NavBar() {
  return (
    <div className='navBarBox'>
       <div className='navBarLeft'>
            <span className='logo'>
               facebook 
            </span>
        </div> 

       <div className='navBarCenter'>
        <div className='searchBarBox'>
            <SearchIcon className='searchIcon'/>
            <input placeholder='Search For Your Friend' className='searchInput'/>
        </div>
       </div>

       <div className='navBarRight'>
            <div className='navBarLinks'>
                <span className='navBarLink'>Home</span>
                <span className='navBarLink'>Profile</span>
            </div>
            <div className='navBarIcons'>
                <div className='navBarIcon'>
                    <PersonIcon/>
                    <span className='iconTag'>3</span>
                </div>
                <div className='navBarIcon'>
                    <MessageIcon/>
                    <span className='iconTag'>5</span>
                </div>
                <div className='navBarIcon'>
                    <SettingsIcon/>
                    <span className='iconTag'>2</span>
                </div>
            </div>
            <div className='pic'>
                <img src="/images/profile.jpg" alt="" className='profilePicImg'/>
            </div>
       </div>
    </div>
  )
}

export default NavBar