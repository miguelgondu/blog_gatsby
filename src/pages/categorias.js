import React from "react"
import { Link, graphql } from 'gatsby'
import LayoutEs from "../components/layoutEs"

const _ = require('lodash')

export default ({
    data: {
        allMdx: { group },
    },
}) => (
    <LayoutEs to_en_es="/categories/">
        <h1>Categorías</h1>
        <ul>
          {
              group.map(category => (
                  <li key={category.fieldValue}>
                      <Link to={`/categories/${_.kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link>
            </li>
              ))
          }
        </ul>
    </LayoutEs>
)

export const postQuery = graphql`
  query CategoriasPage {
    allMdx(
      filter: {frontmatter: {lang: {eq: "es"}}}
    ) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`
