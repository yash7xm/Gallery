import Navigation from "./Navigation"
import ImagesGrid from "./ImagesGrid"
import "./Content.css"


function Content() {
    return (
        <div className="contents">
            <Navigation />
            <ImagesGrid />
        </div>
    )
}

export default Content