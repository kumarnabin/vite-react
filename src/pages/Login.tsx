import React from 'react';
import {signal} from "@preact/signals-react";


const formData = signal({email: '', password: ''});
const formErrors = signal({email: '', password: ''});
const isValidEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+.)+[a-z]{2,}$/;
    return regex.test(email);
};
const isValidPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[^\s]{8,}$/;
    return strongPasswordRegex.test(password);
};


const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.value.email)) {
        formErrors.value = {...formErrors.value, email: 'Email is invalid'};
    } else {
        formErrors.value = {...formErrors.value, email: ''};
    }
    if (!isValidPassword(formData.value.password)) {
        formErrors.value = {...formErrors.value, password: 'Password is invalid'};
    } else {
        formErrors.value = {...formErrors.value, password: ''};
    }
    if (formData.value.email == 'admin@gmail.com' && formData.value.password == 'password') {
        alert('Login successful');
    }
}
const handleChange = e => {
    formData.value = {...formData.value, [e.target.name]: e.target.value}
}


const Login = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={formData.value.email}
                        name="email"
                        onChange={handleChange}
                    />
                    {formErrors.value.email !== '' && <div style={{color: 'red'}}>{formErrors.value.email}</div>}
                </label>
                <br/>
                <label>
                    Password:
                    <input
                        type="password"
                        value={formData.value.password}
                        name="password"
                        onChange={handleChange}
                    />
                    {formErrors.value.password !== '' && <div style={{color: 'red'}}>{formErrors.value.password}</div>}
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
;


export default Login;
