import React from "react"
import { Link } from "gatsby"

const _ = require('lodash')

export default ( props ) => (
    <li key={props.category.fieldValue}>
        <Link to={`/categories/${_.kebabCase(props.category.fieldValue)}`}>
            {props.category.fieldValue}
        </Link>
    </li>
)