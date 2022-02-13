import React, { Component, CSSProperties } from 'react'
import * as d3 from 'd3'
import { UnivariateGaussian } from './univariateGaussian'

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

class CircleAndLine extends Component {
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
        
        this.computeLine.bind(this)
  }

    componentDidMount(): void {}

    computeLine (p: Point) {
        // Returns the intersections with the ends
        // of the figure to know how to draw the line.
    
        // Derivative
        let m: number = this.computeDerivative(p)

        // console.log(m)
    
        // Now, the line endpoints.
        let p0: Point = {
            x: this.rangeX.min,
            y: m * (this.rangeX.min - p.x) + p.y
        }
        let p1: Point = {
            x: this.rangeX.max,
            y: m * (this.rangeX.max - p.x) + p.y
        }
    
        return ({p0, p1})
    }

    computeDerivative (p: Point) {
        // returns the slope of the tangent line at p
        // Derivative
        if (p.x === undefined || p.y === undefined) {
            p.x = -Math.sqrt(2)/2
            p.y = Math.sqrt(2)/2
        }
        // console.log(p)
        let m: number = Math.sign(p.y) * (1/2) * (1/Math.sqrt(1.0 - Math.pow(p.x, 2))) * (-2 * p.x)

        return m
    }

    render() {
        let Circle = () => {
            return <circle key={`main-circle`} cx={this.x(0)} cy={this.y(0)} r={this.x(1) - this.x(0)} stroke="black" fill="none"></circle>
        }

        let Mean = () => {
            return <circle key={`mean-dot`}
                           cx={this.x(this.state.pointX)}
                           cy={this.y(this.state.pointY)}
                           r={5} stroke="black"
                           fill="black"/>
        }

        let p = {x: this.pointX, y: this.pointY}
        let Line = () => {
            let {p0, p1} = this.computeLine(p)
            let x1 = this.x(p0.x)
            let x2 = this.x(p1.x)
            let y1 = this.y(p0.y)
            let y2 = this.y(p1.y)
            return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black"/>
        }

        let figContainerStyle: CSSProperties = {
            textAlign: "center"
        }
        let pointsForPolystring = UnivariateGaussian(0.0, 0.5, this.figureWidth, this.rangeX, this.rangeY)
        // console.log(pointsForPolystring)

        let rotationAngle = Math.atan(this.computeDerivative(p)) * 180 / Math.PI
        let smallPadding = 5
        return (
            <>
                <div style={figContainerStyle}>
                    <svg width={this.figureWidth} height={this.figureHeight}>
                        <Circle />
                        <Line />
                        <Mean />
                        <g transform={`translate(${this.x(this.state.pointX) - this.x(0) - smallPadding}, ${this.y(this.state.pointY) - this.y(0) - smallPadding}) rotate(${-rotationAngle}, ${this.x(0)}, ${this.y(0)})`}>
                            <polyline points={pointsForPolystring} fill="none" stroke="black" ></polyline>
                        </g>
                    </svg>
                </div>
            </>
        )
    }

}

export default CircleAndLine;