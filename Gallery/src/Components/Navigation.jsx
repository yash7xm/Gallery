import "../assets/styles/Navigation.css"

function Navigation() {
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
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Navigation