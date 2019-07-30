import React from "react"
import { graphql } from "gatsby"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3>
                            {node.frontmatter.title}{" "}
                            <span>
                                — {node.frontmatter.date}
                            </span>
                        </h3>
                        <p css={{
                            display: `flex`,
                            alignItems: `center`,
                        }}>{node.excerpt}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`