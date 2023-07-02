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

        <p>Soy Miguel González Duque, un matemático de la Universidad Nacional de Colombia, y doctor de la Universidad IT de Copenhague (supervisado por <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian Risi</a> y <a href="http://www2.compute.dtu.dk/~sohau/" target="_blank" rel="noopener noreferrer">Søren Hauberg</a>).</p>
        
        <p>Me interesa más que todo las aplicaciones de la modelación probabilística y la geometría diferencial. Si te interesan mis projectos, los puedes encontrar en <a href="https://github.com/miguelgondu" target="_blank" rel="noopener noreferrer">mi perfil en GitHub</a> o en el link de <a href="https://miguelgondu.com/projects" target="_blank" rel="noopener noreferrer">Proyectos</a> arriba. Los más importantes:</p>

        <ul>
            <li><a href="https://miguelgondu.com/assets/phdthesis.pdf" target="_blank" rel="noopener noreferrer">Mi tesis doctoral</a>, en la que usé optimización Bayesiana y modelos generativos para crear y adaptar contenido de videojuegos.</li>
            <li><a href="https://github.com/miguelgondu/bayesian_dungeoncrawler" target="_blank" rel="noopener noreferrer">Una página web</a> en donde usé optimización Bayesiana para adaptar contenido de videojuegos.</li>
            <li><a href="https://github.com/juanrloaiza/latinamerican-philosophy-mining" target="_blank" rel="noopener noreferrer">Modelamiento de tópicos</a> de la revista indexada en filosofía con más trayectoria en Colombia ("Ideas y Valores", de la Nacional en Bogotá)</li>
        </ul>

        <p>Para contactarme, puedes escribirme al correo miguelgondu(at)gmail(dot)com.</p>

        <p>Mi experiencia profecional y mis publicaciones están en esta página, pero en inglés. Si quieres verlas, has clic <Link to="/about">aquí</Link>.</p>
    </LayoutEs>
)

export default AboutPageEs