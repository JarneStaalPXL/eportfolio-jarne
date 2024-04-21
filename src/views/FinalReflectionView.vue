<template>
    <div>
        <p class="font-bold">Eindreflectie</p>
        <p>Ik heb enkele van de doelen die ik voor ogen had, gedeeltelijk bereikt. Ik heb geleerd beter om te gaan met
            de feedback die ik ontvang en sneller actie te ondernemen. Andere doelen, zoals het continu leren over
            nieuwe of geavanceerdere technologieën, blijven bestaan. Dit komt doordat er voortdurend nieuwe
            ontwikkelingen zijn en ik niet al mijn tijd hieraan kan besteden.</p>

        <p>Mijn ondernemende aard werd bevestigd toen het rapport van Thalento aangaf dat ik, net als mijn zus, 100%
            ondernemend ben. Dit leek wel in ons bloed te zitten. Ik kreeg voortdurend ideeën voor mogelijke platformen
            die ik kon ontwikkelen en handige tools die ik aan mensen kon bieden. Ondanks dat ik mijn eigen onderneming
            heb opgericht, heb ik helaas nog geen positieve ervaringen opgedaan, voornamelijk omdat de communicatie met
            klanten vaak moeizaam verloopt. Ik streef er altijd naar professioneel te blijven, zelfs wanneer klanten
            niet het budget hebben voor wat ze wensen.</p>

        <p>Het frustreert mij dat ik regelmatig kansen identificeer en grijp, maar dat deze nog niet tot succesvolle
            resultaten hebben geleid. Echter, mijn doorzettingsvermogen is groot en ik zal niet opgeven. Ik ga altijd
            verder dan van mij verwacht wordt, hoewel ik soms mijn motivatie verlies als succes uitblijft na een lange
            periode. Desondanks vind ik altijd de veerkracht om weer aan de slag te gaan en nieuwe mogelijkheden te
            zien.</p>

        <p>Ik ben van plan om mijn doelen beter te documenteren en te plannen. Ik hoop dat dit me zal helpen om meer te
            bereiken en mijn motivatie hoog te houden.</p>


        <p class="font-bold underline mt-10">
            Reflectie op mijn X-Factor en toekomstvisie
        </p>

        <p>In mijn persoonlijke en professionele ontwikkeling speelt de X-Factor een fundamentele rol. Deze factor,
            zoals gepresenteerd door PXL, bestaat uit vier pijlers: (em)passie, ondernemend & innovatief,
            (internationaal) samen(net)werken, en multi- & disciplinariteit.</p>

        <p><b>(Em)passie:</b> Mijn traject tot nu toe heeft mij laten zien dat passie de kern is van alles wat ik doe.
            Ik heb mijzelf leren kennen als iemand die met hartstocht te werk gaat, ongeacht de moeilijkheden die ik
            onderweg tegenkom. Zelfs als mijn motivatie soms wegebt bij gebrek aan direct succes, is het mijn innerlijke
            vuur dat mij weer aanwakkert om door te gaan</p>

        <p><b>Ondernemend & Innovatief: </b> Het Thalento-rapport bevestigde wat ik reeds wist: ondernemerschap stroomt
            door mijn aderen. Dit kenmerk verklaart de stroom aan ideeën die mij te binnen schieten voor nieuwe
            platformen en tools die ik wil creëren. Hoewel mijn onderneming nog geen vruchten heeft afgeworpen, is het
            een leerproces geweest dat mijn ondernemende geest alleen maar heeft aangescherpt.</p>


        <p><b>(Internationaal) Samen(net)werken</b> Samenwerking is een gebied waar ik op uitkijk om verder te
            ontwikkelen. De uitdagingen in communicatie met klanten hebben mij waardevolle lessen geleerd over
            professionele interacties en hebben het belang van helder en effectief samenwerken benadrukt.</p>


        <p><b>Multi- & Disciplinariteit: </b> Mijn streven naar continue leren over nieuwe technologieën weerspiegelt
            mijn multidisciplinaire benadering. Ik begrijp dat mijn kennis zich moet uitstrekken over verschillende
            gebieden om innovatief te blijven in de snel veranderende wereld van technologie.</p>

        <p>Wat de toekomst betreft, zie ik mijzelf als iemand die zijn doelen gestructureerd en met precisie zal
            nastreven. Door mijn doelen te documenteren en te plannen, hoop ik een weg te banen naar herkenbare
            successen en mijn aspiraties naar een hoger niveau te tillen. Ik geloof dat door mijn X-Factor te omarmen en
            voort te bouwen op de basis die ik al heb gelegd, ik mijn dromen kan verwezenlijken en een toekomst kan
            creëren die even veelbelovend is als de passie die ik ervoor heb.</p>
    </div>
</template>

<script>
export default {
    name: 'FinalReflectionView',
    components: {},
    mounted() {
        this.$store.commit("setCurrentRouteName", "Eindreflectie");
    },
}
</script>

<style scoped>
p {
    margin-bottom: 1rem;
}
</style>