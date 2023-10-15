import React, { useState } from 'react';

import './NavBar.css'

import Logo from '../../Components/Logo/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';

import { faBell, faIdBadge, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import NavBarButton from '../Buttons/NavBarButton/NavBarButton';
import IconButton from '../Buttons/IconButton/IconButton';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';

function NavBar(props) {
  return (
    <div className='NavBar-Container'>
        <div className='NavBar-TopContainer'>
          <div className='NavBar-UserProfileContainer'>
            <div className='NavBar-UserAvatarContainer'>
              <ProfileAvatar userClassName='NavBar-UserAvatar' defaultClassName='NavBar-DefaultUserAvatar'/>
            </div>
            <div className='NavBar-UserInformationContainer'>
              <p className='heading-3 NavBar-UserName'>Walker Tran</p>
              <p className='paragraph-1 NavBar-UserMajor'>Computer Science</p>
            </div>
          </div>
          <div className='NavBar-SearchBoxContainer'>
            <FontAwesomeIcon icon={faSearch} className="NavBar-SearchIcon" />
            <input type='text' placeholder='Search other profiles...' className='NavBar-SearchBox'/>
          </div>
          <NavBarButton icon={faSquarePlus} title='Post Project' onClick={()=>{}}/>
          <NavBarButton icon={faBell} title='Notifications'onClick={()=>{}}/>
          <NavBarButton icon={faIdBadge} title='Profile' onClick={()=>{}}/>
        </div>
        <div className='NavBar-BottomContainer'>
          <div className='NavBar-LogoContainer'>
            <Logo className='NavBar-Logo'/>
            <p className='paragraph-2'><em>"Projects by Peers, Passion in Progress."</em></p>
          </div>
          <IconButton icon={faArrowRightFromBracket} className='NavBar-SignOut'/>
        </div>
    </div>
  )
}

export default NavBar