import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ImageUpload.css'
import { useState } from 'react';

function ImageUpload({crossBtn, username}) {

    const [formData, setFormData] = useState({
        title: '',
        desc: '',
    });
    const [file, setFile] = useState(null);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(file);
    }

    async function handleImageUpload() {
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('desc', formData.desc);
        formDataToSend.append('imageFile', file);

    // await fetch('http://localhost:8080/uploadImage', {
    //   method: 'POST',
    //   body: formDataToSend,
    // });

    await fetch('http://localhost:8080/uploadImageData', {
        method: 'POST',
        body: JSON.stringify(formData)
    })

    }

    return(
        <div className='main'>
         <div className="upload-popup">
         <div className="content-5">
                <div className="first">
                    <div>#</div>
                    <div className="greet">Hello {username}!</div>
                    <div className="close" onClick={crossBtn}>
                    <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="content">
                    <div className="msg">Superb.<br /> <span>Share the image you want to upload</span></div>
                </div>
                <div className="main2">
                    <div className="input">
                    <input
                        type="text"
                        className="title"
                        placeholder="Title*"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                      <input
                        type="text"
                        className="desc"
                        placeholder="Description*"
                        id="desc"
                        name="desc"
                        value={formData.desc}
                        onChange={handleInputChange}
                    />
                      <input
                        type="file"
                        className="i"
                        placeholder="image*"
                        id="image"
                        name="imageFile"
                        onChange={e => setFile(e.target.files[0])}
                    />
                    </div>
                </div>
                <div className="next">
                    <div className="continue"  onClick={handleImageUpload}>Upload</div>
                </div>
            </div>
         </div>
        </div>
    )
}

export default ImageUpload;