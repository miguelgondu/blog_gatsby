import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Category from "../components/category"


export default ({
    data: {
        allMdx: { group },
    },
}) => (
    <Layout to_en_es="/categorias/">
        <h1>Categories</h1>
        <ul>
          {
              group.map(category => (
                  <Category category={category}>
                  </Category>
                  // <li key={category.fieldValue}>
                  //     <Link to={`/categories/${_.kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link>
                  // </li>
              ))
          }
        </ul>
    </Layout>
)

export const postQuery = graphql`
  query CategoriesPage {
    allMdx(
      filter: {frontmatter: {lang: {eq: "en"}}}
    ) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`
