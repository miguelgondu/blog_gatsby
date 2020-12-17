import React from "react"
import Layout from "../components/layout"
import profile_photo from "../../static/profile_photo.jpg"


export default () => (
    <Layout to_en_es="/acerca-de/">
        <h1>About Me</h1>
        <img src={profile_photo} class="profile_pic" alt=""></img>

        <p>I'm Miguel González Duque, a mathematician from the Universidad Nacional de Colombia. I'm mostly interested in probabilistic modeling, focusing on Bayesian data analysis and its applications.</p>
        
        <p>I'm currently a PhD student at the <a href="https://game.itu.dk/" target="_blank" rel="noopener noreferrer">Center for Computer Games Research</a> at the IT University of Copenhagen, under the supervision of Prof. <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian Risi</a>. We are developing systems that automatically adapt to users, and we are applying these ideas on videogames and automatic difficulty adjustment.</p>

        <p>Feel free to contact me at miguelgondu(at)gmail(dot)com.</p>

        <p>This blog was made using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>, and is inspired by <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog" target="_blank" rel="noopener noreferrer">the minimal blog starter by LekoArts</a>.</p>
    </Layout>
)
