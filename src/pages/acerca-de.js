import React from "react"
import { Link } from "gatsby"
import LayoutEs from "../components/layoutEs"
import profile_photo from "../../static/profile_photo.jpg"

const AboutPageEs = () => (
    <LayoutEs to_en_es="/about/">
        <h1>Acerca de</h1>
        <div class="centered">
            <img src={profile_photo} class="profile_pic" alt=""></img>
        </div>

        <p>Soy Miguel González Duque, un matemático de la Universidad Nacional de Colombia. Me interesa más que todo en la intersección entre modelamiento probabilístico y geometría diferencial.</p>
        
        <p>En este momento soy un estudiante de doctorado del <a href="https://game.itu.dk/groups/creativeai/" target="_blank" rel="noopener noreferrer">Creative AI Lab</a> en la Universidad IT de Copenhague, bajo la dirección del Prof. <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian Risi</a>. Estamos desarrollando sistemas que crean y adaptan contenido de videojuegos. También comencé a colaborar con el grupo de <a href="http://www2.compute.dtu.dk/~sohau/" target="_blank" rel="noopener noreferrer">Søren Hauberg</a> en DTU, trabajando en modelamiento generativo y geometría diferencial.</p>

        <p>Para contactarme, puedes escribirme al correo miguelgondu(at)gmail(dot)com.</p>

        <p>Mis publicaciones están en esta página, pero en inglés. Si quieres verlas, has clic <Link to="/about">aquí</Link>.</p>
    </LayoutEs>
)

export default AboutPageEs