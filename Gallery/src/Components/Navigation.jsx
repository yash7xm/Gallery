import "../assets/styles/Navigation.css"
import SignUp from "./SignUp";
import SignIn from './SignIn';
import { useState } from "react";

function Navigation() {

    const [signUpToggle, setSignUpToggle] = useState(false);
    const [signInToggle, setSignInToggle] = useState(false);

    const handleSignUpBtn = () => {
        setSignUpToggle(!signUpToggle);
    }

    const handleSignInBtn = () => {
        setSignInToggle(!signInToggle);
    }

    console.log(document.cookie);

    return (
        <div className="navigation">
            <div className="search">
                <input type="text" placeholder="Search in Gallery"/>
            </div>
            <div className="nav-btns">
                <div className="info-btns">
                    <div>Upload</div>
                    <div>Your Images</div>
                </div>
                <div className="sign-btn">
                   <div className="signUp-btn">
                    {!signUpToggle && <div  onClick={handleSignUpBtn}>SignUp</div>}
                    {signUpToggle && <SignUp crossBtn = {handleSignUpBtn} />}
                   </div>
                   <div className="signIn-btn">
                   {!signInToggle && <div  onClick={handleSignInBtn}>SignIn</div>}
                    {signInToggle && <SignIn crossBtn = {handleSignInBtn} />}
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation