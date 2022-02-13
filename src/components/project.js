import React from "react"
import { Link } from "gatsby"

const ExportProjects = ( props ) => (
    <div className="blogpostBanner">
        <div className="blogpostImageContainer">
        <Link to={props.linkto}><img class="project" src={props.imgsrc} alt=""></img></Link>
        </div>
        <div>
            <h2><Link to={props.linkto}>{props.title}</Link></h2>
            <p>{props.children}</p>
        {/* <hr></hr> */}
        </div>
    </div>
)
export default ExportProjects
