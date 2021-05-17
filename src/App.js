import React from 'react'
import './App.css';
import './layout.css';
import NavBar from "./NavBar";
import HomePage from "./Pages/HomePage";
import {Switch,Route} from 'react-router-dom';
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";


function App() {
  return (
    <div className="App">

      <div className="sidebar">
          <NavBar />
      </div>
      <div className="main-content">
         <div className="content">
             <Switch>

                 <Route path="/" exact>
                     <HomePage />
                 </Route>
                 <Route path="/About" exact>
                     <About />
                 </Route>
                 <Route path="/Portfolio" exact>
                     <Portfolio />
                 </Route>
                 <Route path="/Blog" exact>
                     <Blog />
                 </Route>
                 <Route path="/Contact" exact>
                     <Contact />
                 </Route>

             </Switch>
         </div>

      </div>

    </div>
  );
}

export default App;
