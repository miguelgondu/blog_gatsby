import React from "react"
import { graphql, Link } from "gatsby"
import LayoutEs from "../components/layoutEs"
import Blogpost from "../components/blogpost"
import "katex/dist/katex.min.css"

export default ({ data }) => {
    return (
        <LayoutEs to_en_es="/">
            <div>
                {data.allMdx.nodes.map(node  => (
                    <Blogpost id={node.id} slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} categories={node.frontmatter.categories} summary={node.frontmatter.summary}></Blogpost>
                  )
                )}
            </div>
        </LayoutEs>
    )
}

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
          summary
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
