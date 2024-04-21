<template>
    <section>
        <h1 class="font-bold">Reactieve Vue3 Webshop</h1>
        <p>De opdracht om een webshop te creëren was niet alleen een test van technische vaardigheden maar ook een
            kans om esthetiek met functionaliteit te combineren. De uitdaging was om een performante, esthetisch
            aantrekkelijke en gemakkelijk aanpasbare webshop te bouwen die in toekomstige projecten kon worden
            hergebruikt. Het vooronderzoek was cruciaal om een duidelijk begrip te krijgen van de benodigde
            technologieën en methoden, waarbij ik nieuwe inzichten verkreeg die waardevol zouden blijken voor latere
            projecten.</p>

        <p>Tijdens mijn academische loopbaan heb ik de kans gehad om verschillende webshops te bouwen, maar vaak werd ik
            beperkt door voorgeschreven technologische stacks die niet mijn voorkeur droegen. In dit ondernemingsproject
            kon ik de volledige controle nemen en werken met Vue3, een framework dat mij aansprak vanwege de efficiëntie
            in het opbouwen van reactieve webtoepassingen. Het ontwerp van de webshop moest modern en fris zijn, en
            daarom koos ik voor Tailwind UI. Dit CSS-framework biedt een rijke bibliotheek aan vooraf ontworpen
            componenten die eenvoudig konden worden aangepast aan mijn Vue3-project.</p>

        <p>
            De mantra van Tailwind UI, “Build your next idea even faster,” werd een leidmotief voor mijn werk, en het
            bood de perfecte basis om een stijlvolle en functionele webshop op te zetten. De e-commerce componenten van
            Tailwind UI boden een stevig fundament waarop ik kon bouwen en aanpassen naar de behoeften van mijn project,
            waardoor de ontwikkelingstijd aanzienlijk verminderde.
        </p>

        <img src="../../assets/tailwindui.png" alt="tailwind ui homepage">
        <img src="../../assets/tailwindcomponents.png" alt="tailwind ui components">

        <p>Bij de aanvang van het ontwerpen van de homepage, koos ik ervoor om een sjabloon te gebruiken gericht op
            kleding en accessoires. Dit betekende dat ik niet alleen rekening moest houden met de visuele aspecten, maar
            ook met de achterliggende logica die nodig is voor het beheren van een assortiment kleding, inclusief
            varianten zoals kleur en maat.</p>
        <img src="../../assets/webshop1.png" alt="tailwind ui webshop homepage">
        <p>Het presenteren van het productassortiment begon met een statische weergave, maar dit evolueerde snel naar
            een dynamischer aanpak. Om dit te bereiken, integreerde ik Strapi, een flexibel headless CMS waarmee ik een
            datastructuur op kon zetten en productinformatie effectief kon beheren. De categoriefilter, een bestaand
            element binnen Tailwind UI, werd geprogrammeerd om dynamisch te synchroniseren met de categorieën in de
            database.</p>

        <img src="../../assets/webshop3.png" alt="tailwind ui webshop all products">

        <img src="../../assets/webshop4.png" alt="tailwind ui webshop search function">

        <p>Omdat de gebruiker misschien ook op kleur of naam wilt filteren, heb ik deze filters ook toegevoegd.</p>

        <p>Verdergaand met de ontwikkeling van de webshop, werden productdetailpagina's ingericht. Elke pagina werd
            gevoed door gegevens uit Strapi via API-verzoeken, die de productinformatie zoals naam, prijs, beschrijving
            en beschikbare opties nauwkeurig weergaven. Het toevoegen van producten aan het winkelwagentje werd
            gerealiseerd via een API, waarbij ik een toast notificatie-component gebruikte om de gebruiker te informeren
            over de actie.</p>

        <img src="../../assets/webshop5.png" alt="tailwind ui webshop product detail">
        <img src="../../assets/webshop6.png" alt="tailwind ui webshop toast">
        <img src="../../assets/webshop7.png" alt="tailwind ui webshop shoppingcart">

        <p>Het afrekenproces was een cruciaal element dat een naadloze ervaring moest bieden. Ik gebruikte opnieuw
            Tailwind UI-componenten voor het winkelwagentje en programmeerde een systeem waarbij prijs en
            leveringskosten automatisch werden bijgewerkt gebaseerd op de productaantallen en bepaalde voorwaarden.
            Authenticatie was een vereiste voor het plaatsen van een bestelling, en ik implementeerde Firebase
            Authentication en Google's Single Sign-On mogelijkheid in combinatie met de loginpagina van Tailwind UI.</p>
        <img src="../../assets/webshop8.png" alt="tailwind ui webshop login">
        <img src="../../assets/webshop9.png" alt="tailwind ui webshop checkout">
        <img src="../../assets/webshop10.png" alt="tailwind ui webshop payment">
        <p>De betalingsafhandeling vertrouwde ik toe aan Stripe, die gebruikers naar een veilige en vertrouwde
            betalingsomgeving leidde. Na succesvolle betaling werden klanten doorgestuurd naar een dankpagina waar ze
            een overzicht van hun bestelling en leveringsdetails konden vinden.</p>
        <img src="../../assets/webshop11.png" alt="tailwind ui webshop order confirmation">

        <p>Tot slot was er de footer van de webshop. Hoewel dit vaak als een minder belangrijk element wordt gezien,
            besefte ik dat het toch bijdraagt aan de integriteit van het algehele ontwerp. Daarom koos ik ervoor om een
            stijlvolle footer van Tailwind UI te gebruiken, zonder verdere aanpassingen. Deze keuze was deels ingegeven
            door de beperkte tijd, maar ook door de erkenning dat de footer aan het einde van de gebruikerservaring een
            subtiele, doch belangrijke rol speelt.</p>

        <img src="../../assets/webshop12.png" alt="tailwind ui webshop footer">

        <p>
            Reflecteren op het ontwikkelingsproces van de webshop brengt mij bij een introspectieve beoordeling van mijn
            vaardigheden en groeipotentieel. Terwijl ik met veel technische kwesties vertrouwd was, was de ervaring met
            Tailwind UI en Vue3 grotendeels nieuw voor mij. De leercurve was aanvankelijk steil, maar bood een frisse
            blik op het oplossen van problemen binnen webontwikkeling. Het vermogen om snel een esthetisch en
            functioneel ontwerp te implementeren was bevrijdend, en het versterkte mijn vertrouwen in het gebruik van
            componentgerichte frameworks.
        </p>

        <p>Een van de meest leerrijke aspecten was het dynamisch renderen van content via Strapi. De overgang van
            statische naar dynamische inhoud benadrukte het belang van backend flexibiliteit in moderne webontwikkeling.
            Het dwong me om grondiger na te denken over de gebruikerservaring en hoe deze kon fluctueren met de
            variabiliteit van de inhoud. Het leren integreren van een CMS als Strapi was een verrijkende ervaring die
            mijn begrip van full-stack ontwikkeling uitbreidde.</p>

        <p>Een reflectie zou echter onvolledig zijn zonder te erkennen dat de tijdsdruk en de hoge verwachtingen die ik
            voor mezelf stelde, soms ten koste gingen van een evenwichtige aanpak. Hoewel ik tevreden ben met het
            eindresultaat, zou ik bij toekomstige projecten meer tijd willen besteden aan het plannen en prioriteren van
            functies, om zo een meer gestructureerde en minder hectische ontwikkelingscyclus te waarborgen.</p>

        <p>Bovendien heeft het proces me doen inzien dat ondanks het solo uitvoeren van dit project, samenwerking een
            onontbeerlijk deel is van ontwikkeling. Het uitwisselen van ideeën en feedback kan een project verrijken en
            is iets dat ik in de toekomst meer wil integreren.</p>

        <p>Het werken aan dit project was ook een herinnering aan de constante noodzaak voor adaptatie en levenslang
            leren in de technologische sector. Ik ben gemotiveerd om voort te bouwen op de kennis die ik heb opgedaan,
            en enthousiast om nieuwe technologieën te verkennen die mijn bekwaamheden als ontwikkelaar verder zullen
            uitbreiden. Terwijl ik de grenzen van mijn comfortzone opzocht, vond ik een nieuw vertrouwen en een
            vernieuwde passie voor webontwikkeling, die me zullen sturen in mijn toekomstige carrière.</p>
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
