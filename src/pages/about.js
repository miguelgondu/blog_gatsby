import React from "react"
import Layout from "../components/layout"
import Paper from "../components/paper"
import profile_photo from "../../static/profile_photo.jpg"

function allPapers() {
    // let paperTemplate = {
    //     title: null,
    //     content: null,
    //     linkPaper: null,
    //     imgsrc: null,
    //     pdfsrc: null,
    //     linkArxiv: null,
    //     linkPublication: null,
    //     linkCode: null,
    // }

    // Finding Game Levels paper
    let findingLevelsPaper = {
        title: "Finding Game Levels with the Right Difficulty in a Few Trials through Intelligent Trial-and-Error",
        content: "We used Gaussian Processes and Bayesian Optimization to find good levels for one bot using a prior from another bot.",
        linkPaper: "https://arxiv.org/pdf/2005.07677.pdf",
        imgsrc: "/assets/paper_images/finding_game_levels.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2005.07677",
        linkPublication: "https://ieeexplore.ieee.org/document/9231548",
        linkCode: null,
    }

    // BRIL paper
    let brilPaper = {
        title: "Learning a Behavioral Repertoire from Demonstrations",
        content: (<p>We conditioned a StarCraft2 bot on strategies and optimized for the best strategy.  This image was made by <a href="https://njustesen.github.io/njustesen/" target="_blank" rel="noopener noreferrer">Niels Justesen</a>.</p>),
        linkPaper: "https://arxiv.org/abs/1907.03046",
        imgsrc: "/assets/paper_images/bril_paper_image.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/1907.03046",
        linkPublication: "https://ieeexplore.ieee.org/document/9231897",
        linkCode: "https://github.com/miguelgondu/sc2reaper",
    }

    // M.Sc thesis
    let mscThesis = {
        title: "Neural Networks that express multiple strategies in the video game StarCraft 2",
        content: (<p>My M.Sc. Thesis (Mathematics at UNAL-Med). During my first stay at ITU, I collaborated with <a href="https://njustesen.github.io/njustesen/" target="_blank" rel="noopener noreferrer">Niels</a>, <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian</a> and <a href="https://sites.google.com/a/unal.edu.co/dcabarc/home" target="_blank" rel="noopener noreferrer">Daniel Cabarcas</a> on applying dimensionality reduction to strategies, and creating bots for StarCraft 2.</p>),
        linkPaper: "https://repositorio.unal.edu.co/handle/unal/77095",
        imgsrc: "/assets/paper_images/msc_image.png",
        // pdfsrc: null,
        // linkArxiv: "https://arxiv.org/abs/1907.03046",
        linkPublication: "https://repositorio.unal.edu.co/handle/unal/77095",
        // linkCode: "https://github.com/miguelgondu/sc2reaper",
    }

    return ([
        findingLevelsPaper,
        brilPaper,
        mscThesis
    ])
}

export default () => (
    <Layout to_en_es="/acerca-de/">
        <h1>About Me</h1>
        <img src={profile_photo} class="profile_pic" alt=""></img>

        <p>I'm Miguel González Duque, a mathematician from the Universidad Nacional de Colombia. I'm mostly interested in probabilistic modeling, focusing on Bayesian data analysis and its applications.</p>
        
        <p>I'm currently a PhD student at the <a href="https://game.itu.dk/" target="_blank" rel="noopener noreferrer">Center for Computer Games Research</a> at the IT University of Copenhagen, under the supervision of Prof. <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian Risi</a>. We are developing systems that automatically adapt to users, and we are applying these ideas on videogames and automatic difficulty adjustment.</p>

        <p>Feel free to contact me at miguelgondu(at)gmail(dot)com.</p>

        <p>This blog was made using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>, and is inspired by <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog" target="_blank" rel="noopener noreferrer">the minimal blog starter by LekoArts</a>.</p>

        <h2>Some publications</h2>

        {allPapers().map((p) => {
            return (
                <Paper {...p}></Paper>
            )
        })}

    </Layout>
)
