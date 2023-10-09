import "./SideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="logo">YP</div>
            <div className="heading">Gallery</div>
            <div className="threeLines">
            <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}

export default SideBar;