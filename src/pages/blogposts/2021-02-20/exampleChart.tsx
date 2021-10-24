import React, { Component } from 'react'
import * as d3 from 'd3'
import { useD3 } from 'd3blackbox'

function sampleFromPoisson(mean: number) {
  let L = Math.exp(-mean);
  let p = 1.0;
  let k = 0;
  
  do {
      k++;
      p *= Math.random();
  } while (p > L);
  
  k - 1;
  
  return k;
}

function factorial(k: number) {
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

interface Point {
  x: number,
  y: number
}

interface FigureProps {
  width: number,
  height: number,
  mean: number 
}

interface State {
  value: number
}

class PoissonPlot extends Component {
  myRef: React.RefObject<any>;
  data: Array<Point>;
  width: number;
  height: number;
  x: d3.ScaleLinear<number, number, never>;
  y: d3.ScaleLinear<number, number, never>;
  state: State;

  constructor(props: FigureProps) {
      super(props)
      this.width = props.width;
      this.height = props.height;
      this.state = {
        "value": 15.0
      }
      this.myRef = React.createRef();
      this.handleChange = this.handleChange.bind(this);
      this.updateAxes();
    }

    getPoissonPoints(maxX: number, mean: number): Array<Point> {
      return d3.range(maxX).map((k) => ({x: k, y: poissonPMF(k, mean)}))
    }

    handleChange(event) {
      this.setState({"value": event.target.value})
    }

    updateAxes() {
      this.data = this.getPoissonPoints(25, this.state.value);
      console.log(this.data)
      this.x = d3.scaleLinear()
                .range([ 45, this.width-10])
                .domain([0, Math.max(...this.data.map((d: Point) => d.x))])
    
      this.y = d3.scaleLinear()
                .range([this.height-45, 5])
                .domain([0, 0.29])
    }

    componentDidUpdate() {
      this.updateAxes()
    }
  
  render() {
    const Axis = ({x, y, scale, axisType}) => {
      const fnName = axisType === 'left' ? 'axisLeft': 'axisBottom'
      const ref = useD3(element => d3.select(element).call(d3[fnName](scale)));
    
      return <g transform={`translate(${x}, ${y})`} ref={ref}></g>
    }

    var linePath = d3.line().x(d => this.x(d.x))
                            .y(d => this.y(d.y))
                            .curve(d3.curveMonotoneX)(this.data);
    
    let color = "red";
    
    return (
      <div className="figure-container">
        <div>Current lambda: {this.state.value}</div>
        <input type="range" min={1} max={30} value={this.state.value} onChange={this.handleChange} />
        <svg width="100%" height="100%">
          <path strokeWidth={3} fill="none" stroke={color} d={linePath}/>
          {this.data.map((d: Point) => (<circle key={`circle-${d.x}-${d.y}`} cx={this.x(d.x)} cy={this.y(d.y)} r={2}></circle>))}
          <Axis x={40} y={0} scale={this.y} axisType='left'></Axis>
          <Axis x={0} y={this.height-40} scale={this.x} axisType='bottom'></Axis>
        </svg>
      </div>
    )
  }
}


export default PoissonPlot;
