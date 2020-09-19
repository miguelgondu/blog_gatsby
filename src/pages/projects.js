import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout to_en_es="/proyectos/">
        <h1>Projects</h1>
        
        <p>Here are some of the projects I have been working on:</p>
        
        <ul>
            <li>A <a href="https://adaptivesudoku.herokuapp.com/" target="_blank" rel="noopener noreferrer">sudoku web app</a> that finds the right sudoku for you. This project uses Gaussian Processes and Bayesian Optimization to model the time it takes for each player to solve a sudoku given the number of prefilled digits.</li>
            <li> I am also working on <a href="https://github.com/juanrloaiza/latinamerican-philosophy-mining" target="_blank" rel="noopener noreferrer">topic modeling</a> alongside <a href="https://www.juanrloaiza.me/" target="_blank" rel="noopener noreferrer">Juan Raúl Loaiza</a>. We are processing the papers submitted to <em>Ideas y Valores</em>, a jounral from the department of philosophy of the Universidad Nacional de Colombia in Bogotá.</li>
        </ul>
    </Layout>
)
