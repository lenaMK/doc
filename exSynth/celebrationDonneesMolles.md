# *Célébration de données molles*

description sensorielle par Lena MK



Mai 2025, à l’Université de Montréal, au deuxième étage du pavillon Lionel-Groulx, la salle des doctorant·e·s en recherche-création du département d’histoire de l’art, de cinéma et des médias audiovisuels (C-2086) devient un espace de démonstration pour ma recherche-création. La pièce, équipée de bureaux, de chaises, des panneaux mobiles et de lampes sur pied, est transformée par l’apparition, en son centre, d’un mobile coloré. Composé de centaines de pompons pelucheux, le mobile flotte au-dessus d’un large tapis gris duveteux. L’éclairage indirect, fourni par les lampes réparties autour de la salle, signale les autres sections présentées pour la partie pratique de l’examen de synthèse. 

À droite de l’entrée de la salle, un long mur formé par des panneaux devant lequel est placé une table donne à voir des étapes du processus de recherche-création: copie de l’examen écrit remit la semaine précédente, classeur avec des extraits imprimés des jeux de données employés, impressions d’algorithmes et de visualisations épinglées sur les panneaux[^1].  S’ensuit, dans le sens inverse des aiguilles d’une montre, un mur de la salle qui présente les recherches et les prototypes matériels, puis la légende et des détails à propos de la fabrication du mobile. Un panneau au fond de la salle invite les personnes présentes à participer à une documentation collective par la prise de photographies ou de vidéos, ou par le partage de commentaires et de retours sur la recherche-création. Tout au fond de l’espace, sous un tableau vert marqué avec l’inscription «&nbsp;bricoler des données&nbsp;» à la craie, deux bureaux sont placés face à face pour former un îlot. Ils sont recouvert d’une large quantité de matériel d’artisanat&nbsp;: pompons utilisés pour fabrication du mobile, matériel de broderie, perles et accessoires décoratifs. Pensé comme un mini-atelier pour expérimenter avec l’artisanat de données (*crafting data*), il me permet aussi de poursuivre la fabrication (très chronophage) des guirlandes de pompons qui composent le mobile. Le dernier mur de la salle est divisé en trois sections: proche du fond et du mini-atelier, un espace de travail avec un ordinateur et deuxième écran donne accès au travail numérique réalisé. Un second bureau est garni de livres, des références et sources d’inspiration importantes pour le projet doctoral. Finalement, proche de l’entrée, un espace est réservé pour permettre à chacun de déposer ses affaires, d’enlever ses chaussures ou d’enfiler des protège-souliers et offre la possibilité de se désinfecter ses mains.  

Du point de départ théorique (le projet de recherche présenté à l’écrit) et pratique (les données mises en ligne sur donnéesQuébec par le Musée d’art contemporain de Montréal), on découvre le sujet central de la *Célébration de données molles*: l’origine des artistes qui sont représentés dans la collection du musée. Dans les données publiées par l’institution, ce sont les nationalités associées à chaque artiste qui sont renseignées. Celles-ci sont donc distinctes des appartenances à des peuples autochtones, et n'identifient pas non plus les québécois·e·s. Dans l’idée de proposer une approche plus inclusive, j’en propose une réinterprétation qui rassemble dans l’appellation `origine` les valeurs associées tant aux `nationalités`, aux `peuplesAutochtones`et qu’à la production d’`art contemporain québécois`. Par le cumul des différentes identités, je souhaite élargir les possibles appartenances pouvant être revendiquées par les artistes. Plutôt que de concevoir la diversité comme une contrainte technique ou un problème de classification, j’aimerais la célébrer en cherchant des façons de l’exprimer et de la valoriser. 

À cette première étape, les données sont en format `json`. C’est un format textuel, qui décrit chaque objet (ex&nbsp;: une œuvre d’art) par une série de propriétés et de valeurs (ex&nbsp;: `titre: "Legend", dateProduction: "1963",  categorie: "Estampe"` pour une [œuvre](https://macrepertoire.macm.org/oeuvre/legend) de ᑎᕕᑎᐊᓗ Davidialuk Alasua Amittu). Découvrir les données dans ce format est plutôt fastidieux pour un humain: les 7840 œuvres transformées vers un document PDF aurait 6668 pages, et la liste des 1870 artiste atteint 2645 pages. Pour une machine, à l’inverse, parcourir les entrées en suivant les instructions d’un algorithme est beaucoup plus aisé. J’ai donc écrit un algorithme qui ordonne visuellement ces données. Dans l’idée d’aborder la constitution de cette collection, je les ai classées par année d’acquisition (c.f. collaboration avec Valentine Desmorat).

Les graphiques de type chronologiques sont souvent formés de deux axes. En bas, un axe (X; abscisse)  représente le temps, les années d’acquisition. À gauche, l’autre axe (Y; ordonnée) indique la quantité, le nombre d’œuvres acquises cette année-là. Inspirée par les rideaux de perles, dont l’axe horizontal est placé en haut et d’où cascade chaque guirlande, j’ai placé l’intersection entre mes deux axes en haut à gauche: les années augmentent progressivement de gauche à droit, et la ribambelle d’œuvres gravite vers le bas de l’écran. Pour certaines années, comme 1992 qui semble complètement disproportionnée due à l’acquisition massive de la collection Lavallin, la guirlande est particulièrement longue et requiert de faire défiler l’image à l’écran 













[^1]: Une note précise que ces divers éléments sont également accessibles sur le site web lenamk.site/doc