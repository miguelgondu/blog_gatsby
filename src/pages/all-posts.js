import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Blogpost from "../components/blogpost"
import "katex/dist/katex.min.css"

const AllPostsPage = ({ data }) => {
  return (
      <Layout to_en_es="/todos-los-posts/">
          <div>
            <h1>All Posts</h1>
              {data.allMdx.nodes.map(node  => (
                  <Blogpost id={node.id} slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} categories={node.frontmatter.categories} summary={node.frontmatter.summary}></Blogpost>
                )
              )}
          </div>
      </Layout>
  )
}
export default AllPostsPage

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
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
