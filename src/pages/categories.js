import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

const _ = require('lodash')

export default ({
    data: {
        allMdx: { group },
    },
}) => (
    <Layout>
        <h1>Categories</h1>
        <ul>
          {
              group.map(category => (
                  <li key={category.fieldValue}>
                      <Link to={`/categories/${_.kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link>
            </li>
              ))
          }
        </ul>
    </Layout>
)

export const postQuery = graphql`
  query CategoriesPage {
    allMdx {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`
