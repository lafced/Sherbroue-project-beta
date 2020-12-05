import React from 'react';
import './App.css';
import RespNavbar from './component/responsive-Navbar/responsive-navbar.component';
import { BrowserRouter,Switch,  Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import project from './pages/project';
import about from './pages/about';
import Évenement from './pages/Evenement';
import partners from './pages/partners';
import SignInPage from './pages/signIn';
import contact from './pages/Homepage';
import store from './pages/Store';


function App() {
  return (
   <BrowserRouter>
    <RespNavbar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>

        <Route exact path='/sherbroue' component={about}/>
        <Route exact path='/projet' component={project}/>
        <Route exact path='/événement' component={Évenement}/>
        <Route exact path='/partenaire' component={partners}/>
        <Route exact path='/achat' component={store}/>
        <Route exact path='/contact' component={contact}/>
        <Route exact path='/connexion' component={SignInPage}/>
      </Switch>
    
   
   </BrowserRouter>
      
    
  );
}

export default App;
