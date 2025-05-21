# Protocole: *Célébration de données molles*

Recette / instructions / notes de création



## Faire des choix



### Données

données de la collection du Musée d’art contemporain de Montréal: 

- publiées sur [données Québec](https://www.donneesquebec.ca/recherche/dataset/macrepertoire)
- utilisation de *[Œuvres de la collection en format JSON](https://www.donneesquebec.ca/recherche/dataset/macrepertoire/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5)* et de *[Artistes de la collection en format JSON](https://www.donneesquebec.ca/recherche/dataset/macrepertoire/resource/5869e16f-7034-40b3-bed1-2044594b4d14)*
- près de 8000 œuvres = ~90 % des œuvres acquises par le musée 
- familiarité avec la structuration et le contenu car travail préalable fait avec Valentine ([mémoire](https://papyrus.bib.umontreal.ca/xmlui/handle/1866/33193), [notebooks](https://observablehq.com/@artistes-femmes-mac?tab=recents))

exploration: 

- remarqué le champs `nationalité` type de case qui est toujours compliqué pour moi (japonaise, allemande, née à Genève en Suisse, vit et travaille à Montréal)
- également un champs peuple autochtones: envie d’explorer comment il est renseigné (accompagné d’un champs `nomOrthographeAutochtone` ) et de le valoriser (« célébrer » sa présence?)
- identité québécoise? 
  - tentative initiale d’y aller par lien territorial: personnes qui sont nées/décédées au Québec
  - sur recommandation de l’équipe du MAC: utilisation de la valeur `art contemporain québécois` qui sert à identifier la production artistique qui vient du territoire

travail préparatoire avec les données: 

- [notebooks de préparation](https://observablehq.com/d/0b27d535ee6fd61c?collection=@lenamk/exsynth)
  - annotation du code sur les origines: principe cumulatif initial (basé sur mon interprétation des données) + autoidentification participative (reste à trouver comment gérer/documenter celle-ci?)

- [notebooks d’exploration](https://observablehq.com/d/c144105c8ae2d8e1)
  - quantités: nombre de nationalités & œuvres associées
  - total pompons: 11170 (pour 7839 œuvres)
  - estimatlongueur de corde par année


problème d’échelle

- 12’000 pompons, 150 mètres de fil, ruban de 21 mètres pour 1992
- budget pour 12’000 pompons…
- physicaliser : grand vs monumental 
  - budget 
  - requiert un studio
    - espace de travail / organisation matérielle
  - requiert un espace de dimension muséale pour la monstration
- réduire l’échelle
  - fonctionnement incrémental? une catégorie à la fois
  - retirer les séries? → impact sur les estampes

index double: 

- [catégorie artistique + nationalité](https://observablehq.com/d/656be1badf98370e)
- catégories plus diversifiées? ~~retirer canadien et québécois dans une série de viz?~~
- viz pour décider

Techniques mixtes

- catégorie « fourre-tout » pour ce qui ne fitte pas dans les catégories (tombe bien avec le sujet)

  

### Algorithme de représentation 

<img src="/home/lenamk/.config/Typora/typora-user-images/image-20250331092502977.png" alt="image-20250331092502977" style="zoom: 33%;" />

[p5](http://lenamk.site/art-algorithmique/exSynth/) 

![beadCurtain_nbrs](/home/lenamk/pCloudDrive/My Documents/Doc/examenSythese/img/beadCurtain_nbrs.png)

scroll time for 1992



many ideas for online version

- switch between numbers for those with multiple origins, export gif?
- « swoosh » with mouse
- perl down flow: loop with order



sketches

- test with colors to get a feel for the result
- make a version for working (tool): pick year, pick element (pick up where you left off), arrow( or space bar) for next, highlight it?



### Expression matérielle

- tests : pompons 
  - célébrer les réponses multiples, pas être bloqué / devoir réduire
- doux (pas billes/perles malgré intérêt du son) → *soft computing* Faith Holland

![](/home/lenamk/pCloudDrive/My Documents/Doc/oeuvres/promo-Faith-Holland-Detumescence.jpg)

- recherches matériel: coûts, disponibilité, production, couleurs, …
  - contraintes de la quantité, les sacs de pompons mixtes ne garantissent pas le bon nombre de couleurs
  - prix élévés même sur Amazon, solution →TEMU :worried:
  - couleurs principales → origines
    - ~500 : canadienne, québécoise = deux couleurs principales, très souvent ensemble. Chercher des tons pâles, pastels, pour se fondre dans le décor
    -  < 50 : française, américaine, allemande
    - <10 : 25 autres. Couleurs vives pour attirer le regard, « célébrer la diversité »
  - tri des sacs mixtes pour trouver les couleurs à associer: exercice très difficile, influence des drapeaux ou des associations pré-existantes (orange pour les Pays Bas), certains biais (Britannique, Russe )
  - les pompons prennent vraiment vite la poussière!

structure: 

- initialement prévu pour un rack à vêtements (forme comme un cadre tout en servant de support, mais serait trop long (150 pouces = 12.5 pieds, ~4 mètres)
- pour faire une structure sur mesure: PEX + jointures de plomberie
- recouverte d’un fil de masson (doux, mais solide) ~tressé avec les anneaux pour accrocher les « guirelandes » des années
- plusieurs essais pour les fils: doit être suffisamment fin pour passer aisément dans les pompons mais assez solide. Couleurs/visibilité → doré (DMC métallisé PR-CL 077540142705), discret mais célébratoire
- accrochage
  - pour créer des paires/triplets de pompons avec une perle: inspirée par une technique de perlage, repasser dans la perle pour « aligner » l’objet
  - crochet (type bijou) pour l’accrochage: permettrait de décrocher la guirlande/année
  - prochaine fois: acheter du matériel de meilleure qualité (Kava), grosse perte de temps et d’énergie, possibilité de trouver avec une esthétique similaire mais plus solide

- installation ok mais le poids fait des courbes dans la structure: curieuse de voir la répartition finale du poids

fabrication: 

- [interface pour la fabrication](http://lenamk.site/art-algorithmique/making_donneesMolles/)
  - [vue par année](http://lenamk.site/art-algorithmique/making_donneesMolles/?year=1982) (URL): ajout des noms et titres des œuvres pour savoir ce que c’est
    - pas d’interaction (clic vers MACrépertoire) par manque de temps
  - [légende](http://lenamk.site/art-algorithmique/making_donneesMolles/legende) (pour l’attribution des couleurs)
- comment ne pas emmêler les guirlandes (pendant la fabrication; pendant le transport)? bricolage d’un système de rangement
- progression: je pensais devenir plus efficace avec le temps mais finalement, j’ai l’impression que la fatigue me rend imprécise et que je fais plus d’erreurs (fils emmêlés, mauvais réflexe d’attacher un anneau quand il n’y en a pas besoin)

idées de titre

- soft data celebration : célébration de données molles ou célébration douce de données? 
- soft data:   pompons, tactilité, douceur, *Soft computing* Faith Holland
- célébration: guirlande, ludique, coloré, célébratoire / approche positive, se réjouir. Jeu sur le terme employé souvent lors de tokenisation (« célébrer la diversité »)



Défi de la fabrication: 

- temps requis, nombre de nœuds
- anneaux pour connecter les pompons et pour l’accrochage: matériel acheté à la boutique à côté → cheap, mal alignés, qu’il faut corriger ou risquer que le fil se défasse dans l’anneau…
- organisation: boîte pour les pompons récurrents, liste pour la vingtaine de cas particuliers

<div style="page-break-after: always; break-after: page;"></div>

## Dé-montrer

C-2086, salle suffisamment grande et peu utilisée. Permanence pour faciliter l’organisation des visites

- résultat matériel + contexte (tapis): j’aurais aimé ajouter un coin canapé pour lire, se reposer, bricoler confortablement

- processus => documentation

  - livres, références, examen écrit
  - données
  - algorithmes
  - captures d’écrans et exports d’essais visuels
  - expérimentation matérielle : prototypes
  - ordinateur et deuxième écran pour montrer les contenus interactifs, aller voir les données, et sert d’espace de travail pour la permanence

- [meta] exposition =? documenter+exposer le processus d’exposition 

  - montage le 20 mai (université fermée le 19 car ferié), gens qui ont vu/participé au montage

  

Partage humain

- réception, expérience: invitation à laisser un mot 
- rétroactions avec une documentation participative
- coin bricolage pour ceux·celles qui voudraient essayer

<div style="page-break-after: always; break-after: page;"></div>

## Documenter

Fabrication

- photos des étapes et des matériaux
- erreurs dans le code: 
  - Christian Knudsen n’est pas dans l’index avec les origines, canadien né au danemark, produit de l’art contemporain québécois (1979, 1985). Plus de couleurs pour le Danemark
  - Christo et Jeanne-Claude: mauvaise gestion des collectifs dans le code, américains les deux mais Christo est aussi bulgare? (plus de couleurs anyway)

Démo

- toutes les choses imprimées: les annoter au fur et à mesure des conversations / démonstrations pour garder une trace de ce que je voudrais ajouter / compléter 
-  journal des visites

Documentation 

- difficulté à trouver le ton, reste un « tas de notes » pour le moment
- pas évident de rassembler les photos prises au fur et à mesure des étapes
- beaucoup de liens, d’idées: essayer de tout inscrire ou faire des choix dans ce qui est documenté? 
