import React from "react"
import { Link } from "gatsby"


const ImageBanner = (props) => {
    let slug = props.slug
    let src = props.imgsrc

    if (src != null) {
        return (<Link to={slug} className="image-link" activeClassName="image-link"><img className="blogpostBanner" src={src} alt=""></img></Link>)
    }

    return null
}

const BlogpostBanner = (props) => {
    let front = props.node.frontmatter;
    let slug = props.node.fields.slug;

    return (
        <div key={front.id} className="blogpostBanner">
            <div className="blogpostImageContainer">
                <ImageBanner slug={slug} imgsrc={front.imgsrc} />
            </div>
            <div>
                <h2 className="blogpostTitle"><Link to={slug}>{front.title}{" "}</Link></h2>
                <span key={`${front.id}-${front.date}`} className="blogpostDate">{front.date}{" "}</span>
                <p className="blogpostSummary">{front.summary}</p>
            </div>
            {/* <hr></hr> */}
        </div>
    )
}

export default BlogpostBanner
