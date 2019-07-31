import React from "react"
import Layout from "../components/layout"
import profile_photo from "../../static/profile_photo.jpg"


export default ({ data }) => (
    <Layout>
        <h1>About Me</h1>
        <img src={profile_photo} style={{ borderRadius: '50%', height: '250px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt=""></img>

        <p>I'm Miguel González Duque, a mathematician from the National University of Colombia. I'm mostly interested in Artificial Intelligence, Data Science, Machine Learning and Video Games.</p>
    </Layout>
)
