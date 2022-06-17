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

    // Mario plays on a manifold paper
    let marioPaper = {
        title: "Mario Plays on a Manifold",
        content: (<p>We train 2-dimensional VAEs on Mario and Zelda and define a graph in latent space only where playable levels live. This lets us sample and interpolate safely.</p>),
        linkPaper: "https://arxiv.org/pdf/2206.00106.pdf",
        imgsrc: "/assets/paper_images/mario_plays.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2206.00106",
        linkPublication: null,
        linkCode: null,
    }
    
    // VNCA paper
    let vncaPaper = {
        title: "Variational Neural Cellular Automata",
        content: (<p>We used an NCA as the decoder of a Variational Autoencoder. (Main work done by <a href="https://rasmusbergpalm.github.io/" target="_blank" rel="noopener noreferrer">Rasmus Berg Palm</a>; I only played a secondary role.)</p>),
        linkPaper: "https://arxiv.org/pdf/2201.12360.pdf",
        imgsrc: "/assets/paper_images/vnca_paper.gif",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2201.12360",
        linkPublication: null,
        linkCode: "https://github.com/rasmusbergpalm/vnca",
    }
    
    // PBIG paper
    let pullingBackInfoGeomPaper = {
        title: "Pulling back information geometry",
        content: "We induced geometries in latent space by pulling back the Fisher-Rao metric.",
        linkPaper: "https://arxiv.org/pdf/2106.05367.pdf",
        imgsrc: "/assets/paper_images/pulling_back_info_geom.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2106.05367",
        linkPublication: null,
        linkCode: null,
    }

    // Fast Game Content Adaption paper
    let fastContentAdaptionPaper = {
        title: "Fast Game Content Adaptation Through Bayesian-based Player Modelling",
        content: "We applied a Bayesian Optimization approach to dynamically adjusting difficulty.",
        linkPaper: "https://arxiv.org/pdf/2105.08484.pdf",
        imgsrc: "/assets/paper_images/sudoku_paper_img.jpg",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2105.08484",
        linkPublication: "https://ieeexplore.ieee.org/document/9619018",
        linkCode: "https://github.com/miguelgondu/bayesian_roguelike",
    }

    // Finding Game Levels paper
    let findingLevelsPaper = {
        title: "Finding Game Levels with the Right Difficulty in a Few Trials through Intelligent Trial-and-Error",
        content: "We used Gaussian Processes and Bayesian Optimization to find good levels for one bot using a prior from another bot.",
        linkPaper: "https://arxiv.org/pdf/2005.07677.pdf",
        imgsrc: "/assets/paper_images/finding_game_levels.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2005.07677",
        linkPublication: "https://ieeexplore.ieee.org/document/9231548",
        linkCode: "https://github.com/miguelgondu/finding_game_levels_paper",
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
        marioPaper,
        vncaPaper,
        pullingBackInfoGeomPaper,
        fastContentAdaptionPaper,
        findingLevelsPaper,
        brilPaper,
        mscThesis
    ])
}

const AboutPage = () => (
    <Layout to_en_es="/acerca-de/">
        <h1>About Me</h1>
        <img src={profile_photo} class="profile_pic" alt=""></img>

        <p>I'm Miguel González Duque, a mathematician from the Universidad Nacional de Colombia. I'm mostly interested in the intersection between probabilistic modeling and geometry.</p>
        
        <p>I'm currently a PhD student at the <a href="https://game.itu.dk/groups/creativeai/" target="_blank" rel="noopener noreferrer">Creative AI Lab</a> at the IT University of Copenhagen, under the supervision of Prof. <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian Risi</a>. We are developing systems that create and adapt game content to users. I have also started collaborating with <a href="http://www2.compute.dtu.dk/~sohau/" target="_blank" rel="noopener noreferrer">Søren Hauberg</a>'s lab at DTU, working on generative modelling and differential geometry. I'm also currently doing a PhD Sabbatical at the Bosch Center for AI working with <a href="https://leonelrozo.weebly.com/" target="_blank" rel="noopener noreferrer">Leonel Rozo</a>.</p>

        <p>Feel free to contact me at miguelgondu(at)gmail(dot)com.</p>

        <h2>Some publications</h2>

        {allPapers().map((p) => {
            return (
                <Paper {...p}></Paper>
            )
        })}

    </Layout>
)

export default AboutPage