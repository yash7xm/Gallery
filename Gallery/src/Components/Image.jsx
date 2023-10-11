import { useState } from "react"
import ExpandImage from "./ExpandImage";
import "../assets/styles/Image.css"

function Image({url, data, idx, un}) {
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(data.views);
    const expandImg = () => {
        setToggle(!toggle);
        if(!toggle) incrementViews();
    } 

    const incrementViews = async () => {
        setCount(prevCount => {
            return prevCount + 1;
        })
        console.log(data.views);
        await fetch(`http://localhost:8080/updateImageViews?username=${un}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                count: count,
                idx: idx
            }),
        });        
    }

    return (
        <>
            {toggle && <ExpandImage toggleFxn={expandImg} views={count} imgUrl={url} imgData={data}/>}
            {!toggle && (
                <div
                    className="img"
                    style={{ backgroundImage: `url(${url})` }}
                    onClick={expandImg}
                ></div>
            )}
        </>
    );
}

export default Image