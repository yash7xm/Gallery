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
      
        if (formData.username === '' || formData.password === '') {
          window.alert('Please fill all the fields');
          return;
        }
      
        fetch('http://localhost:8080/logIn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(() => {
            crossBtn();
          })
          .catch((error) => {
            console.error('Fetch error:', error);
          });
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