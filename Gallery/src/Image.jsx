import { useState } from "react"
import ExpandImage from "./ExpandImage";
import "./Image.css"

function Image() {
    const [toggle, setToggle] = useState(false);
    const expandImg = () => {
        setToggle(!toggle);
    } 

    return(
        <>
            {toggle && <ExpandImage toggleFxn = {expandImg}/>}
            {!toggle && <div className="img" onClick={expandImg}></div>}
        </>
    )
}

export default Image