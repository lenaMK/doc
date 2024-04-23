/*
Cartographie des données MONA : œuvres réalisées par des femmes
LenaMK, Maison MONA, HAR7005
*/

var margin = {top: 0, right: 0, bottom: 0, left: 0},
width = window.innerWidth
height = window.innerHeight

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


function map (geobaseMTL, outer, pre1982){

    proj.center([-73.5878, 45.5088]) // Center on Montreal
        .scale(1000)
        .fitSize([width, height], geobaseMTL);

    path.projection(proj);

    container.selectAll("path")
        .data(outer.features)
        .join('path')
        .attr("d", d => path(d)) 

//layer réseau cyclable MTL
    container.selectAll("path")
        .data(geobaseMTL.features)
        .enter().append("path")
        .attr("d", d => path(d))
        .attr('stroke', 'black')
        .attr('fill', 'none')    
/*
//layer contour île
*/


var moreDots = container.selectAll("circle");
    
moreDots
    .data(pre1982)
    .enter()
    .append("circle")
        .attr('class', '50-artwork-dot')
        .attr("cx", d => proj([d.location.lng, d.location.lat])[0])
        .attr("cy", d => proj([d.location.lng, d.location.lat])[1])
        .attr("id", d => d.id)
        .attr("r", "3px")
        .attr("fill", 'black')
        .attr("opacity", 0.5)    



    var dots = container.selectAll("circles");

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
    d3.json('../data/reseau_cyclable.geojson'),
    d3.json('../data/Mtl-outer-simplified.json'),
    d3.json('../data/femx.json')
  ]).then(([geobasemtl, outer, femx]) => {

    //changer le compte
    var count = 28

    femx.sort((a, b) => {
        return a.produced_at - b.produced_at;
    }).splice(0,3)

    d3.select("#titre").text(`${count} and counting`)

    //augmentation progressive de i pour la séance d'acuponcture de la carte
    var data = []
    for (var i = 0; i < count; i++){
        console.log(i + ": " +femx[i].title.fr + ", " + femx[i].artists[0].name + ", " + femx[i].produced_at)
        console.log(femx[i])
        data.push(femx[i])
    } 
       
    map(geobasemtl, outer, data);

  }).catch(function(error) {

    console.log(error);
  
});


