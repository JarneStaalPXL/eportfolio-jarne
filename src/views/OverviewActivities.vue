<template>
    <div>
        <h1 class="font-bold pb-10">Seminaries</h1>
        <Timeline :activities="seminaries" />

        <h1 class="font-bold pb-10 pt-10">Innovatieroute (Low Code) Seminaries</h1>
        <Timeline :activities="innovatieroute" />

        <h1 class="font-bold pb-10 pt-10">Persoonlijke ontwikkeling</h1>
        <Timeline :activities="persoonlijkeOntwikkeling" />


        <h1 class="font-bold pb-10 pt-10">Porjectweek</h1>
        <Timeline :activities="projectweek" />

        <h1 class="font-bold pb-10 pt-10">Hackaton</h1>
        <Timeline :activities="hackatons" />



        <h1 class="font-bold pb-10 pt-10">Persoonlijke ontwikkeling (Extra)</h1>
        <Timeline :activities="extraPOP" />
    </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import webshopTemplateImage from "@/assets/preview-webshop.png";
export default {
    name: "OverviewActivities",
    components: {
        Timeline,
    },
    data() {
        return {
            seminaries: [
                {
                    id: 1,
                    type: "seminarie",
                    title: { name: "Jidoka - Svelte", href: "#" },
                    description:
                        "In deze seminarie werden we kort toegelicht over Svelte zijn geschiedenis, de voordelen van het gebruik van Svelte en zijn CLI Sveltekit.SvelteKit vormt een uitstekende keuze voor projecten die server-side renderingvereisen. Het deelt diverse overeenkomsten met Vue 3, met als belangrijkste verschil dat Vue 3 voornamelijk is geoptimaliseerd voor client-side rendering.",
                    date: "9/05/2023, 09:00 - 11:00 | Hogeschool PXL, Elfde Liniestraat 24, G414 ",
                    dateToSort: new Date("2023-05-09"),
                },
                {
                    id: 2,
                    type: "seminarie",
                    title: {
                        name: "Inetum-Realdolmen - The Future of Low-Code",
                        href: "#",
                    },
                    description:
                        "Tijdens de seminarie georganiseerd door Inetum-Realdolmen, getiteld 'The Future of Low-Code', hebben Kristof Leyssens en Lenners Verwimp de cruciale rol van low code platformen belicht, met nadruk op efficiëntie, snellere automatisatie en het gebruik van innovatieve AI-componenten. Ze demonstreerden de praktische toepassing door de ontwikkeling van een 'Candy app' met behulp van Microsoft's Power Apps en Power Automate, onderstrepend de toegankelijkheid en efficiëntie van low-code in het versnellen van de digitale transformatie.",
                    date: "28/03/2023, 09:00 - 11:00 | Hogeschool PXL, Elfde Liniestraat 24, G410",
                    dateToSort: new Date("2023-03-28"),
                },
                {
                    id: 3,
                    type: "seminarie",
                    title: {
                        name: "Kabisa - Cloud Native Development met AWS",
                        href: "#",
                    },
                    description:
                        "Tijdens de seminarie door Kabisa over 'Cloud Native Development met AWS' benadrukten Mees van Straten, Dave Bouman, en Joost Saanen de expertise van het bedrijf in cloudtransformatie, consultancy, en het bouwen van schaalbare oplossingen, ondersteund door hun indrukwekkende staat van dienst van 17 jaar in het vak, 300+ succesvolle projecten, en een team van 95 werknemers. Ze legden de voordelen uit van cloud-native ontwikkeling, waaronder schaalbaarheid, kostenreductie, verbeterde beveiliging, en snellere ontwikkeling, door het bouwen van een serverless webapplicatie gehost op AWS Amplify met het Serverless Application Model (SAM).",
                    date: "18/04/2023, 09:00 - 12:00 | Hogeschool PXL, Elfde Liniestraat 24, G414",
                    dateToSort: new Date("2023-04-18"),
                },
                {
                    id: 4,
                    type: "seminarie",
                    title: { name: "IT-Licious - Flutter", href: "#" },
                    description:
                        "Tijdens het 'IT Licious – Flutter seminarie' werd diepgaand ingegaan op de theorie en praktijk van cross-platform ontwikkeling met Flutter, belichtend hoe Flutter met zijn in Dart geschreven code en eigen rendering engine ontwikkeling over diverse platforms (iOS, Android, Web, Desktop) vereenvoudigt door middel van een uniforme, high-performance UI en ontwikkelaar vriendelijke tools. De sessie illustreerde Flutters unieke benadering van UI-ontwerp door alles als widgets te behandelen, de opbouw van een onveranderlijke widget tree, en efficiënt state management, ondersteund door een rijke bibliotheek van ingebouwde en community widgets.",
                    date: "14/03/2023, 09:00 - 12:00 | Hogeschool PXL, Elfde Liniestraat 24, G410",
                    dateToSort: new Date("2023-03-14"),
                },
            ],
            innovatieroute: [
                {
                    id: 1,
                    type: "seminarie",
                    title: {
                        name: "Low Code: No Code and Low Code Platforms by Aziri",
                        href: "#",
                    },
                    description:
                        "Tijdens het seminarie door Aziri over No Code en Low Code platformen, kwamen verschillende gebruikscases en praktische voorbeelden aan bod die de kracht en flexibiliteit van WeWeb en Xano illustreerden. Dit hielp de studenten om de mogelijkheden van deze tools voor hun eigen projecten te visualiseren.",
                    date: "28/09/2023, 09:00 - 16:00 | Hogeschool PXL, Elfde liniestraat 24, G118B",
                    dateToSort: new Date("2023-09-28"),
                },
                {
                    id: 2,
                    type: "seminarie",
                    title: { name: "Low Code: iPaaS Mulesoft", href: "#" },
                    description:
                        "Tijdens het 'Low Code: iPaaS Mulesoft seminarie' werd diepgaand ingegaan op de veelzijdigheid van MuleSoft als iPaaS-oplossing en werden belangrijke concepten zoals API-Led Connectivity, API Design en het Anypoint Platform uitgelegd. Er werden ook praktische hands-on oefeningen aangeboden om de theorie direct toe te kunnen passen.",
                    date: "05/10/2023, 09:00 - 12:00 & 13:00 - 16:00 | Hogeschool PXL, Elfde liniestraat 24, G118B",
                    dateToSort: new Date("2023-10-05"),
                },
                {
                    id: 3,
                    type: "seminarie",
                    title: { name: "Low Code: Salesforce and Oracle Apex", href: "#" },
                    description:
                        "Tijdens het 'Low Code: Salesforce en Oracle Apex seminarie' werden deelnemers ondergedompeld in de wereld van Low Code applicatieontwikkeling, waarbij in de voormiddag de focus lag op Salesforce door Brightfox en in de namiddag op Oracle Apex door advies. De sessies toonden hoe deze platforms kunnen helpen om sneller en flexibeler applicaties te ontwikkelen.",
                    date: "12/10/2023, 09:00 - 12:00 & 13:00 - 16:00 | Hogeschool PXL, Elfde liniestraat 24, G118B",
                    dateToSort: new Date("2023-10-12"),
                },
                {
                    id: 4,
                    type: "seminarie",
                    title: { name: "Low Code: Power Apps", href: "#" },
                    description:
                        "Tijdens het 'Low Code: Power Apps seminarie' ontdekte ik in deze hands-on workshop hoe je een moderne cross-platform applicatie kunt ontwikkelen met Power Apps, het low-code platform van Microsoft 365, dat gericht is op het verbeteren van UI/UX en het digitaliseren van verouderde processen.",
                    date: "19/10/2023, 09:00 - 12:00 | Hogeschool PXL, Elfde liniestraat 24, G118B",
                    dateToSort: new Date("2023-10-19"),
                },
            ],
            persoonlijkeOntwikkeling: [
                {
                    id: 1,
                    type: "seminarie",
                    title: {
                        name: "Feedback – Key to Improvement",
                        href: "#",
                    },
                    description:
                        "Tijdens de POP-sessie van 'Persoonlijke Ontwikkeling: Feedback – Key to improvement' kregen deelnemers van Jo & Carl van Learning Path praktische inzichten en vijf waardevolle tips over het effectief ontvangen van feedback. Deze interactieve sessie belichtte niet alleen het belang van goede feedback, maar ook strategieën om hier constructief op te reageren, essentieel voor persoonlijke groei.",
                    date: "16/02/2023, 08:30 - 10:30 | Hogeschool PXL, Elfde liniestraat 24, B101",
                    dateToSort: new Date("2023-02-16"),
                },
                {
                    id: 2,
                    type: "seminarie",
                    title: { name: "Brein aan het werk! Niet storen!", href: "#" },
                    description:
                        "Tijdens de POP-sessie 'Brein aan het werk! Niet storen!' kregen deelnemers inzicht in hoe multitasking hun concentratie beïnvloedt en tools om hun focus te verbeteren.",
                    date: "21/02/2023, 2 uur | Hogeschool PXL, Elfde liniestraat 24",
                    dateToSort: new Date("2023-02-21"),
                },
                {
                    id: 3,
                    type: "seminarie",
                    title: { name: "POPping", href: "#" },
                    description:
                        "Tijdens de POP-sessie 'POPping' kregen deelnemers de kans om door zelfreflectie en feedback hun persoonlijke en professionele groei te bevorderen.",
                    date: "21/02/2023, 2 uur | Hogeschool PXL, Elfde liniestraat 24",
                    dateToSort: new Date("2023-02-21"),
                },
            ],
            extraPOP: [
                {
                    id: 1,
                    type: "extrapop",
                    title: { name: "Building a Reactive Webshop Template", href: "#" },
                    description:
                        "In mijn vrije tijd heb ik onderzocht hoe ik het best een aanpasbare webshop template kan ontwikkelen met het Vue3 JavaScript-framework, samen met Strapi als content management systeem en Stripe voor de betalingsverwerking. Binnen een maand heb ik dit project succesvol voltooid door gebruik te maken van Tailwind UI, gecombineerd met de kennis die ik zowel op school als in mijn eigen tijd heb vergaard. ",
                    location: "Daelstraat 22, 3668 Niel-Bij-As",
                    date: "10/02/2024 - 19/03/2024",
                    dateToSort: new Date("2024-02-10"),
                    links: [
                        {
                            type: "GitHub Repository",
                            link: "https://github.com/JarneStaalPXL/webshop-template-clothing-and-more",
                        },
                        {
                            type: "Webshop Link",
                            link: "https://webshop-template-clothing-and-more.netlify.app/",
                        },
                    ],
                    imageUrl: webshopTemplateImage,
                },
            ],
            projectweek: [
                {
                    id: 1,
                    type: "projectweek",
                    title: { name: "PXL Research Project", href: "#" },
                    description:
                        "Tijdens deze projectweek hebben wij informatie gekregen over ons Research Project en hebben wij een aantal workshops en POP-sessies gedaan om een band op te wekken met het team.",
                    date: "13/02/2023 - 17/02/2023 | Hogeschool PXL, Elfde Liniestraat 24",
                    dateToSort: new Date("2023-02-13"),
                }
            ],
            hackatons: [
                {
                    id: 1,
                    type: "hackathon",
                    title: { name: "Cegeka & Innovaid Pitch Please Hackaton", href: "#" },
                    description:
                        "Tijdens deze hackathon, georganiseerd door Cegeka en Innovaid, koos ons team ervoor om een AI-gedreven platform te ontwikkelen dat patiënten helpt het beste ziekenhuis te vinden voor knieoperaties.",
                    date: "1/12/2023, 16:00 - 23:59 | Corda Campus 6",
                    dateToSort: new Date("2023-12-01T16:00:00"),
                }

            ]
        };
    },
};
</script>
