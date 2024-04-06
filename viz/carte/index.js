/*
Cartographie des données MONA : œuvres réalisées par des femmes
LenaMK, Maison MONA, HAR7005
*/

var margin = {top: 20, right: 30, bottom: 30, left: 80},
width = 1500 - margin.left - margin.right,
height = 900 - margin.top - margin.bottom;

const svgCarte = d3.select("#carte")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom);
const container = svgCarte.append('g')

//geo
var proj = d3.geoConicConformal();
const path = d3.geoPath();

//couleurs des points
const color = d3.scaleOrdinal(["art", "lieu", "patrimoine", "autre"], ["#FAE800", "#612B8D", "#FE7E61", "#010202"]) 

//zone d'information associée à la souris
const tooltip = d3.select("body").append("div")
.attr("class", "tooltip")
.style("position", "absolute")
.style("visibility", "hidden")


function showToolTip (text, coords){
    d3.select(".tooltip")
      .text(text)
      .style("top", coords[1] + "px")
      .style("left", coords[0] + "px")
      .style("visibility", "visible");
}


function map (geobaseMTL, pre1982, top50){

    proj.center([-73.5878, 45.5088]) // Center on Montreal
        .scale(1000)
        .fitSize([width, height], geobaseMTL);

    path.projection(proj);


//layer réseau routier MTL
    container.selectAll("path")
        .data(geobaseMTL.features)
        .enter().append("path")
        .attr("d", d => path(d))
        .attr('stroke', 'lightgrey')
        .attr('fill', 'none')    

    var dots = container.selectAll("circle");

    dots
        .data(pre1982)
        .enter()
        .append("circle")
            .attr('class', 'artwork-dot')
            .attr("cx", d => proj([d.location.lng, d.location.lat])[0])
            .attr("cy", d => proj([d.location.lng, d.location.lat])[1])
            .attr("id", d => d.id)
            .attr("r", "1px")
            .attr("fill", 'black')
            .attr("opacity", 1)    

    var moreDots = container.selectAll("circle");

    moreDots
        .data(top50)
        .enter()
        .append("circle")
            .attr('class', '50-artwork-dot')
            .attr("cx", d => proj([d.location.lng, d.location.lat])[0])
            .attr("cy", d => proj([d.location.lng, d.location.lat])[1])
            .attr("id", d => d.id)
            .attr("r", "1px")
            .attr("fill", 'black')
            .attr("opacity", 0.5)    


//zoom sur l'image
    svgCarte.call(
        d3.zoom().on(
            "zoom", 
            () => {
            container.attr('transform', d3.event.transform)
            }
        )
    )    
    return container.node();
}




Promise.all([
    d3.json('../data/MTLgeobase.json'),
    d3.json('../data/pre1982femx.json'),
    d3.json('../data/top50femx.json'),
  ]).then(([geobasemtl, pre1982, top50]) => {
    
    map(geobasemtl, pre1982, top50);

  }).catch(function(error) {
    console.log(error);
  });


