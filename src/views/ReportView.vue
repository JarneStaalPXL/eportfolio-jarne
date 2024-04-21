<template>
    <div>
        <h1 class="font-bold text-purple-800">THALENTO RAPPORT</h1>
        <iframe class="mt-5" :src="pdf" width="100%" height="1000px">
            This browser does not support PDFs. Please download the PDF to view it: <a :href="pdf">Download PDF</a>.
        </iframe>
    </div>
</template>

<script>
import pdf from "@/assets/TH-future-project.pdf";

export default {
    name: "ReportView",
    components: {
    },
    data() {
        return {
            pdf: pdf,
            pageNum: null,
        };
    },
    mounted() {
        this.$store.commit("setCurrentRouteName", "Rapporten");
    },
};
</script>

<style scoped>
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
</style>
