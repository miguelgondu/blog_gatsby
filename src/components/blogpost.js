import React from "react"
import { Link } from "gatsby"

export default ( props ) => (
    <div key={props.id}>
        <h3><Link to={props.slug}>{props.title}{" "}</Link></h3>
        <span>{props.date}{" "}</span>
        <p>{props.categories.map((category, index, arr) => {
                if (arr.length === index + 1) {
                return (<span>{category}</span>)
                }
                else {
                return (<span>{category} - </span>)
                }
        })}</p>
        <p>{props.summary}</p>
    </div>
)