import React from "react"
import { Link } from "gatsby"

function blogpost(props) {
    if ('imgsrc' in props) {
        return (
            <div key={props.id}>
                <img class="blogpost" src={props.imgsrc} alt=""></img>
                <h2><Link to={props.slug}>{props.title}{" "}</Link></h2>
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
                <hr></hr>
            </div>
        )
    }
    else {
        return (
            <div key={props.id}>
                <h2><Link to={props.slug}>{props.title}{" "}</Link></h2>
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
                <hr></hr>
            </div>
        )
        
    }
}

export default ( props ) => (
    blogpost(props)
)
