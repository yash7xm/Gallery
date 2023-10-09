import Navigation from "./Navigation"
import ImagesGrid from "./ImagesGrid"
import Footer from "./Footer"
import "../assets/styles/Content.css"


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