import Image from "./Image"
import "../assets/styles/ImagesGrid.css"
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

function ImagesGrid() {
    const username = Cookies.get('username');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/imageData?username=${username}`, {
                    method: 'GET',
                });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }

        if(username != undefined) fetchData();
    }, [username]);

    return (
        <div className="images-grid">
            {data.map((item, i) => (
                <Image key={i} url={item.url} data={item} idx={i} un={username}/>
            ))}
        </div>
    );
}

export default ImagesGrid