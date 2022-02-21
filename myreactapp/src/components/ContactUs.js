import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import EmailUs from './EmailUs'
import CallUs from './CallUs'
import ReachUs from './ReachUs'
export default function ContactUs() {
    return (
        <div>
            <BrowserRouter>
            <nav>
            <div><Link to={'/emailus'}>Email Us</Link></div>
            <div><Link to={'/callus'}>Call Us</Link></div>
            <div><Link to={'/reachus'}>Reach  Us</Link></div>
            </nav>
            <Switch>
                <Route path="/emailus" component={EmailUs}/>
                <Route path="/callus" component={CallUs}/>
                <Route path="/reachus" component={ReachUs}/>

            </Switch>
            </BrowserRouter>
        </div>
    )
}
