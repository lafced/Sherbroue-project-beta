import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar.component';
import { BrowserRouter,Switch,  Route } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Homepage}/>

      <Route exact path='/sherbroue' component={about}/>
      <Route exact path='/project' component={project}/>
      <Route exact path='/événement' component={Évenement}/>
      <Route exact path='/partenaire' component={partners}/>
      <Route exact path='/connexion' component={signIn}/>
      <Route exact path='/contact' component={contact}/>
    </Switch>
    
   
   </BrowserRouter>
      
    
  );
}

export default App;
