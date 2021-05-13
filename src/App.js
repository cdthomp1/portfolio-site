import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import SuccessScreen from './screens/SuccessScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ArticleView from './screens/ArticleView';
import ProjectsScreen from './screens/ProjectsScreen';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import UhOh from './screens/Uh-Oh';
import { Helmet } from 'react-helmet';



function App() {


  return (
    <Router>
      <Helmet>
        {/* main */}
        <title>Cameron Thompson - Student Software Engineer Building the Web </title>
        <meta property="og:title" content="Cameron Thompson - Student Software Engineer Building the Web" />
        <meta property="og:type" content="website" />
        <meta name="og:description"
          content="" />
        <meta property="og:url" content="https://cameronthompson.io" />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cameronthompson.io" />
        <meta property="twitter:title" content="Cameron Thompson - Student Software Engineer Building the Web" />
        <meta property="twitter:description"
          content="" />
        <meta property="twitter:image" content="" />
      </Helmet>
      <Navigation />
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
