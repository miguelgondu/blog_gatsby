import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Blogpost from "../components/blogpost"
import "katex/dist/katex.min.css"
import BlogpostBanner from "../components/blogpostBanner"

const IndexPage = ({ data }) => {
  return (
      <Layout to_en_es="/es/">
          <div>
              {data.allMdx.nodes.map((node, i)  => (
                  <BlogpostBanner key={`b-${i}`} node={node}></BlogpostBanner>
                  // <Blogpost key={`b2-${i}`} node={node}/>
                )
              )}
          </div>
      </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {lang: {eq: "en"}}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          imgsrc
          categories
          summary
          show
        }
      }
    }
  }
`
