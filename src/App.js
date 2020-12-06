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
import { auth, createUserProfileDocument } from './component/firebase/firebase.utils';




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    };
  }


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({currentUser: userAuth});
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
   <BrowserRouter>
      <RespNavbar currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>

        <Route exact path='/sherbroue' component={about}/>
        <Route exact path='/projet' component={project}/>
        <Route exact path='/événement' component={Évenement}/>
        <Route exact path='/partenaire' component={partners}/>
        <Route exact path='/achat' component={store}/>
        <Route exact path='/contact' component={contact}/>
        <Route exact path='/connection' component={SignInPage}/>
      </Switch>
    
   
   </BrowserRouter>
      
    
  );
};
}
export default App;
