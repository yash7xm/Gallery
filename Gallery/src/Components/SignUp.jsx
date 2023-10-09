import React, { useState } from 'react';
import '../assets/styles/signUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SignUp({ crossBtn }) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleLogInBtn() {
        // Send the data to the server
        console.log(formData);
        // fetch('/logIn', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Handle the server's response here, if needed
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }

    return (
        <div className="signup">
            <div className="signup-wrapper">
                <div className="back-btn" onClick={crossBtn}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="greet">Good Day!</div>
                <div className="info">Fill in your details.</div>
                <div className="inputs">
                    <input
                        type="text"
                        className="username"
                        placeholder="Username*"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        className="password"
                        placeholder="Password*"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="next" onClick={handleLogInBtn}>
                    Log in
                </div>
            </div>
        </div>
    );
}

export default SignUp;
