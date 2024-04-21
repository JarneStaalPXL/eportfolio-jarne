<template>
    <div>
        <h1 class="font-bold">Wie ben ik</h1>
        <p>
            Ik ben <span class="primaryTextColor">Jarne Staal</span>, en mijn passies
            omvatten programmeren, mensen helpen, en het uitbouwen van mijn
            onderneming. In de loop der jaren heb ik door onderzoek diverse projecten
            gerealiseerd die bijdroegen aan de persoonlijke ontwikkeling van mijn
            vaardigheden op het gebied van programmeren en IT.
        </p>
        <p>
            Hierdoor heb ik diepgaandere kennis opgedaan van het JavaScript-framework
            "<span class="primaryTextColor">Vue.js</span>",
            <span class="primaryTextColor">Node.js</span> voor het ontwikkelen van
            API's, en het
            <span class="primaryTextColor">Strapi Open Source Headless CMS</span> voor
            contentbeheer.
        </p>
        <h2 class="font-bold">Thalento-rapport</h2>
        <p>
            Volgens het Thalento-rapport valt mijn dominante gedragscluster onder
            "<span class="primaryTextColor">DOEN</span>", met een voorkeur voor het
            "<span class="primaryTextColor">ONDERNEMEND</span>" type, waarbij ik een
            perfecte match van 100% behaal. Mijn denkwijze wordt gekenmerkt als
            pragmatisch, met een overeenkomst van 83%, en uit de test blijkt dat ik
            communicatie voer op een extraverte wijze, met een match van 63%. Tot
            slot, in samenwerkingsverbanden neem ik vaak de leiding, wat overeenkomt
            met 87%. Dit sluit nauw aan bij mijn ondernemersgeest en ambitie.
        </p>
        <h2 class="font-bold">POP-sessies</h2>
        <p>
            Mijn deelname aan de POP-sessies heeft belangrijke lessen geleerd die mijn
            persoonlijke en professionele groei hebben bevorderd. Ik ontdekte de
            waarde van zelfreflectie en het stellen van realistische doelen, die
            werden versterkt door uitgebreide actieplannen die mijn ontwikkeling
            ondersteunden.
        </p>
        <p>
            Mijn zelfvertrouwen is gestegen als gevolg van het gebruik van
            constructieve feedback, verbeterde communicatie en samenwerking, en
            verbeterde probleemoplossende vaardigheden. Bovendien hebben deze sessies
            mijn loopbaan positief beïnvloed door me te helpen zelfmanagement te
            verbeteren en waardevolle netwerkmogelijkheden te bieden.
        </p>
        <p>
            Ik ben vastberaden om in de toekomst de kennis die ik heb opgedaan actief
            toe te passen en door deze sessies heb ik een betere band met mijn team
            van het Research Project kunnen opbouwen.
        </p>

        <h2 class="font-bold">Doelen</h2>
        <p>
            In de komende drie jaar is het mijn ambitie om een aantal significante
            projecten tot een succesvol einde te brengen, met een onophoudelijke focus
            op vooruitgang, innovatie, en efficiëntie. Deze doelstelling onderstreept
            mijn bereidheid om mij te verdiepen in diverse technologieën, met als doel
            de ontwikkeling van oplossingen die optimaal aansluiten bij de behoeften.
            Daarnaast zie ik het belang in van het actief participeren in
            ondernemersbijeenkomsten om mijn netwerk te vergroten en mijn kansen op
            succes te maximaliseren.
        </p>
        <p>
            Door deze stappen te ondernemen, streef ik ernaar mijn vaardigheden en
            invloed binnen de sector verder te ontwikkelen, consistent met de
            ondernemende geest en ambitie die uit mijn Thalento rapport en POP-sessies
            naar voren zijn gekomen.
        </p>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "AboutMeView",
    components: {},
    mounted() {
        this.$store.commit("setCurrentRouteName", "Over mij");
    },
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 40px;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

h1,
h2 {
    color: #444;
}

p {
    margin: 20px 0;
}

.highlight {
    color: #0056b3;
    font-weight: bold;
}
</style>
