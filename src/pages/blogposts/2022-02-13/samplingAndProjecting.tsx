import React, { Component, CSSProperties, useState } from 'react'
import * as d3 from 'd3'

interface State {
    pointX: number
    pointY: number
}

interface Range {
    min: number
    max: number
}

interface Point {
    x: number
    y: number
}

const erf = (x: number) => {
    // Computes an approximation of the
    // error function using Abramowitz and Stegun's.
    let a1 = 0.278393;
    let a2 = 0.230389;
    let a3 = 0.000972;
    let a4 = 0.078108;

    if (x >= 0) {
        let denominator = (1 + a1 * x + a2 * Math.pow(x, 2) + a3 * Math.pow(x, 3) + a4 * Math.pow(x, 4))
        denominator = Math.pow(denominator, 4)
        
        return 1 - (1 / denominator)
    }
    else {
        return - erf(-x)
    }
}

// Sampling with Box-Müller transform
const sampleUnitNormal = () => {
    let [u, v] = [0.0, 0.0]
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

const sampleNormal = (mu: number, sigma: number) => {
    return mu + sigma * sampleUnitNormal()
}

class SampleAndProjectPlot extends Component {
    pointX: number
    pointY: number
    figureWidth: number
    figureHeight: number
    x: d3.ScaleLinear<number, number, never>;
    y: d3.ScaleLinear<number, number, never>;
    state: State
    rangeX: Range
    rangeY: Range

    constructor(props) {
        super(props)
        this.state = {
            "pointX": -Math.sqrt(2)/2,
            "pointY": Math.sqrt(2)/2
        }
        
        this.figureWidth = 300
        this.figureHeight = 300
        this.rangeX = {
            min: -2.5,
            max: 2.5
        }
        this.rangeY = {
            min: -2.5,
            max: 2.5
        }
        
        this.x = d3.scaleLinear()
        .range([0, this.figureWidth])
        .domain([this.rangeX.min, this.rangeX.max])
        
        this.y = d3.scaleLinear()
        .range([this.figureHeight, 0])
        .domain([this.rangeY.min, this.rangeY.max])
    }

    componentDidMount(): void {}

    sample (p: Point) {
        // Samples some bivariate Gaussian around p.
        let xs = [];
        let ys = [];
        for (let i = 0; i < 15; i++) {
            xs.push(sampleNormal(p.x, 1.0))
            ys.push(sampleNormal(p.y, 1.0))
        }

        let points = xs.map((x, i) => {return [x, ys[i]]})

        return points
    }

    render () {
        let Circle = () => {
            return <circle key={`main-circle-2`} cx={this.x(0)} cy={this.y(0)} r={this.x(1) - this.x(0)} stroke="black" fill="none"></circle>
        }

        let Mean = () => {
            return <circle key={`mean-dot-2`}
                           cx={this.x(this.state.pointX)}
                           cy={this.y(this.state.pointY)}
                           r={5} stroke="black"
                           fill="black"/>
        }

        let figContainerStyle: CSSProperties = {
            textAlign: "center"
        }

        return (<>
            <div style={figContainerStyle}>
                <svg width={this.figureWidth} height={this.figureHeight}>
                    <Circle />
                    <Mean />
                </svg>
            </div>
        </>)
    }
}

export default SampleAndProjectPlot;
