import React from "react"
import { Link } from "gatsby"
import "katex/dist/katex.min.css"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ( props ) => (
    <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>miguelgondu's blog</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                {/* <ListLink to="/">Home</ListLink> */}
                <ListLink to="/acerca-de/">Acerca de</ListLink>
                <ListLink to="/categorias/">Categorías</ListLink>
                <ListLink to="/todos-los-posts/">Todos los posts</ListLink>
                <ListLink to={props.to_en_es}>en/es</ListLink>
                {/* <ListLink to="/contact/">Contact</ListLink> */}
            </ul>
        </header>
        {props.children}
    </div>
)