import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import profile_photo from "../../static/profile_photo.jpg"


export default ({ data }) => (
    <Layout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <img src={profile_photo} style={{ borderRadius: '50%', height: '250px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt=""></img>

        <p>I'm Miguel González Duque, a mathematician from the National University of Colombia. I'm mostly interested in Artificial Intelligence, Data Science, Machine Learning and Video Games.</p>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`