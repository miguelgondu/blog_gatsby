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
                    <p>{node.frontmatter.categories.map((category, index) => (<span> {category} - </span>))}</p>
                    </div>)
                )}
            </div>
        </Layout>
    )
}

// {
//   posts.map(post => (
//     <Article
//       title={post.frontmatter.title}
//       date={post.frontmatter.date}
//       excerpt={post.excerpt}
//       timeToRead={post.timeToRead}
//       slug={post.fields.slug}
//       categories={post.frontmatter.categories}
//       key={post.fields.slug}
//     />
//   ))
// }

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
