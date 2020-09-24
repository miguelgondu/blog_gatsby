import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Blogpost from "../components/blogpost"
import "katex/dist/katex.min.css"

function processNodeBlogpost(node) {
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

export default ({ data }) => {
    return (
        <Layout to_en_es="/es/">
            <div>
                {data.allMdx.nodes.map(node  => (
                  processNodeBlogpost(node)
                  )
                )}
            </div>
        </Layout>
    )
}

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
        }
      }
    }
  }
`
