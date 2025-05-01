# Examen de synthèse

[toc]

*/!\ rédaction en cours*

## Introduction

<!--rédaction: idée générale d’introduction: validée, poursuivre la rédaction-->

La mission des institutions culturelles – musées, bibliothèques, centres d’archives, etc. – comporte notamment la valorisation et l’accès public à leurs contenus. L’arrivée des outils numériques dans ces institutions contribue à la transformation de leurs méthodes de travail, par exemple avec la diffusion numérique des artefacts conservés dans les réserves ou avec les expositions virtuelles. Certaines de ces institutions vont même jusqu’à la mise en ligne de leur données (Casemajor 2012, 82). Ces données décrivent de façon structurée les collections muséales, des archives ou des entités patrimoniales. Dans le cas où elles sont mises à disposition sur des plateformes de données ouvertes, elles contribuent à la documentation institutionnelle accessible et librement réutilisable. De ce fait, on peut considérer ces données comme une forme d’archive institutionnelle, ce qui ouvre de nouvelles avenues pour la recherche. 

En tant que jeune chercheuse et professionnelle au parcours multidisciplinaire en informatique et en histoire de l’art, je me suis particulièrement intéressée aux interfaces de valorisation et d’exploration de données culturelles (MK 2020, 2021; Fauchié et al. 2024; Desmorat et MK 2025 [à paraître]; Graff et al. 2024). Les interactions des publics avec ces données passent principalement par l’intermédiaire d’interfaces web permettant, par exemple, de faire des recherches dans une collection muséale. Lorsque la collection numérisée est en libre accès sur les sites web de musées, on peut habituellement l’explorer par le biais d’une barre de recherche (exemple figure 1) ou par l’usage d’un formulaire. Ces modes d’accès contraignent toutefois le potentiel de découverte de la collection. En effet, ces deux fonctions requièrent une connaissance préalable des objets, ou du moins de leurs caractéristiques, pour pouvoir les saisir&nbsp;: on ne peut pas rechercher ce qu’on ne connaît pas. De plus, on ne voit jamais qu’une partie de la collection. 

![MACrépertoire avec « animal » comme terme de recherche parmi les œuvres de la collection. Les résultats sont triés par ordre alphabétique pour le nom de l’artiste](../img/MACrepertoire_animal_2025-03.png)

<figcaption style=" text-align: right ">Figure 1. Capture d’écran d’une recherche dans le MACrépertoire, le portail d’accès web à la collection du Musée d’art contemporain de Montréal, 2025.</figcaption>

Une première approche possible pour découvrir une collection dans son ensemble émerge d’une méthodologie quantitative. Anne Dymond souligne, dans son ouvrage *Diversity Counts : Gender, Race, and Representation in Canadian Art Galleries* (2019), l’utilité d’indicateurs statistiques dans l’étude des pratiques institutionnelles. Dans une démarche qui reprend les objectifs des études féministes quantitatives en histoire de l’art, Valentine Desmorat et moi avons employé les données publiées par le Musée d’art contemporain de Montréal (MAC) pour étudier l’entrée des femmes artistes dans sa collection [^1]. Les portraits statistiques «&nbsp;permettent, en tant que visualisations de données, de donner à voir les tendances minoritaires, majoritaires, ainsi que les caractéristiques majeures des œuvres ou des artistes pris·es en compte [dans les collections]&nbsp;» (Desmorat 2024, 11). Guidées par les données, nous avons effectué des analyses statistiques et révélé des facteurs qui ont contribué à la représentation des œuvres d’artistes-femmes dans cette collection (Desmorat 2024, Desmorat et MK 2025 [à paraître]). Cette visualisation (figure 2) présente un regard d’ensemble sur la collection du musée, une alternative intéressante à la vue partielle issue de la recherche textuelle. 

<iframe width="100%" height="280" frameborder="0"
  src="https://observablehq.com/embed/@artistes-femmes-mac/nb-dachats-dons-acquisitions?cells=graphiqueBarres"></iframe>
<!--![Chronologie des acquisitions du MAC, chaque barre indique une année et le code couleur la répartition de l’identité de genre des artistes ayant produit les œuvres acquises cette année-là ](../img/artistes-femmes-MAC_GraphiqueBarres.png)-->

<figcaption style=" text-align: right ">Figure 2. Nombres d'acquisitions d'œuvres d'artistes-femmes et d'œuvres d'artistes-hommes par année (1964-2020), version simplifiée (sans les sélecteurs), Desmorat et MK, 2024</figcaption>

Certaines visualisations interactives amplifient le potentiel de découverte des contenus des collections. Contrairement au graphique en barre présenté plus haut, l’utilisation de points (figure 3) pour représenter les œuvres une à une les rend découvrables&nbsp;: en survolant un élément, on obtient le titre de l’œuvre et le clic redirige vers une page qui lui est dédiée. On peut ainsi découvrir une œuvre dont on ne connaissait ni l’existence, ni l’artiste, ni l’emplacement. Cette forme d’accès à la collection est davantage caractérisée par la sérendipité et une approche sensorielle. 

<iframe width="550" height="294" frameborder="0"
  src="https://observablehq.com/embed/27a690d9c785e7cb?cells=minichrono"></iframe>


<!--<img src="../img/donnees-MAC_testChronologieProd_1990.png" alt="Chronologie par points d’œuvres du MAC de 1990 à 2023" style="zoom: 33%;" />-->

<figcaption style=" text-align: right ">Chronologie des œuvres de la collection du MAC, vue de 1990 à 2023, MK, 2024</figcaption>

## Projet de recherche

Mon projet de recherche-création doctorale s’inscrit dans l’étude des institutions culturelles par leur données. Dans une continuité avec ma recherche sur les interfaces de valorisation et d’exploration de données culturelles, j’aimerais créer des environnements esthétiques, sensibles et non-hiérarchiques pour la valorisation et la libre exploration de ces collections. Mon objectif est de renouveler les présentations et les représentations des collections auprès des publics pour déjouer certains effets de pouvoir comme la domination des œuvres et des récits masculins coloniaux normatifs, ou encore l’excès de visibilité médiatique accordée à certains artistes au détriment des autres. Pour ce faire, j’aimerais expérimenter avec l’idée que la création de visualisations de données est une forme de commissariat. Le commissariat, en tant que processus de sélection et de mise en exposition publique d’objets, provient du milieu muséal mais s’est aujourd’hui diversifié en une variété de pratiques sociales. Des comptes Instagram aux listes de lectures Spotify, l’émergence de pratiques curatoriales sur les réseaux sociaux amènent un nouveau réseau d’acteur·rices à se pencher sur cette pratique.

> *“Have you already curated today?” read the headline of an article on such varied acts of curation in the Neue Zürcher Zeitung in 2014.* (Kathke et al. 2022, p. 71)

Torsten Kathke, Juliane Tomann et Mirko Uhlig proposent de rassembler sous le terme de «&nbsp;contre-curation&nbsp;» ou «&nbsp;contre-commissariat&nbsp;» (*counter-curation*) les pratiques sociales de commissariat qui visent à attirer l’attention sur des inégalités politiques et sociales ou à créer une opposition aux récits hégémoniques (2022, 71). Provenant du domaine de l’histoire, les auteur·rice·s rappellent que ce champ d’étude ne concerne pas uniquement les faits, mais aussi la façon dont ils sont rendus visibles, utilisables et mis en récit. On peut ainsi choisir de créer des contre-récits (*counter-narratives*), des représentations et des imaginaires partagés collectivement qui remettent en question les récits officiels ou établis. Je pense que cette posture commissariale peut également être appliquée à des données, particulièrement lorsqu’on en crée des représentations, qu’elles soient visuelles ou multisensorielles.

En créant des interfaces qui invitent à interagir avec les données, j’aurai pour objectif de créer des contre-récits pour déjouer les normes de visibilités qui discriminent la découvrabilité des contenus culturels. La découvrabilité représente le «&nbsp;potentiel pour un contenu, disponible en ligne, d'être aisément découvert par des internautes dans le cyberespace, notamment par ceux qui ne cherchaient pas précisément le contenu en question&nbsp;» ([OQLF «&nbsp;Découvrabilité&nbsp;»](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26541675/decouvrabilite)). À l’échelle d’une collection, je propose de considérer la découvrabilité comme le potentiel pour une œuvre d’être découverte parmi les données de l’institution. Ainsi, plutôt que de sélectionner des chef-d’œuvres pour représenter une collection, pourrait-on faire place à la sérendipité et à l’agentivité des publics pour se familiariser avec son contenu&nbsp;? 

