import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import SuccessScreen from './screens/SuccessScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ArticleView from './screens/ArticleView';
import ProjectsScreen from './screens/ProjectsScreen';
import Footer from './components/Footer';
import UhOh from './screens/Uh-Oh';



function App() {


  return (
    <Router>
      <main>
        <Switch>
          <Route path='/contact' component={ContactScreen} />
          <Route path='/success' component={SuccessScreen} />
          <Route path='/articles' component={ArticlesScreen} />
          <Route path='/projects' component={ProjectsScreen} />
          <Route path='/article/:slug' component={ArticleView} />
          <Route path='/' component={HomeScreen} exact />
          <Route component={UhOh} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
