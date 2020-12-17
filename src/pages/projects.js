import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"

export default () => (
    <Layout to_en_es="/proyectos/">
        <h1>Projects</h1>

        <Project title="String-to-graph" linkto="https://string-to-graph.herokuapp.com/" imgsrc="/assets/string-to-graph.png">Do you remember <a href="/blogposts/2019-11-3/creating-a-random-graph-from-strings/" target="_blank" rel="noopener noreferrer">a blogpost</a> I wrote a couple of months ago?, in it I described how to create a graph from a string. Now it can be used as a <a href="https://string-to-graph.herokuapp.com/" target="_blank" rel="noopener noreferrer">web app</a>.</Project>

        <Project linkto="https://github.com/juanrloaiza/latinamerican-philosophy-mining" title="Topic Modeling in Philosophy Journals" imgsrc="/assets/philosophy_modeling.png">I am working on <a href="https://github.com/juanrloaiza/latinamerican-philosophy-mining" target="_blank" rel="noopener noreferrer">topic modeling</a> alongside <a href="https://www.juanrloaiza.me/" target="_blank" rel="noopener noreferrer">Juan Raúl Loaiza</a>. We are processing the papers submitted to <em>Ideas y Valores</em>, a journal from the department of philosophy of the Universidad Nacional de Colombia in Bogotá.</Project>

        <Project linkto="https://adaptivesudoku.herokuapp.com/" imgsrc="/assets/sudoku_webapp.png" title="Adaptive Sudoku">A <a href="https://adaptivesudoku.herokuapp.com/" target="_blank" rel="noopener noreferrer">sudoku web app</a> that finds the right sudoku for you. This project uses Gaussian Processes and Bayesian Optimization to model the time it takes for each player to solve a sudoku given the number of prefilled digits.</Project>

        <Project title="Voronoi me" imgsrc="/assets/voronoi_me.jpg" linkto="https://github.com/miguelgondu/voronoi_me">I implemented a <a href="https://github.com/miguelgondu/voronoi_me" target="_blank" rel="noopener noreferrer">small Python code</a> that transforms photos to low-poly versions using NumPy, SciPy, PIL and Voronoi tesselations.</Project>

        <Project title="sc2reaper" linkto="https://github.com/miguelgondu/sc2reaper" imgsrc="/assets/paper_images/bril_paper_image.png">
            I implemented a <a href="https://github.com/miguelgondu/sc2reaper" target="_blank" rel="noopener noreferrer">Python library/template for scraping data from .SC2Replay files</a> for my M.Sc thesis. More details can be found in my blogposts and publications (in the about page). This image was made by <a href="https://njustesen.github.io/njustesen/" target="_blank" rel="noopener noreferrer">Niels Justesen</a>, with whom I co-authored <a href="https://arxiv.org/abs/1907.03046" target="_blank" rel="noopener noreferrer">this paper</a> about learning build orders. This library was used by <a a href="https://odr.chalmers.se/handle/20.500.12380/301902" target="_blank" rel="noopener noreferrer">a group of Bachelor's students</a> at Chalmers university.
        </Project>
    </Layout>
)
