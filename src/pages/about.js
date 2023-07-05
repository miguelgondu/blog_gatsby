import React from "react"
import Layout from "../components/layout"
import Paper from "../components/paper"
import profile_photo from "../../static/profile_photo.jpg"

function allPapers() {
    // let paperTemplate = {
    //     title: null,
    //     authors: null,
    //     content: null,
    //     linkPaper: null,
    //     imgsrc: null,
    //     pdfsrc: null,
    //     linkArxiv: null,
    //     linkPublication: null,
    //     linkCode: null,
    // }

    // MarioGPT paper
    let marioGPTPaper = {
        title: "MarioGPT: Open-ended Text2Level Generation through Large Language Models",
        authors: (<p>Shyam Sudhakaran, <b>Miguel González-Duque</b>, Claire Glanois, Matthias Freiberger, Elias Najarro, Sebastian Risi</p>),
        content: (<p><a href="https://shyamsn97.github.io/" target="_blank" rel="noopener noreferrer">Shyam</a> fine-tuned GPT2 with a few hand-labeled examples of Super Mario Bros levels. Matthias and I analysed how different its paths were from an A-star agent's.</p>),
        conference: null,
        linkPaper: "https://arxiv.org/abs/2302.05981",
        imgsrc: "/assets/paper_images/mario_gpt_path_comparison.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2302.05981",
        linkPublication: null,
        linkCode: null,
    }
    
    // GPHLVM paper
    let gphlvmPaper = {
        title: "Bringing robotics taxonomies to continuous domains via GPLVM on hyperbolic manifolds",
        authors: (<p>Noémie Jaquier, Leonel Rozo, <b>Miguel González-Duque</b>, Viacheslav Borovitskiy, Tamim Asfour</p>),
        content: (<p>We embed humanoid poses in hyperbolic space, and have the latent distances match a robotics taxonomy. Main work done by <a href="https://njaquier.ch/" target="_blank" rel="noopener noreferrer">Noémie Jaquier</a>.</p>),
        conference: null,
        linkPaper: "https://arxiv.org/abs/2210.01672",
        imgsrc: "/assets/paper_images/gphlvm_added_poses.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2210.01672",
        linkPublication: null,
        linkCode: null,
    }
    
    // Mario plays on a manifold paper
    let marioPaper = {
        title: "Mario Plays on a Manifold",
        authors: (<p><b>Miguel González-Duque</b>, Rasmus Berg Palm, Søren Hauberg, Sebastian Risi.</p>),
        content: (<p>We train 2-dimensional VAEs on Mario and Zelda and define a graph in latent space only where playable levels live. This lets us sample and interpolate safely.</p>),
        conference: "Presented at CoG 2022",
        linkPaper: "https://arxiv.org/abs/2206.00106",
        imgsrc: "/assets/paper_images/mario_plays.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2206.00106",
        linkPublication: "https://ieeexplore.ieee.org/document/9893612",
        linkCode: null,
    }
    
    // VNCA paper
    let vncaPaper = {
        title: "Variational Neural Cellular Automata",
        authors: (<p>Rasmus Berg Palm, <b>Miguel González-Duque</b>, Shyam Sudhakaran, Sebastian Risi.</p>),
        content: (<p>We used an NCA as the decoder of a Variational Autoencoder. Main work done by <a href="https://rasmusbergpalm.github.io/" target="_blank" rel="noopener noreferrer">Rasmus Berg Palm</a>.</p>),
        conference: "Presented at ICLR 2022",
        linkPaper: "https://arxiv.org/abs/2201.12360",
        imgsrc: "/assets/paper_images/vnca_paper.gif",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2201.12360",
        linkPublication: "https://openreview.net/forum?id=7fFO4cMBx_9",
        linkCode: "https://github.com/rasmusbergpalm/vnca",
    }
    
    // PBIG paper
    let pullingBackInfoGeomPaper = {
        title: "Pulling back information geometry",
        authors: (<p>Georgios Arvanitidis, <b>Miguel González-Duque</b>, Alison Pouplin, Dimitrios Kalatzis, Søren Hauberg</p>),
        content: (<p>We induced geometries in latent space by pulling back the Fisher-Rao metric.</p>),
        conference: "Presented at AISTATS 2022",
        linkPaper: "https://proceedings.mlr.press/v151/arvanitidis22b.html",
        imgsrc: "/assets/paper_images/pulling_back_info_geom.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2106.05367",
        linkPublication: "https://proceedings.mlr.press/v151/arvanitidis22b.html",
        linkCode: null,
    }
    
    // Fast Game Content Adaption paper
    let fastContentAdaptionPaper = {
        title: "Fast Game Content Adaptation Through Bayesian-based Player Modelling",
        authors: (<p><b>Miguel González-Duque</b>, Rasmus Berg Palm, Sebastian Risi.</p>),
        content: "We applied a Bayesian Optimization approach to dynamically adjusting difficulty.",
        conference: "Presented at CoG 2021",
        linkPaper: "https://arxiv.org/abs/2105.08484",
        imgsrc: "/assets/paper_images/sudoku_paper_img.jpg",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2105.08484",
        linkPublication: "https://ieeexplore.ieee.org/document/9619018",
        linkCode: "https://github.com/miguelgondu/bayesian_roguelike",
    }
    
    // Finding Game Levels paper
    let findingLevelsPaper = {
        title: "Finding Game Levels with the Right Difficulty in a Few Trials through Intelligent Trial-and-Error",
        authors: (<p><b>Miguel González-Duque</b>, Rasmus Berg Palm, David Ha, Sebastian Risi.</p>),
        content: "We used Gaussian Processes and Bayesian Optimization to find good levels for one bot using a prior from another bot.",
        conference: "Presented at CoG 2020",
        linkPaper: "https://arxiv.org/abs/2005.07677",
        imgsrc: "/assets/paper_images/finding_game_levels.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/2005.07677",
        linkPublication: "https://ieeexplore.ieee.org/document/9231548",
        linkCode: "https://github.com/miguelgondu/finding_game_levels_paper",
    }
    
    // BRIL paper
    let brilPaper = {
        title: "Learning a Behavioral Repertoire from Demonstrations",
        authors: (<p>Niels Justesen, <b>Miguel González-Duque</b>, Daniel Cabarcas Jaramillo, Jean-Baptiste Mouret, Sebastian Risi</p>),
        content: (<p>We conditioned a StarCraft2 bot on strategies and optimized for the best strategy.  This image was made by <a href="https://njustesen.github.io/njustesen/" target="_blank" rel="noopener noreferrer">Niels Justesen</a>.</p>),
        conference: "Presented at CoG 2020",
        linkPaper: "https://arxiv.org/abs/1907.03046",
        imgsrc: "/assets/paper_images/bril_paper_image.png",
        pdfsrc: null,
        linkArxiv: "https://arxiv.org/abs/1907.03046",
        linkPublication: "https://ieeexplore.ieee.org/document/9231897",
        // linkCode: "https://github.com/miguelgondu/sc2reaper",
    }
    
    // M.Sc thesis
    let mscThesis = {
        title: "Neural Networks that express multiple strategies in the video game StarCraft 2",
        authors: (<p><b>Miguel González-Duque</b>.</p>),
        content: (<p>My M.Sc. Thesis (Mathematics at UNAL-Med). During my first stay at ITU, I collaborated with <a href="https://njustesen.github.io/njustesen/" target="_blank" rel="noopener noreferrer">Niels</a>, <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian</a> and <a href="https://sites.google.com/a/unal.edu.co/dcabarc/home" target="_blank" rel="noopener noreferrer">Daniel Cabarcas</a> on applying dimensionality reduction to strategies, and creating bots for StarCraft 2.</p>),
        linkPaper: "https://repositorio.unal.edu.co/handle/unal/77095",
        imgsrc: "/assets/paper_images/msc_image.png",
        linkPublication: "https://repositorio.unal.edu.co/handle/unal/77095",
    }

    return ([
        marioGPTPaper,
        gphlvmPaper,
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

        <p>I'm Miguel González Duque, a mathematician from the Universidad Nacional de Colombia, and a PhD in Machine Learning from the IT University of Copenhagen (supervised by <a href="http://sebastianrisi.com/" target="_blank" rel="noopener noreferrer">Sebastian Risi</a> and <a href="http://www2.compute.dtu.dk/~sohau/" target="_blank" rel="noopener noreferrer">Søren Hauberg</a>).</p>
            
        <p>I'm mostly interested in applications of probabilistic modeling and geometry. You can find some of my projects on <a href="https://github.com/miguelgondu" target="_blank" rel="noopener noreferrer">my GitHub profile</a>. Some of these <a href="https://miguelgondu.com/projects" target="_blank" rel="noopener noreferrer">projects</a> are also available in the link above. Some highlights:</p>

        <ul>
            <li><a href="https://miguelgondu.com/assets/phdthesis.pdf" target="_blank" rel="noopener noreferrer">My PhD thesis</a>, which applied Bayesian Optimization and generative modeling to video game content adaption.</li>
            <li><a href="https://github.com/miguelgondu/bayesian_dungeoncrawler" target="_blank" rel="noopener noreferrer">A web game</a> which uses Bayesian Optimization to adapt its game content to users.</li>
            <li><a href="https://github.com/juanrloaiza/latinamerican-philosophy-mining" target="_blank" rel="noopener noreferrer">Topic modeling</a> of Colombia's longest running philosophy journal "Ideas y Valores"</li>
        </ul>

        <p>Feel free to contact me at miguelgondu(at)gmail(dot)com.</p>

        <h2>Experience</h2>

        <ul>
            <li>PhD Fellow at the <a href="https://game.itu.dk/groups/creativeai/" target="_blank" rel="noopener noreferrer">Creative AI Lab</a>, IT University of Copenhagen (2019-2023).</li>
            <li>PhD Sabbatical at the <i>Bosch Center for AI</i>, working with <a href="https://leonelrozo.weebly.com/" target="_blank" rel="noopener noreferrer">Leonel Rozo</a> on using Gaussian Processes for representation and regression of robotic data (6 months in 2022).</li>
        </ul>

        <p>For more details on my professional experience, <a href="https://www.linkedin.com/in/miguelgondu/" target="_blank" rel="noopener noreferrer">check my LinkedIn</a>.</p>


        <h2>Some publications</h2>

        <p>For a complete list of publications, check <a href="https://scholar.google.com/citations?user=eje0FAYAAAAJ" target="_blank" rel="noopener noreferrer">my Google Scholar profile</a>.</p>

        {allPapers().map((p) => {
            return (
                <Paper {...p}></Paper>
            )
        })}

    </Layout>
)

export default AboutPage