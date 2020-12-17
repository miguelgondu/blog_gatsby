import React from "react"
import LayoutEs from "../components/layoutEs"
import profile_photo from "../../static/profile_photo.jpg"


export default () => (
    <LayoutEs to_en_es="/about/">
        <h1>Acerca de</h1>
        <div class="centered">
            <img src={profile_photo} class="profile_pic" alt=""></img>
        </div>

        <p>Soy Miguel González Duque, un matemático de la Universidad Nacional de Colombia. Me interesa más que todo el modelamiento probabilístico, enfocándome en análisis Bayesiano de datos y sus aplicaciones.</p>
        
        <p>En este momento soy un estudiante de doctorado del <a href="https://game.itu.dk/" target="_blank" rel="noopener noreferrer">Center for Computer Games Research</a> en la Universidad IT de Copenhague, bajo la dirección del Prof. <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian Risi</a>. Estamos desarrollando sistemas que se adaptan automáticamente a sus usuarios, y estamos aplicando estas ideas en videojuegos y en ajuste automático de la dificultad.</p>

        <p>Para contactarme, puedes escribirme al correo miguelgondu(at)gmail(dot)com.</p>

        <p>Este blog se hizo usando <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>, y está inspirado en <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog" target="_blank" rel="noopener noreferrer">el blog minimal de LekoArts</a>.</p>
    </LayoutEs>
)
