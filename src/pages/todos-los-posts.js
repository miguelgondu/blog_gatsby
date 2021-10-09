import React from "react"
import { graphql, Link } from "gatsby"
import LayoutEs from "../components/layoutEs"
import "katex/dist/katex.min.css"

const AllPostsPageEs = ({ data }) => {
  return (
      <LayoutEs to_en_es="/all-posts/">
          <div>
            <h1>Todos los posts</h1>
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
                  <p>{node.frontmatter.summary}</p>
                  </div>)
              )}
          </div>
      </LayoutEs>
  )
}
export default AllPostsPageEs

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
      }
    }
  }
`
