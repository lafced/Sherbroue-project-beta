import React from 'react';
import SignIn from '../component/sign-in/sign-in.component';
import SignUp from '../component/sign-up/sign-up.component';
import './signin.styles.scss';

const SignInPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)


export default SignInPage;
