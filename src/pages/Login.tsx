import React from 'react';
import {computed, signal} from "@preact/signals-react";

const emailSignal = signal('');
const passwordSignal = signal('');
const isValidEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+.)+[a-z]{2,}$/;
    return regex.test(email);
};
const isValidPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[^\s]{8,}$/;
    return strongPasswordRegex.test(password);
};

const isEmailValid = computed(() => isValidEmail(emailSignal.value));
const isPasswordValid = computed(() => isValidPassword(passwordSignal.value));

function Login() {


    return (
        <form>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={emailSignal.value}
                    onChange={(event) => emailSignal.value = event.target.value}
                />
                {isEmailValid.value ? null : <p style={{color: "red"}}>Invalid email</p>}
            </div>
            <div>

                <label>Password:</label>
                <input
                    type="password"
                    value={passwordSignal.value}
                    onChange={(event) => passwordSignal.value = event.target.value}
                />
                {isPasswordValid.value ? null : <p style={{color: "red"}}>Invalid password</p>}
            </div>
            <button disabled={!isEmailValid.value && !isPasswordValid.value}>Submit</button>
        </form>
    );
}

export default Login;
