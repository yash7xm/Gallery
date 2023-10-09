import "./Image.css"

function Image() {
    return(
        <div className="image">
            <div className="img">

            </div>
            <div className="img-info">
                <div>
                    <div>Title</div>
                    <div className="img-title">A Dancing Gorrilla</div>
                </div>
               <div>
                    <div>Description</div>
                    <div className="img-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
               </div>
               <div>
                    <div>Views</div>
                    <div className="img-views">20K</div>
               </div>
            </div>
        </div>
    )
}

export default Image