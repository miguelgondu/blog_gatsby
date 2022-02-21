import React, { Component, CSSProperties } from 'react'
import * as d3 from 'd3'
import { UnivariateGaussian } from './univariateGaussian'
import { useD3 } from 'd3blackbox'

interface State {
    variance: number
}

interface Range {
    min: number
    max: number
}

const gaussian_pdf = (x: number, mu: number, sigma: number) => {
    let exp_ = Math.exp(-(1/(2*Math.pow(sigma, 2))) * Math.pow(x - mu, 2))
    return (
        (1 / Math.sqrt(2 * Math.PI)) * (1/sigma) * exp_
    )
}


class InteractiveUnivariateGaussian extends Component {
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
            "variance": 1.0
        }
        
        this.figureWidth = 300
        this.figureHeight = 300
        this.rangeX = {
            min: -2.5,
            max: 2.5
        }
        this.rangeY = {
            min: 0.0,
            max: 0.55
        }
        
        this.x = d3.scaleLinear()
                   .range([45, this.figureWidth-10])
                   .domain([this.rangeX.min, this.rangeX.max])
        
        this.y = d3.scaleLinear()
                   .range([this.figureHeight - 45, 5])
                   .domain([this.rangeY.min, this.rangeY.max])

  }

    componentDidMount(): void {}

    handleChange(event) {
        this.setState(
          {variance: event.target.value}
        )
    }

    render() {
        let Axis = ({x, y, axis, axisType}) => {
            let ref;
            if (axisType == 'y') {
              // Render y axis
              ref = useD3(
                element => d3.select(element).call(d3.axisLeft(axis))
              )
            }
            else {
              ref = useD3(
                // Render x axis
                element => d3.select(element).call(d3.axisBottom(axis))
              )
            }
          
            return <g transform={`translate(${x}, ${y})`} ref={ref}></g>
        }


        let figContainerStyle: CSSProperties = {
            textAlign: "center"
        }

        let textContainerStyle: CSSProperties = {
            textAlign: "center",
            lineHeight: 1.6,
            fontSize: "xx-large",
            paddingBottom: "15px"
          }
        
        let gaussian_pdf_wrapper = (x) => {
            return gaussian_pdf(x, 0.0, Math.sqrt(this.state.variance))
        }
        
        let nSteps = 100
        let delta = (this.rangeX.max-this.rangeX.min)/(nSteps-1)
        
        let xs = d3.range(this.rangeX.min, this.rangeX.max+delta, delta).slice(0, nSteps)
    
    
        var pointsForPolystring = ""
        xs.forEach(xi => {
            pointsForPolystring += ` ${this.x(xi)},${this.y(gaussian_pdf_wrapper(xi))}`
        });
        
        return (
            <>
                <div style={figContainerStyle}>
                    <div style={textContainerStyle}>
                        Normal with variance {this.state.variance}
                    </div>
                    <div style={textContainerStyle}>
                        <input className="slider" type="range" min={0.01} max={3} step={0.05} value={this.state.variance} onChange={this.handleChange.bind(this)} style={{width: "300px"}}/>
                    </div>

                    <svg width={this.figureWidth} height={this.figureHeight}>
                        <g>
                            <polyline points={pointsForPolystring} fill="none" stroke="black" ></polyline>
                        </g>
                    <Axis x={40} y={0} axis={this.y} axisType="y"></Axis>
                    <Axis x={0} y={this.figureHeight - 40} axis={this.x} axisType="x"></Axis>
                    </svg>
                </div>
            </>
        )
    }

}

export default InteractiveUnivariateGaussian;