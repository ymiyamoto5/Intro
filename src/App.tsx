import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Intro from './Pages/Intro';
import Photo from './Pages/Photo';
import Topic from './Pages/Topic';
import About from './Pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/intro' component={Intro} />
          <Route path='/photo' component={Photo} />
          <Route path='/topic' component={Topic} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
