# Examen de sythèse

[toc]

## Introduction

Mon projet de thèse est une recherche-création en physicalisation de données. La physicalisation de donnée, ou *data physicalization*, est un terme employé pour décrire des « objets (artefacts physiques) dont la géométrie ou la matérialité *encode*[^1] des données » (Jansen et al. 2015: 2). Il s’agit d’une représentation matérielle de données, souvent contrastée avec l’apparente immatérialité de la visualisation de données. En effet, dans le cas de visualisation, on n’a pas accès aux données qui ont servi à déterminer la forme graphique. Sur papier dans l’espace physique ou sur l’écran d’une machine pour l’espace numérique, les données d’une visualisation ne sont pas tangibles ou palpables. La physicalisation de données s’intéresse donc au rôle du sens du toucher dans la perception de données.

Le milieu de la physicalisation de données semble[^2] avoir pour moteur d’instigation initial les origines multiples et les apports de différentes cultures à l’histoire de l’encodage et de la transmission de l’information. Parmi les exemples populaires, on retrouve les bulle-enveloppes, des petits objets en argile employés il y a 6000 ans pour la comptabilisation de biens en Mésopotamie («Bulle-enveloppe», [Wikipédia](https://fr.wikipedia.org/wiki/Bulle-enveloppe)), ou encore les quipus (ou khipus), un système de consignation de données formé de cordes et de nœuds utilisé par l’administration de l’empire Inca et dont les traces remontes à 4500 ans («Quipu», [Wikipédia](https://fr.wikipedia.org/wiki/Quipu)). Il s’agit ainsi de reconnaître que les données – au sens d’information enregistrée de façon en « permettre le stockage, la transmission ou le traitement » (Donnée, [GDT](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8358482/donnee)) – n’ont pas été inventées en même temps que les premiers ordinateurs, ni même par les bureaux de statistiques ou d’autres administrations au fonctionnement centré sur l’écriture. Cette reconnaissance historique vise notamment à décentrer le savoir et le savoir-faire occidental pour faire place à une diversité d’épistémologies face à l’amplification exponentielle de la place des données dans notre société. Cette amplification accorde également un rôle toujours plus important à la visualisation de données, considérée comme un moyen de faciliter l’accès à ces données et leur compréhension. Les recherches en physicalisation de données se poursuivent dans le même sens: de nouvelles pratiques émergent en référence aux autres façons (historiques, culturelles) de penser les données et d’interagir avec (à développer dans l’état des lieux). 

<!--comment présenter mon expérience passée sans avoir l’air de vendre ma salade?-->

Je souhaite inscrire ma recherche-création dans cette approche, en adoptant moi-même une pratique de physicalisation de données avec mon objet d’étude: les données produites par des institutions culturelles. Ces données qui décrivent des collections muséales, des archives ou des entités patrimoniales. Dans le cas où elles sont mises à disposition sur des plateformes de données ouvertes, elles deviennent contribuent à la documentation accessible et librement réutilisable pour la recherche. J’ai commencé, dès la maîtrise, à faire de la visualisation avec ces données. Pour mon mémoire, j’ai créé un atlas numérique – alliant une chronologie, une cartographie et d’autres graphiques interactifs – comme alternative au formulaire disponible pour accéder à la base de données CONBAVIL (Krause 2020, 2021). Depuis, j’ai développé une pratique en visualisation de données qui m’a par exemple amenée à participer au hackathon *Navigations anthologiques* (Fauchié et al. 2024). Dans mon rôle de responsable de laboratoire à l’*Ouvroir d’histoire de l’art et de muséologie numériques* (UdeM), j’ai collaboré avec Valentine Desmorat sur la création de visualisations interactives portant sur l’entrée des femmes-artistes dans la collection du Musée d’art contemporain de Montréal (Desmorat 2024, Desmorat et Krause 2025 [à paraître]). En tant que directrice technique de la Maison MONA, je travaille au quotidien avec notre base de données sur l’art public, le patrimoine et les lieux culturels au Québec. Ces données sont issues du projet d’application mobile et de médiation numérique *in-situ* MONA, dont la carte offre en elle-même une visualisation spatiale et thématique de ces données. Je produis régulièrement des visualisations nécessaires aux étapes de préparation, d’enrichissement et d’analyse des données MONA. C’est dans le but de poursuivre et de diversifier ma pratique que j’ai initié le projet d‘une thèse en recherche-création.

Dans le cadre de cette recherche, j’aimerais expérimenter avec l’idée que la création de visualisations (et de physicalisations) de données est une forme de commissariat. Le commissariat, en tant que processus de sélection et de mise en exposition publique d’objets, provient du milieu muséal mais s’est aujourd’hui diversifiée en une variété de pratiques sociales. Des comptes Instagram aux listes de lectures Spotify, l’émergence de pratiques curatoriales sur les réseaux sociaux amènent un nouveau réseau d’acteur·rices à se pencher sur cette pratique.

> “Have you already curated today?” read the headline of an article on such varied acts of curation in the Neue Zürcher Zeitung in 2014 (Kathke et al., 2022, p. 71)

Par exemple, Torsten Kathke, Juliane Tomann et Mirko Uhlig proposent de rassembler sous le terme de « contre-curation » ou « contre-commissariat » (*counter-curation*) les pratiques sociales de commissariat qui visent à attirer l’attention sur des inégalités politiques et sociales ou à créer une opposition aux récits hégémoniques (2022, 71). Provenant du domaine de l’histoire, les auteur·rice·s rappellent que ce champs d’étude ne concerne pas uniquement les faits, mais aussi la façon dont ils sont rendus visibles, utilisables et mis en récit. On peut ainsi choisir de créer des countres-récits (*counter-narratives*), des représentations et des imaginaires partagés collectivement qui remettent en question les récits officiels ou établis. Je pense que cette posture commissariale peut également être appliquée à des données, particulièrement lorsqu’on crée de représentations, qu’elles soient visuelles ou multisensorielles, de données.

Si certaines pratiques artistiques incorporent (*embed*) des données dans leur medium, l’utilisation de la physicalisation de données comme interface pour une collection muséale reste à explorer. En continuité avec mon approche de la visualisation de données, ma recherche vise à créer de nouvelles formes d’accès à des contenus culturels. J’aimerais créer des espaces esthétiques, sensibles et non-hiérarchiques pour la valorisation et la libre exploration de ces collections. Mon objectif est de renouveler les présentations et les représentations des collections auprès des publics pour déjouer certains effets de pouvoir comme la domination des œuvres et des récits masculins coloniaux normatifs, ou encore l’excès de visibilité médiatique accordée à certains artistes au détriment des autres. La contre-curation me permet d‘expliciter le positionnement de ces physicalisations dont l’objectif est de créer des contre-récits. En créant des interfaces qui invitent à interagir avec les données, j‘aurai pour objectif de déjouer les normes de visibilités qui discriminent la découvrabilité des contenus culturels. La découvrabilité représente le « potentiel pour un contenu, disponible en ligne, d'être aisément découvert par des internautes dans le cyberespace, notamment par ceux qui ne cherchaient pas précisément le contenu en question » ([OQLF «Découvrabilité»](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26541675/decouvrabilite)). À l’échelle d’une collection, on pourrait considérer <!--je propose de considérer?--> la découvrabilité comme le potentiel pour une œuvre d’être découverte parmi les données de l’institution. Ainsi, plutôt que de sélectionner des chef-d’œuvres pour représenter une collection, pourrait-on faire place à la sérendipité et à l’agentivité des publics pour se familiariser avec son contenu? 

il s’agirait du potentiel pour une œuvre à contribuer au récit construit par la représentation (visuelle ou matérielle) 

Mon hypothèse est que la physicalisation de données 

counter-mapping: outils 



Comment la physicalisation de données peut-elle offrir une nouvelle forme d’accès pour des données culturelles? 

En pensant l’artisanat comme une technologie et la technologie comme une pratique artisanale, j’aimerais proposer des expériences « sensationnelles » comme nouvelle forme d’accès aux données culturelles.

- menée dans le but d’identifier de nouvelles formes de visualisation de données qui créent de nouveaux récits et offrent de nouvelles perspectives sur les collections d’art (GLAM+?).
- propose d’expérimenter avec des créations visuelles numériques pour offrir une nouvelle forme d’accès aux données culturelles. 

Proposer: changement de medium mais aussi changement de récit (narrative?)







### État des lieux (court)

Ce travail se base, d’une part, sur la recherche actuelle en visualisation de données, en cartographie et dans le domaine des interfaces personnes-machines. 

D’autre part, des pratiques d’art, d’artisanat et de design à la croisée de la textilité et de l’algorithmique agissent comme sources d’inspirations transdisciplinaires. 

## 





### Cadre de recherche-création (cadre théorique + r-c? )

- contre-curation

  - counter-narratives, counter-mapping: décentrer, situer, diverger du discours dominant

- textile thinking (Lean)

- smitheran to question/rethink relationship with data?



Cette recherche doctorale propose de répondre à l’appel de Johanna Drucker de développer une épistémologie visuelle pour les humanités (2014). Dans ses recherches, elle introduit la visualisation comme un vecteur de réflexion, de questionnement et de production de savoir (Drucker 2020). Mon projet participe ainsi aux réflexions menées dans le champ des études des formes graphiques (Drucker 2014, 2020 ; Kräutli 2016 ; Tufte 2001 ; Bertin 2013). L’archéologie des médias (Huhtamo et Parikka 2011; Citton et Doudet 2019) me permet de reconsidérer la visualisation de données au sein d’une histoire des formes visuelles et de leur production. Je serai aussi amenée à employer la cartographie, à la fois comme opérateur théorique, comme outil graphique, comme forme d’analyse et comme manière de penser (Besse 2010). Plus particulièrement, le processus de déconstruction, issu de la cartographie critique, peut révéler de nouvelles approches de la carte et retracer les mécanismes sociaux liés à sa production (Harley 1989, 2). Je prévois appliquer ce même processus de déconstruction à la visualisation de données, tout en considérant que les nouvelles formes produites par ce processus critique mènent à un détournement ou à une profanation du dispositif (Agamben 2007). Parmi les pratiques cartographiques actuelles, le *thick mapping* (Presner, Shepard, et Kawano 2014) et la contre-cartographie (Orangotango+, 2018) me serviront à diversifier mes approches théoriques, visuelles et pratiques. Dans le champ des humanités numériques, je vais notamment me référer à l’exploration de l’herméneutique et des méthodes computationnelles telle que proposée par Stéfan Sinclair et Geffrey Rockwell (2016) pour penser la conception de nouveaux dispositifs numériques.



La recherche-création offre un cadre pour penser, manipuler, analyser et produire des visualisations dans un processus expérimental. Pour chaque jeu de données, je prévois de multiples itérations : essais, erreurs, améliorations. Par l’approche inductive proposée, la problématique propre à la visualisation émerge de la manipulation des données. Les visualisations seront créées avec la librairie d3.js (Bostock 2020). Cette librairie *open source* convertit des données en cartes ou en diagrammes directement dans le navigateur avec la technologie native du web : HTML/CSS/Javascript. Elle associe également les données aux contenus graphiques, ce qui permet de coder de riches interactions basées sur les données. J’ai appris à coder durant mon bac en histoire de l’art et en informatique pour les sciences humaines, et je me suis spécialisée dans l’utilisation de la librairie d3.js durant ma maîtrise, avec laquelle j’ai créé les graphiques interactifs qui composent mon « Atlas numérique de l’architecture publique » (mémoire de maîtrise dirigé par Prof. Emmanuel Château-Dutier). Grâce à ces connaissances techniques ainsi qu’à l’expérience acquise durant mon parcours professionnel, je peux désormais prévoir une utilisation créative de cette libraire de code pour mon doctorat. J’ai aussi constaté que la diffusion de visualisations de données à l’écran seul était une contrainte en ce qui concerne leur potentiel sensible, esthétique et analytique. Évoquant les cartes perforées des premiers ordinateurs, je prévois d’en matérialiser certaines, de leur donner corps (*data physicalisation*) avec des techniques manuelles traditionnelles comme le tricot ou le tissage. Au sein de ces technologies ancestrales qui requièrent la production de motifs, la pratique d’encodage de données a déjà été étudiée (L’Hirondelle 2014, 156; Loft 2014, 172). J’ai donc pour projet doctoral de créer de nouvelles formes visuelles à travers lesquelles donner accès au contenu de jeux de données culturelles. Par leur manipulation et par la pratique de la visualisation de données, je peux les « mettre en forme autrement, pour les rendre visibles et discutables » (Hennion et Monnin 2020, 5). Ma thèse produira ainsi de nouvelles connaissances sur les caractéristiques et sur les limites de la visualisation de données. Appliquée à des données culturelles, la contre-curation proposera un accès inédit aux collections muséales et patrimoniales.

### Corpus





Mais aussi: [corpus d’œuvres qui inspirent la recherche](https://www.canva.com/design/DAGeuw-pplg/xXzotJr7T8XvWcPHvk2eSw/view?utm_content=DAGeuw-pplg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hef9b400c70) 

- pratiques artistiques inspirantes
- lien entre textilité, récit et données mais ne sont justement pas des visualisations de données 



### Métho

bug: relationship with technology, playful bidouillage, beyond « utilitarian functionality » to learn, rethink, change perception, … adjust goals, not arrive with necessity for a proof (Meirelles?)

glitch feminism? 

indiscipline ?



[ex thèse Marion Lean: Méthodes basée sur l’expérience de réception (incarnée): animer des ateliers de physicalisation de données avec des musées et des artistes+public? ]



## Innovation = do it, partie pratique

un protocole de physicalisation de données sera présenté et mis à l’épreuve avec les données de la collection du Musée d’art contemporain de Montréal. L’expérience a pour but d’alimenter la notion en cours de développement de contre-curation de données. Ce protocole met une emphase particulière sur la documentation des choix, des étapes et des itérations afin de rendre le processus aussi *tangible* que les données elles-mêmes.

**going pure tangible** + make the process tangible as well (physicalize it) → make like a mini exhibition, « physicalize » data and the process!

- necessary to explain the steps, the research, the work. Actually showing, putting the story behind is as important as the work you put in because otherwise it doesn’t show
- focus on the representation and the presention
- show the unclear data? play with the uncertainty

### Intro à la partie pratique de l’examen

- choix: données du MAC
- départ: 



### [protocole](./protocole)

### Présentation du processus

- recherches: exploration des données
- expérimentation code
- expérimentation matière
- sketchs

### Présentation/discussion du « résultat »

- choix
- récit

## Plan de la thèse?

[^1]: Traduction admise par l’OQLF: https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8375546/coder
[^2]: A confirmer une fois l’état des lieux est complété