import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../button-sign/button-sign.component';
import { auth } from '../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''});
        } catch (error) {
            console.log(error)
        }}

    
    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }
    render() {
        return(
            <div className='sign-in'>
                <h2 className='title'>Je suis membre Sherbroue</h2>
                <span>Connectez-vous à l'aide de votre adresse Usherbrooke</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label="Adresse Usherbrooke"
                    required/>
                   
                    <FormInput
                    name='password'
                    type='password' 
                    handleChange={this.handleChange} 
                    value={this.state.password} 
                    label="Mot de passe"
                    required/>
                    <div className='buttons'>
                        <CustomButton type='submit' >CONNEXION</CustomButton>
                        
                    </div>
                </form>
            
            
            </div>
        )
    }
}

export default SignIn;