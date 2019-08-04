import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"

export default ({ data }) => {
    return (
        <Layout>
            <div>
                {data.allMdx.nodes.map(node  => (
                    <div key={node.id}>
                        <h3>
                          <Link to={node.fields.slug}>
                            {node.frontmatter.title}{" "}
                          </Link>
                        </h3>
                        <span>
                          {node.frontmatter.date}{" "}
                        </span>
                    <p>{node.frontmatter.categories.map((category, index, arr) => {
                      if (arr.length === index + 1) {
                        return (<span>{category}</span>)
                      }
                      else {
                        return (<span>{category} - </span>)
                      }
                    })}</p>
                    </div>)
                )}
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
