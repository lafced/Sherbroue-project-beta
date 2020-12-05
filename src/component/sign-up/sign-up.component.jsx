import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button-sign/button-sign.component';


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
        }
    }


    

    handleChange =event => {
        const {name, value}= event.target;

        this.setState({[name]:value});
    }

    render() {
        const {displayName,program,promotion,email, password, confirmPassword} = this.state;
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
                    <CustomButton type='submit'>INSCRIPTION</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;