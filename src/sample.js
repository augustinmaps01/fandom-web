import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './dist/index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './components/navbar';
import landingPage from './components/pages/homepage';
import koreanDrama from "./components/pages/kdrama";
import Kpop from "./components/pages/kpop";
import Anime from './components/pages/anime';
import post from './components/pages/post';
import about from './components/pages/about';
import sign_in from './components/pages/sign-In';
import Register from './components/pages/register';
import footer from './components/footer';



function App () {
  return (
    <div>
      <div>
        <Router>
          <NavbarPage />
          <Switch>
            <Route path = '/'exact component = {sign_in} />
            <Route path = '/about' component = {about} />
            <Route path = '/post' component = {post} />
            <Route path = '/anime' component = {Anime} />
            <Route path = '/kdrama' component = {koreanDrama} />
            <Route path = '/kpop' component = {Kpop} />
            <Route path = '/homepage' component = {landingPage} />
            <Route path ='/register' component = {Register} />
          </Switch>
        </Router> 
        <footer />
      </div>
    </div>
  );
}


export default App;