import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ServicesPage from './pages/services/servicespage.component';
import Footer from './components/footer/footer.component';

const App = () => 
  (
    <div className="App">
    	<Header />
    	<Switch>
	      <Route exact path='/' component={HomePage} />
	      <Route exact path='/services' component={ServicesPage} />
	    </Switch>
	    <Footer />
    </div>
  );


export default App;
