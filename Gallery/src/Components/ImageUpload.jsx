import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ImageUpload.css'

function ImageUpload() {
    return(
        <div className='main'>
         <div className="upload-popup">
         <div className="content-5">
                <div className="first">
                    <div>#</div>
                    <div className="greet">Hello Aman!</div>
                    <div className="close">
                    <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="content">
                    <div className="msg">Superb.<br /> <span>Share the image you want to upload</span></div>
                </div>
                <div className="main2">
                    <div className="input">
                        <input type="file" />
                    </div>
                </div>
                <div className="next">
                    <div className="continue">Upload</div>
                </div>
            </div>
         </div>
        </div>
    )
}

export default ImageUpload;