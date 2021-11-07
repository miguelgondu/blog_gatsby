import React, { Component } from 'react'
import * as d3 from 'd3'
import { useD3 } from 'd3blackbox'

interface FigureProps {
  mean: number 
}

interface Point {
  x: number,
  y: number
}

interface State {
    mean: number,
    data: Array<Point>,
    figureWidth: number,
    figureHeight: number
}

function factorial(k: number) {
    // I hadn't manually implemented a factorial since 2013.
  let res = 1;
  for (let i = 1; i <= k; i++) {
      res *= i;
  }
  return res
}

function poissonPMF(k: number, mean: number) {
    return (
        Math.exp(-mean) * Math.pow(mean, k) / factorial(k)
    )
}

function getPoissonPoints(maxX: number, mean: number): Array<Point> {
    return d3.range(maxX).map((k) => ({x: k, y: poissonPMF(k, mean)}))
}


class StaticPlotWithAxes extends Component {
  state: State
  x: d3.ScaleLinear<number, number, never>;
  y: d3.ScaleLinear<number, number, never>;

  constructor(props: FigureProps) {
    super(props)
    this.state = {
        "mean": 15,
        "data": getPoissonPoints(25, 15),
        "figureWidth": 200,
        "figureHeight": 200
    }
    
    // Initializing the axes
    this.x = d3.scaleLinear()
        .range([ 45, this.state.figureWidth-10])
        .domain([0, Math.max(...this.state.data.map((d: Point) => d.x))])
    
    this.y = d3.scaleLinear()
        .range([this.state.figureHeight-45, 5])
        .domain([0, 0.22])
  }

  render() {
    let Circle = ({x, y}) => {
        return <circle key={`c2-${x}-${y}`} cx={this.x(x)} cy={this.y(y)} r={2} />
    }

    let Line = ({x, y}) => {
        let style = {
            stroke: "#04aa6d",
            strokeWidth: "3px"
        }
        return <line key={`l2-${x}-${y}`} x1={this.x(x)} y1={this.y(0)} x2={this.x(x)} y2={this.y(y)} style={style} />
    }

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

    return (
      <>
      <hr/>
        <div>
        <svg width={this.state.figureWidth} height={this.state.figureHeight}>
          {/* For each datapoint, render a line and then a circle. */}
          {this.state.data.map(
              (d: Point) => (
              <>
                <Line x={d.x} y={d.y} />
                <Circle x={d.x} y={d.y} />
              </>
              )
          )}
          {/* Add x and y axes */}
          <Axis x={40} y={0} axis={this.y} axisType="y"></Axis>
          <Axis x={0} y={this.state.figureHeight-40} axis={this.x} axisType="x"></Axis>
        </svg>
        </div>
      <hr/>
      </>
    )
  }
}

export default StaticPlotWithAxes;