<!--découvrabilité en data viz : il s’agirait du potentiel pour une œuvre à contribuer au récit construit par la représentation (visuelle ou matérielle)-->

### Espace et interactions

L‘espace numérique offre plusieurs formes d’interactions avec les données, ce qui enrichit considérablement l’accès à la visualisation. Contrairement à un graphique statique, on peut « en savoir plus » sur un élément, filtrer une partie des contenus ou encore zoomer sur un détail. Cela amène toutefois certaines contraintes, comme la taille de l’écran – téléphone portable, écran d’ordinateur, télévision ou écran géant –, il faut prévoir l’usage pour que la visualisation soit lisible et/ou utilisable. Jusqu’à présent, j’ai toujours favorisé l’écran d’ordinateur personnel car l’écran de téléphone portable est trop contraignant (trop petit) pour créer des visualisations qui montrent +1000 éléments d’une collection et l’utilisation d’un écran plus grand requiert un contexte de diffusion spécifique. Pour un accès plus général, dans le but que n’importe qui puisse consulter la visualisation sur le web à partir d’un ordinateur, il faut donc cibler environ [~1920 x 1080px](https://gs.statcounter.com/screen-resolution-stats/desktop/worldwide). Dans ce contexte, la plus petite échelle pour tracer une ligne ou pour dessiner un point serait d’un pixel. Il faut cependant que l’élément soit visible et distinguable à l’œil humain. Au minimum, il faut donc quelques pixels pour chaque élément, ainsi que de l’espace entre chaque pour les distinguer. De plus, une visualisation emploie généralement des repères, comme des légendes ou des axes, qu’il faut également prévoir dans l’espace imparti. Même avec des marges et des repères minimalistes (100px en haut et en bas, 150px sur les côtés), il reste 1620 x 880 px. En moyenne (ou dans un contexte moins épuré), on travaille plutôt avec une largeur de 1200px et une hauteur d’environ 750px. 

Lors de la création d’une chronologie, un format prisé pour représenter les collections, on peut ainsi rapidement atteindre les limites de la taille de l’écran&nbsp;: une collection dont les œuvres sont datées de 1805 à 2023, comme celle du MAC, requiert la représentation de 218 années. Sur une largeur de 1200 px, cela ne laisse que 5 pixels par élément. Le manque d’espace horizontal peut être pallié par des solutions visuelles où les années sont amalgamées, comme dans l’exemple ci-dessous.

<img src="../img/donnees-MAC_testChronologieProd.png" style="zoom:50%;" />

On peut sinon choisir d’utiliser uniquement les années pour lesquelles il y a au moins une œuvre acquise. Cela sauve, dans le cas de cette collection, beaucoup d’espace car une majorité écrasante des œuvres sont produites au XXe siècle. Il faut, dans ce cas, s’assurer d’expliciter ce choix qui induirait autrement la lecture chronologique en erreur car nous sommes habitué·e·s à une échelle linaire et continue pour les chronologies. 

<img src="../img/donnees-MAC_testChronologieProduction.png" style="zoom:50%;" /> 

Dans ce cas, le problème le plus important est cependant celui de la hauteur. Le nombre d’œuvre acquises est si grand qu’il dépasse de la hauteur moyenne d’un écran. Il y a un pic important d’œuvres produites en 1964, qui requiert une hauteur de 2250 pixels pour visualiser chacune des œuvres. Cela peut être pallié en faisant défiler la visualisation verticalement. On ne peut toutefois obtenir une vue d’ensemble et chronologique de la collection dans un espace de 1200 x 750 pixels.

Une autre limitation de l’écran est le manque de relief ou de profondeur. On ne peut pas faire « ressortir » des éléments ni en faire l’expérience tactile. On dispose de deux dimensions pour agir sur la perception et créer des interactions. Plusieurs chercheur·se·s, designer et professionnel·le·s de la visualisation de données œuvrent sur la création de nouvelles formes visuelles pour diversifier les représentations possibles et pour trouver de nouvelles solutions pour visualiser des données. Le champs (encore jeune) de la matérialisation de données (*data physicalization*) propose une autre avenue, par la création « d’objets (artefacts physiques) dont la géométrie ou la matérialité *encode*[^2] des données » (Jansen et al. 2015, 2). La matérialisation amène ainsi une réflexion sur le rôle du sens du toucher dans la perception de données. Cette approche m’intéresse particulièrement pour le potentiel d’interactions que j’entrevois dans l’approche matérielle des données. Les données, qui semblent parfois immatérielles et/ou incompréhensibles pour les profanes, prennent une forme tangible. Dans l’actuelle fatigue qui peut être ressentie face à l’omniprésence des écrans, un objet, particulièrement lorsqu’il est issu d’une production manuelle ou artisanale, peut recevoir une attention plus élevée. L’interaction tactile amène aussi une implication physique, ce qui favorise un engagement actif dans la réception. <!--sources qqpart dans la thèse de Lean-->

De plus, un des catalyseurs de ce domaine porte sur les origines multiples et les apports de différentes cultures à l’histoire de l’encodage et de la transmission de l’information. Parmi les exemples populaires, on retrouve les bulle-enveloppes, des petits objets en argile employés il y a 6000 ans pour la comptabilisation de biens en Mésopotamie («&nbsp;Bulle-enveloppe&nbsp;», [Wikipédia](https://fr.wikipedia.org/wiki/Bulle-enveloppe)), ou encore les quipus (ou khipus), un système de consignation de données formé de cordes et de nœuds utilisé par l’administration de l’empire Inca et dont les traces remontent à 4500 ans («&nbsp;Quipu&nbsp;», [Wikipédia](https://fr.wikipedia.org/wiki/Quipu)). Il s’agit ainsi de reconnaître que les données – au sens d’informations enregistrées de façon à en «&nbsp;permettre le stockage, la transmission ou le traitement&nbsp;» («&nbsp;Donnée&nbsp;», [GDT](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8358482/donnee)) – n’ont pas été inventées avec les premiers ordinateurs, ni même par les bureaux de statistiques ou d’autres administrations au fonctionnement centré sur l’écriture. Face à l’amplification exponentielle de la place des données dans notre société, ce travail de reconnaissance historique vise notamment à décentrer le savoir occidental pour faire place à une diversité d’épistémologies. Les recherches en matérialisation de données se développent en ce sens&nbsp;: de nouvelles pratiques émergent en référence aux autres façons (historiques, culturelles) de penser et d’interagir avec les données. C’est pourquoi je souhaite mener une recherche-création pour explorer la matérialisation de données comme interface de contre-curation pour des données culturelles.

### Questions de recherche

La question qui animera ma recherche est la suivante&nbsp;: comment la matérialisation de données peut-elle offrir une nouvelle forme d’accès pour des données culturelles&nbsp;? Je mènerai cette recherche à partir de l’hypothèse selon laquelle la création de ces nouvelles formes d’accès passe par une posture interdisciplinaire, en pensant l’artisanat comme une technologie et la technologie comme une pratique artisanale. À la croisée des matérialisations de données et des œuvres ou expériences *sensation*nelles, je vais expérimenter avec la fabrication d’objets qui incorporent des données culturelles. Mon objectif sera de produire des objets qui présentent des récits alternatifs et offrent de nouvelles perspectives sur les collections représentées. 

Pour mener cette recherche, j’ai créé un protocole d’expérimentation [[document 1]](./protocole) qui fournit un cadre à ma pratique. Ce cadre me permet de placer la réflexion-dans-l’action (*reflection-in-action*), un terme proposé par le philosophe et urbaniste Donald A. Schon pour énoncer une posture dans laquelle « on réfléchit à ce qu’on fait pendant qu’on le fait » (1983: 54). Le protocole est divisé en trois étapes: 

<!--détailler chaque étape, prendre le temps d’expliquer les idées-->

<!--cadre pour penser l’artisanat comme une tech et la tech comme de l’artisanat. Comment est-ce qu’on pense comme ça (cadre théorique), comment est-ce qu’on le met à l’épreuve (protocole)-->

<!--expliciter en quoi le protocole aide à faire et réfléchir en même temps: attacher les fils entre les données et les expérimentations physiques; entre la théorie et le processus; entre l’écrit et le pratique,-->

<!--incertaine du terme symbolique: cherche une façon de dire que c’est connoté, contient une façon de voir le monde, **produit du sens**, contribue à la construction d’un récit-->

<!--Ces deux librairies, dédiées à la création de visualisations et de graphiques, feront l’objet d’une présentation plus étendue dans la section méthodologique car j’utilise *D3.js* et *P5.js* (la version en javascript de *Processing*) dans ma recherche.-->

1. *Faire des choix* est une étape qui sert à nommer les décisions et les partis pris dans l’élaboration d’un objet. Parmi les trois composantes principales, les **données** sont décrites pour déterminer le sujet à représenter ainsi que pour identifier la source ou l’institution qui les a produites. L’analyse du contenu s’effectue en parallèle du prétraitement des données, une étape préparatoire au cours de laquelle les données sources sont structurées pour former un jeu de données. Ce jeu de données passe ensuite par un **algorithme de représentation**. Cet algorithme lui-même un protocole, qui applique une logique visuelle et spatiale, basée sur une intention symbolique, avec une méthodologie algorithmique. Contrairement à la visualisation de données, cet algorithme est une sorte de partition, un plan de travail qu’il reste ensuite à activer dans une **expression matérielle**. La matérialité, dans les sensations qu’elle évoque et dans le geste même du travail de la matière, exprime également une ou des sens symboliques. L’ensemble de ces choix se fait de façon itérative. Les tâtonnements, les tests et les différentes versions font partie du processus de la recherche-création.
2. *(Dé-)montrer* questionne ce qui est présent lors de la mise à vue publique. Celle-ci requiert une forme d’aboutissement de la première étape, même si le protocole lui-même peut être utilisé de façon itérative. À cette étape, l’enjeu n’est pas simplement de montrer le résultat de la matérialisation de données. Il s’agit plutôt de produire une démonstration de la recherche-création. Pour expliciter son fonctionnement, son « mode d’emploi » et ses propriétés, l’objet doit être accompagné d’une sélection d’éléments qui rapportent les choix effectués et le processus suivi. La présentation publique est également le lieu de réception de la recherche-création. La réception peut être participative, au sens où les interactions pensées dans la matérialisation peuvent aller au-delà de l’expérience pour contribuer à l’élaboration de l’objet. Pour toutefois distinguer la présentation d’un projet de l’animation d’un atelier créatif, un cadre de participation est établi au préalable et lui-même présenté dans l’espace. Une question récursive se pose: les expériences vécues par les personnes présentes, leurs actions et leurs rétroactions peuvent-elles / sont-elles exposées elles aussi? <!--Mise en commun? Partager?-->
3. *Documenter* est intrinsèque aux deux étapes précédentes. Chaque élément doit pouvoir être mobilisé pour contribuer à la recherche. Cela requiert la production délibérée d’une documentation des composantes, des itérations, de l’exposition et de la documentation elle-même, c’est-à-dire l’emploi de ce protocole.
   <!--(ré)conciliation entre la physicalité et le numérique (l’écran)? Puisqu’il s’agit de rendre les données d’un musée accessible à des publics?-->

Observations à propos du protocole: 

- Ce protocole prend le parti qu’il n’y a pas de recherche-création sans monstration. Pour que la matérialisation puisse faire l’objet d’interactions, le protocole requiert une présentation ou une forme de partage direct avec un public. Elle peut toutefois se dérouler dans des contextes variés, d’une exposition dans une institution culturelle à un événement de vulgarisation ou de partage de connaissance. L’examen de synthèse peut ainsi être le «&nbsp;lieu&nbsp;» de la démonstration, et son jury le public. 
- Ce protocole est intrinsèquement algorithmique&nbsp;:
  - Il fournit des instructions qui peuvent être répétées <!--est-ce que le protocole vise aussi à être reproductible? (quelqu'un qui suit ta recette avec les mêmes ingrédients obtiendra-t-elle le même dessert que toi?)-->
  - Il définit des variables
  - Il a recours aux boucles et à la récursion
  - Il exploite les joies de l’aléa, dans les itérations comme dans la participation publique
  - Il doit être exécuté pour avoir un résultat
  - Il génère des traces et exige une documentation

Des questions connexes seront également abordées dans le cadre de cette recherche. D’une part, il s’agira d’évaluer l’utilisation d’un protocole pour mener une recherche-création. Son usage répété au cours de la thèse permettra un travail réflexif sur le protocole lui-même, sur son usage et sa pertinence pour la démarche envisagée. De l’autre, je considère les données produites par des institutions culturelles comme faisant partie des archives institutionnelles. Cela m’amènera à réfléchir aux méthodologies existantes pour étudier et pour utiliser ces données, en recherche ainsi que dans divers cadres de diffusion alternatifs.

<!-- refaire le pont vers la contre-curation de données et annoncer la suite (plan)? forme de la thèse: un processus qui fait retour sur lui-même en un mouvement de réflexion-dans-l’action.-->

## Représenter des données culturelles&nbsp;: état des lieux

La production d’un état des lieux pour cette recherche requiert en amont la définition de certains termes pour expliciter le sujet abordé.  La visualisation et la matérialisation de données sont toutes deux des façons de montrer et de donner accès à des données. Le terme anglophone «&nbsp;*display*&nbsp;» offrirait un bon point commun terminologique. Employé par Edward Tufte pour parler de «&nbsp;*designs for display of information*&nbsp;» (Tufte 2018, 191), ce terme dispose d’une polyphonie pour laquelle un équivalent francophone est difficile à trouver; il signifie autant la démonstration de quelque chose, que sa mise à vue ou son exposition (au sens muséal), son affichage (notamment à l’écran) ou son étalage (comme dans une vitrine). En l’attente de trouver une solution terminologique plus riche, je parlerai ici de représentation de données. Je préfère la représentation de *données*, par opposition au terme «&nbsp;visualisation de l’*information*&nbsp;» (*information visualisation*), car les données sont au cœur du processus de recherche. En effet, la façon de créer des représentations visuelles qui est à l’étude dans cette recherche est algorithmique. L’algorithme structure l’image de façon méthodique, elle donne la possibilité d’itérer des centaines voire des milliers de fois sur le résultat (Molnar 1986, s.p.). Il produit un résultat «&nbsp;*unique, carefully designed [and] data-specific*&nbsp;» (Tufte 2018, 179 <!--à retrouver selon notes zotero-->) tout en étant répétable et réutilisable. L’approche algorithmique, par opposition avec l’infographie, devient ainsi particulièrement intéressante pour une démarche expérimentale en recherche-création.

### Fondements et interdisciplinarité en visualisation de données

<img src="/home/lenamk/.config/Typora/typora-user-images/image-20250317181824723.png" alt="image-20250317181824723" style="zoom: 25%;" />

<!-- récit dominant, questionner si ça m’intéresse de contribuer à ressasser ce récit dominant-->

La littérature au sujet de la visualisation de données provient de différents domaines. *The Visual Display of Quantitative Information* du statisticien Edward Tufte est un ouvrage fondamental qui analyse des exemples historiques et contemporain à sa publication en 1983, tout en produisant des recommandations pour la production de graphiques. Au fil des éditions et des nombreux tirages de cet ouvrage, ses recommandations sont encore aujourd’hui au centre de ce que les concepteur·rice·s et enseignant·e·s de visualisation de données nomment les «&nbsp;bonnes pratiques&nbsp;». Tufte y définit un graphique de données comme la présentation (*display*) visuelle de quantités mesurées par l’usage combiné de points, de lignes, d’un système de coordonnées, de symboles, de mots, d’ombrages et de couleurs (Tufte 2018, 9). En tant que statisticien, Tufte définit les graphiques statistiques comme étant des instruments qui aident à raisonner à propos d’information quantitative  (Tufte 2018, 91). La *Sémiologie graphique*, dont les éditions également multiples (1967, 1973, 1998, 2005, 2013) attestent de l’usage en tant qu’ouvrage de référence, provient du cartographe Jacques Bertin. Dans cette théorie de la représentation graphique, Bertin différencie «&nbsp;la&nbsp;» graphique, comme image rationnelle, à la fois de l’image figurative et de la mathématique (Bertin 2013, 6). En distinguant l’information de sa représentation, il établit un système graphique pour décrire l’exercice de la transcription graphique selon l’expression de chaque composante et ses variations. Michael Friendly, statisticien formé en mathématiques et professeur en psychologie, a fait d’importantes contributions à l’histoire de la visualisation de données tout au long de sa carrière, du projet web *Milestones in the History of Thematic Cartography, Statistical Graphics, and Data Visualisation. An illustrated chronology of innovations by Michael Friendly and Daniel J. Denis* publié en 2001 à la publication de l’ouvrage *A History of Data Visualisation & Graphic Communication* avec Howard Wainer (2021).

Le design est un milieu qui contribue de façon importante aux références en visualisations de données, comme l’ouvrage *Design for Information: An Introduction to the Histories, Theories, and Best Practices behind Effective Information Visualizations* (Meirelles 2013). Son autrice, Isabelle Meirelles, a également contribué à la littérature en considérant les défis interdisciplinaires en visualisation de données (avec Kjærgaard, Meyer et Wong 2012). Le *Centre for Innovation in Information Visualization and Data Driven Design* dirigé par Sara Diamond expérimente avec ces enjeux, en rassemblant des artistes, des designers et des acteurs provenant des milieux des médias, des sciences humaines et des sciences sociales dans un partenariat de recherche interdisciplinaire (2011). Issu du milieu du design industriel, Manuel Lima a contribué des ouvrages sur la dimension socio-culturelle des visualisations en réseaux (2011), les arborescences (2014) et les cercles (2017)<!-- à confirmer-->. 

Du côté de l’informatique, la visualisation de données est considérée de façon double, d’une part comme théorie et de l’autre comme pratique. *Data Visualisation: A Handbook for Data Driven Design* d’Andy Kirk (2016) cherche à distinguer la pratique de la technique, en évitant l’écueil des outils pour se concentrer sur *the underlying craft of data visualisation through a tool-agnostic approach* (Kirk 2019, 4). *Better Data Visualisations: A Guide for Scholars, Researchers, and Wonks* (Schwabish 2021) prend quant à lui une approche plus encyclopédique, en effectuant une typologie détaillée avec plus de 500 exemples de visualisations. Il existe également un grand nombre d’ouvrages techniques, comme le *Handbook of Data Visualization* (Chen, Härdle et Unwin 2007) ou encore *Hands-On Data Visualization* (Dougherty et Ilyankou 2021). Ces ouvrages, publiés par des éditeurs spécialisés en science, en technologie et en informatique (Springer pour le premier et O’Reilly pour le second), sont des manuels qui transmettent la théorie par la production de solutions techniques. Certains se dédient spécifiquement à l’usage d’un langage ou d’une librairie de programmation, comme *Visualizing data* (Fry 2008) dont l’auteur a co-développé *Processing* ou *Interactive data visualization for the Web : an introduction to designing with D3* (Murray 2017) qui présente l’utilisation de la librairie *D3.js*. J’utilise ces deux librairies, *D3.js* et *P5.js* (la version en javascript de *Processing*), dans ma recherche car elles sont dédiées à la création visuelle et algorithmique.

*Critical Visualization* de Peter Hall et Patricio Davila (2023) est une publication plus thématique qui énonce les enjeux critiques sous-jacents à la visualisation de données, un aspect lacunaire ou manquant dans les nombreux ouvrages techniques. Les auteurs présentent un cadre conceptuel pour la production de visualisations critiques, en commençant par situer le fait que les décisions par rapport aux données et à leur représentation ne sont jamais neutres. Pour ce faire, ils relèvent l’importance de questionner qui a créé la visualisation, quand et pourquoi, mais surtout dans quel contexte culturel, avec quels systèmes de croyance et en se demandant qui est exclu (ou ce qui est exclu) dans la visualisation (Hall et Davila 2023, 14-15). Dans le chapitre «&nbsp;*Disruptive Histories*&nbsp;», Hall et Davila cherchent également à perturber les approches dominantes en visualisation et proposent une histoire alternative de la visualisation critique (2023, 45-75).

Parmi les exemples de visualisation de données culturelles, les thèses d’Olivia Vane (2019) et de Florian Kraütli (2016) – tous deux sous la direction de Stephen Body Davis, professeur en design au Royal College of Art – se démarquent par leurs recherches et leurs créations de visualisations spécialisées pour les collections muséales. Par le biais d’une approche de recherche appliquée collaborative (*practice-led and collaborative approach*), Kräutli produit d’abord huit prototypes à partir desquelles émergent des principes de design propres à la visualisation de données culturelles, puis 2 implémentations pour les mettre en pratique et démontrer comment ces outils peuvent contribution à la production de connaissances dans les collections culturelles. Alors que Kräutli travaille avec les professionnel·le·s des musées pour outiller leur travail avec les collections numérisées, Vane explore les visualisations comme moyen pour rendre les collections accessibles, découvrables et compréhensibles pour les publics. Elle présente ainsi un portefolio de cinq projets de visualisations réalisés dans des institutions culturelles comme des musées et des bibliothèques. Les contributions théoriques et appliquées de ces deux thèses offrent une base solide pour situer la visualisation de données consacrée aux institutions culturelles.

### Des données à leur représentation 

Dans la veine de la *Critical Visualization* de Hall et Davil (2023), il me semble essentiel d’avoir une approche critique des données&nbsp;: qui les a produites et à quelles fins, et quelle est notre posture par rapport à ces données&nbsp;? Dans *Graphesis: Visual Forms of Knowledge Production* (2014), Johanna Drucker propose de changer le vocabulaire, en soulignant que les données ne sont pas *données* mais *captées*. Ainsi, l’aspect constructiviste des graphiques se révèle en dépit de l’illusion de leur «&nbsp;simple&nbsp;» valeur quantitative. Le but est alors de créer des visualisations qui exposent le principe interprétatif du savoir au lieu de le dissimuler dans une prétendue objectivité (Drucker 2014, 128). Catherine d’Ignazio et Lauren F. Klein ajoutent une perspective féministe et intersectionnelle sur les données avec *Data Feminism* (2020). En situant l’éthique au cœur des sciences de l’information, les autrices mettent de l’avant des principes autour de l’identification et la remise en question des enjeux de pouvoir, la place de l’émotion, de l’affect et l’expérience incarnée (*embodiment*). Elles cherchent à déconstruire les biais dans les systèmes de classifications comme la binarité et les hiérarchies et proposent de cultiver une pensée plurielle dans la conception de modèles de données comme prévention contre la violence épistémique. La documentation prend également un rôle essentiel pour nommer et créditer les besognes trop souvent sous-estimées et invisibilisées, ainsi que pour révéler le coût réel et planétaire de la production de données. Mon utilisation de données et l’importance accordée à la documentation dans mon protocole s’inscrit dans les propositions de ces chercheuses.

Une approche davantage axée sur la matérialité des données est apportée par Julie Freeman dans sa thèse intitulée «&nbsp;Defining Data as an Art Material&nbsp;» (2017). En tant qu’artiste, elle y explore la définition, le rôle et l’emploi de données dans le *data art*  – une appellation proposée pour regrouper les pratiques artistiques utilisant les données comme médium. Étudier l’emploi de données dans des pratiques artistiques requiert un cadre d’analyse plus précis, ce qui a mené l’autrice a co-créer une taxonomie pour décrire les données qui servent de medium artistique (Freeman, Wiggins, Starks et Sandler 2018). Face à la grande variété de types de données, la classification permet d’expliciter ainsi ce qui est entendu par le terme «&nbsp;données&nbsp;», d’en définir la matérialité, la source, les principes (système de représentation) et les qualités (format, licence). Cette taxonomie émane des questions classiquement posée lorsqu’on étudie un médium artistique plus traditionnel: «&nbsp;*where it was made, who made it, where it is from, what does it comprise, who owns it, how does it need to be stored, does it transform or degrade?*&nbsp;» (Freeman, Wiggins, Starks et Sandler 2018, 76). J’emploierai cette taxonomie afin d’étayer la description des données mobilisées dans ma recherche, et pour voir si une forme de cette taxonomie pourrait décrire les « données culturelles ».

Cette veine matérialiste est amenée encore plus loin par Dietmar Offenhuber dans son ouvrage *Autographic design. The Matter of Data in a Self-Inscribing World* (2024). Le professeur du département d’art et de design à la Northeastern University remonte aux sources et aux manifestations matérielles à l’origine des données pour ensuite identifier les façons dont le monde s’inscrit lui-même, où l’environnement physique archive (conserve la trace) et traite de l’information (Offenhuber 2024, 5), comme les carottes de glace par exemple. Le design autographique est ainsi une pratique de monstration des conditions qui permettent aux traces d’émerger&nbsp;; il sert de guide pour leur interprétation, démontrant la causalité et la preuve qui y est contenue (Offenhuber 2024, 49). Je ferai appel à son analyse des opérations de design, comparant la visualisation de données au design autographique, tout en prenant en compte des pratiques alternatives comme la matérialisation de données, pour décrire les étapes de la création dans mon protocole.

### Survol des recherches et des pratiques en matérialisation de données

Le champ de la matérialisation de données étudie la façon dont les représentation physiques de données, créées avec l’assistance d’un ordinateur, peuvent soutenir la cognition, la communication, l’apprentissage, la résolution de problème et la prise de décision (*examines how computer-supported, physical representations of data (i.e., physicalizations), can support cognition, communication, learning, problem solving, and decision making*) (Jansen et al. 2015, 8). Parmi les chercheur·se·s les plus cité·e·s sur le sujet, Yvonne Jansen et Pierre Dragicevic sont particulièrement reconnus, avec l’article «&nbsp;*Opportunities and Challenges for Data Physicalization*&nbsp;» (Jansen et al. 2015), la thèse de Jansen (2014) et leur chapitre sur la matérialisation de données dans le *Springer Handbook of Human Computer Interaction* (Dragicevic et al. 2021). Iels maintiennent également la «&nbsp;[*Gallery of Physical Visualizations and Related Artifacts*](http://dataphys.org/list/gallery/.)&nbsp;» (Dragicevic et Jansen 2023). Également très actif sur le sujet depuis la même période, Trevor Hogan publie sa thèse «&nbsp;*Data and dasein*&nbsp;» en 2015 et il collabore avec Uta Hinrichs, Samuel Huron, Jason Alexander et Yvonne Janssen au numéro spécial de la revue *IEEE Computer Graphics and Applications* dédié à la matérialisation de données (Hogan et al. 2021). Ces publications sont des références fondamentales, citées presque systématiquement dans les autres articles sur le sujet. Parmi ces auteur·rice·s, Eva Hornecker, Trevor Hogan, Uta Hinrichs et Rosa Van Koningsbruggen viennent également de publier un vocabulaire de design de matérialisations de données, dans le but de produire un équivalent aux variables visuelles de Bertin (2013), applicable à la matérialisation de données (2024). Les références aux fondements de la visualisation de données, et particulièrement aux recherches de Jaques Bertin, sont récurrentes dans le domaine, allant même jusqu’à réexaminer et réactualiser ses propositions comme dans l’article «&nbsp;*Revisiting Bertin Matrices: New Interactions for Crafting Tabular Visualizations*&nbsp;» (Perin et al. 2014). 

Il existe également une littérature qui se concentre davantage sur certaines spécificités de la matérialisation de données. Certaines publications explorent par exemple les variables haptiques de la résistance et de la friction (Dullaert et al. 2024), ou encore vont au-delà de la surface matérielle pour expérimenter avec la *squishicalization* ou l’élasticité des volumes (Pahr et al. 2024). La fabrique des matérialisations de données revient également dans les publications&nbsp;: des étapes de production (*pipline*) pour créer différents types de matérialisations (De Freitas et al. 2022),  à ses défis actuels, notamment du passage de la théorie à la pratique (Sauvé et al. 2024) et aux moyens disponibles, comme en créant une boîte à outil pour construire et manipuler un diagramme de réseau (Pahr et al. 2025) . 

La terminologie employée pour décrire ces pratiques se décline également pour accentuer certaines caractéristiques[^3] 

- Trevor Hogan et Eva Hornecker emploient d’abord le terme ***data sensification*** (Hogan et Hornecker 2018) pour décrire la forme de représentation qui encode des données dans le comportement, la performance, les affordances et les expériences qui résultent d’une représentation de données. 
- Iels poursuivent dans l’idée d’aller au-delà du paradigme visuel avec la proposition du terme «&nbsp;représentations multisensorielles de données&nbsp;» (***Multisensory Data Representation***) (2016), terme également favorisé dans la thèse de Hogan (2016). 
- Les sculptures de données sont introduites dans les milieu académique par Jack ⁨Zhao⁩ and ⁨Andrew Vande Moere⁩ avec l’article *Embodiment in **data sculpture**: a model of the physical visualization of information* (2008). Doris Kominski et Douglas Thomaz de Oliveria décrivent la sculpture de données comme davantage centrée sur le processus créatif de négociation entre le concept et sa représentation matérielle (Kosminsky and Oliveira 2021, p. 65). <!-- a reprendre selon Greta Grip et Lee Jones-->
- Courtney Starrett, Susan Reiser et Tom Pacio distinguent quant à eux la ***data materialization*** de la *data physicalization* pour présenter le premier comme un «&nbsp;*workflow developed to create 3D objects from data-informed designs*&nbsp;» (Starret et al. 2018, p. 381). Iels effectuent une distinction entre la priorité accordée aux données en visualisation de données, en mettant davantage l’accent sur le design en *data materialization* [^4]. 
- Alice Thudt préfère, dans sa thèse, parler de «&nbsp;***visualization mementos***&nbsp;» car il s’agit de «&nbsp;*Visualizations of personally relevant data kept as reminders of  significant experiences and used for the purposes of reminiscing and sharing of  these experiences*&nbsp;» (Thudt 2018, xix). Cette proposition s’inscrit dans l’idée plus large du «&nbsp;***data craft** — the manual crafting of functional objects that incorporate personal visualizations — as an opportunity to create meaningful physical objects*&nbsp;» (Carpendale et al. 2017, p. 1)
- Ces propositions se rapprochent également de la fabrication des «&nbsp;***Data-Things***&nbsp;» de Bettina Nissen et John Bowers, qui souhaitent aller au-delà de la *data materialization* pour mettre l’accent sur le geste de traduction (2015). La notion de «&nbsp;traduction&nbsp;» (*data translation*) valoriserait davantage sur le rôle actif de la personne qui crée l’artefact et sa signification, alors que la matérialisation encouragerait une perception trop simplificatrice des processus encourus. (Nissen and Bowers 2015, p. 9)

J’emploierai, pour l’instant, le terme de «&nbsp;matérialisation de données&nbsp;». Je pense que ma définition et mon interprétation, ainsi que les références les plus influentes lors de l’étape de création, pourront ensuite m’aider à préciser ou à modifier ce terme pour décrire ma recherche-création.

Les recherches en matérialisation de données ciblent également des thématiques particulières, comme l’accessibilité, la mise en récit de données et la pédagogie. Tout un pan de la littérature aborde également les manières de *faire* (⁨Nissen⁩ et ⁨Bowers⁩ 2015; Forlini et al. 2018; Hinrichs et al. 2019; Berger et al. 2024a; Berger et al. 2024b)&nbsp;; celui-ci sera abordé dans la section qui présente le cadre théorique de ma recherche. Le potentiel pédagogique de la matérialisation de données est relevé par plusieurs équipes, lors d’ateliers créatifs destinés à des adultes (⁨Carmini⁩ et ⁨Wong, 2024) comme dans la conception d’activités pour les enfants (⁨Ambrosini⁩ et ⁨Meyer⁩, 2022). Laura Devendorf, Jordan Wirfs-Brock et Mikhaila Friske abordent la production de représentations matérielles de données (*physical data representations*) sous l’angle de la collaboration entre les matériaux, les données et les humains. Inspirée par la démarche présentée dans *Dear Data* (Lupi et Posavec 2016), leur expérience d’échanges d’artefacts les place à tour de rôle dans une posture de créateur·rice et d’interprète, soulignant la multiplicités des récits qu’un objet peut ainsi contenir (Devendorf et al. 2020). L’importance de l’interactivité et du récit est également au cœur de la proposition « *Narrative Physicalization: Supporting Interactive Engagement With Personal Data* » (Karyda et al. 2021). L’approche centrée sur l’expérience qui y est proposée permet aux participant·e·s d’interagir de façon physique et ludique avec leurs données, impliquant ainsi leurs corps dans la réflexion. 

Dans sa thèse, Marion Lean emploie également la matérialisation de données appliquées aux données personnelles, comme celles produites par des capteurs d’activités physiques et donc sur des données personnelles et (presque?) intimes (2020). Elle vise par ce moyen de connexion « physique », de contact avec les données à accroître la littératie numérique et particulièrement à rendre ces données qui nous concernent et nous décrivent plus tangibles. Les approches tactiles sont également utilisées pour concevoir des dispositifs de consultation et d’analyse de données pour des personnes aveugles ou malvoyantes (⁨Ebermann⁩ and ⁨Keck⁩ 2024; ⁨Pittarello⁩ and ⁨Semenzato⁩ 2024). Ce lien entre tactilité, multisensorialité et accessibilité provient notamment du design sensoriel (*sensory design*), la thématique centrale de l’exposition *The Senses: Design Beyond Vision* au Cooper Hewitt Smithsonian Design Museum (Lupton et al. 2018). La démultiplication des sens visés dans lors du design d’un objet permet de «&nbsp;recevoir de l’information, explorer le monde, ressentir de la joie, de la fascination et des connexion sociales, quelles que soient nos capacités sensorielles&nbsp;» (Lupton et Lipps dans Lupton et al. 2018, 9). Ellen Lupton et Andreas Lipps dénoncent ainsi la domination du sens visuel dans la production de connaissances occidentale, tout en valorisant le savoir sensoriel (*sensory knowing*) qui fait qu’un objet gagne en signification et en valeur par son expérience incarnée (Lupton et Lipps dans Lupton et al. 2018, 18). Cette approche du design augmente l’accessibilité, tant physique qu’intellectuelle, des objets produits. Les principes énoncés par Bruce Mau pour un «&nbsp;*all senses design*&nbsp;» (Mau dans Lupton et al. 2018, 21-23) feront donc partie de ma démarche. 

L’exemple en matérialisation de données le plus proche de mon sujet s’intitule *The Life of a Building* (2021-2022). Commanditée par la Galerie d’art d’Ottawa OAG (*Ottawa Art Gallery*), cette collaboration entre l’artiste textile Greta Grip et la chercheuse spécialisée en textiles électroniques, en fabrication et en pratiques artisanales hybrides (*hybrid crafts*), Lee Jones, s’est déroulée en deux parties. Tout d’abord, entre juillet 2021 et juillet 2022, une machine à tricoter matérialisait en temps réel l’achalandage physique et numérique de la Galerie. Par le biais d’un capteur à l’entrée du bâtiment ainsi qu’à travers l’utilisation d’un bouton virtuel présenté sur un microsite dédié, chaque visite déclenchait la production d’une rangée du tricot circulaire, tandis que le passage du temps était marqué mensuellement par le changement de couleur de la laine employée. En mai 2023, l’œuvre a été redéployée pour présenter cette fois le résultat de cette fabrication performative et participative, afin de mettre l’emphase sur l’observation et l’analyse des données ainsi recueillies. «&nbsp;*The data was hung from the ceiling in a way that individuals could see the data spread out*&nbsp;» (Jones et al. 2024, 9). Ce projet a également été le lieu d’une recherche-à-travers-le-design (*research through design*) sur la réception des matérialisations de données, présenté à la conférence internationale sur les Interactions Tangibles, Incarnées et Incorporées TEI (*International Conference on Tangible Embedded and Embodied Interaction*) et documenté dans les actes de la conférence (Jones et al. 2024). Les retours des participant·e·s ainsi que les remarques réflexives des artistes partagés dans cet article me seront particulièrement utiles pour mener la recherche-création ici présentée. La publication systématique des actes de colloques spécialisés comme celui-ci font état d’un domaine de recherche foisonnant et très diversifié. J’enrichirai donc progressivement l’état de la question entamé ici, en relevant plus particulièrement les articles en lien avec le milieu de l’art, au sujet de pratiques artisanales et textiles, ou encore liées aux autres thématiques abordées dans ma recherche comme l’accessibilité et la littératie numérique.

### Pratiques d’art, d’artisanat et de design qui incorporent des données [notes]

Depuis le début de mon doctorat, je documente les pratiques à la croisée de la textilité et de l’algorithmique sous la forme d’un [corpus d’œuvres et de projets](https://www.canva.com/design/DAGeuw-pplg/xXzotJr7T8XvWcPHvk2eSw/view?utm_content=DAGeuw-pplg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hef9b400c70). Ce corpus agit comme source d’inspiration et comme ensemble de références transdisciplinaires. Les trois exemples sélectionnés illustrent notamment le potentiel politique du contre-récit de données (ou de la contre-curation de données?) dans des pratiques dites «&nbsp;hybrides&nbsp;».

#### *Strata* (2018) d’Olivia Whetung

Olivia Whetung est une artiste anishinaabekwe et membre de la première nation de Curve Lake. Dans le cadre de l’exposition *Soundings*, Whetung joue avec les médiums et les données pour répondre à la question «&nbsp;comment une partition peut-être être un appel et un outil pour la décolonisation&nbsp;?&nbsp;» posée par les commissaires Candice Hopkins and Dylan Robinson («&nbsp;*Soundings: An Exhibition in Five Parts&nbsp;*» Belkins Art Galley, 2020). L’artiste invite tout d’abord le public de la galerie à verser des perles de différentes couleurs – mises à leur disposition dans des petits bocaux individuels – dans un pot mason. Une fois qu’il est rempli, Whetung s’en sert pour créer un perlage rectangulaire. Le motif est dicté par les actions aléatoires du public, puis est revisité comme notation musicale, une partition prête à être lue, jouée et interprétée des interprètes qui activeront les cloches de la tour horloge de l’Université de Colombie Britannique (UBC) («&nbsp;*Soundings:  Olivia Whetung and the Ladner Clock Tower Carillon*&nbsp;» Belkins Art Galley, 2020). Alors que les perles incarnent la tradition passée et présente de l’art et de l’artisanat autochtone, les cloches ont une symbolique double selon le musicologue Patrick Nickelson: symbole d’une communauté harmonieuse pour les colons, elles ont également été un outil de colonisation insidieux dans les pensionnats par exemple, en tant que signal sonore de la séparation des enfants avec leurs familles et leurs cultures (Patrick Nickleson dans «&nbsp;*Soundings: Olivia Whetung and the Ladner Clock Tower Carillon*&nbsp;» Belkins Art Galley, 2020). Les médiums choisis véhiculent une réflexion sur la matérialité et sur les outils de la colonisation et du processus de décolonisation. 

Les perles sont activées, tout d’abord comme des «&nbsp;données&nbsp;» générées par le public et à propos du public. Traces de sa présence dont l’assemblage témoigne de sa participation, elles passent ensuite du mode de l’écriture vers celui de la lecture. En devenant les partitions d’une trame sonore diffusée par la tour horloge, leg d’une famille de «&nbsp;pionniers&nbsp;», elles activent un contre-récit qui résonne à travers l’espace public en affirmant que le passage du temps est commun à tou·te·s («&nbsp;*Soundings:  Olivia Whetung and the Ladner Clock Tower Carillon*&nbsp;» Belkins Art Galley, 2020). Avec une approche «&nbsp;discrète&nbsp;», l’œuvre incarne et amalgame des données dans la participation comme dans sa diffusion publique, en la transformant et en les traduisant à travers différents médiums significatifs.

#### *Gaza thob collar* (2023) de Maya Amer

[TW: représentation visuelle du génocide palestinien, octobre 2023]

Le *tatreez* numérique réalisé par Maya Amer comporte une approche plus classiquement guidée par les données (*data-driven*). Les *tatreez* sont une forme de broderie traditionnelle palestinienne en points de croix. La créatrice palestinienne revisite cette forme d’artisanat et l’actualise à sa pratique d’animatrice graphique pour visualiser le nombre de victimes tuées à Gaza en octobre 2023 (Pontone 2023). Intitulé *Gaza thob collar*, chaque point de croix est une personne. Le code couleur distingue les hommes, les femmes, les garçons, les filles, et les personnes non identifiées. L’ensemble forme un motif inspiré par la tradition du *tatreez*, reprise comme medium artistique pour trouver une façon de communiquer le nombre de décès tout en rappelant l’humanité, la culture et l’histoire de chacun des 8005 individus. L’artiste exprime sur son compte Instagram que sa création est une façon de canaliser la rage et la frustration face à la violence (Amer 2023). En plus de l’animation graphique, elle partage le [motif](https://drive.google.com/file/d/1SfJ3zXKDx8DQeE1qIDHgM_ch3DpFcjfj/view) pour permettre à d’autres personnes de transformer leur frustration en art, tout en souhaitant que son projet mène à davantage d’éducation et à des mouvements sociaux solidaires pour un cessez-le-feu. Avec cette création, Maya Amer mêle sa pratique numérique à un savoir-faire artisanal pour créer une forme visuelle hybride qui lui permet d’exprimer un contre-récit sur la violence du génocide palestinien.

#### *To Make One Particle* (2025) de Pansee Atta

Pansee Atta mène actuellement un projet de recherche-création qui allie l’exploration de données culturelles à leur matérialisation pour leur médiation publique. En résidence au Tropen Museum dans le cadre du projet «&nbsp;*[Pressing Matter](https://pressingmatter.nl/): Ownership, Value and the Question of Colonial Heritage in Museums*&nbsp;», elle travaille et elle crée à partir des enjeux de retour, de réparation et de réconciliation des collections constituées durant la période coloniale, et plus précisément sur les restes humains conservés dans cette institution. Son intervention, intitulée *To Make One Particle*, a d’abord pris la forme d’une performance et d’un atelier organisé en 2024 pendant lesquelles, Atta, puis les participant·e·s, ont interrogé les principes de taxonomie dans la gestion des collections en essayant d’organiser et de réorganiser les 3968 onglets usinés par laser inscrits avec les informations dites «&nbsp;tombales&nbsp;»  à propos de chaque «&nbsp;entité&nbsp;» de restes humains conservée dans la collection. Une seconde intervention est prévue pour mai 2025 sous la forme d’une installation muséale pour l’exposition «&nbsp;[Unfinished past: return, keep, or, …](https://amsterdam.wereldmuseum.nl/en/whats-on/exhibitions/unfinished-past-return-keep-or)&nbsp;». Elle y présentera à nouveau ces onglets matérialisant les données de la collection. Ils seront accompagnés d’un dispositif tactile semi-transparent placé devant la fenêtre pour créer une forme de réalité augmentée visualisant les liens entre l’espace d’exposition et le parc visible à travers la fenêtre, en signalant l’emplacement d’où certains corps ont été exhumés pour intégrer la collection. En effet, le musée possède une aussi importante collection de restes humains notamment parce qu’il a été construit sur l’emplacement d’un ancien cimetière. L’expansion de la ville d’Amsterdam au début du XXe siècle a motivé le réaménagement du Cimetière *Oosterbegraafplaats* pour faire place à un parc, à un laboratoire d’anatomie et à l’Institut royal des Tropiques, anciennement «&nbsp;*Institution Colonial*&nbsp;» (présentation Pansee + [wiki](https://fr.wikipedia.org/wiki/Institut_royal_des_Tropiques) + [site du musée](https://www.kit.nl/about-us/our-history/)). 

> *This artistic research project makes visible the intertwined means through which human remains – local and global, White and racialized, living and deceased, contemporary and historical – are objectified and taxonomized by cultural institutions, yet leave troubling, intractable traces of their resistance which continues to haunt their sites* ([Atta 2025](https://sites.google.com/view/postcolonialhauntologies/day-2))

Cette résidence de recherche-création a donc non seulement été l’occasion pour Atta de faire des recherches avec les données, les archives et les restes humains de la collection, mais également d’en proposer une réinterprétation artistique qui invite à les ré-imaginer afin d’entamer le travail restaurateur (*reparative work*) d’une décolonisation globale ([Atta s.d.](https://panseeatta.com/index.php/about/)). La matérialisation permet de rendre compte de l’échelle du phénomène de collectionnement de restes humains par l’institution. Le processus de découpage et d’inscription au laser du papier compressé crée quant à lui des résidus matériels évoquant des cendres. Il en émane une odeur qui rappelle, selon l’artiste, les feux de camps. Face à la masse d’onglet et l’exercice de taxonomie présenté comme impossible ou, du moins, nécessairement en désordre, l’activité proposée incarne elle-même une sensation de chaos. Alors que les participant·e·s étaient invité·e·s à «&nbsp;laisser leurs marques&nbsp;», la manipulation des onglets imprégnait les participant·e·s à leur tour d’une fine particule cendrée, mutualisant le geste de la trace et traduisant l’affect en une forme sensible et visible. 

 <!--contre-récit: récit non-dit en tout cas-->



## Cadre théorique

Le cadre théorique que j’emploierai pour penser l’artisanat comme une technologie et la technologie comme une forme d’artisanat est centré sur la pensée textile d’Anni Albers

> La première spécificité des images textiles est d’être des images programmées (Soulard 2021, 260)
>
> Ce que montrent les textes d’Anni Albers est que les œuvres tissées 
>
> - sont des espaces de règles, de codes, et d’information
> - procèdent en réalité d’opérations logiques répétées, de processus structurels
> - relèvent tout autant d’une pratique d’ingénierie mécanique que du domaine artistique

<!--OG algo art? en construisant des images de façon programmée, on fait face à un problème textile!-->





> la concision et la précision du langage, l’idée qu’il faut revenir aux **fondamentaux d’une pratique**, définir une nouvelle « grammaire » artistique et visuelle, et que l’apprentissage doit se faire par l’expérience et un engagement direct avec les matériaux. 
>
> - **anthropologie** comme méthode moderne <!--échos avec Ingold-->
> - ouvre à des **questions transdisciplinaires**
> - considère le tissage dans sa double dimension, à la fois comme une catégorie d’objets et de techniques, et comme une méthode de pensée
>
> (Soulard 2021, 259)

#### deux artistes: Anni Albers et Vera Molnar. 

Chacune à sa façon, ces deux artistes théorisent le « faire » et, plus particulièrement, exposent les liens entre contraintes et libertés posées par la technicité dans leur processus de création.

> L’artiste-ingénieure est une figure qui permet de composer habilement avec les dialectiques technologique-artistique, individuel-universel, processus-produit et de rompre également avec la spécialisation des tâches tout en acceptant de participer au régime moderne de production (Soulard 2021, 261)







### Anni Albers

Anni Albers, née Annelise Else Frieda Fleishmann à Berlin en 1899 et décédée à Orange (Connecticut) en 1994, est une artiste, théoricienne et enseignante en arts textiles. Figure importante du Bauhaus, elle fuit les répressions antisémites et déménage en Caroline du Nord, où elle enseignera au Black Mountain College dès 1933. Première femme et première artiste textile à présenter une exposition solo au *Museum of Modern Art* (MoMA)  (<!-- article encyclo-->Yalzadeh et Kuiper 2025), elle publie également des ouvrages théorique sur le design (1959) et le tissage (2021 [1965]).

– 



















### Vera Molnar

Vera Molnar, née à Budapest en 1924 et décédée à Paris en 2023, fait partie des premier·ère·s artistes en art génératif [^8]. Formée en Beaux-Arts et créatrice de peintures abstraites, elle transforme sa pratique dans les années 60, à la rencontre de la pensée algorithmique et des premiers ordinateurs.



<!--Comment est-ce qu’on pense comme ça (cadre théorique), comment est-ce qu’on le met à l’épreuve (protocole)-->

<!--Ce qui fait que tu suis la ligne que tu t’est tracée pour faire émerger des éléments de réponse à ta question et vérifier ton hypothèse: comment la matérialisation de données peut-elle offrir une nouvelle forme d’accès pour des données culturelles? Je mènerai cette recherche à partir de l’hypothèse selon laquelle la création de ces nouvelles formes d’accès passe par une posture interdisciplinaire, en pensant l’artisanat comme une technologie et la technologie comme une pratique artisanale. À la croisée des matérialisations de données et des œuvres ou expériences *sensation*nelles, je vais expérimenter avec la fabrication d’objets qui incorporent des données culturelles. Mon objectif sera de produire des objets qui présentent des récits alternatifs et offrent de nouvelles perspectives sur les collections représentées. -->



### Faire (au sens artisanal)

Ingold:

- *Making: Anthropology, Archaeology, Art and Architecture* (2013) → à consulter (faire soi-même avec ses mains?)
- *The Textility of Making* (2010) → notes de lectures ok (textilité est une métaphore)

Faire avec un ordinateur

- Vitali-Rosati: *Éloge du bug* → fin des notes de lectures à numériser
  - relationship with technology (see it as a craft), playful bidouillage, beyond « utilitarian functionality » to learn, rethink, change perception
- Coleman *Coding Freedom*: hacking as making
- Simondon: *Du mode d’existence des objets technique* 
  - rapport entre humain et machine, rapport à la matière du technicien
  - rapport entre geste humain et geste machine, outil, inventivité

- Molnar *Eloge de l’ordinateur*

- school for poetic computation

- digital fabrication: reconsider digital fabrication within data translation activities as situated along an extended ‘trajectory of use’ in which reflective, meaningful ‘data-things’ can be created (Nissen and Bowers 2015)

- “how digital humanities can integrate data physicalization into the research process and how data physicalization is a form of critical making.” (Berger et al., 2024, pp. -)

- **data craft** et Thudt, Alice. 2018. “Visualizations for Personal Reflection and Expression.” Calgary: University of Calgary. http://hdl.handle.net/1880/106519.
  - as a way to create meaningful physical mementos based on digital records of personal and shared experiences” (Carpendale, 2017, p. 2) 

  - “Both the manual crafting process and the resulting physical artifact create opportunities for reflection and sharing memories.” (Carpendale, 2017, p. 4) 

  - “Focusing on the creation of functional everyday objects, data craft shapes opportunities to integrate personal digital data into everyday life where they can be serendipitously re-encountered and used together” (Carpendale, 2017, p. 4)


Artisanat

- Albers rapport à l’outil, la machine, le métier à tisser. Documenter, notation, …
- “people that partake in such activities tend to invest a certain meaning into the artifacts that they made themselves, which they might not do when confronted with something that was mass-produced” (Dragicevic et al., 2021, p. 19) “the manual creation and subsequent habitual use of self-made physicalizations of personal data can augment their perceived value and authenticity, and can thus spark various forms of individual or shared recollection [ ]” (Dragicevic et al., 2021, p. 20)
- + accessible “Data physicalization can also be considered as a useful fabrication activity in and by itself, as its transformative qualities can become relatively easily integrated in existing fabrication and craft activities, such as crochet and its allied practices, among many others [ ]. Several projects have demonstrated how physicalization can democratize the practice of information visualization by requiring less skills or expertise than its digital counterparts” (Dragicevic et al., 2021, p. 20)
  + “The recent focus on making reveals how data physicalization can be understood as a manifestation of data within a “trajectory of use”, which starts from before the first acquaintance with the data, over its actual design and physical fabrication, and ending in the hands of others, in the future [ ]. By considering data as a trajectory, one can recognize how people also make sense of data during the fabrication of visualization itself [ ], as physicalization makers make conscious decisions about how the data should be represented in order to evoke associations with experiences or people, to support activities that allow for episodes of reminiscing, or to encourage potential social interactions. Moreover, during the physicalization construction itself, aspects of data collection, construction and self-reflection can be deeply intertwined [ ] (see Figure -b for some concrete results). These qualities have been exploited during the process of hands-on physicalization making workshops in order to make principles of data representation more graspable [ ], or to push the creativity of students in visualization [ ]. Overall, research in personal physicalization fabrication has revealed a yet largely unexplored potential to represent more qualitative and subjective aspects that cannot yet be readily captured in data [ ]” (Dragicevic et al., 2021, p. 21)

Faire en étant située: 

- *Feminist in a Software Lab*, Tara McPherson→ notes de lectures à numériser
- *Data feminism* Catherine d’Ignazio et Laurent F Klein
- *Glitch feminism* → à consulter

Faire sans discipline? Myriam Suchet *Indiscipline*→ notes de lectures ok

Faire une interface

- interfaces poétiques







faire / critical making

- Berger, Claudia, Quinn Dombrowski, Nickoal Eichmann-Kalwara, Natalia Estrada, Kim Brillante Knight, Pamella R. Lach, Hideo Mabuchi, et al. 2024. « Making Research Tactile: Critical Making and Data Physicalization in Digital Humanities ». Dans *Dh+lib*. unknown. https://doi.org/10.17613/54pz-n026.
- Berger, Claudia, Nickoal Eichmann-Kalwara, Pamella R. Lach, et John E. Russell. 2024. « Play With Your Data ». https://doi.org/10.17613/9mza-6g95.
- Data physicality GLAM data, collection littéraires: rapport au texte matérialité&interprétation (sense-making) enjeux théoriques. Forlini, Stefania, Uta Hinrichs, et John Brosz. 2018. « Mining the Material Archive: Balancing Sensate Experience and Sense-Making in Digitized Print Collections ». *Open Library of Humanities* 4 (2). https://doi.org/10.16995/olh.282.$
- digital fabrication within data : Nissen, Bettina, and John Bowers. 2015. “Data-Things: Digital Fabrication Situated within Participatory Data Translation Activities.” In *Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems*, 2467–76. Seoul Republic of Korea: ACM. https://doi.org/10.1145/2702123.2702245.







## Suite 

### Utilisation du protocole

*comment je vais utiliser le protocole pour faire une thèse*

[Mise à l’épreuve du protocole](./protocole_MAC) avec les données de la collection du Musée d’art contemporain de Montréal. L’expérience a pour but d’alimenter la notion en cours de développement de contre-curation de données. Ce protocole met une emphase particulière sur la documentation des choix, des étapes et des itérations afin de rendre le processus aussi *tangible* que les données elles-mêmes.

- Données du MAC
- examen de synthèse comme contexte d’exposition ?!

### Format envisagé pour la thèse



exemples

- Data sketches
  - physicalisation du code? intérêt particulier comme forme de documentation 
- Dear Data
  - documentation d’une année, d’un processus d’échange

ajuster les attentes en termes d’autoédition, avec laquelle j’explore quand même un peu déjà

autoédition: Tufte, besoin pour la mise en page spécialisée 

permet de garantir l’arrimage texte-image









---

[^1]: Ce projet a pour point de départ le mémoire de maîtrise de Valentine Desmorat : *L’entrée des femmes artistes dans la collection du Musée d’art contemporain de Montréal, de 1964 à 2020 : analyses statistiques et facteurs déterminants*. Dirigées par la professeure Johanne Lamoureux (Université de Montréal), ces recherches ont été menées dans le cadre du Partenariat *Des nouveaux usages des collections dans les musées d’arts* (CIÉCO). La collaboration avec Lena Krause, dans son rôle de responsable de laboratoire à l’*Ouvroir d’histoire de l’art et de muséologie numériques* (Université de Montréal), a débuté à l’occasion de la clinique numérique du laboratoire.
[^2]: Traduction admise par l’OQLF: https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8375546/coder
[^3]: Caractères gras ajoutés par l’autrice pour mettre une emphase sur les termes employés
[^4]: À noter que la traduction que j’emploie pour « *data physicalisation* » comme « matérialisation de données » en français provient de la traduction proposée par l’[Office québécois de la langue française](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26577168/materialisation-des-donnees). 
[^8 ]: Le terme « art génératif » a longtemps servi à décrire l’art généré avec un ordinateur. Avec l’arrivée des IA génératives, le terme « art algorithmique » pour désambiguïser les deux formes de création.

