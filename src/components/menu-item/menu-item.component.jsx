import React from 'react';
import {withRouter} from 'react-router-dom'

import './menu-item.styles.scss';

// this prop a.k.a  properties are coming from directory items component  
const MenuItem = ({ title, imageUrl, size , history, match, linkUrl }) => (
  <div className={`${size} menu-item`}   
  onClick= {() =>   history.push( `${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);
//  it gives additional power to the component , withRouter is a higher order function which takes component as
//  as a parameter and gives it power to do routing powers
//  if we don't use withRouter(MenuItems), we need to do propDrilling in order
//  to give menuitem power for routing
export default withRouter(MenuItem);

// what is exported here is higher component MenuItems who has routing power