import React from "react"
import Layout from "../components/layout"
import profile_photo from "../../static/profile_photo.jpg"


export default () => (
    <Layout>
        <h1>About Me</h1>
        <img src={profile_photo} style={{ borderRadius: '50%', height: '250px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt=""></img>

        <p>I'm Miguel González Duque, a mathematician from the National University of Colombia. I'm mostly interested in Artificial Intelligence, Data Science, Machine Learning, Optimization, Ethics and Video Games.</p>

        <p>Feel free to contact me at miguelgondu(at)gmail(dot)com.</p>

        <p>This blog was made using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>.</p>
    </Layout>
)
