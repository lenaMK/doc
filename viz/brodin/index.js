/*
Chronologie des données MONA : œuvres réalisées par des femmes
LenaMK, Maison MONA, CIN7008
*/

//dimensions du tissu
var largeur = 132
var hauteur = 45
//Ratio cm to px = 37.79
var ratio = 40

var margesLargeur = 1
var margeHaut = 4
var margeBas = 2
var hauteurLigneTemps = 4
var nbMaxHauteur

var artSymbol = "\u203B"

function preload() {
    importedObject = loadJSON("../data/data_chronologie.json")
}


function setup() { 
    colorMode(HSB, 360, 100, 100, 250);
    angleMode(DEGREES);

    createCanvas(largeur*ratio, hauteur*ratio); 

    data = Object.values(importedObject)

    //order by produced_at = from newest to oldest
    data.sort((a, b) => {
        return b.name - a.name;
    }).reverse() 
    nbMaxHauteur = hauteur-margeBas-hauteurLigneTemps-margeHaut
    console.log("max nbHauteur ", nbMaxHauteur)
    textAlign(CENTER, CENTER);
       

    noLoop()
    
} 



function draw() { 
      
    background(0, 0, 100)   
    //quadrillage largeur   
    for (var col= 0; col < largeur; col++){
        stroke(0, 0, 0, 25)
        var x = col*ratio
        line(x, 0, x, hauteur*ratio)
    }

    //quadrillage hauteur
    for (var lin= 0; lin < largeur; lin++){
        stroke(0, 0, 0, 25)
        var y = lin*ratio
        line(0, y, largeur*ratio, y)
        
    }

    stroke(0, 0, 0,80)
    textSize(12);  
    //placement données
    var axeTemp = margesLargeur*ratio
    for (var an = 0; an < data.length; an++){
 
        push()
            translate(axeTemp, hauteur*ratio-margeBas*ratio)
            text("|", 0, 0)

            rotate(-45)
            
            text(data[an].name, -30, 20)
        pop()
        
        var nbDessine = Number(data[an].countNonBinaires)+Number(data[an].countFemmes)+Number(data[an].countMixtes)+Number(data[an].countHommes)

        var posX = axeTemp
        var posY = hauteur*ratio-margeBas*ratio

        for(var art = 0; art < nbDessine; art++){

            posY -= ratio             
            if (posY < margeHaut*ratio){
                posX += 40
                axeTemp+=40 
                posY =hauteur*ratio-margeBas*ratio-40 
            }
            text(artSymbol, posX, posY)
        }
        
        
        if (data[an+1]){
            var diffAnneeSuivante = Number(data[an+1].name)-Number(data[an].name)
                
            if( diffAnneeSuivante > 1 )
                axeTemp += (diffAnneeSuivante*3)+40
            else 
                axeTemp+=40
        }
    }
        
};
