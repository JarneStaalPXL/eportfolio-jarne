<template>
    <section>
        <h1 class="font-bold">Seminarie: IT-Licious</h1>

        <p>
            Deze seminarie was zeer verrijkend en sloot perfect aan bij mijn
            doelstellingen om mijn kennis in cross-platform development te
            vergroten. Het bood diepgaand inzicht in Flutter's efficiënte "write
            once, run anywhere"-model dankzij de Skia/Impeller rendering engine en
            een uitgebreid pakket van herbruikbare components. Deze aanpak bespaart
            tijd en kosten, wat cruciaal is in de snel evoluerende technologische
            wereld.
        </p>

        <p>
            Mijn persoonlijke doelen waren het verbeteren van mijn
            programmeervaardigheden, het uitbreiden van mijn netwerk binnen de
            Flutter-community, en het toepassen van deze kennis in toekomstige
            projecten. De interactie met experts en de hands-on app-building sessie
            waren bijzonder waardevol, en hebben mij het vertrouwen gegeven om deze
            tools effectief te gebruiken in mijn toekomstige werk.
        </p>

        <p>
            Het doel van deze seminarie was om te demonstreren hoe snel en efficiënt
            applicaties geschreven kunnen worden met behulp van Flutter, een
            toonaangevend framework voor cross-platform development. Aan de hand van
            praktijkvoorbeelden en een diepgaande theoretische onderbouwing kregen
            de deelnemers een grondig inzicht in de mogelijkheden van deze
            technologie.
        </p>

        <p>
            De seminarie begon met een uitgebreide uitleg over de theoretische
            achtergronden van cross platform development. Het belang van het kunnen
            gebruiken van één enkele codebase om applicaties te ontwikkelen die
            naadloos werken op iOS, Android, web en desktop platforms werd
            benadrukt. Deze benadering is niet alleen kostenefficiënt maar bevordert
            ook een snellere ontwikkelingscyclus en vereenvoudigt het onderhoud van
            applicaties.
        </p>

        <p>
            Vervolgens namen we een 'deep dive' in Flutter, waarbij specifiek werd
            ingegaan op de werking van het framework en de vergelijking met andere
            populaire frameworks. Een sleutelelement van Flutter is de eigen
            rendering engine, genaamd Skia/Impeller, die bekend staat om zijn hoge
            prestaties en efficiëntie. Dit stelt ontwikkelaars in staat om soepele
            en visueel aantrekkelijke interfaces te creëren. Ook werd de
            functionaliteit van 'hot reload' gedemonstreerd, een feature die
            ontwikkelaars de mogelijkheid geeft om wijzigingen in de code direct te
            zien zonder de applicatie opnieuw te moeten starten.
        </p>

        <p>
            Een hands-on sessie volgde waarbij de deelnemers zelf een eenvoudig
            scherm bouwden met Flutter. Hierbij werd de nadruk gelegd op de
            bouwstenen van een Flutter-app: alles bestaat uit widgets die samen een
            'widget tree' vormen. Deze tree is onveranderlijk, wat betekent dat
            widgets niet direct veranderd kunnen worden nadat ze zijn gecreëerd.
            Veranderingen in de interface worden beheerd via state management,
            hoofdzakelijk gerealiseerd door de setState() methode.
        </p>

        <p>
            De diverse widgets die Flutter biedt werden uitvoerig besproken. We
            bekeken standaard UI widgets, layout widgets, containers en content
            widgets, en verkenden geavanceerde widgets zoals GestureDetector voor
            touch interacties, Draggable voor drag-and-drop functionaliteiten, en
            FutureBuilder voor het werken met asynchrone data. Deze rijke selectie
            aan ingebouwde widgets versterkt de flexibiliteit en kracht van Flutter.
        </p>

        <p>
            Een van de grootste voordelen van Flutter, zoals tijdens de seminarie
            werd toegelicht, is dat ontwikkelaars in staat zijn om een uniforme en
            hoogwaardige gebruikerservaring te bieden op alle ondersteunde
            platforms. Dit 'write once, run anywhere'-principe is bijzonder
            waardevol in een tijd waarin mobiele apparaten, desktops en web
            interfaces moeten samenwerken om een coherente gebruikerservaring te
            bieden.
        </p>

        <p>
            Daarnaast werden voorbeelden getoond van prominente organisaties die
            Flutter gebruiken, zoals CovidSafe, AliExpress, en Google's eigen
            platforms zoals Stadia en Home Hub. Deze casestudies illustreerden hoe
            Flutter wordt ingezet in diverse sectoren, van e-commerce tot
            entertainment en smart home technologieën, en gaven inzicht in de
            veelzijdigheid van het framework.
        </p>

        <p>
            De sessie eindigde met een discussie over de community rond Flutter. Er
            zijn talrijke community packages beschikbaar die ontwikkelaars kunnen
            gebruiken om functionaliteit snel toe te voegen aan hun applicaties
            zonder alles vanaf nul te moeten opbouwen. Deze packages worden
            ondersteund door een actieve en betrokken community van ontwikkelaars,
            wat het eenvoudiger maakt om problemen op te lossen en nieuwe features
            te implementeren.
        </p>

        <p>
            De seminarie was een overtuigende demonstratie van hoe Flutter's rijke
            set aan features en zijn cross-platform capaciteiten het een ideale
            keuze maken voor moderne applicatieontwikkeling. De deelnemers verlieten
            de sessie met een diepere waardering voor wat mogelijk is met Flutter en
            hoe het hen kan helpen sneller en effectiever te ontwikkelen.
        </p>

        <p>
            We ontvingen van de sprekers op het einde van de seminarie de opdracht
            om een ToDo-applicatie te creëren met behulp van Flutter, waarbij deze
            app op alle platforms zou moeten functioneren. Het doel was om een
            applicatie te ontwikkelen met de naam "IT Licious", uitgerust met een
            lijst component die alle ingevoerde ToDo's weergeeft.
        </p>

        <p>
            In deze applicatie werd een invoerveld geïmplementeerd samen met een
            'Add'-knop. Zodra gebruikers op deze knop klikten, werd het ingetypte
            item naar het lijst-component gestuurd, wat een automatische vernieuwing
            van de gebruikersinterface initieerde om de nieuwste items direct te
            tonen.
        </p>

        <p>
            Daarnaast was het essentieel dat gebruikers ook ToDo's konden
            verwijderen. Hiervoor voegden we een verwijdericoon toe naast elk item
            in de lijst, dat dynamisch gerenderd werd. Deze functie stelde
            gebruikers in staat om met gemak ongewenste ToDo's uit hun lijst te
            verwijderen, wat bijdroeg aan de functionaliteit en het gebruiksgemak
            van de applicatie.
        </p>

        <!--Image of app-->
        <img srcset src="../../assets/itliciousapp.png" alt="IT Licious App" width="100%" />
        <!--Image of code-->
        <img srcset class="mt-5 mb-10" src="../../assets/itliciouscode.png" alt="IT Licious App" width="100%" />

        <p>Het avontuur met de ToDo-applicatie "IT Licious", ontwikkeld tijdens onze seminarie met behulp van
            Flutter, was een verrijkende ervaring die mijn vaardigheden in mobiele applicatieontwikkeling
            aanzienlijk heeft versterkt. Deze opdracht gaf me niet alleen de kans om te werken met Flutter, een
            platform dat ik door eerdere projecten zoals een Tinder-kloon reeds kende, maar het liet me ook de
            directe vergelijkingen zien tussen Flutter en andere ontwikkelingsframeworks zoals Java en C#.</p>

        <p>Flutter bleek een uitstekende keuze voor het creëren van cross-platform applicaties. Dit is iets wat ik
            zelf kon bevestigen na de succesvolle implementatie van onze Tinder-kloon in dit framework, waarvoor we
            een perfecte score van 20/20 behaalden. Deze ervaring heeft mijn voorkeur voor Flutter versterkt,
            ondanks enkele van zijn beperkingen.</p>
        <p>Een aspect van Flutter dat ik bijzonder uitdagend vind, is de complexiteit die komt kijken bij het
            structureren van de lay-out. Hoewel dit platform veel flexibiliteit biedt, kan de lay-out creatie soms
            omslachtig zijn vergeleken met eenvoudigere methoden zoals die in HTML. Dit is een gebied waarin ik denk
            dat verbetering het gebruiksgemak sterk zou kunnen bevorderen.</p>
        <p>Bovendien heb ik gehoord dat Flutter niet altijd optimaal presteert op alle apparaten vanwege zijn
            afhankelijkheid van een rendering engine die niet native op het systeem draait. Dit kan leiden tot
            prestatieproblemen op minder krachtige apparaten, wat een punt van overweging is voor ontwikkelaars die
            willen dat hun applicaties universeel goed presteren.</p>
        <p>Desondanks, toen de keuze voor het Mobile Development project viel tussen Flutter en Kotlin Java, kozen
            mijn teamgenoot en ik voor Flutter. Deze keuze was gebaseerd op onze eerdere positieve ervaringen en de
            flexibiliteit die het biedt voor cross-platform ontwikkeling. Hoewel React Native ook een aantrekkelijke
            optie zou kunnen zijn vanwege zijn prestatievoordelen, waren onze opties beperkt en hebben we ons best
            gedaan met de beschikbare tools.</p>
        <p>Samenvattend was het project voor "IT Licious" niet alleen een test van onze technische vaardigheden,
            maar ook een waardevolle les in het kiezen van het juiste framework voor de taak. Het heeft me geholpen
            om mijn voorkeuren te verfijnen en een dieper inzicht te krijgen in de mogelijkheden en beperkingen van
            de verschillende tools die beschikbaar zijn voor moderne softwareontwikkelaars.</p>
    </section>
</template>

<style scoped>
section {
    margin-bottom: 100px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    ;

}

p {
    margin-bottom: 30px;
}

img {
    margin-top: 20px;
    max-width: 50%;
    margin-bottom: 30px;
}

@media (max-width: 768px) {
    img {
        max-width: 100%;
    }
}
</style>
