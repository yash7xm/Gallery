import Navigation from "./Navigation"
import ImagesGrid from "./ImagesGrid"
import Footer from "./Footer"
import "./Content.css"


function Content() {
    return (
        <div className="contents">
            <Navigation />
            <ImagesGrid />
            <Footer />
        </div>
    )
}

export default Content