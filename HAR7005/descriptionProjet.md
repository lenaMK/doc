---
Title: Brève description d’étude de cas
Author: Lena MK
Date: 09-10-2023

---

# Brève description d’étude de cas

Lena Krause

Séminaire HAR7005, travail remis le 10 octobre 2023

## Étude de cas

L’entrée des femmes-artistes dans l’espace public. 
Cartographier des œuvres pour penser une contre-histoire de l’art dans l’espace public

### Contexte de la recherche

Le travail ici proposé s’inscrit dans le cadre du projet de recherche « Vers un commun numérique de l’art public » de la Maison MONA, porté par Julie Graff, Camille Delattre, Alexia Pinto Ferretti, Simon Janssen et moi-même. Au sein de ce [grand chantier sur l’art public et sa visibilité dans l’espace numérique](https://www.wikidata.org/wiki/Wikidata:WikiProject_Maison_MONA_/_Vers_un_commun_num%C3%A9rique_de_l%27art_public), nous avons notamment travaillé sur l’identification et le référencement des artistes actifs en art public au Québec dont au moins une œuvre est recensée dans la base de données MONA[^1]. Ce travail d’identification requiert, pour chacun·e 783 artistes actuellement dans notre base de données, une recherche à leur sujet et la réconciliation avec un identifiant Wikidata s’il en existe un. À l’heure actuelle, ce projet inclut déjà quelques [premières visualisations](https://observablehq.com/@maison-mona/analyse-resultats-reconciliation-wikidata) pour analyser les contenus, avec par exemple la répartition chronologique des 1500 œuvres avec une coloration par genre associé. La présente proposition d’étude de cas est un prolongement et un approfondissement des recherches de la Maison MONA, dont la suite des recherche est d'avantage  orienté sur une approche qualitative et centrée sur le contact avec les artistes, ainsi que sur un certain nombre d’expérimentations techniques avec la technologie des données liées. Le périmètre du projet parent ne permettrait donc pas de continuer la recherche sous l’angle quantitatif et comparatif ici proposé. 

Cette étude de cas fait également partie des recherches pour mon mon projet de thèse en recherche-création intitulé « Cultures interactives. La visualisation de données culturelles comme contre-curation des collections ? ». Ce projet propose d’expérimenter avec des créations visuelles numériques pour offrir une nouvelle forme d’accès aux données culturelles. À l’heure de la mise en données de collections par des institutions muséales et patrimoniales, ma recherche vise à démontrer l’usage de la contre-curation et de la visualisation interactive pour offrir une approche esthétique, sensible et non-hiérarchique des contenus culturels. La production de graphiques ou de nouvelles formes visuelles permet non seulement de produire des représentations de collections, mais aussi, dans le cas de visualisations interactives, de découvrir leurs contenus. De façon complémentaire à la médiation et à la curation, il devient possible de faciliter une forme d’accès aux collections caractérisée par la sérendipité et une approche sensorielle. 

Dans ma thèse, je souhaite également mettre à l’épreuve le processus de recherche-création pour créer de nouvelles formes visuelles destinées à la valorisation et la libre exploration de ces collections. Renouveler les présentations et les représentations des collections comporte une forme de contre-curation (*counter-curation*) (Kathke, Tomann, et Uhlig 2022), notamment en déjouant certaines normes de visibilité et certains effets de pouvoir qui discriminent la découvrabilité des contenus culturels : domination des œuvres et des récits masculins coloniaux normatifs, ou encore excès de visibilité médiatique accordée à certains artistes au détriment des autres. Si le potentiel de la contre-curation demeure contraint par le contenu des collections, il présente tout de même un processus expérimental pertinent pour proposer d’autres lectures et récits (*counter-narratives*) à partir des données de collections (Kathke, Tomann, et Uhlig 2022, 75-76). C’est à l’intersection du projet de la Maison MONA et de mon projet de thèse qu’émerge donc cette étude de cas.

[^1]: La base de données MONA a été conçue initialement comme source de données pour l’application MONA. Cette base fédère des collections d’art public pour permettre leur médiation *in situ* avec une application mobile.

### Corpus

Le corpus de cette étude est composé des œuvres d’art et des artistes rencensé·e·s dans la base de données MONA. Ce sont donc des données, c'est-à-dire une description de ces œuvres et de ces artistes qui est formatée pour le traitement informatique. Les 1528 œuvres d’art sont décrites avec des informations que l’on retrouverait habituellement sur un cartel, comme par exemple le titre, le·s artiste·s, la date de production et la technique, mais aussi la géolocalisation. Les 781 artistes étaient initialement très peu renseignés, avec seulement quelques liens vers des sites web ou réseaux sociaux de l’artiste et une distinction faite entre les artistes individuels et les collectifs. Le travail de recherche mené par Camille Delattre et la Maison MONA avait pour but d’identifier des artistes qui ne sont pas encore présent·e·s dans Wikidata, et d’en sélectionner selon les critères visés par l’équité pour la création de leurs identifiants dans le web de données liées. Camille a donc notamment renseigné  ─ pour chaque artiste dans MONA et au meilleur de ses connaissance au moment de ses recherches, de juillet à septembre 2023 ─ un indicateur potentiel (*hint*) pour leur identité de genre. Il s’agit donc bien d’une indication et non d’une affirmation de l’identité de genre de chacun·e des artistes, et c'est dans la suite du projet de recherche que nous prévoyons la prise de contact et l’échange concerté avec les artistes concerné·e·s. L'indication de genre ainsi renseignée provient d’un état de fait médiatique (dans leurs biographies de galeries, d’expositions ou sur leurs sites web personnels) à leur propos.

Les balises chronologiques placent la date de création de la [première œuvre dans MONA](https://artpublicmontreal.ca/oeuvre/statue-damphitrite-epouse-de-poseidon/) à 1750 même si son arrivée sur le présent territoire est beaucoup plus tardive. Les œuvres les plus récentes sont datées de 2022. La très grande majorité du corpus se situe entre 1960 et aujourd’hui. Les balises géographiques sont celles du territoire actuellement reconnu sous le nom de la province du Québec. Ce territoire est drastiquement marqués par l’histoire coloniale et les œuvres d’art qui s’y trouvent en sont largement issues. Les approches décoloniales sont transversales aux réflexions et aux recherches que je mène et que nous menons avec la Maison MONA: elles se traduisent par une reconnaissance, un temps de réflexion et un soin apporté dans les méthodes de travail, qu’elles se situent au niveau des données, des œuvres, des artistes, des institutions ou des publics. 

## Approche 

Pourquoi et comment cartographier des œuvres pour penser une contre-histoire de l’art dans l’espace public?

### Anayse des données

Je voudrais commencer par un état des lieux, statistique et analytique, en ce qui concerne le corpus. Il s’agit de comprendre les mécanismes institutionnels qui sous-tendent la construction de ce que nous appelons ici art public dans les 50 dernières années. L’approche quantitative et statistique offre un regard analytique sur un phénomène que je souhaite étudier à l’échelle institutionnelle plutôt qu’individuelle.

Ensuite, je souhaite mettre en lumière la production de femmes-artistes dans ce corpus, d’une part avec une analyse propre à cette production et d’autre part avec une approche comparative entre les genres. Voici quelques questions qui motivent cette analyse: 

- Quelle a été la première œuvre d’art public réalisée par une femme et de quand date-t-elle? 
- Combien de temps a-t-il fallu pour atteindre 10, 25, 50 œuvres par des femmes vs par des hommes?
- Quand est-ce que la présence de femmes-artiste s’est-elle "normalisée"?
- Où se situent les œuvres des femmes-artistes en art public? 

L’intérêt de ces questions n’est probablement pas la valeur littérale de la réponse, mais d’avantage le changement de perception qu’on peut opérer et la proposition d’autres récits actuellement marginalisés par l’histoire. Ce processus de réflexion cherche autant à comprendre les biais qu’à rendre une épaisseur (thickness) à l’histoire, en rendant visible autre chose que la majorité et la norme. En investissant les marges, peut-on raconter ce qui n’a pas été raconté, et proposer une contre-histoire?

### Limites de la recherche

Le contexte de cette recherche se limite à l’envergure de la base de données MONA. Cela signifie que les réponses apportées ne sont pas "vraies" au sens universaliste, mais plutôt qu’elles le sont pour le contexte étudié, avec les données dont nous disposons. La représentativité de ce jeu de données me semble justifiée notamment parce qu’elle comprend l’ensemble de la collection du bureau d’art public de la ville de Montréal, institution officielle d’art public sur l’île, ainsi que des données d’autres collections d’art public telles que celles des quatre universités.

## Format : cartographies

La cartographie est à la fois un opérateur théorique, un outil graphique, une forme d’analyse et une manière de penser (Besse 2010:  217). Elle me permet donc d’aller au-delà des statistiques pour proposer une contre-histoire de l’art dans l’espace public, celui réalisé par des femmes. Le travail cartographique est prévu sur deux temps. Un premier programmatique, dans lequel j’utilise la librairie de code d3.js pour créer une carte interactive centrée sur Tiohtià:ke/ Montréal (selon le temps, je créerai d’autres petites cartes pour les autres lieux avec plusieurs œuvres, comme à Rimouski ou aux îles-de-la-Madeleine). Accessible sur le web, celle-ci servira à visualiser et à explorer les œuvres qui s’y trouvent. Elle sera aussi une base pour le second temps, le travail de cartographie manuel. Par cela, j’entends une forme de cartographie exploratoire, moins centrée sur les données et d’avantage pensée à partir du récit que je souhaite produire. Je m’intéresse au travail de petites mains, particulièrement avec les médiums textiles, et à la matérialité de la carte car ces deux critères me permettent de produire d’autres façon de penser et d’explorer d’autres formes visuelles, sans la contrainte de l’innovation technique avancée requises pour le faire programmatiquement. 

## Références

Besse, Jean-Marc. 2010. « Approches spatiales dans l’histoire des sciences et des arts, Spatial approaches in the history of science and art ». *L’Espace géographique* Tome 39 (3): 211‑24.

Kathke, Torsten, Juliane Tomann, et Mirko Uhlig. 2022. « Curation as a Social Practice: Counter-Narratives in Public Space ». *International Public History* 5 (2): 71‑79.Consulté le 7 septembre 2023 . https://doi.org/10.1515/iph-2022-2046.