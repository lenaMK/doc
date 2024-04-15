/*
Chronologie des données MONA : œuvres réalisées par des femmes
LenaMK, Maison MONA, CIN7008
*/

//dimensions du tissu
var largeur = 132
var hauteur = 48
//Ratio cm to px = 37.79
var ratio = 40

var selection

var margesLargeur = 3
var margeHaut = 5
var margeBas = 5
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

    selection = []
    
    for (var an = 0; an < data.length; an++){

        var nbDessine = Number(data[an].countNonBinaires)+Number(data[an].countFemmes)+Number(data[an].countMixtes)+Number(data[an].countHommes)

        if (nbDessine != 0){ //pas d'annés sans œuvres qui font partie de la sélection
            selection.push(data[an])
        }

    }

    nbMaxHauteur = hauteur-margeBas-hauteurLigneTemps-margeHaut
    console.log("max nbHauteur ", nbMaxHauteur)
    
       

    noLoop()
    
} 



function draw() { 
      
    background(0, 0, 100)   
    //quadrillage largeur   
    for (var col= 0; col <= largeur; col++){
        stroke(0, 0, 0, 25)
        var x = col*ratio
        line(x, 0, x, hauteur*ratio)
    }

    //quadrillage hauteur
    for (var lin= 0; lin <= largeur; lin++){
        stroke(0, 0, 0, 25)
        var y = lin*ratio
        line(0, y, largeur*ratio, y)
        
    }

    
     
    //placement données
    var axeTemp = margesLargeur*ratio
    for (var an = 0; an < selection.length-1; an++){
        stroke(0, 0, 0, 100)
        fill(0, 0, 0, 100)
        textSize(14); 
        push()
            translate(axeTemp, hauteur*ratio-margeBas*ratio)
            text("|", 0, 0)

            rotate(-45)     
            text(selection[an].name, -30, 20)
            rotate(45)
            textAlign(LEFT);
            text(`${selection[an].countHommes} *`, -25, 80)
            text(`${selection[an].countMixtes} M`, -25, 110)
            text(`${selection[an].countFemmes} ${artSymbol}`, -25, 140)
            text(`${selection[an].countNonBinaires} NB`, -25, 170)
        pop()
        textAlign(CENTER, CENTER);
        var nbDessine = Number(selection[an].countNonBinaires)+Number(selection[an].countFemmes)+Number(selection[an].countMixtes)+Number(selection[an].countHommes)

        var posX = axeTemp
        var posY = hauteur*ratio-margeBas*ratio
        textSize(20); 
        
        for(var art = 0; art < nbDessine; art++){

            posY -= ratio             
            if (posY < margeHaut*ratio){
                posX += 40
                axeTemp+=40 
                posY =hauteur*ratio-margeBas*ratio-40 
            }

            if (art < Number(selection[an].countNonBinaires)){
                //œuvre d'un·e artiste non-binaire
                stroke(0, 0, 0)
                fill(0, 0, 0)
                text("NB", posX, posY)
            } else if(art < Number(selection[an].countNonBinaires)+Number(selection[an].countFemmes)){
                stroke(0, 0, 0)
                fill(0, 0, 0)
                text(artSymbol, posX, posY)
            } else if (art < Number(selection[an].countNonBinaires)+Number(selection[an].countFemmes)+Number(selection[an].countMixtes)){
                stroke(0, 0, 0)
                fill(0, 0, 0)
                text("M", posX, posY)
            }else{
                stroke(0, 0, 0, 70)
                fill(0, 0, 0, 70)
                text("*", posX, posY)
            }
            
            
        }
        
        
        if (selection[an+1]){
            var diffAnneeSuivante = Number(selection[an+1].name)-Number(selection[an].name)
            
            if (selection[an+1].name == "1955")
            axeTemp+=37
            else if( diffAnneeSuivante > 1 )
                axeTemp += (diffAnneeSuivante*2.8)+40
            else 
                axeTemp+=40
        }
    }
        
};
