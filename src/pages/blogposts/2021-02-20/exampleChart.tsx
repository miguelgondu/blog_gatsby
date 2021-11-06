import React, { Component } from 'react'
import * as d3 from 'd3'
import { useD3 } from 'd3blackbox'

const proportion = 0.66

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
  figureWidth: number
  figureHeight: number
}

class PoissonPlot extends Component {
  myRef: React.RefObject<any>;
  data: Array<Point>;
  x: d3.ScaleLinear<number, number, never>;
  y: d3.ScaleLinear<number, number, never>;
  state: State;

  constructor(props: FigureProps) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.onResize = this.onResize.bind(this);
      
      // https://github.com/gatsbyjs/gatsby/issues/12427
      let defaultHeight
      let defaultWidth

      if (typeof window !== `undefined`) {
        defaultHeight = Math.min(window.innerHeight, 500)
        defaultWidth = Math.min(window.innerWidth, 500)
      }
      this.state = {
        "value": props.mean,
        "figureWidth": defaultWidth * proportion,
        "figureHeight": defaultHeight * proportion,
      }
      this.myRef = React.createRef();
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
      this.x = d3.scaleLinear()
                .range([ 45, this.state.figureWidth-10])
                .domain([0, Math.max(...this.data.map((d: Point) => d.x))])
    
      this.y = d3.scaleLinear()
                .range([this.state.figureHeight-45, 5])
                .domain([0, 0.22])
    }

    updateData() {
      this.data = this.getPoissonPoints(25, this.state.value);
    }

    onResize() {
      let defaultHeight
      let defaultWidth
      if (typeof window !== `undefined`) {
        defaultHeight = Math.min(window.innerHeight, 500)
        defaultWidth = Math.min(window.innerWidth, 500)
      }
      this.setState({ figureWidth: defaultWidth * proportion, figureHeight: defaultHeight * proportion , value: this.state.value })
    }

    componentDidMount() {
      window.addEventListener('resize', this.onResize, false);
      this.onResize()
      this.updateAxes()
    }
    
    componentDidUpdate() {
      this.updateAxes()
    }
  
  render() {
    console.log(this.state)

    // Because Gatsby needs to have something that works on Node.js
    // https://stackoverflow.com/a/59534680/3516175
    if (typeof window === `undefined`) {
        return(<></>);
    }

    this.updateData()

    const Axis = ({x, y, scale, axisType}) => {
      const fnName = axisType === 'left' ? 'axisLeft': 'axisBottom'
      const ref = useD3(element => d3.select(element).call(d3[fnName](scale)));
    
      return <g transform={`translate(${x}, ${y})`} ref={ref}></g>
    }

  
    let color = "#04aa6d";
    
    let style = {
      stroke: color,
      strokeWidth: "3px"
    }

    var linePath = d3.line().x(d => this.x(d.x))
                            .y(d => this.y(d.y))
                            .curve(d3.curveMonotoneX)(this.data);
    
    return (
      <div className="figure-container">
        <div className="state-indicator">Probability mass function of the Poisson distribution.</div>
        <div className="state-indicator">Mean: {this.state.value}</div>
        <div className="slider-container">
          <input className="slider" type="range" min={1} max={30} value={this.state.value} onChange={this.handleChange} />
        </div>
        <svg width={this.state.figureWidth} height={this.state.figureHeight}>
          {/* <path strokeWidth={3} fill="none" stroke={color} d={linePath}/> */}
          {this.data.map((d: Point) => (<line key={`line-${d.x}-${d.y}`} x1={this.x(d.x)} y1={this.y(0)} x2={this.x(d.x)} y2={this.y(d.y)} style={style} />))}
          {this.data.map((d: Point) => (<circle key={`circle-${d.x}-${d.y}`} cx={this.x(d.x)} cy={this.y(d.y)} r={2}></circle>))}
          <Axis x={40} y={0} scale={this.y} axisType='left'></Axis>
          <Axis x={0} y={this.state.figureHeight-40} scale={this.x} axisType='bottom'></Axis>
        </svg>
      </div>
    )
  }
}


export default PoissonPlot;
