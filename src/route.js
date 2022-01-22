import React from 'react';
import { BrowserRouter as Router,Route,Switch,useLocation } from "react-router-dom";
import LandingPage from './components/pages/homepage';
import koreanDrama from "./components/pages/kdrama";
import Kpop from "./components/pages/kpop";
import Anime from './components/pages/anime';
import Post from './components/pages/post';
import about from './components/pages/about';
import sign_in from './components/pages/sign-In';
import Register from './components/pages/register';
import NavbarPage from './components/navbar';

const Routing = () => (
    <main>
        <Router>
        <NavbarPage />
            <Switch>
                <Route path = '/'exact component = {sign_in} hideNavBar={true} />
                <Route path = '/about' component = {about} />
                <Route path = '/post' component = {Post} />
                <Route path = '/anime' component = {Anime} />
                <Route path = '/kdrama' component = {koreanDrama} />
                <Route path = '/kpop' component = {Kpop} />
                <Route path = '/homepage' component = {LandingPage} />
                <Route path ='/register' component = {Register} />  
            </Switch>
        </Router>
    </main>

)

export default Routing;