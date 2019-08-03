import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({
    data: {
        allMdx: { group },
    },
}) => (
    <Layout>
        <h1>Categories</h1>
        {
            group.map(category => (
                <h3 key={category.fieldValue}>
                    <Link to={`/categories/${category.fieldValue}`}>{category.fieldValue}</Link>
          </h3>
            ))
        }
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
