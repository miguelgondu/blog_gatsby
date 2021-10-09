import React from "react"
import { graphql } from 'gatsby'
import LayoutEs from "../components/layoutEs"
import Category from "../components/category"

const CategoriesPageEs = ({
  data: {
      allMdx: { group },
  },
}) => (
  <LayoutEs to_en_es="/categories/">
      <h1>Categorías</h1>
      <ul>
        {
            group.map(category => (
              <Category category={category}></Category>
            ))
        }
      </ul>
  </LayoutEs>
)

export default CategoriesPageEs

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
