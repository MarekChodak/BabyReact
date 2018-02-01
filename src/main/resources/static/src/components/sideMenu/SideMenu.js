import React from 'react';
import {NavLink} from 'react-router-dom';
import SideAvatar from './SideAvatar';

class SideMenu extends React.Component {

  render() {
    return (<div className="sidebar">
      <NavLink exact to="/" activeClassName="active" className="appNameLink">
        <div className="appName">
          <i className="fa fa-heart fa-fw appIcon" aria-hidden="true"/>&nbsp;MyBaby
        </div>
      </NavLink>
      <SideAvatar/>
      <ul className="nav nav-sidebar main-bar">
        <li>
          <NavLink exact to="/measures" activeClassName="active"><i className="fa fa-signal"/>Measures</NavLink>
        </li>
        <li>
          <NavLink exact to="/vaccination" activeClassName="active"><i className="fa fa-list-ol"/>Vaccination</NavLink>
        </li>
      </ul>
    </div>);
  }
}

export default SideMenu;
