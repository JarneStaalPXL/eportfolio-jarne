<template>
    <div>
        <SelectedActivity1 />
        <SelectedActivity2 />
        <SelectedActivity3 />
    </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import SelectedActivity1 from "@/components/selected_activities/SelectedActivity1.vue";
import SelectedActivity2 from "@/components/selected_activities/SelectedActivity2.vue";
import SelectedActivity3 from "@/components/selected_activities/SelectedActivity3.vue";
export default {
    name: "SelectedActivitiesView",
    components: {
        Timeline,
        SelectedActivity1,
        SelectedActivity2,
        SelectedActivity3
    },

};
</script>

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
