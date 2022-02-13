import React from "react"
import { graphql } from "gatsby"
import LayoutEs from "../components/layoutEs"
import Blogpost from "../components/blogpost"
import "katex/dist/katex.min.css"
import BlogpostBanner from "../components/blogpostBanner"

const IndexPageEs = ({ data }) => {
  return (
      <LayoutEs to_en_es="/">
          <div>
              {data.allMdx.nodes.map((node, i)  => (
                  <BlogpostBanner key={`b-es-${i}`} node={node}/>
                )
              )}
          </div>
      </LayoutEs>
  )
}

export default IndexPageEs

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {lang: {eq: "es"}}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          categories
          imgsrc
          summary
          show
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`
