import { useState } from "react"
import ExpandImage from "./ExpandImage";
import "../assets/styles/Image.css"

function Image() {
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0);
    const expandImg = () => {
        setToggle(!toggle);
        if(!toggle) incrementViews();
    } 

    const incrementViews = () => {
        setCount(prevCount => {
            return prevCount + 1;
        })
    }

    return(
        <>
            {toggle && <ExpandImage toggleFxn = {expandImg} views = {count} />}
            {!toggle && <div className="img" onClick={expandImg}></div>}
        </>
    )
}

export default Image