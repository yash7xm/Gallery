import "../assets/styles/Navigation.css"
import SignUp from "./signUp";
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
                    {!signUpToggle && <div  onClick={handleSignUpBtn}>Sign Up</div>}
                    {signUpToggle && <SignUp crossBtn = {handleSignUpBtn} />}
                   </div>
                   <div className="signIn-btn">
                   {!signInToggle && <div  onClick={handleSignInBtn}>Sign Up</div>}
                    {signInToggle && <SignUp crossBtn = {handleSignInBtn} />}
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation