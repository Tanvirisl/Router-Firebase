import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>please register now</h2>
            <form action="">
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password"  placeholder='password'/>
                <br />
                <input type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;