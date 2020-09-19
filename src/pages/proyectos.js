import React from "react"
// import { Link, graphql } from 'gatsby'
import Layout from "../components/layoutEs"

export default () => (
    <Layout to_en_es="/projects/">
        <h1>Proyectos</h1>
        
        <p>Aquí están unos proyectos en los que he estado trabajando últimamente:</p>
        
        <ul>
            <li>Una <a href="https://adaptivesudoku.herokuapp.com/" target="_blank" rel="noopener noreferrer">aplicación de sudokus</a> que encuentra el sudoku con la dificultad ideal para que sea solucionable en 3 minutos. Como cada jugador es distinto, los modelamos independientemente usando procesos Gaussianos y optimización Bayesiana.</li>
        </ul>
    </Layout>
)
