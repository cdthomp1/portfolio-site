import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import SuccessScreen from './screens/SuccessScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import Footer from './screens/FooterScreen';



function App() {


  return (
    <Router>
      <main>
        <Route path='/contact' component={ContactScreen} />
        <Route path='/success' component={SuccessScreen} />
        <Route path='/articles' component={ArticlesScreen} />
        <Route path='/projects' component={ProjectsScreen} />
        <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
