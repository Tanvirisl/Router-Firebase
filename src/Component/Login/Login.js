import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {signInWidthGoogle} = useFirebase({})
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin:"20px"}}>
                <button onClick={signInWidthGoogle}>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password"  placeholder='password'/>
                <br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;