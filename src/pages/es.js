import React from "react"
import { graphql } from "gatsby"
import LayoutEs from "../components/layoutEs"
import Blogpost from "../components/blogpost"
import "katex/dist/katex.min.css"

function processNodeBlogpost(node) {
  const showCondition = node.frontmatter.show === null || node.frontmatter.show 
  if (showCondition) {
    if ("imgsrc" in node.frontmatter) {
      return (
        <Blogpost id={node.id} slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} categories={node.frontmatter.categories} summary={node.frontmatter.summary} imgsrc={node.frontmatter.imgsrc}></Blogpost>
      )
    }
    else {
      return (
          <Blogpost id={node.id} slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} categories={node.frontmatter.categories} summary={node.frontmatter.summary}></Blogpost>
      )
    }
  }
  else {
    return null
  }
}

const IndexPageEs = ({ data }) => {
  return (
      <LayoutEs to_en_es="/">
          <div>
              {data.allMdx.nodes.map(node  => (
                  processNodeBlogpost(node)
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
