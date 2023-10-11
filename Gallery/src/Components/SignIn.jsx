import React, { useState } from 'react';
import '../assets/styles/signUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

function SignIn({ crossBtn, setCookieBtn }) {
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
      
        fetch('http://localhost:8080/signIn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => {
            if(response.status == 400) window.alert("Please enter correct details");
            if(response.status == 200) {
                Cookies.set('username', formData.username, { expires: 7 });
                crossBtn();
                setCookieBtn();
            } 
        })
        .catch((error) => {
            // console.error('Fetch error:', error);
        });
      }
      

    return (
        <div className="signup">
            <div className="signup-wrapper">
                <div className="back-btn" onClick={() => { crossBtn(); setCookieBtn(); }}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="greet">Welcome Back!</div>
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
                    Sign In
                </div>
            </div>
        </div>
    );
}

export default SignIn;
