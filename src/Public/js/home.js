import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import ReactRouter from 'react-router';
import {DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import Flexbox from 'flexbox-react';

class Homepage extends React.Component {
  render() {
  return (
    <div className="containerFluid">
     <div classname="header">
      <h1 className = "redText textCenter"> Hello World</h1>
     </div>

     <div className="web-img">
      <a href='#'><img className='medium-image thick-blue-border imageResponsive float:left' src="" alt=''></a>
      <p className='blueText float:right'>My name is April and I am dedicated to working with my clients and helping their dreams come true.  I enjoy being able to give my clients more time to do what they love with their business while I take care of them</p>
     </div>

     <div className='non-profit-row'>
      <a href='#'><img className='non-profit-img float:left'src='' alt=''></a>
      <p className='non-profit-state float:center'>Non Profit businesses etc etc etc</p>
      <button className='btn btn-primary float:right'>Sample website for non profit business</button>
     </div>
    </div>


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Homepage/>
      </div>
    );
  }
};
