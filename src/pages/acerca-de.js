import React from "react"
import LayoutEs from "../components/layoutEs"
import profile_photo from "../../static/profile_photo.jpg"


export default () => (
    <LayoutEs to_en_es="/about/">
        <h1>Acerca de</h1>
        <img src={profile_photo} style={{ borderRadius: '50%', height: '250px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt=""></img>

        <p>Soy Miguel González Duque, un matemático de la Universidad Nacional de Colombia. Me interesa más que todo la inteligencia artificial, las ciencias de los datos, el aprendizaje automático, la optimización, ética y videojuegos.</p>

        <p>Para contactarme, puedes escribirme al correo miguelgondu(at)gmail(dot)com.</p>

        <p>Este blog se hizo usando <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>, y está inspirado en <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog" target="_blank" rel="noopener noreferrer">el blog minimal de LekoArts</a>.</p>
    </LayoutEs>
)
