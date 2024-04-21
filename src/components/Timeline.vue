<template>
    <div class="flow-root">
        <ul role="list" class="-mb-8">
            <li v-for="(activityItem, activityItemIdx) in activities.sort((a, b) => new Date(b.dateToSort) - new Date(a.dateToSort))"
                :key="activityItem.id">
                <div class="relative pb-8">
                    <span v-if="activityItemIdx !== activities.length - 1"
                        class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    <div class="relative flex items-start space-x-3">
                        <template v-if="activityItem.type === 'seminarie'">
                            <div class="relative">
                                <img class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                    src="../assets/profile_pic.jpg" alt="" />

                                <!-- <span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                    <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span> -->
                            </div>
                            <div class="min-w-0 flex-1">
                                <div>
                                    <div class="text-sm">
                                        <a :href="activityItem.title.href" class="font-medium text-gray-900">{{
                activityItem.title.name }}</a>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">{{ activityItem.date }}</p>
                                </div>
                                <div class="mt-2 text-sm text-gray-700">
                                    <p>{{ activityItem.description }}</p>
                                </div>
                            </div>
                        </template>
                        <template v-if="activityItem.type === 'extrapop'">
                            <div class="relative">
                                <img class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                    src="../assets/profile_pic.jpg" alt="" />

                                <!-- <span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                    <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span> -->
                            </div>
                            <div class="min-w-0 flex-1">
                                <div>
                                    <div class="text-sm">
                                        <a :href="activityItem.title.href" class="font-medium text-gray-900">{{
                activityItem.title.name }}</a>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">{{ activityItem.date }}</p>
                                </div>
                                <div class="mt-2 text-sm text-gray-700">
                                    <p>{{ activityItem.description }}</p>
                                </div>
                                <img :src="activityItem.imageUrl">
                            </div>

                        </template>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/vue/20/solid'

export default {
    name: 'ActivityFeed',
    components: {
        ChatBubbleLeftEllipsisIcon,
        TagIcon,
        UserCircleIcon
    },
    props: {
        // Define 'activity' as a prop expected from the parent component
        activities: {
            type: Array,
            required: true,
            default: () => []
        }
    }
    // No need for the 'data' function that defines 'activity' anymore
}
</script>