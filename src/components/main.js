import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
	<Switch>
		<Route exact path= "/" component= { LandingPage } />
		<Route exact path= "/aboutme" component= { AboutMe } />
		<Route exact path= "/contact" component= { Contact } />
		<Route exact path= "/resume" component= { Resume } />
		<Route exact path= "/projects" component= { Projects } />
	</Switch>
	
)

export default Main;