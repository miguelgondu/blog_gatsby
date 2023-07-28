import React from "react"
import { Link } from "gatsby"

const ImageBanner = (props) => {
    let slug = props.slug
    let src = props.imgsrc

    if (src != null) {
        return (<Link to={slug}><img className="blogpost" src={src} alt=""></img></Link>)
    }

    return null
}

const Blogpost = (props) => {
    let front = props.node.frontmatter;
    let slug = props.node.fields.slug;

    return (
        <div key={front.id}>
            <ImageBanner slug={slug} imgsrc={front.imgsrc} />
            <h2><Link to={slug} style={{color: "dodgerblue"}}>{front.title}{" "}</Link></h2>
            <span key={`${front.id}-${front.date}`}>{front.date}{" "}</span>
            <p>{front.categories.map((category, index, arr) => {
                    if (arr.length === index + 1) {
                    return (<span key={`${front.id}-${front.date}-${category}`}>{category}</span>)
                    }
                    else {
                    return (<span key={`${front.id}-${front.date}-${category}`}>{category} - </span>)
                    }
            })}</p>
            <p>{front.summary}</p>
            <hr></hr>
        </div>
    )
}

export default Blogpost
