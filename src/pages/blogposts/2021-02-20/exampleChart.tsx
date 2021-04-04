import React, { Component } from 'react'
import * as d3 from 'd3'
import { useD3 } from 'd3blackbox'

interface Point {
  x: number,
  y: number
}

class ScatterPlot extends Component {
  myRef;
  data;
  width;
  height;
  x;
  y;

  constructor(props) {
    super(props)
    this.width = this.props.width;
    this.height = this.props.height;
    this.data = this.getRandomData();
    this.x = d3.scaleLinear()
              .range([ 45, this.width-10])
              .domain([0, 1])
    
    this.y = d3.scaleLinear()
              .range([this.height-45, 5])
              .domain([0, 1])
    this.myRef = React.createRef();
  }

  getRandomData(): Array<Point> {
    return d3.range(20).map(() => ({x: Math.random(), y: Math.random()}))
  }

  componentDidMount() {
    // const Axis = ({x, y, scale, axisType}) => {
    //   const fnName = axisType === 'left' ? 'axisLeft': 'axisBottom'
    //   const ref = useD3(element => d3.select(element).call(d3[fnName](scale)));
    
    //   return <g transform={`translate(${x}, ${y})`} ref={ref}></g>
    // }
    
    // let accessToRef = d3.select(this.myRef.current);
    // let x = this.x
    // let y = this.y
    // accessToRef.selectAll()
    // .append("svg")
    // .attr("width", this.width)
    // .attr("height", this.height)
    // .append("g")
    // .data(this.data)
    // .enter()
    // .append("circle")
    // .attr("cx", function(d: Point) { return x(d.x) })
    // .attr("cy", function(d: Point) { return y(d.y) })
  }
  
  render() {
    const Axis = ({x, y, scale, axisType}) => {
      const fnName = axisType === 'left' ? 'axisLeft': 'axisBottom'
      const ref = useD3(element => d3.select(element).call(d3[fnName](scale)));
    
      return <g transform={`translate(${x}, ${y})`} ref={ref}></g>
    }
    
    return (
      <div>
        <svg width={this.width} height={this.height}>
          {this.data.map(d => (<circle key={`circle-${d.x}-${d.y}`} cx={this.x(d.x)} cy={this.y(d.y)} r={5}></circle>))}
          <Axis x={40} y={0} scale={this.y} axisType='left'></Axis>
          <Axis x={0} y={this.height-40} scale={this.x} axisType='bottom'></Axis>
        </svg>
      </div>
      // <div ref={this.myRef}></div>
    )
  }
}




// export default () => (
//   <div>
//     <svg width={width} height={height}>
//       {data.map(d => (<circle cx={x(d.x)} cy={y(d.y)} r={5}></circle>))}
//       <Axis x={40} y={0} scale={y} axisType='left'></Axis>
//       <Axis x={0} y={height-40} scale={x} axisType='bottom'></Axis>
//     </svg>
//   </div>
// )

export default ScatterPlot;