import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ExpandImage({toggleFxn, views, imgUrl, imgData}) {
    return(
        <div className="img-img">
            <div className="img-wrapper" onClick={toggleFxn}>
                <div className="main-img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
                <div className="img-info">
                    <div className="title-info">
                        <div className="titles">Title
                        <span>
                        <FontAwesomeIcon icon={faXmark} />
                        </span>
                        </div>
                        <div className="img-title">{imgData.title}</div>
                    </div>
                    <div className="desc-info">
                        <div className="titles">Description</div>
                        <div className="img-desc">
                           {imgData.desc}
                        </div>
                    </div>
                    <div className="views-info">
                        <div className="titles">Views</div>
                        <div className="img-view">
                            {views}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandImage