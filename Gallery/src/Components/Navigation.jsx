import "../assets/styles/Navigation.css"
import SignUp from "./SignUp";
import SignIn from './SignIn';
import { useState } from "react";
import Cookies from 'js-cookie';
import ImageUpload from "./ImageUpload";


function Navigation() {

    let cook = Cookies.get('username');

    const [signUpToggle, setSignUpToggle] = useState(false);
    const [signInToggle, setSignInToggle] = useState(false);
    const [upload, setUpload] = useState(false);
    const [cookie, setCookie] = useState(cook);

    console.log(cookie);

    const handleLogOutBtn = () => {
        Cookies.remove('username');
        setCookie(Cookies.get('username'));
    }
    

    const handleSetCookie = () => {
        console.log('hello')
        setCookie(Cookies.get('username'));
    }

    const handleSignUpBtn = () => {
        setSignUpToggle(!signUpToggle);
    }

    const handleSignInBtn = () => {
        setSignInToggle(!signInToggle);
    }

    const handleUploadBtn = () => {
        if(cookie == undefined){
            window.alert('You have to login in order to upload images');
            return;
        }
        setUpload(!upload)
    }

    return (
        <div className="navigation">
            <div className="search">
                <input type="text" placeholder="Search in Gallery" />
            </div>
            <div className="nav-btns">
                <div className="info-btns">
                    <div>
                        {!upload && <div onClick={handleUploadBtn}>Upload</div>}
                        {upload && <ImageUpload crossBtn={handleUploadBtn} username = {cookie}/>}
                    </div>
                    <div>Your Images</div>
                </div>
                <div className="sign-btn">
                    {cookie === undefined ? (
                        <div className="sign-btns">
                            <div className="signUp-btn">
                                {!signUpToggle && <div onClick={handleSignUpBtn}>SignUp</div>}
                                {signUpToggle && <SignUp crossBtn={handleSignUpBtn} setCookieBtn = {handleSetCookie}/>}
                            </div>
                            <div className="signIn-btn">
                                {!signInToggle && <div onClick={handleSignInBtn}>SignIn</div>}
                                {signInToggle && <SignIn crossBtn={handleSignInBtn} setCookieBtn = {handleSetCookie}/>}
                            </div>
                        </div>
                    ) : (
                        <div className="logOut-btn" onClick={handleLogOutBtn}>LogOut</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navigation

