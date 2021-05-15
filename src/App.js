import React, {Component} from 'react';
import './index.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';

class App extends Component {

  render() { 
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/project' component={Project} />
      <Route path='/contact' component={Contact} />
      </BrowserRouter>
    );
  }
}
 
export default App;
