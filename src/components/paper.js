import React from "react"
import { Link } from "gatsby"

function getLinks(props) {
    // Returns a series of spans, depending
    // on the props (if they have arxiv, ieee and
    // so on.)
    let links = []
    if (props.pdfsrc != null) {
        links.push(
            (<Link to={props.pdfsrc}>pdf</Link>)
        )
    }
    if (props.linkArxiv != null) {
        links.push(
            (<Link to={props.linkArxiv}>arxiv</Link>)
        )
    }
    if (props.linkPublication != null) {
        links.push(
            (<Link to={props.linkPublication}>publication</Link>)
        )
    }
    if (props.linkCode != null) {
        links.push(
            (<Link to={props.linkCode}>code</Link>)
        )
    }
    return links
}

function paper(props) {
    let links = getLinks(props)
    if (props.imgsrc != null) {
        return (
            <div key={props.id} className="blogpostBanner">
                <div className="blogpostImageContainer">
                    <Link to={props.linkPaper}>
                        <span class="helper">
                            <img class="paper" src={props.imgsrc} alt=""></img>
                        </span>
                    </Link>
                </div>
                <div>
                    <h2><Link to={props.linkPaper}>
                        {props.title}
                    </Link></h2>
                    <p className="authors">{props.authors}{props.conference}</p>
                    <p>{props.content}</p>
                    <p>{links.map((l, index, arr) => {
                            if (arr.length === index + 1) {
                            return (<span>{l}</span>)
                            }
                            else {
                            return (<span>{l} - </span>)
                            }
                    })}</p>
                </div>
            {/* <hr></hr> */}
            </div>
        )
    }
    else {
        return (
            <div key={props.id}>
                <h3><Link to={props.linkPaper}>
                    {props.title}
                </Link></h3>
                <p>{props.content}</p>
                <p>{links.map((l, index, arr) => {
                        if (arr.length === index + 1) {
                        return (<span>{l}</span>)
                        }
                        else {
                        return (<span>{l} - </span>)
                        }
                })}</p>
                <hr></hr>
            </div>
        )
    }
}

const ExportPapers = ( props ) => (
    paper(props)
)
export default ExportPapers