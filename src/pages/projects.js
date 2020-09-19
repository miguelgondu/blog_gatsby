import React from "react"
// import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

export default () => (
    <Layout to_en_es="/proyectos/">
        <h1>Projects</h1>
        
        <p>Here are some of the projects I have been working on:</p>
        
        <ul>
            <li>A <a href="https://adaptivesudoku.herokuapp.com/" target="_blank" rel="noopener noreferrer">sudoku web app</a> that finds the right sudoku for you. This project uses Gaussian Processes and Bayesian Optimization to model the time it takes for each player to solve a sudoku given the number of prefilled digits.</li>
        </ul>
    </Layout>
)
