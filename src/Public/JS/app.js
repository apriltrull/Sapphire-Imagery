import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import ReactRouter from 'react-router';
import {DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import Flexbox from 'flexbox-react';
import Home from './js/home';
import HomeBusinessHome from './home-business-components/home-business-home';
import HomeProducts from './home-business-components/home-products';
import SmallBusinessHome from './small-business-components/small-business-home';
import SmallProducts from './small-business-components/small-products';
import NonProfit from './js/non-profit';


const Navigation = ()=> (

  <div className="navigation">

   <Flexbox flexDirection = 'row'>
     <Navbar navColor='rgba(143, 57, 133, .8)'>
       <NavItem className="nav-item"><a href= '/'>Home</a></NavItem>
       <NavItem className="nav-item"><Link to ='/home-business-home'>Home Based Business</Link></NavItem>
       <NavItem className="nav-item"><Link to = '/small-business-home'>Small Business</Link></NavItem>
       <NavItem className="nav-item"><Link to = '/non-profit'>Non Profit Business</Link></NavItem>
     </Navbar>
   </Flexbox>
  </div>
)

// const navbar =()=> (
//   <div className = 'navigation'>
//     <Navbar>
//         //<NavbarHeader href="home.js" name="Sapphire Imagery"/>
//         <NavbarItems>
//             <NavItem className = 'nav-item'><a href ='/'>Home </a></NavItem>
//             <NavItem classname = 'nav-item'><Link to="non-profit.js" title="Non Profit Business"/>
//             <NavItem classname = 'nav-item'><Link to="small-business-home" title="Small Business"/>
//             <NavItem classname = 'nav-item'><Link to="home-business-home" title="Home Based Business"/>
//
//         </NavbarItems>
//     </Navbar>
//  </div>
// );

const Main = ()=> (
  <main>

  <Switch>
   <Route exact path = '/' component = {Home}/>
   <Route path = './home-business-home' component = {Home-Business-Components} />
   <Route path = './small-business-home' component = {Small-Business-Components}/>
   <Route path = '/non-profit' component = {Non-Profit}/>

  </Switch>

  </main>
)

const App = () => (
  <div>
    <Navigation/>
    //<navbar/>
    <Main/>
  </div>
 )





ReactDOM.render((<BrowserRouter>
  <App/>
</BrowserRouter>
),  document.getElementById('container'))
