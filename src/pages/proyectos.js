import React from "react"
import Layout from "../components/layoutEs"
import Project from "../components/project"

export default () => (
    <Layout to_en_es="/projects/">
        <h1>Proyectos</h1>
        
        <Project title="String-to-graph" linkto="https://string-to-graph.herokuapp.com/" imgsrc="/assets/string-to-graph.png">¿Recuerdan <a href="/blogposts/2019-11-3/creating-a-random-graph-from-strings/" target="_blank" rel="noopener noreferrer">un blogpost</a> que escribí hace un tiempo?, en él describía cómo crear grafos a partir de strings. Ahora es <a href="https://string-to-graph.herokuapp.com/" target="_blank" rel="noopener noreferrer">una aplicación web</a>.</Project>

        <Project linkto="https://github.com/juanrloaiza/latinamerican-philosophy-mining" title="Modelamiento de tópicos en filosofía" imgsrc="/assets/philosophy_modeling.png">Estoy trabajando en <a href="https://github.com/juanrloaiza/latinamerican-philosophy-mining" target="_blank" rel="noopener noreferrer">modelamiento de tópicos</a> junto con <a href="https://www.juanrloaiza.me/" target="_blank" rel="noopener noreferrer">Juan Raúl Loaiza</a>. Estamos procesando los artículos enviados a la revista <em>Ideas y Valores</em>, del departamento de filosofía de la Universidad Nacional de Colombia en Bogotá.</Project>

        <Project linkto="https://adaptivesudoku.herokuapp.com/" imgsrc="/assets/sudoku_webapp.png" title="Adaptive Sudoku">Una <a href="https://adaptivesudoku.herokuapp.com/" target="_blank" rel="noopener noreferrer">aplicación de sudokus</a> que encuentra el sudoku con la dificultad ideal para que sea solucionable en 3 minutos. Como cada jugador es distinto, los modelamos independientemente usando procesos Gaussianos y optimización Bayesiana.</Project>

        <Project title="Voronoi me" imgsrc="/assets/voronoi_me.jpg" linkto="https://github.com/miguelgondu/voronoi_me">Implementé un <a href="https://github.com/miguelgondu/voronoi_me" target="_blank" rel="noopener noreferrer">script en Python</a> que transforma fotos usando NumPy, SciPy y PIL. El resultado es una versión low-poly de la foto usando teselaciones de Voronoi.</Project>
    </Layout>
)
