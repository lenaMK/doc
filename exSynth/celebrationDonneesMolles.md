# *Célébration de données molles*

 par Lena MK

## Note

Je m’appelle Lena, j’ai écrit une description sensorielle de mon projet intitulé *Célébration de données molles* et j’en fais la lecture. La description est divisée en plusieurs parties, comme des petits épisodes d’un balado.

## Introduction

### Partie 1 - description de l’espace

Mai 2025, à l’Université de Montréal, au deuxième étage du pavillon Lionel-Groulx, la salle des doctorant·e·s en recherche-création du département d’histoire de l’art, de cinéma et des médias audiovisuels (C-2086) devient un espace de démonstration pour ma recherche-création. La pièce, équipée de bureaux, de chaises, des panneaux mobiles et de lampes sur pied, est transformée par l’apparition, en son centre, d’un mobile coloré. Composé de centaines de pompons pelucheux, le mobile flotte au-dessus d’un large tapis gris duveteux. L’éclairage indirect, fourni par les lampes réparties autour de la salle, signale les autres sections présentées pour la partie pratique de l’examen de synthèse. 

À droite de l’entrée de la salle, un long mur formé par des panneaux devant lequel est placé une table donne à voir des étapes du processus de recherche-création: copie de l’examen écrit remit la semaine précédente, classeur avec des extraits imprimés des jeux de données employés, impressions d’algorithmes et de visualisations épinglées sur les panneaux[^1].  S’ensuit, dans le sens inverse des aiguilles d’une montre, un mur de la salle qui présente les recherches et les prototypes matériels, puis la légende et des détails à propos de la fabrication du mobile. Un panneau au fond de la salle invite les personnes présentes à participer à une documentation collective par la prise de photographies ou de vidéos, ou par le partage de commentaires et de retours sur la recherche-création. Tout au fond de l’espace, sous un tableau vert marqué avec l’inscription «&nbsp;bricoler des données&nbsp;» à la craie, deux bureaux sont placés face à face pour former un îlot. Ils sont recouvert d’une large quantité de matériel d’artisanat&nbsp;: pompons utilisés pour fabrication du mobile, matériel de broderie, perles et accessoires décoratifs. Pensé comme un mini-atelier pour expérimenter avec l’artisanat de données (*crafting data*), il me permet aussi de poursuivre la fabrication (très chronophage) des guirlandes de pompons qui composent le mobile. Le dernier mur de la salle est divisé en trois sections: proche du fond et du mini-atelier, un espace de travail avec un ordinateur et deuxième écran donne accès au travail numérique réalisé. Un second bureau est garni de livres, des références et sources d’inspiration importantes pour le projet doctoral. Finalement, proche de l’entrée, un espace est réservé pour permettre à chacun de déposer ses affaires, d’enlever ses chaussures ou d’enfiler des protège-souliers et offre la possibilité de se désinfecter ses mains.  

### Partie 2 - la collection du Musée d’art contemporain de Montréal (MAC)

Pour la *Célébration de données molles*, je voulais donner accès à la collection du Musée d’art contemporain de Montréal. Cette collection est constituée de milliers d’œuvres d’art, qu’on ne pourrait – pas plus que les planètes du système solaire – voir dans leur ensemble. Ces œuvres d’art ne sont même pas toutes au même endroit. Le musée dispose de plusieurs espaces qu’on nomme les réserves, où chaque œuvre est entreposée selon ses besoins de conservation. Certaines œuvres sont exposées dans le musée, notamment dans l’exposition permanente. Toutefois, avec la fermeture actuelle pour la transformation de sa carapace architecturale, et malgré l’utilisation d’un espace temporaire pour maintenir sa programmation, très peu d’œuvres sont accessibles en ce moment. De plus, les œuvres de la collection voyagent également. Elles participent à des expositions itinérantes du musée ou elle peuvent aussi être prêtées pour prendre part à d’autres expositions. Si la collection semble donc compliquée à (se) représenter, en tant qu’ensemble d’objets ou même avec des points sur une carte, sa mise en données présente une façon plus simple de l’appréhender.

## L’espace numérique

### Partie 3 - les données du MAC

