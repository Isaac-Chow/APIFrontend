// SignUp.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('/signup/', {
                name: name,
                email: email,
                password: password
            }).then(
                res => {

                }
            )
            setSuccess('User created successfully');

        // Optionally, redirect to login page after successful signup
        } catch (error) {
            setError('Error creating user');
        }


    };

    const checkPassMatch = (e) => {
        const { name, value } = e.target.value;

        if (value !== password){
            setError("Passwords don't match");
        } else {
            setError("")
        }
    }

    return (
        <div className='container d-flex justify-content-center'>
            <div className='col-6'>
                <h2>Sign Up</h2>
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className='form-label' htmlFor="name">Name</label>
                        <input className='form-control' type="text" placeholder="John" value={name} id="name" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-control' type="email" placeholder="Email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />

                    </div>

                    <div className="mb-3">
                        <label className='form-label' htmlFor="password">Password</label>
                        <input className='form-control' type="password" placeholder="Password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className='form-label' htmlFor="confirm_pass">Confirm Password</label>
                        <input className='form-control' type="password" placeholder="Confirm Password" value={confirmPassword} id="confirm_pass" onInput={ checkPassMatch } onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <div className="mb-3 d-flex justify-content-between">
                        <Link to="/" className='btn btn-warning'>Cancel</Link>  
                        <button type="submit" className='btn btn-outline-primary'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
