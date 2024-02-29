// Login.js
import React, { useContext, useState } from 'react';
// import { useUser } from './UserContext';
import axios from 'axios';
import { UserContext } from './UserContext';

function Login() {
    const setUser = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await axios.post('/login/', {
            username: username,
            password: password
        });

        const token = response.data.token;
        console.log(token);

        if (token === undefined) {
            setError('Invalid credentials');
        } else {
            console.log('Token:', token);
            // Save token to local storage
            localStorage.setItem('user_token', token);
            // Set user context after successful login
            setUser({ username: username, token: token });            

        }
        
    };

    return (
        <div className='container d-flex justify-content-center'>
            <div className='col-6'>
                <h2>Login</h2>
                <form onSubmit={ handleSubmit }>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="username">Username</label>
                        <input className='form-control' type="text" name='username' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input className='form-control' type="password" name='username' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-outline-primary' type="submit">Login</button>
                    {(error !== "") ? <p className='text-danger'>{error}</p> : ''}
                </form>
            </div>
        </div>
    );
}

export default Login;