L’angle sous lequel j’ai choisi d’aborder la collection du musée et qui est devenu le sujet central de ma *Célébration de données molles* est l’origine des artistes qui sont représentés dans la collection du musée. Dans les données publiées par le MAC, ce sont les nationalités associées à chaque artiste qui sont renseignées. Celles-ci sont donc distinctes des appartenances à des peuples autochtones, et n'identifient pas non plus les québécois·e·s. Dans l’idée de proposer une approche plus inclusive, j’en propose une réinterprétation qui rassemble dans l’appellation `origine` les valeurs associées tant aux `nationalités`, aux `peuplesAutochtones`et qu’à la production d’`art contemporain québécois`. Par le cumul des différentes identités, je souhaite élargir les possibles appartenances pouvant être revendiquées par les artistes. Plutôt que de concevoir la diversité comme une contrainte technique ou un problème de classification, j’aimerais la célébrer en cherchant des façons de l’exprimer et de la valoriser. 

À cette première étape, les données sont en format `json`. C’est un format textuel, qui décrit chaque objet (ex&nbsp;: une œuvre d’art) par une série de propriétés et de valeurs (ex&nbsp;: `titre: "Legend", dateProduction: "1963",  categorie: "Estampe"` pour une [œuvre](https://macrepertoire.macm.org/oeuvre/legend) de ᑎᕕᑎᐊᓗ Davidialuk Alasua Amittu). Découvrir les données dans ce format est plutôt fastidieux pour un humain: les 7840 œuvres transformées vers un document PDF aurait 6313 pages, et la liste des 1870 artiste atteint 2645 pages. Pour une machine, à l’inverse, parcourir les entrées en suivant les instructions d’un algorithme est beaucoup plus aisé. J’ai donc écrit un algorithme qui ordonne visuellement ces données. Dans l’idée d’aborder la constitution de cette collection, je les ai classées par année d’acquisition (c.f. collaboration avec Valentine Desmorat).

### Partie 4 - expérimentations graphiques

Les graphiques de type chronologiques sont souvent formés de deux axes. En bas, un axe (X; abscisse)  représente le temps, les années d’acquisition. À gauche, l’autre axe (Y; ordonnée) indique la quantité, le nombre d’œuvres acquises cette année-là. Inspirée par les rideaux de perles, dont l’axe horizontal est placé en haut et d’où cascade chaque guirlande, j’ai placé l’intersection entre mes deux axes en haut à gauche: les années augmentent progressivement de gauche à droit, et la ribambelle d’œuvres gravite vers le bas de l’écran. Pour certaines années, comme 1992 qui semble complètement disproportionnée due à l’acquisition massive de la collection Lavallin, la guirlande est particulièrement longue et requiert de longuement faire défiler l’image à l’écran pour arriver au bout. Au cours des premiers essais, chaque œuvre d’art est symbolisée par un zéro, inscrit en blanc sur un fond sombre, presque noir. Le chiffre zéro est une marque substitutive, évoquant visuellement un pompon ou une perle. L’esthétique se rapproche de celle de la matrice, avec des chiffres qui défilent sur un fond sombre.

J’ai ensuite précisé mon algorithme pour représenter les origines associées à chaque œuvre. Pour ce faire, je devais parcourir la liste des artistes qui ont créé l’œuvre – il s’agit souvent d’un·e seul·e artiste, mais il y a aussi des collaborations, c’est pourquoi il s’agit d’une liste à parcourir – et de rassembler toutes les origines de ces artistes pour les associer à l’œuvre en question. La plupart des œuvres ont deux origines associées, canadienne et québécoise, mais certaines n’en ont qu’une et d’autres vont jusqu’à cinq. Ainsi, à la place du zéro, j’ai testé plusieurs représentations visuelles de ce cumul d’origines. J’ai voulu jouer avec le principe des variables visuelles multifonctionnelles, c’est-à-dire l’idée qu’une même variable visuelle soit porteuse de plusieurs informations pertinentes pour la lecture du graphique. Dans ce cas, au lieu d’avoir une *forme* – exemple: un cercle – qui indiquerait une œuvre d’art, et une *couleur* qui représenterait une origine, j’ai uniquement utilisé un index numérique des origines. J’ai d’abord fait une liste des origines présentes dans les données et je les ai triées par occurrences. Ainsi, un chiffre bas, comme le 0 (canadienne) ou le 1 (québécoise), indique une origine qui advient souvent dans le jeu de données, tandis qu’un chiffre élevé signifie la singularité de cette origine. L’échelle n’est toutefois pas linéaire, mais suit plutôt une courbe inversement exponentielle; en termes d’index, 0 et 1 reviennent très souvent, 2 à 4 sont récurrentes, et progressivement, on atteint de nombreux chiffres qui ont deux occurrences, puis une seule. Il y a donc quelques origines très communes et de nombreuses origines plus rares, qui n’apparaissent qu’une ou deux fois dans les données.

Visuellement, j’ai testé plusieurs façon de représenter les origines en employant le cumul des index associés. Tout d’abord, j’ai testé la superposition des chiffres, ce qui créait des zones plus lumineuses pour les œuvres avec plus d’origines associées. Souvent rendus illisibles, les chiffres formaient plutôt des constellations, en créant des liens optiques entre les œuvres aux origines plus nombreuses. Ensuite, j’ai aussi expérimenté avec l’addition, en formant des chaînes plus longues pour les œuvres avec plusieurs origines. J’obtenais ainsi des sortes de bavures horizontales, évoquant le *glitch* ou les dérapages. Ces essais étaient des façons créatives pour moi d’explorer le contenu de la collection, d’expérimenter pour obtenir un aperçu de la répartition des origines et des œuvres au fil des acquisitions. Ils servaient aussi de préparation algorithmique, pour entraîner ma capacité à manipuler les données et leur représentation.

## L’espace physique

### Partie 5 - prémisses d’une mise en espace

Dans ce projet, mon objectif n’était toutefois pas juste de travailler dans l’espace numérique, mais d’explorer la transposition de ces données et de ces formes visuelles dans l’espace physique. Mon désir était de rendre mon travail plus accessible. En tant que personne formée en informatique, je peux travailler avec des données, les manipuler et même jouer avec. Pour pouvoir partager cette agentivité avec des personnes dont la littératie numérique n’inclut pas la programmation, j’ai pensé que la matérialité des données deviendrait plus tangible si elles étaient littéralement palpables. En astronomie par exemple, des mobiles explicitent les trajectoires et le positionnement relatif de chaque planète du système solaire, un aspect de l’univers que nous ne pouvons pas observer directement. En interagissant et en manipulant cet objet physique, nous accédons plus facilement à un ensemble d’informations complexes. 

De plus, il n’existe encore que trop peu de solutions à l’accessibilité des graphiques interactifs ou de l’art algorithmique. Dans le cas d’images programmées ou de visuels générés par ordinateur, ce n’est pas évident d’intégrer des approches multisensorielles au travail en cours. Dans l’espace physique, le toucher offre une interface presque universelle. Combiné avec les autres sens comme la vision et l’ouïe, on peut accommoder les expériences de personnes issues de la diversité capacitaire.

J’ai aussi choisi de fabriquer, à partir de ces données et d’un sujet sensible, un objet ludique. Le monde m’a semblé particulièrement dur cet hiver, de nouvelles difficiles en ce qui concerne la santé de mes proches aux désolantes nouvelles de la politique mondiale, en passant par les manifestions pour le financement du milieu de la culture qui ne cessaient de retourner le couteau dans la plaie de ce que j’aimerais pouvoir continuer à appeler ma profession. Aux prises avec ces réalités, je voulais contribuer un peu de douceur, produire un bref moment d’émerveillement ou même déclencher un petit rire. Un objet peut être ludique tout en conservant un côté sérieux, je considère cette apparente contradiction plutôt comme une opportunité de permettre la coexistence de plusieurs couches de lecture et d’interprétation. Cela facilite aussi la médiation, je peux ainsi varier la profondeur et la complexité des sujets abordés avec les personnes présentes – des chercheur·se·s et des professionnel·le·s en histoire de l’art, en muséologie ou encore en informatique aux néophytes des disciplines mentionnées, – sans discriminer sur l’âge, l’éducation, les références culturelles ou les préférences personnelles.

### Partie 6 - prototypes et essais matériels





















J’ai ensuite remplacé les zéro par 















[^1]: Une note précise que ces divers éléments sont également accessibles sur le site web lenamk.site/doc