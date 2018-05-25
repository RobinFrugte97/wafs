# Web App From Scratch

#### Intro

My single page web app is about Marvel characters.

To get the marvel api, you have to create a developer account on the [marvel developer page](https://developer.marvel.com/)

[Prototype](https://robinfrugte97.github.io/wafs/app/index.html)

#### Microlibs

I've used two microlibs in my single page web app. I used the rendering engine Transparency.js to render the HTML pages with the api data. I used the routing engine routie.js to route everything within the single page web app.

- [Transparency.js](https://github.com/leonidas/transparency)
- [routie.js](http://projects.jga.me/routie/)

#### Interaction Diagram

![](https://github.com/RobinFrugte97/wafs/blob/master/images/VisualizedFlow.png)

#### Actor Diagram

![](https://github.com/RobinFrugte97/wafs/blob/master/images/MethodDiagram.png)

#### Features

Get an overview of Marvel superheroes and characters featured in the Marvel comics.
Every character has a detail page, containing a larger picture and the character name.

#### Usage

This is a single page web app. You need JavaScript for it to work properly.

#### Wishlist

The api provides information about comics and stories the characters starred in. I would like to display this in the future.
I would also like to filter correctly. At the moment it only filters if the user input is the same as any character name.

#### Sources

- [Transparency.js](https://github.com/leonidas/transparency)
- [routie.js](http://projects.jga.me/routie/)
- [Marvel Api](https://developer.marvel.com/)

## Advantages and disadvantages of JavaScript libraries/frameworks

Voordelen:
- Ontwikkeling gaat sneller omdat de developer gebruik kan maken van veel voorkomende kant en klare stukken code en middelen. (https://www.quora.com/What-are-the-pros-and-cons-of-JavaScript-frameworks) 
- Veel gebruikte frameworks en/of libraries voldoen aan bepaalde standaarden. De kans is groot dat de algemene standaard van het product bij gebruik van libraries/frameworks omhoog gaat. (https://www.quora.com/What-are-the-pros-and-cons-of-JavaScript-frameworks)
- Je kunt er veel toffe dingen mee maken die je zelf wellicht niet had kunnen maken.  (http://www.newthinktank.com/2010/05/javascript-frameworks/) 
- Frameworks zijn vaak gemaakt met meerdere browsers op het oog. Op deze manier kun je dus iets maken dat op elke browser hetzelfde zal zijn. (http://www.newthinktank.com/2010/05/javascript-frameworks/)


Nadelen: 
- Developers worden niet uitgedaagd om een functie van het product zelf te maken, of een probleem zelf op te lossen. Ze maken simpel weg gebruik van een librarie of framework, waarbij er veel minder creativiteit aan te pas komt. (https://www.quora.com/What-are-the-pros-and-cons-of-JavaScript-frameworks)
- een librarie kan overbodige onderdelen hebben voor een specifiek product, waardoor je performance minder zou zijn dan wanneer je precies hebt wat je nodig hebt qua code. (https://www.quora.com/What-are-the-pros-and-cons-of-JavaScript-frameworks)
- Frameworks kunnen erg ingewikkeld zijn, zeker voor mensen die niet veel van JavaScript af weten. (http://www.newthinktank.com/2010/05/javascript-frameworks/)
- Je moet je aan de eventuele nieuwe manieren van werken van frameworks en libraries houden. (http://www.newthinktank.com/2010/05/javascript-frameworks/)


## Advantages and disadvantages of client-side single page web apps

Voordelen:
- Alle elementen van de app worden client sided gerenderd in plaats van server sided. Dit is goed wanneer er heel veel gebruikers van de app zijn. (https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages) 
- Single page app websites zijn vaak heel reponsive. Er hoeven geen nieuwe pagina’s geladen te worden. (https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages) 
- Makkelijkere state tracking. Je hebt geen cookies, form submissions, locale opslag, sessie opslag of iets dergelijks te gebruiken, omdat alles uit één pagina bestaat. Je “ververst” je JavaScript niet. https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages)  
- Wanneer je binnen een single page app tussen pagina’s switcht heb je geen vertraging, omdat alle resources al een keer geladen zijn. (https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages) 

Nadelen:
- Er zijn security nadelen. Sommige beveiligingen hebben moeite om links te vinden omdat je hele app één dynamische pagina is. (https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages) 
- Alle resources van de app moeten gelijk in het begin geladen worden. Dit kan bij trage internetverbindingen erg lang duren. (https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages) 
- De gebruiker is verplicht om JavaScript aan te zetten om de applicatie te gebruiken. (https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages) 


## Best practices
...
