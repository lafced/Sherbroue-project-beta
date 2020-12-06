import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button-sign/button-sign.component';
import {auth, createUserProfileDocument} from '../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName:'',
            program:'',
            promotion:'',
            email:'',
            password:'',
            confirmPassword:'',
            token:'',
        }
    }


    handleSubmit = async event => {
        event.preventDefault();

        const {displayName,program,promotion,email, password, confirmPassword,token} = this.state;
        if (token !== 'udes2020gold') { //clé donné aux membres
            alert("vous n'avez pas la bonne clé. Contactez sherbroueudes@gmail.com pour l'obtenir!");
            return;
        }
        if (password !== confirmPassword) {
            alert("Les mots de passe ne sont pas identique");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName,program,promotion});
            this.setState({
                displayName:'',
                program:'',
                promotion:'',
                email:'',
                password:'',
                confirmPassword:'',
                token:'',
            }

            );
        } catch (error){
            console.error(error);
        }
    }

    handleChange =event => {
        const {name, value}= event.target;

        this.setState({[name]:value});
    }

    render() {
        const {displayName,program,promotion,email, password, confirmPassword,token} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>Je veux devenir membre</h2>
                <span>connectez-vous avec votre adresse Usherbrooke</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label='Prénom, nom'
                    required
                    >
                    </FormInput>
                    <FormInput
                    type='text'
                    name='program'
                    value={this.state.program}
                    onChange={this.handleChange}
                    label='Programme'
                    required
                    ></FormInput>
                    <FormInput
                    type='number'
                    name='promotion'
                    value={this.state.promotion}
                    onChange={this.handleChange}
                    label='Promotion'
                    required
                    >
                    </FormInput>
                    
                    <FormInput
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='Adresse Usherbrooke'
                    required
                    >
                    </FormInput>
                    <FormInput
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='Mot de passe'
                    required
                    >
                    </FormInput>
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label='Confirmer le mot de passe'
                    required
                    >
                    </FormInput>
                    <FormInput
                    type='text'
                    name='token'
                    value={this.state.token}
                    onChange={this.handleChange}
                    label="Numéro d'authentification"
                    required
                    >
                    </FormInput>
                    <CustomButton type='submit'>INSCRIPTION</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;