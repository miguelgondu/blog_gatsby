import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "katex/dist/katex.min.css"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, fontSize: "15px" }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

function defaultToEnEs(props) {
    if (props.to_en_es != null) {
        return props.to_en_es
    }
    else {
        return "/es/"
    }
}

export default ( props ) => (
    <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem` }}>
        <Helmet>
            <title>miguelgondu's blog</title>
        </Helmet>
        <header style={{ marginBottom: `4.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h1 style={{ display: `inline` }}>miguelgondu's blog</h1>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                {/* <ListLink to="/">Home</ListLink> */}
                <ListLink to="/projects/">Projects</ListLink>
                {/* <ListLink to="/categories/">Categories</ListLink> */}
                <ListLink to="/all-posts/">All Posts</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to={defaultToEnEs(props)}>en/es</ListLink>
                {/* <ListLink to="/contact/">Contact</ListLink> */}
            </ul>
        </header>
        {props.children}
    </div>
)
