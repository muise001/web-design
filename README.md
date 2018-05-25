<img src="https://github.com/muise001/WebDesign/blob/master/Schermafbeelding%202018-04-26%20om%2010.41.59.png" alt="Schermafbeelding van de hoofdpagina van de website op tablet-formaat">
<a href="https://muise001.github.io/WebDesign/index.html">Klik hier om de oude site te bekijken</a>

# Web Design

Bij deze opdracht voor het vak "Web design", was het de bedoeling om een website te maken voor twee verschillende mensen. Een van de twee heeft een "Beperking", waardoor je de website heel accessible moest maken voor deze persoon.

Ik heb een website gemaakt voor onze Minor. Hierop krijg je meer informatie over de minor in het algemeen, specifieke informatie over de vakken en projecten en kan je het rooster bekijken.

### User Stories
 1. Mensen die geen muis hebben of kunnen gebruiken, moeten alsnog alle functionaliteit van de website kunnen gebruiken
 2. Studenten van de HvA die geïnteresseerd zijn in de Minor, moeten specifieke informatie krijgen over de vakken

## De Personen
  * **Marijn**
    * Marijn is spastisch geboren. Hierdoor is het moeilijk voor hem om met zijn muis het web te verkennen.
  * **Een student die geinterreseerd is in de Minor Web Development** 
    * De student wilt graag meer informatie over de Minor en zien wat andere studenten gemaakt hebben om te kijken of hij aan het niveau kan voldoen.
   
### Feedback van Marijn
**Algemeen**
 * gebruikt ook spatiebalk om te scrollen
 * gebruikt vooral de trackpad. Houd van grote knoppen
 * Marijn houdt niet van kleine knoppen
 * wilt meteen feedback na input
 * gebruikt tab eigenlijk alleen bij invoervelden

**Over Mij**
 * slideshow is een goed idee :)
 * beetje kermisachtig, wel cool 
 * hamburger menu is verschrikkelijk
 * kleuren zijn leuk
 * focus is cool
 * responsive tot 13-inch
 * rooster klopt niet
 * Rooster standaard width per vakje
    
## Accessibility
Om de website zo toegankelijk mogelijk te maken voor Marijn heb ik een aantal specificaties toegevoegd.
  * Grote knoppen
     * Door de knoppen groot te maken zijn ze makkelijk te raken met je muis of vinger (als je hem op telefoon bekijkt)
  * Custom Focus States
     * Aangezien de focus-state van Google slecht te zijn was op mijn pagina, heb ik hem er helemaal uitgehaald en voor     verschillende elementen custom focus-states gemaakt, waardoor het nog duidelijker is waar je op gefocust bent.
  * Slideshow
     * Als het aan Marijn ligt, zijn er zo min mogelijk knoppen op een pagina. Hierdoor heb ik ervoor gekozen om foto's niet in een scroll-bare `<div>` te zetten, met de knoppen "volgende" en "vorige". Maar heb ik een slideshow gemaakt. Hierin staan foto's van bijvoorbeeld de beste werken van studenten. Onder die foto's  staan titels over de foto's. Onder de slideshow staat een lijstje met dezelfde titels en een linkje naar de github-pagina die beste werken staan.
  * Sluit hamburgermenu
     * Stel Marijn bekijkt de website op z'n tablet met een toetsenbord. Hij tabt naar het hamburgermenu en opent die. Dan ziet hij vier opties. Met de laatste hiervan kan hij het menu weer sluiten. Dit is handig, zodat hij niet terug hoeft te tabben. 
  * Tabben binnen het rooster
     * Op de rooster-pagina kan je alle vakken bekijken. Helaas is het rooster vrij lang, dus valt hij buiten de pagina. Normaal zou je zijwaards kunnen scrollen. Voor Marijn is dit echter lastig om te doen. Om deze reden heb ik alle vakken en projecten binnen het rooster in een `<a>` gezet met een link naar het vak waarop hij gefocust is. hierdoor kan hij ook naar het einde van het rooster tabben.     
          
          
## Content inventarisatie 

<img src="https://github.com/muise001/WebDesign/blob/master/contentinventarisatie.jpg" alt="content inventarisatie">
     
