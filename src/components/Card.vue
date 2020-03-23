<template>
    <div class="max-w-md my-8 rounded overflow-hidden shadow-lg m-auto">
        <a class="px-3 float-right" @click="bookmark" :class="{'text-gray-500': isBookmarked}">
            <svg
                class="w-5 fill-current h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <title>Bookmark</title>
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
        </a>
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { FeedItem } from "@/models";
import { AppState } from '@/store';
import { mixins } from 'vue-class-component';
import BaseComponent from '@/BaseComponent';

@Component
export default class Card extends mixins(BaseComponent) {
    @Prop()
    item!: FeedItem;

    bookmark()
    {
        this.$emit("bookmark", this.item);
    }
    get isBookmarked()
    {
        return this.state.bookmarks.includes(this.item.link);
    }
}
</script>