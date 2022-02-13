import * as d3 from 'd3'

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

const UnivariateGaussian = (mu: number, sigma: number, figWidth: number, rangeX: Range, rangeY: Range) => {
    // Returns a polyline string with all the points
    // Hopefully colored in a nice way.
    let x = d3.scaleLinear()
              .range([0, figWidth])
              .domain([rangeX.min, rangeX.max])
    let y = d3.scaleLinear()
              .range([figWidth, 0])
              .domain([rangeY.min, rangeY.max])

    let gaussian_pdf_wrapper = (x) => {
        return gaussian_pdf(x, mu, sigma)
    }
    
    let nSteps = 100
    let delta = (rangeX.max-rangeX.min)/(nSteps-1)
    
    let xs = d3.range(rangeX.min, rangeX.max+delta, delta).slice(0, nSteps)


    var polylineString = ""
    xs.forEach(xi => {
        polylineString += ` ${x(xi)},${y(gaussian_pdf_wrapper(xi))}`
    });

    return polylineString
}

export {UnivariateGaussian};