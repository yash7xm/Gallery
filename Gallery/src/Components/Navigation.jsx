import "../assets/styles/Navigation.css"
import SignUp from "./signUp";
import { useState } from "react";

function Navigation() {

    const [signToggle, setSignToggle] = useState(false);

    const handleSignUpBtn = () => {
        setSignToggle(!signToggle);
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
                    {!signToggle && <div  onClick={handleSignUpBtn}>Sign Up</div>}
                    {signToggle && <SignUp crossBtn = {handleSignUpBtn} />}
                </div>
            </div>
        </div>
    )
}

export default Navigation