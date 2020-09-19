import React from "react"
import Layout from "../components/layoutEs"

export default () => (
    <Layout to_en_es="/projects/">
        <h1>Proyectos</h1>
        
        <p>Aquí están unos proyectos en los que he estado trabajando últimamente:</p>
        
        <ul>
            <li>Una <a href="https://adaptivesudoku.herokuapp.com/" target="_blank" rel="noopener noreferrer">aplicación de sudokus</a> que encuentra el sudoku con la dificultad ideal para que sea solucionable en 3 minutos. Como cada jugador es distinto, los modelamos independientemente usando procesos Gaussianos y optimización Bayesiana.</li>
            <li> También estoy trabajando en <a href="https://github.com/juanrloaiza/latinamerican-philosophy-mining" target="_blank" rel="noopener noreferrer">modelamiento de tópicos</a> junto con <a href="https://www.juanrloaiza.me/" target="_blank" rel="noopener noreferrer">Juan Raúl Loaiza</a>. Estamos procesando los artículos enviados a la revista <em>Ideas y Valores</em>, del departamento de filosofía de la Universidad Nacional de Colombia en Bogotá.</li>
        </ul>
    </Layout>
)
