import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ExpandImage({toggleFxn}) {
    return(
        <div className="img-img">
            <div className="img-wrapper" onClick={toggleFxn}>
                <div className="main-img"></div>
                <div className="img-info">
                    <div className="title-info">
                        <div className="titles">Title
                        <span>
                        <FontAwesomeIcon icon={faXmark} />
                        </span>
                        </div>
                        <div className="img-title">Image Title</div>
                    </div>
                    <div className="desc-info">
                        <div className="titles">Description</div>
                        <div className="img-desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptatem quibusdam incidunt, praesentium, repellat suscipit quisquam possimus ad nam dolores dolorum! Dolor accusantium veritatis fugiat unde amet voluptatum ipsa ut?
                        </div>
                    </div>
                    <div className="views-info">
                        <div className="titles">Views</div>
                        <div className="img-view">
                            20K
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandImage