<template>
    <a :href="item.link">
        <div class="max-w-md my-8  rounded overflow-hidden shadow-lg m-auto">
            <img class="w-full" :src="item.image" alt="Tensorflow framework" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{item.title}}</div>
                <p class="text-gray-700 text-base">{{item.description}}</p>
            </div>
            <div class="px-6 py-4">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    v-for="tag in item.tags"
                    :key="tag"
                >#{{tag}}</span>
            </div>
        </div>
    </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { FeedItem } from "@/models";

@Component
export default class Card extends Vue {
    @Prop()
    item!: FeedItem;
}
</script>