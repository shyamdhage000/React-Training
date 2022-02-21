import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'


export default function RoutingDemo(){
    return(
        <div>
            
            <BrowserRouter>
            <nav>
            <div><Link to={'/home'}>Home</Link></div>
            <div><Link to={'/aboutus'}>About Us</Link></div>
            <div><Link to={'/contactus'}>Contact Us</Link></div>
            </nav>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/aboutus" component={AboutUs}/>
                <Route path="/contactus" component={ContactUs}/>

            </Switch>
            </BrowserRouter>
        </div>
    )
}
//emailus
//callus
//address
